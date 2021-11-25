<template>
  <div>
    <div>
      <div id="chartMaps"></div>
      <div class="pt-12 pb-12">
        <div
          class="
            max-w-screen-xl
            mx-auto
            sm:px-8
            px-6
            flex
            items-center
            justify-center
          "
        >
          <div class="border border-gray-400 w-3/6 rounded-md p-4">
            <div class="flex items-center justify-between mb-4">
              <h3 class="">{{ country || "Worldwide" }}</h3>
              <p>
                latitude: {{ latitude || 0 }} , longitude: {{ longitude || 0 }}
              </p>
            </div>
            <div class="grid grid-cols-3 border-gray-400 border-b py-4">
              <div>
                <p class="uppercase text-xs">BVN Verification</p>
                <h3 class="mt-2 font-bold">{{ bvn || "34M+" }}</h3>
              </div>
              <div>
                <p class="uppercase text-xs">Drivers License</p>
                <h3 class="mt-2 font-bold">{{ license || "34M+" }}</h3>
              </div>
              <div>
                <p class="uppercase text-xs">NIN</p>
                <h3 class="mt-2 font-bold">{{ nin || "34M+" }}</h3>
              </div>
            </div>
            <div class="grid grid-cols-3 py-4">
              <div>
                <p class="uppercase text-xs">Address Verification</p>
                <h3 class="mt-2 font-bold">{{ address || "34M+" }}</h3>
              </div>
              <div>
                <p class="uppercase text-xs">Permanent Voters Card</p>
                <h3 class="mt-2 font-bold">{{ pvc || "34M+" }}</h3>
              </div>
              <div>
                <p class="uppercase text-xs">Card Verification</p>
                <h3 class="mt-2 font-bold">{{ card || "34M+" }}</h3>
              </div>
            </div>
          </div>
          <div id="mapLegend"></div>
        </div>
      </div>
    </div>
    <get-started></get-started>
  </div>
</template>

<script>
import { mapState } from "vuex";
import getStarted from "~/components/common/getStarted.vue";

