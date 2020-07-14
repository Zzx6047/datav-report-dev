<template>
  <ve-bmap
          :settings="chartSettings"
          :title="title"
          :tooltip="{}"
          :series="series"
          height="100%"></ve-bmap>
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'

const convertData = function (data, geo) {
  const res = []
  data.forEach((item, index) => {
    const { name, value } = item
    const coord = geo[name]
    res.push({
      name,
      value: [...coord, value]
    })
  })
  return res
}

export default {
  mixins: [commonDataMixin],
  data () {
    return {
      title: {
        text: 'XX外卖销售大盘',
        subtext: '销售趋势统计',
        sublink: 'www.baidu.com',
        left: 'center'
      },
      chartSettings: {
        key: 'B7h0XvDnrnEAcVAZ3ExIccaUVlnkgRO9',
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: false,
          mapStyle: {
            styleJson: [{
              featureType: 'water',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'land',
              elementType: 'all',
              stylers: {
                color: '#f3f3f3'
              }
            }, {
              featureType: 'railway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                color: '#fdfdfd'
              }
            }, {
              featureType: 'highway',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'arterial',
              elementType: 'geometry',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'poi',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'green',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'subway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'manmade',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'local',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'arterial',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'boundary',
              elementType: 'all',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'building',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'label',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#999999'
              }
            }]
          }
        }
      },
      series: []
    }
  },
  watch: {
    mapData () {
      const { data, geo } = this.mapData
      this.series = [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData(data, geo),
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          symbolSize: function (val) {
            return val[2] / 10
          },
          label: {
            show: false,
            position: 'right',
            formatter: function (v) {
              return `${v.data.name} - ${v.data.value[2]}`
            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'Top 10',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value
          }), geo).slice(0, 10),
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          },
          symbolSize: function (val) {
            return val[2] / 10
          },
          encode: {
            value: 2
          },
          label: {
            show: true,
            position: 'right',
            formatter: function (v) {
              return `${v.data.name} - ${v.data.value[2]}`
            }
          },
          hoverAnimation: true,
          rippleEffect: {
            brushType: 'stroke'
          }
        }
      ]
    }
  }
}
</script>

<style>

</style>
