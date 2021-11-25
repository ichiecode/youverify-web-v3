<template>
  <div>
    <div>
      <div id="chartMaps"></div>
      <div class="pt-5 pb-12">
        <div class="max-w-screen-xl mx-auto sm:px-8 px-6">
          <div class="flex items-center justify-center flex-col">
            <div class="relative text-gray-600 mb-10 border rounded-md w-4/12">
              <input
                type="search"
                name="serch"
                v-model="tempCountry"
                placeholder="Search"
                class="
                  bg-white
                  w-full
                  h-10
                  px-5
                  pr-10
                  rounded-full
                  text-sm
                  focus:outline-none
                "
              />
              <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  class="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background: new 0 0 56.966 56.966"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </button>
            </div>
            <div
              class="border border-gray-400 w-full md:w-3/6 rounded-md mt-3 p-4"
            >
              <div class="flex items-center justify-between mb-4">
                <h3 class="">{{ country || "Worldwide" }}</h3>
                <!-- <p>
                latitude: {{ latitude || 0 }} , longitude: {{ longitude || 0 }}
              </p> -->
              </div>
              <div
                class="
                  grid grid-cols-2
                  md:grid-cols-3
                  gap-10
                  border-gray-400 border-b
                  py-4
                "
              >
                <div>
                  <p class="uppercase text-xs">BVN Verification</p>
                  <h3 class="mt-2 font-bold">
                    {{ bvn ? `${bvn}M+` : `${totalStats.bvn}M+` }}
                  </h3>
                </div>
                <div>
                  <p class="uppercase text-xs">Drivers License</p>
                  <h3 class="mt-2 font-bold">
                    {{ license ? `${license}M+` : `${totalStats.license}M+` }}
                  </h3>
                </div>
                <div>
                  <p class="uppercase text-xs">NIN</p>
                  <h3 class="mt-2 font-bold">
                    {{ nin ? `${nin}M+` : `${totalStats.nin}M+` }}
                  </h3>
                </div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-10 py-4">
                <div>
                  <p class="uppercase text-xs">Address Verification</p>
                  <h3 class="mt-2 font-bold">
                    {{ address ? `${address}M+` : `${totalStats.address}M+` }}
                  </h3>
                </div>
                <div>
                  <p class="uppercase text-xs">Permanent Voters Card</p>
                  <h3 class="mt-2 font-bold">
                    {{ pvc ? `${pvc}M+` : `${totalStats.pvc}M+` }}
                  </h3>
                </div>
                <div>
                  <p class="uppercase text-xs">Card Verification</p>
                  <h3 class="mt-2 font-bold">
                    {{ card ? `${card}M+` : `${totalStats.card}M+` }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
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
      tempCountry: null,
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
      totalStats: {
        bvn: 0,
        license: 0,
        nin: 0,
        country: 0,
        address: 0,
        pvc: 0,
        card: 0,
      },
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
      loading: (state) => state.datasource.loading,
    }),
  },
  async mounted() {
    const markers = await this.getAllDataSource();

    const totalBvn = markers.reduce((a, b) => +a + +b.BVN, 0);
    const totalAddress = markers.reduce(
      (a, b) => +a + +b.addressVerification,
      0
    );
    const totalPvc = markers.reduce((a, b) => +a + +b.pvc, 0);
    const totalNin = markers.reduce((a, b) => +a + +b.nin, 0);
    const totalLicence = markers.reduce((a, b) => +a + +b.driverLicense, 0);
    const totalCard = markers.reduce((a, b) => +a + +b.card, 0);

    this.totalStats.bvn = totalBvn;
    this.totalStats.address = totalAddress;
    this.totalStats.pvc = totalPvc;
    this.totalStats.nin = totalNin;
    this.totalStats.license = totalLicence;
    this.totalStats.card = totalCard;

    let self = this;
    let centered = null;
    const size = {
      height: 600,
      width: d3.select("#chartMaps").node().getBoundingClientRect().width,
    };
    const svg = d3
      .select("#chartMaps")
      .append("svg")
      .attr("width", size.width)
      .attr("style", "background: #115766")
      .attr("height", size.height);

    const projection = d3
      .geoMercator()
      .scale(180)
      .translate([size.width / 2, size.height / 1.4]);
    const path = d3.geoPath(projection);

    const g = svg.append("g");

    var zoom = d3
      .zoom()
      .scaleExtent([1, 8])
      .on("zoom", function () {
        
        g.selectAll("circle").attr("transform", d3.event.transform);
        g.selectAll("path").attr("transform", d3.event.transform);
      });

    svg.call(zoom);
    // create a tooltip
    var Tooltip = d3
      .select("#chartMaps")
      .append("div")
      .attr("id", "tooltip")
      .attr(
        "style",
        "position: absolute; opacity: 0; width: 160px; z-index: 300; background: white; border-radius: 4px; padding: 10px;"
      );

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
          .attr("fill", "#46B2C8")
          .attr("class", "Country")
          .style("opacity", 0.8)
          .attr("stroke-width", 0.5)
          .attr("stroke", "#ffffff")
          .on("mouseover", mouseOver)
          .on("mouseleave", mouseLeave)
          .on("click", clicked);

        g.selectAll("#chartMaps")
          .data(dataGeo.features)
          .enter()
          .append("text")
          .attr("class", "place-label")

          .attr("dy", ".35em")
          .text(function (d) {
            return d.properties.name;
          });

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
          .on("click", clickedBubble)
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
      d3.selectAll(".Country").transition().duration(200).style("opacity", 0.5);
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "#0B4B58");
    };

    let mouseLeave = function (d) {
      d3.selectAll(".Country").transition().duration(200).style("opacity", 0.8);
      d3.select(this).transition().duration(200).style("stroke", "transparent");
    };

    var mouseover = function (d) {
      Tooltip.style("opacity", 1)
        .html(
          `
          <div class="">
            <h5 class='text-black font-bold'>
              ${d.country}
            </h5>
            <div class="mt-2">
              <div class="grid gap-x-3 grid-cols-2 items-center">
                <div class='text-xs font-light'>
                  Address
                </div>
                <div class='font-bold'>
                  ${d.addressVerification}M+
                </div>
                <div class='text-xs font-light'>
                  Licence
                </div>
                <div class='font-bold'>
                  ${d.driverLicense}M+
                </div>
              </div>
              
            </div>
          </div>`
        )
        .transition()
        .duration(200);
    };

    var clickedBubble = function (d) {
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
    };

    var mousemove = function (d) {
      Tooltip.style("left", d3.event.pageX + 10 + "px").style(
        "top",
        d3.event.pageY + 10 + "px"
      );
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

#chartMaps .tooltip {
  color: #222;
  background-color: red;
  padding: 0.5em;
  height: 400px;
  text-shadow: #f5f5f5 0 1px 0;
  border-radius: 2px;
  opacity: 1;
  position: absolute;
}

.Country .circle-data {
  cursor: pointer;
}
</style>