export default {
  components: {
    getStarted,
  },
  data() {
    return {
      province: undefined,
      currentProvince: undefined,
      continent: null,
      latitude: null,
      longitude: null,
      bvn: null,
      license: null,
      nin: null,
      country: null,
      address: null,
      pvc: null,
      card: null,
    };
  },
  methods: {
    async getAllDataSource() {
      const allDataSource = await this.$store.dispatch(
        "datasource/getDataSource"
      );
      return allDataSource;
    },
  },
  computed: {
    ...mapState({
      dataSource: (state) => state.datasource.dataSource,
      loading: (state) => state.datasource.loading,
    }),
  },
  async mounted() {
    const markers = await this.getAllDataSource();

    let self = this;
    let centered = null;
    const size = {
      height: 500,
      width: d3.select("#chartMaps").node().getBoundingClientRect().width,
    };

    const mapCenter = {
      lat: 1.4,
      lng: 117.5,
    };

    // var markers = [
    //   {
    //     long: 9.083,
    //     lat: 42.149,
    //     name: "Corsica",
    //     n: 50,
    //     bvn: "30M+",
    //     license: "30M+",
    //     nin: "30M+",
    //     address: "30M+",
    //     pvc: "30M+",
    //     card: "30M+",
    //   }, // corsica
    //   {
    //     long: 7.26,
    //     lat: 43.71,
    //     name: "Nice",
    //     n: 30,
    //     bvn: "30M+",
    //     license: "30M+",
    //     nin: "30M+",
    //     address: "30M+",
    //     pvc: "30M+",
    //     card: "30M+",
    //   }, // nice
    //   {
    //     long: 2.349,
    //     lat: 48.864,
    //     name: "Paris",
    //     n: 50,
    //     bvn: "30M+",
    //     license: "30M+",
    //     nin: "30M+",
    //     address: "30M+",
    //     pvc: "30M+",
    //     card: "30M+",
    //   }, // Paris
    //   {
    //     long: -1.397,
    //     lat: 43.664,
    //     name: "Hossegor",
    //     n: 20,
    //     bvn: "30M+",
    //     license: "30M+",
    //     nin: "30M+",
    //     address: "30M+",
    //     pvc: "30M+",
    //     card: "30M+",
    //   }, // Hossegor
    //   {
    //     long: 3.075,
    //     lat: 50.64,
    //     name: "Lille",
    //     n: 50,
    //     bvn: "30M+",
    //     license: "30M+",
    //     nin: "30M+",
    //     address: "30M+",
    //     pvc: "30M+",
    //     card: "30M+",
    //   }, // Lille
    //   {
    //     long: -3.83,
    //     lat: 58,
    //     name: "Morlaix",
    //     n: 150,
    //     bvn: "30M+",
    //     license: "30M+",
    //     nin: "30M+",
    //     address: "30M+",
    //     pvc: "30M+",
    //     card: "30M+",
    //   }, // Morlaix
    //   {
    //     long: -32.3,
    //     lat: 26.4,
    //     name: "Africa",
    //     n: 150,
    //     bvn: "30M+",
    //     license: "30M+",
    //     nin: "30M+",
    //     address: "30M+",
    //     pvc: "30M+",
    //     card: "30M+",
    //   },
    //   {
    //     long: 3.406448,
    //     lat: 6.465422,
    //     name: "Nigeria",
    //     n: 120,
    //     bvn: "30M+",
    //     license: "30M+",
    //     nin: "30M+",
    //     address: "30M+",
    //     pvc: "30M+",
    //     card: "30M+",
    //   },
    // ];
    const svg = d3
      .select("#chartMaps")
      .append("svg")
      .attr("width", size.width)
      .attr("height", size.height);

    // Add background
    svg
      .append("rect")
      .attr("class", "mapBackground")
      .attr("width", size.width)
      .attr("height", size.height)
      .style("background-color", "red");

    const projection = d3
      .geoMercator()
      .scale(200)
      // .center([mapCenter.lng, mapCenter.lat])
      .translate([size.width / 2, size.height / 1.4]);
    const path = d3.geoPath(projection);

    const g = svg.append("g");
    // create a tooltip

    var Tooltip = d3
      .select("#mapLegend")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 1);

    d3.queue()
      .defer(function foo(url, callback) {
        d3.json(url).then(function (file) {
          callback(null, file);
        });
      }, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .defer(function foo(url, callback) {
        d3.csv(url).then(function (file) {
          callback(null, file);
        });
      }, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_gpsLocSurfer.csv")
      .await(function (error, dataGeo, circleData) {
        const nMinAndMax = d3.extent(circleData, function (d) {
          return +d.n;
        });

        const nToRadius = d3.scaleSqrt().domain(nMinAndMax).range([1, 150]);

        g.selectAll("path")
          .data(dataGeo.features)
          .enter()
          .append("path")
          .attr("class", "country")
          .attr("d", path)
          .attr("vector-effect", "non-scaling-stroke")
          .attr("fill", "#46B2C8")
          .attr("class", function (d) {
            return "Country";
          })
          .style("opacity", 0.8)
          .attr("stroke-width", 0.2)
          .attr("stroke", "#ffffff")
          .on("mouseover", mouseOver)
          .on("mouseleave", mouseLeave)
          .on("click", clicked);

        g.selectAll("circle")
          .data(markers)
          .enter()
          .append("circle")
          .attr("cx", function (eachCircle) {
            return projection([eachCircle.longitude, eachCircle.latitude])[0];
          })
          .attr("cy", function (eachCircle) {
            return projection([eachCircle.longitude, eachCircle.latitude])[1];
          })

          .attr("r", function (eachCircle) {
            return nToRadius(eachCircle.volume);
          })
          .attr("class", function (d) {
            return "circle-data";
          })
          .attr("fill", "red")
          .attr("stroke", "red")
          .attr("stoke-width", 3)
          .attr("fill-opacity", 0.4)
          .style("cursor", "pointer")
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("mouseleave", mouseleave);
      });

    function clicked(d) {
      var x, y, k;

      // Compute centroid of the selected path
      if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d;
        // app.openInfo(d.properties);
      } else {
        x = size.width / 2;
        y = size.height / 2;
        k = 1;
        centered = null;
        // app.closeInfo();
      }

      // Highlight the clicked province
      g.selectAll("path").style("fill", function (d) {
        return centered && d === centered ? "#0B4B58" : "";
      });

      // Zoom
      g.transition()
        .duration(750)
        .attr(
          "transform",
          "translate(" +
            size.width / 2 +
            "," +
            size.height / 2 +
            ")scale(" +
            k +
            ")translate(" +
            -x +
            "," +
            -y +
            ")"
        );
    }

    let mouseOver = function (d) {
      Tooltip.style("opacity", 1);
      d3.selectAll(".Country").transition().duration(200).style("opacity", 0.5);
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black");
    };

    let mouseLeave = function (d) {
      Tooltip.style("opacity", 0);
      d3.selectAll(".Country").transition().duration(200).style("opacity", 0.8);
      d3.select(this).transition().duration(200).style("stroke", "transparent");
    };

    var mouseover = function (d) {
      Tooltip.style("opacity", 1);
    };
    var mousemove = function (d) {
      self.continent = d.Continent;
      self.country = d.country;
      self.latitude = d.latitude;
      self.longitude = d.longitude;
      self.bvn = d.BVN;
      self.license = d.driverLicense;
      self.nin = d.nin;
      self.address = d.addressVerification;
      self.pvc = d.pvc;
      self.card = d.card;

      // Tooltip.html(
      //   d.homecontinent +
      //     "<br>" +
      //     "long: " +
      //     d.homelon +
      //     "<br>" +
      //     "lat: " +
      //     d.homelat
      // );
    };
    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };
  },
};
</script>

<style scoped>
.Country .background {
  fill: #eff8f9;
  pointer-events: all;
}
.province {
  fill: #000;
  stroke: #fff;
  stroke-width: 1px;
}
.province:hover {
  fill: #666;
}
.hidden {
  display: none;
}

div.tooltip {
  color: #222;
  background-color: #fff;
  padding: 0.5em;
  text-shadow: #f5f5f5 0 1px 0;
  border-radius: 2px;
  opacity: 0.9;
  position: absolute;
}

.Country .circle-data {
  cursor: pointer;
}
</style>
