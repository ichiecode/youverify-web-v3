<template>
  <div>
    <div v-if="!loading">
      <div id="chartMaps" class="relative">
        <div
          class="absolute bottom-7 right-7 bg-white rounded-md flex flex-col"
        >
          <button
            class="flex justify-center items-center border h-10 w-10"
            type="button"
            id="zoom-in"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus w-10 h-10"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </button>
          <button
            class="flex justify-center items-center border h-10 w-10"
            type="button"
            id="zoom-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash w-10 h-10"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="pt-5 pb-12">
        <div class="max-w-screen-xl mx-auto sm:px-8 px-6">
          <div class="flex items-center justify-center flex-col">
            <div class="w-full md:w-3/6 mb-5 md:mb-10">
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
                    @focus="handleFocus"
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
                    v-if="showDropDownWorldWide"
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
                <h3 class="">
                  {{ filteredSelectedList.country || "Worldwide" }}
                </h3>
              </div>
              <div class="py-4 grid grid-cols-2 gap-10">
                <div>
                  <p class="font-bold uppercase text-sm mb-5">
                    Identity Data Source
                  </p>
                  <div>
                    
                    <h5
                      class="mt-2 font-bold cursor-default"
                      v-for="item in filteredSelectedList.IdentityDataSources"
                      :key="item.id"
                    >
                      <abbr :title="item.title">{{item.abbreviation}}</abbr>
                      <!-- {{ item.title }} -->
                    </h5>
                  </div>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">
                    Address verification
                  </p>
                  <div>
                    <h5
                      class="mt-2 font-bold"
                      v-for="item in filteredSelectedList.AddressVerification"
                      :key="item.id"
                    >
                      {{ item.title }}
                    </h5>
                  </div>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">
                    University Certificate
                  </p>
                  <div>
                    <h5
                      class="mt-2 font-bold"
                      v-for="item in filteredSelectedList.UniversityCertificate"
                      :key="item.id"
                    >
                      <abbr :title="item.title">{{item.abbreviation}}</abbr>
                    </h5>
                  </div>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">PEP/Sanction</p>
                  <div>
                    <h5
                      class="mt-2 font-bold"
                      v-for="item in filteredSelectedList.PEPSanctionList"
                      :key="item.id"
                    >
                     <abbr :title="item.title">{{item.abbreviation}}</abbr>
                    </h5>
                  </div>
                </div>

                <div>
                  <p class="font-bold uppercase text-sm mb-5">
                    Corporate Registry
                  </p>
                  <h5 class="mt-2 font-bold">
                    {{
                      filteredSelectedList.CorporateRegistry === true
                        ? "Yes"
                        : "No"
                    }}
                  </h5>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">Bank Statement</p>
                  <h5 class="mt-2 font-bold">
                    {{
                      filteredSelectedList.BankStatement === true ? "Yes" : "No"
                    }}
                  </h5>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">Liveness Test</p>
                  <h5 class="mt-2 font-bold">
                    {{
                      filteredSelectedList.LivenessTest === true ? "Yes" : "No"
                    }}
                  </h5>
                </div>
                <div>
                  <p class="font-bold uppercase text-sm mb-5">ID Capture</p>
                  <h5 class="mt-2 font-bold">
                    {{ filteredSelectedList.IDCapture === true ? "Yes" : "No" }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        min-h-screen
        relative
        flex
        items-center
        justify-start
        pt-20
        pb-32
        md:pt-20 md:pb-20
      "
      v-else
    >
      <section
        class="
          w-full
          flex
          justify-center
          items-center
          max-w-screen-xl
          mx-auto
          sm:px-8
          px-6
        "
      >
        <div
          class="
            flex
            justify-center
            items-center
          "
        >
          <div
            class="
              animate-spin
              rounded-full
              border-blue
              h-20
              w-20
              border-t-4 border-b-4 border-gray-900
            "
          ></div>
        </div>
      </section>
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
      showDropDownWorldWide: false,
      selectDataPoint: null,
      totalStats: {
        BankStatement: true,
        CorporateRegistry: true,
        LivenessTest: true,
        IDCapture: true,
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
        this.showDropDownWorldWide = false;
        this.tempCountry = null;
      } else {
        this.clickedBubble(this.totalStats);
        this.showDropDownWorldWide = false;
        this.tempCountry = null;
      }
    },
    clickedBubble(d) {
      this.selectDataPoint = d;
    },
    handleFocus() {
      this.showDropDownWorldWide = true;
    },
  },
  computed: {
    ...mapState({
      loading: (state) => state.datasource.loading,
    }),
    filteredSelectedList() {
      let data = this.selectDataPoint ? this.selectDataPoint : [];
      return data;
    },
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
    const allIdentity = [];
    const allAddress = [];
    const allUniversity = [];
    const allPEP = [];
    markers.map((items) => {
      allIdentity.push(...items.IdentityDataSources);
      allAddress.push(...items.AddressVerification);
      allUniversity.push(...items.UniversityCertificate);
      allPEP.push(...items.PEPSanctionList);
    });

    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    }
    this.totalStats.IdentityDataSources = getUniqueListBy(allIdentity, "title");
    this.totalStats.AddressVerification = getUniqueListBy(allAddress, "title");
    this.totalStats.UniversityCertificate = getUniqueListBy(
      allUniversity,
      "title"
    );
    this.totalStats.PEPSanctionList = getUniqueListBy(allPEP, "title");

    this.clickedBubble(this.totalStats);
    let self = this;
    let centered = null;
    const size = {
      height: 600,
      width: d3.select("#chartMaps").node()
        ? d3.select("#chartMaps").node().getBoundingClientRect().width
        : "",
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
        "position: absolute; left: 64px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); opacity: 0; width: 290px; z-index: 300; background: white; border-radius: 4px; padding: 10px;"
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

    d3.select("#zoom-in").on("click", function () {
      zoom.scaleBy(svg.transition().duration(750), 1.3);
    });

    d3.select("#zoom-out").on("click", function () {
      zoom.scaleBy(svg.transition().duration(750), 1 / 1.3);
    });

    function clicked(d) {
      var x, y, k;
      if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 5;
        centered = d;
      } else {
        x = size.width / 2;
        y = size.height / 2;
        k = 1;
        centered = null;
      }
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
      let Identity = "";
      let Address = "";
      let University = "";
      let PEP = "";

      d.IdentityDataSources.forEach(function (item) {
        Identity += "<div class='text-xs'>" + item.abbreviation + "</div>";
      });
      d.AddressVerification.forEach(function (item) {
        Address += "<div class='text-xs'>" + item.abbreviation + "</div>";
      });
      d.UniversityCertificate.forEach(function (item) {
        University += "<div class='text-xs'>" + item.abbreviation + "</div>";
      });
      d.PEPSanctionList.forEach(function (item) {
        PEP += "<div class='text-xs'>" + item.abbreviation + "</div>";
      });

      Tooltip.style("opacity", 1)
        .html(
          `
          <div class="">
            <h5 class='text-black font-bold'>
              ${d.country}
            </h5>
            <div class="mt-3 grid grid-cols-2 gap-3">
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Identity Data source
                </div>
                ${Identity}
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Address Verification
                </div>
                ${Address}
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  University Certificate
                </div>
                ${University}
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  PEP/Sanction List
                </div>
                ${PEP}
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Corporate Registry
                </div>
                <div class='text-xs'>${
                  d.CorporateRegistry === true ? "Yes" : "No"
                }</div>
                
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Bank Statement
                </div>
                <div class='text-xs'>${
                  d.BankStatement === true ? "Yes" : "No"
                }</div>
                
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-1'>
                  Liveness Test
                </div>
                <div class='text-xs'>${
                  d.LivenessTest === true ? "Yes" : "No"
                }</div>
                
              </div>
              <div class="">
                <div class='text-xs text-blue font-semibold mb-2'>
                  ID Capture
                </div>
                <div class='text-xs'>${
                  d.IDCapture === true ? "Yes" : "No"
                }</div>
                
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

.Country .circle-data {
  cursor: pointer;
}
</style>
