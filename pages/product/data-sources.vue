<template>
  <div>
    <div>
      <div id="chartMaps"></div>
      <div class="pt-5 pb-12">
        <div class="max-w-screen-xl mx-auto sm:px-8 px-6">
          <div class="flex items-center justify-center flex-col">
            <div class="w-3/6 mb-10">
              <div
                class="
                  inline-flex
                  flex-col
                  justify-center
                  relative
                  text-gray-500
                  w-full
                "
              >
                <div class="relative">
                  <input
                    type="text"
                    class="
                      p-2
                      w-full
                      pl-8
                      rounded
                      border border-gray-200
                      bg-gray-200
                      focus:bg-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-yellow-600
                      focus:border-transparent
                    "
                    placeholder="Search Countries..."
                    v-model="tempCountry"
                  />
                  <svg
                    class="w-4 h-4 absolute left-2.5 top-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <ul class="bg-white border border-gray-100 w-full mt-2">
                  
                  <li
                    v-for="post in filteredList"
                    :key="post.id"
                    @click="selectedCountry(post)"
                    class="
                      pl-8
                      pr-2
                      py-3
                      border-gray-100
                      relative
                      cursor-pointer
                      hover:bg-gray-100 hover:text-white
                    "
                  >
                    <h4 class="text-gray-500">{{ post.country }}</h4>
                  </li>
                  <li
                    v-if="tempCountry"
                    @click="selectedCountry()"
                    class="
                      pl-8
                      pr-2
                      py-3
                      border-gray-100
                      relative
                      cursor-pointer
                      hover:bg-gray-100 hover:text-white
                    "
                  >
                    <h4 class="text-gray-500">Worldwide</h4>
                  </li>
                </ul>
              </div>
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
      allMarkersData: null,
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
    selectedCountry(params) {
      if (params) {
        this.clickedBubble(params);
        this.tempCountry = null;
      } else {
        this.clickedBubble(this.totalStats);
        this.tempCountry = null;
      }
    },
    clickedBubble(d) {
      this.continent = d.Continent;
      this.country = d.country;
      this.latitude = d.latitude;
      this.longitude = d.longitude;
      this.bvn = d.BVN;
      this.license = d.driverLicense;
      this.nin = d.nin;
      this.address = d.addressVerification;
      this.pvc = d.pvc;
      this.card = d.card;
    },
  },
  computed: {
    ...mapState({
      loading: (state) => state.datasource.loading,
    }),
    filteredList() {
      let data = this.allMarkersData ? this.allMarkersData : [];
      return data.filter((post) => {
        let search = this.tempCountry ? this.tempCountry.toLowerCase() : null;
        return post.country.toLowerCase().includes(search);
      });
    },
  },
  async mounted() {
    const markers = await this.getAllDataSource();
    this.allMarkersData = markers;
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
          .on("click", function (eachCircle) {
            self.clickedBubble(eachCircle);
          })
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
