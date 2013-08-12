
/**
 * echarts默认配置项
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/config',[],function() {
    // 请原谅我这样写，这显然可以直接返回个对象，但那样的话outline就显示不出来了~~
    var config = {
        // 图表类型
        CHART_TYPE_LINE: 'line',
        CHART_TYPE_BAR: 'bar',
        CHART_TYPE_SCATTER: 'scatter',
        CHART_TYPE_PIE: 'pie',
        CHART_TYPE_RADAR: 'radar',
        CHART_TYPE_MAP: 'map',
        CHART_TYPE_K: 'k',
        CHART_TYPE_ISLAND: 'island',
        CHART_TYPE_FORCE : 'force',

        // 组件类型
        COMPONENT_TYPE_TITLE: 'title',
        COMPONENT_TYPE_LEGEND: 'legend',
        COMPONENT_TYPE_DATARANGE: 'dataRange',
        COMPONENT_TYPE_DATAVIEW: 'dataView',
        COMPONENT_TYPE_DATAZOOM: 'dataZoom',
        COMPONENT_TYPE_TOOLBOX: 'toolbox',
        COMPONENT_TYPE_TOOLTIP: 'tooltip',
        COMPONENT_TYPE_GRID: 'grid',
        COMPONENT_TYPE_AXIS: 'axis',
        COMPONENT_TYPE_X_AXIS: 'xAxis',
        COMPONENT_TYPE_Y_AXIS: 'yAxis',
        COMPONENT_TYPE_AXIS_CATEGORY: 'categoryAxis',
        COMPONENT_TYPE_AXIS_VALUE: 'valueAxis',

        // 默认色板
        color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
                '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
                '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',
                '#6b8e23','#ff00ff','#3cb371','#b8860b','#30e0e0'],

        // 图表标题
        title: {
            text: '',
            subtext: '',
            x: 'left',                 // 水平安放位置，默认为左对齐，可选为：
                                       // 'center' ¦ 'left' ¦ 'right'
                                       // ¦ {number}（x坐标，单位px）
            y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                       // 'top' ¦ 'bottom' ¦ 'center'
                                       // ¦ {number}（y坐标，单位px）
            //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',       // 标题边框颜色
            borderWidth: 0,            // 标题边框线宽，单位px，默认为0（无边框）
            padding: 5,                // 标题内边距，单位px，默认各方向内边距为5，
                                       // 接受数组分别设定上右下左边距，同css
            itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10，
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#333'          // 主标题文字颜色
            },
            subtextStyle: {
                color: '#aaa'          // 副标题文字颜色
            }
        },
        
        // 图例
        legend: {
            orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                       // 'horizontal' ¦ 'vertical'
            x: 'center',               // 水平安放位置，默认为全图居中，可选为：
                                       // 'center' ¦ 'left' ¦ 'right'
                                       // ¦ {number}（x坐标，单位px）
            y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                       // 'top' ¦ 'bottom' ¦ 'center'
                                       // ¦ {number}（y坐标，单位px）
            selectedMode: true,        // 选择模式，默认开启图例开关
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',       // 图例边框颜色
            borderWidth: 0,            // 图例边框线宽，单位px，默认为0（无边框）
            padding: 5,                // 图例内边距，单位px，默认各方向内边距为5，
                                       // 接受数组分别设定上右下左边距，同css
            itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                       // 横向布局时为水平间隔，纵向布局时为纵向间隔
            // data: []                // 图例内容（详见legend.data，数组中每一项代表一个item
            itemWidth: 20,             // 图例图形宽度，非标准参数
            itemHeight: 14,            // 图例图形高度，非标准参数
            textStyle: {
                color: '#333'          // 图例文字颜色
            }
        },
        
        // 值域
        dataRange: {
            orient: 'vertical',        // 布局方式，默认为垂直布局，可选为：
                                       // 'horizontal' ¦ 'vertical'
            x: 'left',                 // 水平安放位置，默认为全图左对齐，可选为：
                                       // 'center' ¦ 'left' ¦ 'right'
                                       // ¦ {number}（x坐标，单位px）
            y: 'bottom',               // 垂直安放位置，默认为全图底部，可选为：
                                       // 'top' ¦ 'bottom' ¦ 'center'
                                       // ¦ {number}（y坐标，单位px）
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',       // 值域边框颜色
            borderWidth: 0,            // 值域边框线宽，单位px，默认为0（无边框）
            padding: 5,                // 值域内边距，单位px，默认各方向内边距为5，
                                       // 接受数组分别设定上右下左边距，同css
            itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                       // 横向布局时为水平间隔，纵向布局时为纵向间隔
            itemWidth: 20,             // 值域图形宽度，线性渐变水平布局宽度为该值 * 10
            itemHeight: 14,            // 值域图形高度，线性渐变垂直布局高度为该值 * 10
            precision: 0,              // 小数精度，默认为0，无小数点
            // min: null,              // 最小值
            // max: null,              // 最大值
            splitNumber: 5,            // 分割段数，默认为5，为0时为线性渐变
            calculable: false,         // 是否值域漫游，启用后无视splitNumber，线性渐变
            realtime: true,
            color:['#1e90ff','#f0ffff'],//颜色 
            //text:['高','低'],           // 文本，默认为数值文本
            textStyle: {
                color: '#333'          // 值域文字颜色
            }
        },

        toolbox: {
            show : false,
            orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                       // 'horizontal' ¦ 'vertical'
            x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
                                       // 'center' ¦ 'left' ¦ 'right'
                                       // ¦ {number}（x坐标，单位px）
            y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                       // 'top' ¦ 'bottom' ¦ 'center'
                                       // ¦ {number}（y坐标，单位px）
            color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
            backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
            borderColor: '#ccc',       // 工具箱边框颜色
            borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
            padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
                                       // 接受数组分别设定上右下左边距，同css
            itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                       // 横向布局时为水平间隔，纵向布局时为纵向间隔
            itemSize: 16,             // 工具箱图形宽度，非标准参数
            feature : {
                //mark : true,
                //dataView : {readOnly: false},
                //magicType: ['line', 'bar'],
                //restore : true,
                //saveAsImage : true
            }
        },

        // 提示框
        tooltip: {
            show: true,
            trigger: 'item',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
            // formatter: null         // 内容格式器：{string}（Template） ¦ {Function}
            islandFormatter: '{a} <br/>{b} : {c}',  // 数据孤岛内容格式器，非标准参数
            backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#333',       // 提示边框颜色
            borderRadius: 4,           // 提示边框圆角，单位px，默认为4
            borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
            padding: 5,                // 提示内边距，单位px，默认各方向内边距为5，
                                       // 接受数组分别设定上右下左边距，同css
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
                lineStyle : {          // 直线指示器样式设置
                    color: '#48b',
                    width: 2,
                    type: 'solid'
                },
                areaStyle : {                       // 阴影指示器样式设置
                    size: 'auto',                   // 阴影大小
                    color: 'rgba(150,150,150,0.3)'  // 阴影颜色
                }
            },
            textStyle: {
                color: '#fff'
            }
        },

        // 区域缩放控制器
        dataZoom: {
            show: false,
            realtime: false,
            orient: 'horizontal',          // 布局方式，默认为水平布局，可选为：
                                           // 'horizontal' ¦ 'vertical'
            backgroundColor: '#eee',       // 背景颜色
            dataBackgroundColor: '#ccc',   // 数据背景颜色
            fillerColor: 'rgba(50,205,50,0.4)',        // 填充颜色
            handleColor: 'rgba(70,130,180,0.8)'         // 手柄颜色

            // x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：
                                       // {number}（x坐标，单位px）
            // y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：
                                       // {number}（y坐标，单位px）
            // width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配
            // height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配
            // xAxisIndex: [],         // 默认控制所有横向类目
            // yAxisIndex: [],         // 默认控制所有横向类目
            // start: 0,               // 默认为0
            // end: 100,               // 默认为全部 100%
            // zoomLock: false         // 是否锁定选择区域大小
        },

        // 网格
        grid: {
            x: 80,
            y: 60,
            // width: {totalWidth} - (2 * x),
            // height: {totalHeight} - (2 * y)
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#ccc'
        },

        // 类目轴
        categoryAxis: {
            position: 'bottom',    // 位置
            name: '',              // 坐标轴名字，默认为空
            nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
            boundaryGap: true,     // 类目起始和结束两端空白策略
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#48b',
                    width: 2,
                    type: 'solid'
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false,       // 属性show控制显示与否，默认不显示
                length :4,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#ccc',
                    width: 1
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                interval: 'auto',
                rotate: 0,
                margin: 8,
                // formatter: null,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#ccc',
                    width: 1,
                    type: 'solid'
                }
            },
            splitArea: {           // 分隔区域
                show: false,       // 默认不显示，属性show控制显示与否
                areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
                    color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                    type: 'default'
                }
            }
        },

        // 数值型坐标轴默认参数
        valueAxis: {
            position: 'left',      // 位置
            name: '',              // 坐标轴名字，默认为空
            nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
            boundaryGap: [0, 0],   // 数值起始和结束两端空白策略
            // min: null,          // 最小值
            // max: null,          // 最大值
            // scale: false,       // 脱离0值比例，放大聚焦到最终_min，_max区间
            precision: 0,          // 小数精度，默认为0，无小数点
            power: 100,            // 整数精度，默认为100，个位和百位为0
            splitNumber: 5,        // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#48b',
                    width: 2,
                    type: 'solid'
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false,       // 属性show控制显示与否，默认不显示
                length :4,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#ccc',
                    width: 1
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                rotate: 0,
                margin: 8,
                // formatter: null,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#333'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#ccc',
                    width: 1,
                    type: 'solid'
                }
            },
            splitArea: {           // 分隔区域
                show: false,       // 默认不显示，属性show控制显示与否
                areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
                    color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                    type: 'default'
                }
            }
        },

        // 柱形图默认参数
        bar: {
            // stack: null
            xAxisIndex: 0,
            yAxisIndex: 0,
            barMinHeight: 20
            // barWidth: null        // 默认自适应
        },

        // 折线图默认参数
        line: {
            // stack: null
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    // color: 各异,
                    lineStyle: {
                        width: 1,
                        type: 'solid',
                        shadowColor : 'rgba(0,0,0,0)', //默认透明
                        shadowBlur: 5,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3
                    }
                },
                emphasis: {
                    // color: 各异,
                }
            },
            //symbol: null,     // 拐点图形类型，非标准参数
            symbolSize: 4           // 可计算特性参数，空数据拖拽提示图形大小
        },
        
        // K线图默认参数
        k: {
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: '#fff',       // 阳线填充颜色
                    color0: '#00aa11',    // 阴线填充颜色
                    lineStyle: {
                        width: 1,
                        color: '#ff3200',   // 阳线边框颜色
                        color0: '#00aa11' // 阴线边框颜色
                    }
                },
                emphasis: {
                    // color: 各异,
                }
            }
        },
        
        // 散点图默认参数
        scatter: {
            xAxisIndex: 0,
            yAxisIndex: 0,
            //symbol: null,      // 图形类型，非标准参数
            symbolSize: 4,       // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            large: false,        // 大规模散点图
            largeThreshold: 2000 // 大规模阀值，large为true且数据量大于largeThreshold才启用大规模模式
        },

        // 饼图默认参数
        pie: {
            // center: null,                   // 默认全局居中
            // radius: [0, min(width,height) - 50],
            startAngle: 0,
            minAngle: 5,
            selectedOffset: 10,             // 选中是扇区偏移量
            // selectedMode: false,         // 选择模式，默认关闭，可选single，multiple
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outer'
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    labelLine: {
                        show: true,
                        length: 30,
                        lineStyle: {
                            // color: 各异,
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                        position: 'outer'
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    labelLine: {
                        show: false,
                        length: 40,
                        lineStyle: {
                            // color: 各异,
                            width: 1,
                            type: 'solid'
                        }
                    }
                }
            }
        },
        
        map: {
            mapType: 'china',
            mapLocation: {
                x : 'center',
                y : 'center'
                // width    // 自适应
                // height   // 自适应
            },
            // mapValueCalculation: 'sum', // 数值合并方式，默认加和，可选为：
                                           // 'sum' | 'average' | 'max' | 'min' 
            // selectedMode: false,        // 选择模式，默认关闭，可选single，multiple
            itemStyle: {
                normal: {
                    // color: 各异,
                    lineStyle: {
                        width: 2,
                        color: '#fff'
                    },
                    areaStyle: {
                        color: '#ccc'//rgba(135,206,250,0.8)
                    },
                    label: {
                        show: false,
                        textStyle: {
                            color: 'rgba(139,69,19,1)'
                        }
                    }
                },
                emphasis: {                 // 也是选中样式
                    // color: 各异,
                    lineStyle: {
                        width: 2,
                        color: '#fff'
                    },
                    areaStyle: {
                        color: 'rgba(255,215,0,0.8)'
                    },
                    label: {
                        show: false,
                        textStyle: {
                            color: 'rgba(139,69,19,1)'
                        }
                    }
                }
            }
        },
        
        force : {
            // 数据map到圆的半径的最小值和最大值
            minRadius : 10,
            maxRadius : 20,
            density : 1.0,
            attractiveness : 1.0,
            // 初始化的随机大小位置
            initSize : 300,
            // 向心力因子，越大向心力越大
            centripetal : 1,
            // 冷却因子
            coolDown : 0.99,
            // 分类里如果有样式会覆盖节点默认样式
            categories : [],
            itemStyle: {
                normal: {
                    // color: 各异,
                    label: {
                        show: false
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    nodeStyle : {
                        brushType : 'both',
                        color : '#f08c2e',
                        strokeColor : '#5182ab'
                    },
                    linkStyle : {
                        strokeColor : '#5182ab'
                    }
                },
                emphasis: {
                    // color: 各异,
                    label: {
                        show: false
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    nodeStyle : {},
                    linkStyle : {}
                }
            }
        },

        island: {
            r: 15,
            calculateStep: 0.1  // 滚轮可计算步长 0.1 = 10%
        },

        textStyle: {
            decoration: 'none',
            fontFamily: 'Arial, Verdana, sans-serif',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal'
        },

        EVENT: {
            REFRESH: 'refresh',
            RESTORE: 'restore',
            CLICK: 'click',
            HOVER: 'hover',
            // -------
            DATA_CHANGED: 'dataChanged',
            DATA_ZOOM: 'dataZoom',
            DATA_RANGE: 'dataRange',
            LEGEND_SELECTED: 'legendSelected',
            MAP_SELECTED: 'mapSelected',
            PIE_SELECTED: 'pieSelected',
            MAGIC_TYPE_CHANGED: 'magicTypeChanged',
            DATA_VIEW_CHANGED: 'dataViewChanged'
        },

        // 可计算特性配置，孤岛，提示颜色
        calculable: false,              // 默认开启可计算特性
        calculableColor: 'rgba(255,165,0,0.6)',       // 拖拽提示边框颜色
        calculableHolderColor: '#ccc', // 可计算占位提示颜色
        nameConnector: ' & ',
        valueConnector: ' : ',
        animation: true,
        animationDuration: 2000,
        animationEasing: 'ExponentialOut'    //BounceOut
    };

    return config;
});
/**
 * zrender: 向量操作类
 *
 * author : lang(shenyi01@baidu.com)
 * code from vec2 in http://glmatrix.net/
 */
define(
    'zrender/tool/vector',[],function() {
       var vector = {
            add : function(out, v1, v2) {
                out[0] = v1[0]+v2[0];
                out[1] = v1[1]+v2[1];
                return out;
            },
            sub : function(out, v1, v2) {
                out[0] = v1[0]-v2[0];
                out[1] = v1[1]-v2[1];
                return out;
            },
            length : function(v) {
                return Math.sqrt( this.lengthSquare(v) );
            },
            lengthSquare : function(v) {
                return v[0]*v[0]+v[1]*v[1];
            },
            mul : function(out, v1, v2) {
                out[0] = v1[0]*v2[0];
                out[1] = v1[1]*v2[1];
                return out;
            },
            dot : function(v1, v2) {
                return v1[0]*v2[0]+v1[1]*v2[1];
            },
            scale : function(out, v, s) {
                out[0] = v[0]*s;
                out[1] = v[1]*s;
                return out;
            },
            normalize : function(out, v) {
                var d = vector.length(v);
                if(d === 0){
                    out[0] = 0;
                    out[1] = 0;
                }else{
                    out[0] = v[0]/d;
                    out[1] = v[1]/d;
                }
                return out;
            },
            distance : function( v1, v2 ) {
                var out = [];
                return vector.length( vector.sub(out, v1, v2) );
            },
            middle : function(out, v1, v2) {
                out[0] = (v1[0]+v2[0])/2;
                out[1] = (v1[1]+v2[1])/2;
                return out;
            }
        };

        return vector;
    }
);
// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Known Issues:
//
// * Patterns only support repeat.
// * Radial gradient are not implemented. The VML version of these look very
//   different from the canvas one.
// * Clipping paths are not implemented.
// * Coordsize. The width and height attribute have higher priority than the
//   width and height style values which isn't correct.
// * Painting mode isn't implemented.
// * Canvas width/height should is using content-box by default. IE in
//   Quirks mode will draw the canvas using border-box. Either change your
//   doctype to HTML5
//   (http://www.whatwg.org/specs/web-apps/current-work/#the-doctype)
//   or use Box Sizing Behavior from WebFX
//   (http://webfx.eae.net/dhtml/boxsizing/boxsizing.html)
// * Non uniform scaling does not correctly scale strokes.
// * Optimize. There is always room for speed improvements.

// AMD by kener.linfeng@gmail.com
define('zrender/lib/excanvas',['require'],function(require) {
    
// Only add this code if we do not already have a canvas implementation
if (!document.createElement('canvas').getContext) {

(function() {

  // alias some functions to make (compiled) code shorter
  var m = Math;
  var mr = m.round;
  var ms = m.sin;
  var mc = m.cos;
  var abs = m.abs;
  var sqrt = m.sqrt;

  // this is used for sub pixel precision
  var Z = 10;
  var Z2 = Z / 2;

  var IE_VERSION = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];

  /**
   * This funtion is assigned to the <canvas> elements as element.getContext().
   * @this {HTMLElement}
   * @return {CanvasRenderingContext2D_}
   */
  function getContext() {
    return this.context_ ||
        (this.context_ = new CanvasRenderingContext2D_(this));
  }

  var slice = Array.prototype.slice;

  /**
   * Binds a function to an object. The returned function will always use the
   * passed in {@code obj} as {@code this}.
   *
   * Example:
   *
   *   g = bind(f, obj, a, b)
   *   g(c, d) // will do f.call(obj, a, b, c, d)
   *
   * @param {Function} f The function to bind the object to
   * @param {Object} obj The object that should act as this when the function
   *     is called
   * @param {*} var_args Rest arguments that will be used as the initial
   *     arguments when the function is called
   * @return {Function} A new function that has bound this
   */
  function bind(f, obj, var_args) {
    var a = slice.call(arguments, 2);
    return function() {
      return f.apply(obj, a.concat(slice.call(arguments)));
    };
  }

  function encodeHtmlAttribute(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  }

  function addNamespace(doc, prefix, urn) {
    if (!doc.namespaces[prefix]) {
      doc.namespaces.add(prefix, urn, '#default#VML');
    }
  }

  function addNamespacesAndStylesheet(doc) {
    addNamespace(doc, 'g_vml_', 'urn:schemas-microsoft-com:vml');
    addNamespace(doc, 'g_o_', 'urn:schemas-microsoft-com:office:office');

    // Setup default CSS.  Only add one style sheet per document
    if (!doc.styleSheets['ex_canvas_']) {
      var ss = doc.createStyleSheet();
      ss.owningElement.id = 'ex_canvas_';
      ss.cssText = 'canvas{display:inline-block;overflow:hidden;' +
          // default size is 300x150 in Gecko and Opera
          'text-align:left;width:300px;height:150px}';
    }
  }

  // Add namespaces and stylesheet at startup.
  addNamespacesAndStylesheet(document);

  var G_vmlCanvasManager_ = {
    init: function(opt_doc) {
      var doc = opt_doc || document;
      // Create a dummy element so that IE will allow canvas elements to be
      // recognized.
      doc.createElement('canvas');
      doc.attachEvent('onreadystatechange', bind(this.init_, this, doc));
    },

    init_: function(doc) {
      // find all canvas elements
      var els = doc.getElementsByTagName('canvas');
      for (var i = 0; i < els.length; i++) {
        this.initElement(els[i]);
      }
    },

    /**
     * Public initializes a canvas element so that it can be used as canvas
     * element from now on. This is called automatically before the page is
     * loaded but if you are creating elements using createElement you need to
     * make sure this is called on the element.
     * @param {HTMLElement} el The canvas element to initialize.
     * @return {HTMLElement} the element that was created.
     */
    initElement: function(el) {
      if (!el.getContext) {
        el.getContext = getContext;

        // Add namespaces and stylesheet to document of the element.
        addNamespacesAndStylesheet(el.ownerDocument);

        // Remove fallback content. There is no way to hide text nodes so we
        // just remove all childNodes. We could hide all elements and remove
        // text nodes but who really cares about the fallback content.
        el.innerHTML = '';

        // do not use inline function because that will leak memory
        el.attachEvent('onpropertychange', onPropertyChange);
        el.attachEvent('onresize', onResize);

        var attrs = el.attributes;
        if (attrs.width && attrs.width.specified) {
          // TODO: use runtimeStyle and coordsize
          // el.getContext().setWidth_(attrs.width.nodeValue);
          el.style.width = attrs.width.nodeValue + 'px';
        } else {
          el.width = el.clientWidth;
        }
        if (attrs.height && attrs.height.specified) {
          // TODO: use runtimeStyle and coordsize
          // el.getContext().setHeight_(attrs.height.nodeValue);
          el.style.height = attrs.height.nodeValue + 'px';
        } else {
          el.height = el.clientHeight;
        }
        //el.getContext().setCoordsize_()
      }
      return el;
    }
  };

  function onPropertyChange(e) {
    var el = e.srcElement;

    switch (e.propertyName) {
      case 'width':
        el.getContext().clearRect();
        el.style.width = el.attributes.width.nodeValue + 'px';
        // In IE8 this does not trigger onresize.
        el.firstChild.style.width =  el.clientWidth + 'px';
        break;
      case 'height':
        el.getContext().clearRect();
        el.style.height = el.attributes.height.nodeValue + 'px';
        el.firstChild.style.height = el.clientHeight + 'px';
        break;
    }
  }

  function onResize(e) {
    var el = e.srcElement;
    if (el.firstChild) {
      el.firstChild.style.width =  el.clientWidth + 'px';
      el.firstChild.style.height = el.clientHeight + 'px';
    }
  }

  G_vmlCanvasManager_.init();

  // precompute "00" to "FF"
  var decToHex = [];
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
      decToHex[i * 16 + j] = i.toString(16) + j.toString(16);
    }
  }

  function createMatrixIdentity() {
    return [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ];
  }

  function matrixMultiply(m1, m2) {
    var result = createMatrixIdentity();

    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        var sum = 0;

        for (var z = 0; z < 3; z++) {
          sum += m1[x][z] * m2[z][y];
        }

        result[x][y] = sum;
      }
    }
    return result;
  }

  function copyState(o1, o2) {
    o2.fillStyle     = o1.fillStyle;
    o2.lineCap       = o1.lineCap;
    o2.lineJoin      = o1.lineJoin;
    o2.lineWidth     = o1.lineWidth;
    o2.miterLimit    = o1.miterLimit;
    o2.shadowBlur    = o1.shadowBlur;
    o2.shadowColor   = o1.shadowColor;
    o2.shadowOffsetX = o1.shadowOffsetX;
    o2.shadowOffsetY = o1.shadowOffsetY;
    o2.strokeStyle   = o1.strokeStyle;
    o2.globalAlpha   = o1.globalAlpha;
    o2.font          = o1.font;
    o2.textAlign     = o1.textAlign;
    o2.textBaseline  = o1.textBaseline;
    o2.arcScaleX_    = o1.arcScaleX_;
    o2.arcScaleY_    = o1.arcScaleY_;
    o2.lineScale_    = o1.lineScale_;
  }

  var colorData = {
    aliceblue: '#F0F8FF',
    antiquewhite: '#FAEBD7',
    aquamarine: '#7FFFD4',
    azure: '#F0FFFF',
    beige: '#F5F5DC',
    bisque: '#FFE4C4',
    black: '#000000',
    blanchedalmond: '#FFEBCD',
    blueviolet: '#8A2BE2',
    brown: '#A52A2A',
    burlywood: '#DEB887',
    cadetblue: '#5F9EA0',
    chartreuse: '#7FFF00',
    chocolate: '#D2691E',
    coral: '#FF7F50',
    cornflowerblue: '#6495ED',
    cornsilk: '#FFF8DC',
    crimson: '#DC143C',
    cyan: '#00FFFF',
    darkblue: '#00008B',
    darkcyan: '#008B8B',
    darkgoldenrod: '#B8860B',
    darkgray: '#A9A9A9',
    darkgreen: '#006400',
    darkgrey: '#A9A9A9',
    darkkhaki: '#BDB76B',
    darkmagenta: '#8B008B',
    darkolivegreen: '#556B2F',
    darkorange: '#FF8C00',
    darkorchid: '#9932CC',
    darkred: '#8B0000',
    darksalmon: '#E9967A',
    darkseagreen: '#8FBC8F',
    darkslateblue: '#483D8B',
    darkslategray: '#2F4F4F',
    darkslategrey: '#2F4F4F',
    darkturquoise: '#00CED1',
    darkviolet: '#9400D3',
    deeppink: '#FF1493',
    deepskyblue: '#00BFFF',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1E90FF',
    firebrick: '#B22222',
    floralwhite: '#FFFAF0',
    forestgreen: '#228B22',
    gainsboro: '#DCDCDC',
    ghostwhite: '#F8F8FF',
    gold: '#FFD700',
    goldenrod: '#DAA520',
    grey: '#808080',
    greenyellow: '#ADFF2F',
    honeydew: '#F0FFF0',
    hotpink: '#FF69B4',
    indianred: '#CD5C5C',
    indigo: '#4B0082',
    ivory: '#FFFFF0',
    khaki: '#F0E68C',
    lavender: '#E6E6FA',
    lavenderblush: '#FFF0F5',
    lawngreen: '#7CFC00',
    lemonchiffon: '#FFFACD',
    lightblue: '#ADD8E6',
    lightcoral: '#F08080',
    lightcyan: '#E0FFFF',
    lightgoldenrodyellow: '#FAFAD2',
    lightgreen: '#90EE90',
    lightgrey: '#D3D3D3',
    lightpink: '#FFB6C1',
    lightsalmon: '#FFA07A',
    lightseagreen: '#20B2AA',
    lightskyblue: '#87CEFA',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#B0C4DE',
    lightyellow: '#FFFFE0',
    limegreen: '#32CD32',
    linen: '#FAF0E6',
    magenta: '#FF00FF',
    mediumaquamarine: '#66CDAA',
    mediumblue: '#0000CD',
    mediumorchid: '#BA55D3',
    mediumpurple: '#9370DB',
    mediumseagreen: '#3CB371',
    mediumslateblue: '#7B68EE',
    mediumspringgreen: '#00FA9A',
    mediumturquoise: '#48D1CC',
    mediumvioletred: '#C71585',
    midnightblue: '#191970',
    mintcream: '#F5FFFA',
    mistyrose: '#FFE4E1',
    moccasin: '#FFE4B5',
    navajowhite: '#FFDEAD',
    oldlace: '#FDF5E6',
    olivedrab: '#6B8E23',
    orange: '#FFA500',
    orangered: '#FF4500',
    orchid: '#DA70D6',
    palegoldenrod: '#EEE8AA',
    palegreen: '#98FB98',
    paleturquoise: '#AFEEEE',
    palevioletred: '#DB7093',
    papayawhip: '#FFEFD5',
    peachpuff: '#FFDAB9',
    peru: '#CD853F',
    pink: '#FFC0CB',
    plum: '#DDA0DD',
    powderblue: '#B0E0E6',
    rosybrown: '#BC8F8F',
    royalblue: '#4169E1',
    saddlebrown: '#8B4513',
    salmon: '#FA8072',
    sandybrown: '#F4A460',
    seagreen: '#2E8B57',
    seashell: '#FFF5EE',
    sienna: '#A0522D',
    skyblue: '#87CEEB',
    slateblue: '#6A5ACD',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#FFFAFA',
    springgreen: '#00FF7F',
    steelblue: '#4682B4',
    tan: '#D2B48C',
    thistle: '#D8BFD8',
    tomato: '#FF6347',
    turquoise: '#40E0D0',
    violet: '#EE82EE',
    wheat: '#F5DEB3',
    whitesmoke: '#F5F5F5',
    yellowgreen: '#9ACD32'
  };


  function getRgbHslContent(styleString) {
    var start = styleString.indexOf('(', 3);
    var end = styleString.indexOf(')', start + 1);
    var parts = styleString.substring(start + 1, end).split(',');
    // add alpha if needed
    if (parts.length != 4 || styleString.charAt(3) != 'a') {
      parts[3] = 1;
    }
    return parts;
  }

  function percent(s) {
    return parseFloat(s) / 100;
  }

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function hslToRgb(parts){
    var r, g, b, h, s, l;
    h = parseFloat(parts[0]) / 360 % 360;
    if (h < 0)
      h++;
    s = clamp(percent(parts[1]), 0, 1);
    l = clamp(percent(parts[2]), 0, 1);
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }

    return '#' + decToHex[Math.floor(r * 255)] +
        decToHex[Math.floor(g * 255)] +
        decToHex[Math.floor(b * 255)];
  }

  function hueToRgb(m1, m2, h) {
    if (h < 0)
      h++;
    if (h > 1)
      h--;

    if (6 * h < 1)
      return m1 + (m2 - m1) * 6 * h;
    else if (2 * h < 1)
      return m2;
    else if (3 * h < 2)
      return m1 + (m2 - m1) * (2 / 3 - h) * 6;
    else
      return m1;
  }

  var processStyleCache = {};

  function processStyle(styleString) {
    if (styleString in processStyleCache) {
      return processStyleCache[styleString];
    }

    var str, alpha = 1;

    styleString = String(styleString);
    if (styleString.charAt(0) == '#') {
      str = styleString;
    } else if (/^rgb/.test(styleString)) {
      var parts = getRgbHslContent(styleString);
      var str = '#', n;
      for (var i = 0; i < 3; i++) {
        if (parts[i].indexOf('%') != -1) {
          n = Math.floor(percent(parts[i]) * 255);
        } else {
          n = +parts[i];
        }
        str += decToHex[clamp(n, 0, 255)];
      }
      alpha = +parts[3];
    } else if (/^hsl/.test(styleString)) {
      var parts = getRgbHslContent(styleString);
      str = hslToRgb(parts);
      alpha = parts[3];
    } else {
      str = colorData[styleString] || styleString;
    }
    return processStyleCache[styleString] = {color: str, alpha: alpha};
  }

  var DEFAULT_STYLE = {
    style: 'normal',
    variant: 'normal',
    weight: 'normal',
    size: 10,
    family: 'sans-serif'
  };

  // Internal text style cache
  var fontStyleCache = {};

  function processFontStyle(styleString) {
    if (fontStyleCache[styleString]) {
      return fontStyleCache[styleString];
    }

    var el = document.createElement('div');
    var style = el.style;
    try {
      style.font = styleString;
    } catch (ex) {
      // Ignore failures to set to invalid font.
    }

    return fontStyleCache[styleString] = {
      style: style.fontStyle || DEFAULT_STYLE.style,
      variant: style.fontVariant || DEFAULT_STYLE.variant,
      weight: style.fontWeight || DEFAULT_STYLE.weight,
      size: style.fontSize || DEFAULT_STYLE.size,
      family: style.fontFamily || DEFAULT_STYLE.family
    };
  }

  function getComputedStyle(style, element) {
    var computedStyle = {};

    for (var p in style) {
      computedStyle[p] = style[p];
    }

    // Compute the size
    var canvasFontSize = parseFloat(element.currentStyle.fontSize),
        fontSize = parseFloat(style.size);

    if (typeof style.size == 'number') {
      computedStyle.size = style.size;
    } else if (style.size.indexOf('px') != -1) {
      computedStyle.size = fontSize;
    } else if (style.size.indexOf('em') != -1) {
      computedStyle.size = canvasFontSize * fontSize;
    } else if(style.size.indexOf('%') != -1) {
      computedStyle.size = (canvasFontSize / 100) * fontSize;
    } else if (style.size.indexOf('pt') != -1) {
      computedStyle.size = fontSize / .75;
    } else {
      computedStyle.size = canvasFontSize;
    }

    // Different scaling between normal text and VML text. This was found using
    // trial and error to get the same size as non VML text.
    computedStyle.size *= 0.981;

    return computedStyle;
  }

  function buildStyle(style) {
    return style.style + ' ' + style.variant + ' ' + style.weight + ' ' +
        style.size + 'px ' + style.family;
  }

  var lineCapMap = {
    'butt': 'flat',
    'round': 'round'
  };

  function processLineCap(lineCap) {
    return lineCapMap[lineCap] || 'square';
  }

  /**
   * This class implements CanvasRenderingContext2D interface as described by
   * the WHATWG.
   * @param {HTMLElement} canvasElement The element that the 2D context should
   * be associated with
   */
  function CanvasRenderingContext2D_(canvasElement) {
    this.m_ = createMatrixIdentity();

    this.mStack_ = [];
    this.aStack_ = [];
    this.currentPath_ = [];

    // Canvas context properties
    this.strokeStyle = '#000';
    this.fillStyle = '#000';

    this.lineWidth = 1;
    this.lineJoin = 'miter';
    this.lineCap = 'butt';
    this.miterLimit = Z * 1;
    this.globalAlpha = 1;
    this.font = '10px sans-serif';
    this.textAlign = 'left';
    this.textBaseline = 'alphabetic';
    this.canvas = canvasElement;

    var cssText = 'width:' + canvasElement.clientWidth + 'px;height:' +
        canvasElement.clientHeight + 'px;overflow:hidden;position:absolute';
    var el = canvasElement.ownerDocument.createElement('div');
    el.style.cssText = cssText;
    canvasElement.appendChild(el);

    var overlayEl = el.cloneNode(false);
    // Use a non transparent background.
    overlayEl.style.backgroundColor = 'red';
    overlayEl.style.filter = 'alpha(opacity=0)';
    canvasElement.appendChild(overlayEl);

    this.element_ = el;
    this.arcScaleX_ = 1;
    this.arcScaleY_ = 1;
    this.lineScale_ = 1;
  }

  var contextPrototype = CanvasRenderingContext2D_.prototype;
  contextPrototype.clearRect = function() {
    if (this.textMeasureEl_) {
      this.textMeasureEl_.removeNode(true);
      this.textMeasureEl_ = null;
    }
    this.element_.innerHTML = '';
  };

  contextPrototype.beginPath = function() {
    // TODO: Branch current matrix so that save/restore has no effect
    //       as per safari docs.
    this.currentPath_ = [];
  };

  contextPrototype.moveTo = function(aX, aY) {
    var p = getCoords(this, aX, aY);
    this.currentPath_.push({type: 'moveTo', x: p.x, y: p.y});
    this.currentX_ = p.x;
    this.currentY_ = p.y;
  };

  contextPrototype.lineTo = function(aX, aY) {
    var p = getCoords(this, aX, aY);
    this.currentPath_.push({type: 'lineTo', x: p.x, y: p.y});

    this.currentX_ = p.x;
    this.currentY_ = p.y;
  };

  contextPrototype.bezierCurveTo = function(aCP1x, aCP1y,
                                            aCP2x, aCP2y,
                                            aX, aY) {
    var p = getCoords(this, aX, aY);
    var cp1 = getCoords(this, aCP1x, aCP1y);
    var cp2 = getCoords(this, aCP2x, aCP2y);
    bezierCurveTo(this, cp1, cp2, p);
  };

  // Helper function that takes the already fixed cordinates.
  function bezierCurveTo(self, cp1, cp2, p) {
    self.currentPath_.push({
      type: 'bezierCurveTo',
      cp1x: cp1.x,
      cp1y: cp1.y,
      cp2x: cp2.x,
      cp2y: cp2.y,
      x: p.x,
      y: p.y
    });
    self.currentX_ = p.x;
    self.currentY_ = p.y;
  }

  contextPrototype.quadraticCurveTo = function(aCPx, aCPy, aX, aY) {
    // the following is lifted almost directly from
    // http://developer.mozilla.org/en/docs/Canvas_tutorial:Drawing_shapes

    var cp = getCoords(this, aCPx, aCPy);
    var p = getCoords(this, aX, aY);

    var cp1 = {
      x: this.currentX_ + 2.0 / 3.0 * (cp.x - this.currentX_),
      y: this.currentY_ + 2.0 / 3.0 * (cp.y - this.currentY_)
    };
    var cp2 = {
      x: cp1.x + (p.x - this.currentX_) / 3.0,
      y: cp1.y + (p.y - this.currentY_) / 3.0
    };

    bezierCurveTo(this, cp1, cp2, p);
  };

  contextPrototype.arc = function(aX, aY, aRadius,
                                  aStartAngle, aEndAngle, aClockwise) {
    aRadius *= Z;
    var arcType = aClockwise ? 'at' : 'wa';

    var xStart = aX + mc(aStartAngle) * aRadius - Z2;
    var yStart = aY + ms(aStartAngle) * aRadius - Z2;

    var xEnd = aX + mc(aEndAngle) * aRadius - Z2;
    var yEnd = aY + ms(aEndAngle) * aRadius - Z2;

    // IE won't render arches drawn counter clockwise if xStart == xEnd.
    if (xStart == xEnd && !aClockwise) {
      xStart += 0.125; // Offset xStart by 1/80 of a pixel. Use something
                       // that can be represented in binary
    }

    var p = getCoords(this, aX, aY);
    var pStart = getCoords(this, xStart, yStart);
    var pEnd = getCoords(this, xEnd, yEnd);

    this.currentPath_.push({type: arcType,
                           x: p.x,
                           y: p.y,
                           radius: aRadius,
                           xStart: pStart.x,
                           yStart: pStart.y,
                           xEnd: pEnd.x,
                           yEnd: pEnd.y});

  };

  contextPrototype.rect = function(aX, aY, aWidth, aHeight) {
    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
  };

  contextPrototype.strokeRect = function(aX, aY, aWidth, aHeight) {
    var oldPath = this.currentPath_;
    this.beginPath();

    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.stroke();

    this.currentPath_ = oldPath;
  };

  contextPrototype.fillRect = function(aX, aY, aWidth, aHeight) {
    var oldPath = this.currentPath_;
    this.beginPath();

    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.fill();

    this.currentPath_ = oldPath;
  };

  contextPrototype.createLinearGradient = function(aX0, aY0, aX1, aY1) {
    var gradient = new CanvasGradient_('gradient');
    gradient.x0_ = aX0;
    gradient.y0_ = aY0;
    gradient.x1_ = aX1;
    gradient.y1_ = aY1;
    return gradient;
  };

  contextPrototype.createRadialGradient = function(aX0, aY0, aR0,
                                                   aX1, aY1, aR1) {
    var gradient = new CanvasGradient_('gradientradial');
    gradient.x0_ = aX0;
    gradient.y0_ = aY0;
    gradient.r0_ = aR0;
    gradient.x1_ = aX1;
    gradient.y1_ = aY1;
    gradient.r1_ = aR1;
    return gradient;
  };

  contextPrototype.drawImage = function(image, var_args) {
    var dx, dy, dw, dh, sx, sy, sw, sh;

    // to find the original width we overide the width and height
    var oldRuntimeWidth = image.runtimeStyle.width;
    var oldRuntimeHeight = image.runtimeStyle.height;
    image.runtimeStyle.width = 'auto';
    image.runtimeStyle.height = 'auto';

    // get the original size
    var w = image.width;
    var h = image.height;

    // and remove overides
    image.runtimeStyle.width = oldRuntimeWidth;
    image.runtimeStyle.height = oldRuntimeHeight;

    if (arguments.length == 3) {
      dx = arguments[1];
      dy = arguments[2];
      sx = sy = 0;
      sw = dw = w;
      sh = dh = h;
    } else if (arguments.length == 5) {
      dx = arguments[1];
      dy = arguments[2];
      dw = arguments[3];
      dh = arguments[4];
      sx = sy = 0;
      sw = w;
      sh = h;
    } else if (arguments.length == 9) {
      sx = arguments[1];
      sy = arguments[2];
      sw = arguments[3];
      sh = arguments[4];
      dx = arguments[5];
      dy = arguments[6];
      dw = arguments[7];
      dh = arguments[8];
    } else {
      throw Error('Invalid number of arguments');
    }

    var d = getCoords(this, dx, dy);

    var w2 = sw / 2;
    var h2 = sh / 2;

    var vmlStr = [];

    var W = 10;
    var H = 10;

    // For some reason that I've now forgotten, using divs didn't work
    vmlStr.push(' <g_vml_:group',
                ' coordsize="', Z * W, ',', Z * H, '"',
                ' coordorigin="0,0"' ,
                ' style="width:', W, 'px;height:', H, 'px;position:absolute;');

    // If filters are necessary (rotation exists), create them
    // filters are bog-slow, so only create them if abbsolutely necessary
    // The following check doesn't account for skews (which don't exist
    // in the canvas spec (yet) anyway.

    if (this.m_[0][0] != 1 || this.m_[0][1] ||
        this.m_[1][1] != 1 || this.m_[1][0]) {
      var filter = [];

      // Note the 12/21 reversal
      filter.push('M11=', this.m_[0][0], ',',
                  'M12=', this.m_[1][0], ',',
                  'M21=', this.m_[0][1], ',',
                  'M22=', this.m_[1][1], ',',
                  'Dx=', mr(d.x / Z), ',',
                  'Dy=', mr(d.y / Z), '');

      // Bounding box calculation (need to minimize displayed area so that
      // filters don't waste time on unused pixels.
      var max = d;
      var c2 = getCoords(this, dx + dw, dy);
      var c3 = getCoords(this, dx, dy + dh);
      var c4 = getCoords(this, dx + dw, dy + dh);

      max.x = m.max(max.x, c2.x, c3.x, c4.x);
      max.y = m.max(max.y, c2.y, c3.y, c4.y);

      vmlStr.push('padding:0 ', mr(max.x / Z), 'px ', mr(max.y / Z),
                  'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',
                  filter.join(''), ", sizingmethod='clip');");

    } else {
      vmlStr.push('top:', mr(d.y / Z), 'px;left:', mr(d.x / Z), 'px;');
    }

    vmlStr.push(' ">' ,
                '<g_vml_:image src="', image.src, '"',
                ' style="width:', Z * dw, 'px;',
                ' height:', Z * dh, 'px"',
                ' cropleft="', sx / w, '"',
                ' croptop="', sy / h, '"',
                ' cropright="', (w - sx - sw) / w, '"',
                ' cropbottom="', (h - sy - sh) / h, '"',
                ' />',
                '</g_vml_:group>');

    this.element_.insertAdjacentHTML('BeforeEnd', vmlStr.join(''));
  };

  contextPrototype.stroke = function(aFill) {
    var lineStr = [];
    var lineOpen = false;

    var W = 10;
    var H = 10;

    lineStr.push('<g_vml_:shape',
                 ' filled="', !!aFill, '"',
                 ' style="position:absolute;width:', W, 'px;height:', H, 'px;"',
                 ' coordorigin="0,0"',
                 ' coordsize="', Z * W, ',', Z * H, '"',
                 ' stroked="', !aFill, '"',
                 ' path="');

    var newSeq = false;
    var min = {x: null, y: null};
    var max = {x: null, y: null};

    for (var i = 0; i < this.currentPath_.length; i++) {
      var p = this.currentPath_[i];
      var c;

      switch (p.type) {
        case 'moveTo':
          c = p;
          lineStr.push(' m ', mr(p.x), ',', mr(p.y));
          break;
        case 'lineTo':
          lineStr.push(' l ', mr(p.x), ',', mr(p.y));
          break;
        case 'close':
          lineStr.push(' x ');
          p = null;
          break;
        case 'bezierCurveTo':
          lineStr.push(' c ',
                       mr(p.cp1x), ',', mr(p.cp1y), ',',
                       mr(p.cp2x), ',', mr(p.cp2y), ',',
                       mr(p.x), ',', mr(p.y));
          break;
        case 'at':
        case 'wa':
          lineStr.push(' ', p.type, ' ',
                       mr(p.x - this.arcScaleX_ * p.radius), ',',
                       mr(p.y - this.arcScaleY_ * p.radius), ' ',
                       mr(p.x + this.arcScaleX_ * p.radius), ',',
                       mr(p.y + this.arcScaleY_ * p.radius), ' ',
                       mr(p.xStart), ',', mr(p.yStart), ' ',
                       mr(p.xEnd), ',', mr(p.yEnd));
          break;
      }


      // TODO: Following is broken for curves due to
      //       move to proper paths.

      // Figure out dimensions so we can do gradient fills
      // properly
      if (p) {
        if (min.x == null || p.x < min.x) {
          min.x = p.x;
        }
        if (max.x == null || p.x > max.x) {
          max.x = p.x;
        }
        if (min.y == null || p.y < min.y) {
          min.y = p.y;
        }
        if (max.y == null || p.y > max.y) {
          max.y = p.y;
        }
      }
    }
    lineStr.push(' ">');

    if (!aFill) {
      appendStroke(this, lineStr);
    } else {
      appendFill(this, lineStr, min, max);
    }

    lineStr.push('</g_vml_:shape>');

    this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
  };

  function appendStroke(ctx, lineStr) {
    var a = processStyle(ctx.strokeStyle);
    var color = a.color;
    var opacity = a.alpha * ctx.globalAlpha;
    var lineWidth = ctx.lineScale_ * ctx.lineWidth;

    // VML cannot correctly render a line if the width is less than 1px.
    // In that case, we dilute the color to make the line look thinner.
    if (lineWidth < 1) {
      opacity *= lineWidth;
    }

    lineStr.push(
      '<g_vml_:stroke',
      ' opacity="', opacity, '"',
      ' joinstyle="', ctx.lineJoin, '"',
      ' miterlimit="', ctx.miterLimit, '"',
      ' endcap="', processLineCap(ctx.lineCap), '"',
      ' weight="', lineWidth, 'px"',
      ' color="', color, '" />'
    );
  }

  function appendFill(ctx, lineStr, min, max) {
    var fillStyle = ctx.fillStyle;
    var arcScaleX = ctx.arcScaleX_;
    var arcScaleY = ctx.arcScaleY_;
    var width = max.x - min.x;
    var height = max.y - min.y;
    if (fillStyle instanceof CanvasGradient_) {
      // TODO: Gradients transformed with the transformation matrix.
      var angle = 0;
      var focus = {x: 0, y: 0};

      // additional offset
      var shift = 0;
      // scale factor for offset
      var expansion = 1;

      if (fillStyle.type_ == 'gradient') {
        var x0 = fillStyle.x0_ / arcScaleX;
        var y0 = fillStyle.y0_ / arcScaleY;
        var x1 = fillStyle.x1_ / arcScaleX;
        var y1 = fillStyle.y1_ / arcScaleY;
        var p0 = getCoords(ctx, x0, y0);
        var p1 = getCoords(ctx, x1, y1);
        var dx = p1.x - p0.x;
        var dy = p1.y - p0.y;
        angle = Math.atan2(dx, dy) * 180 / Math.PI;

        // The angle should be a non-negative number.
        if (angle < 0) {
          angle += 360;
        }

        // Very small angles produce an unexpected result because they are
        // converted to a scientific notation string.
        if (angle < 1e-6) {
          angle = 0;
        }
      } else {
        var p0 = getCoords(ctx, fillStyle.x0_, fillStyle.y0_);
        focus = {
          x: (p0.x - min.x) / width,
          y: (p0.y - min.y) / height
        };

        width  /= arcScaleX * Z;
        height /= arcScaleY * Z;
        var dimension = m.max(width, height);
        shift = 2 * fillStyle.r0_ / dimension;
        expansion = 2 * fillStyle.r1_ / dimension - shift;
      }

      // We need to sort the color stops in ascending order by offset,
      // otherwise IE won't interpret it correctly.
      var stops = fillStyle.colors_;
      stops.sort(function(cs1, cs2) {
        return cs1.offset - cs2.offset;
      });

      var length = stops.length;
      var color1 = stops[0].color;
      var color2 = stops[length - 1].color;
      var opacity1 = stops[0].alpha * ctx.globalAlpha;
      var opacity2 = stops[length - 1].alpha * ctx.globalAlpha;

      var colors = [];
      for (var i = 0; i < length; i++) {
        var stop = stops[i];
        colors.push(stop.offset * expansion + shift + ' ' + stop.color);
      }

      // When colors attribute is used, the meanings of opacity and o:opacity2
      // are reversed.
      lineStr.push('<g_vml_:fill type="', fillStyle.type_, '"',
                   ' method="none" focus="100%"',
                   ' color="', color1, '"',
                   ' color2="', color2, '"',
                   ' colors="', colors.join(','), '"',
                   ' opacity="', opacity2, '"',
                   ' g_o_:opacity2="', opacity1, '"',
                   ' angle="', angle, '"',
                   ' focusposition="', focus.x, ',', focus.y, '" />');
    } else if (fillStyle instanceof CanvasPattern_) {
      if (width && height) {
        var deltaLeft = -min.x;
        var deltaTop = -min.y;
        lineStr.push('<g_vml_:fill',
                     ' position="',
                     deltaLeft / width * arcScaleX * arcScaleX, ',',
                     deltaTop / height * arcScaleY * arcScaleY, '"',
                     ' type="tile"',
                     // TODO: Figure out the correct size to fit the scale.
                     //' size="', w, 'px ', h, 'px"',
                     ' src="', fillStyle.src_, '" />');
       }
    } else {
      var a = processStyle(ctx.fillStyle);
      var color = a.color;
      var opacity = a.alpha * ctx.globalAlpha;
      lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity,
                   '" />');
    }
  }

  contextPrototype.fill = function() {
    this.stroke(true);
  };

  contextPrototype.closePath = function() {
    this.currentPath_.push({type: 'close'});
  };

  function getCoords(ctx, aX, aY) {
    var m = ctx.m_;
    return {
      x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
      y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
    };
  };

  contextPrototype.save = function() {
    var o = {};
    copyState(this, o);
    this.aStack_.push(o);
    this.mStack_.push(this.m_);
    this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
  };

  contextPrototype.restore = function() {
    if (this.aStack_.length) {
      copyState(this.aStack_.pop(), this);
      this.m_ = this.mStack_.pop();
    }
  };

  function matrixIsFinite(m) {
    return isFinite(m[0][0]) && isFinite(m[0][1]) &&
        isFinite(m[1][0]) && isFinite(m[1][1]) &&
        isFinite(m[2][0]) && isFinite(m[2][1]);
  }

  function setM(ctx, m, updateLineScale) {
    if (!matrixIsFinite(m)) {
      return;
    }
    ctx.m_ = m;

    if (updateLineScale) {
      // Get the line scale.
      // Determinant of this.m_ means how much the area is enlarged by the
      // transformation. So its square root can be used as a scale factor
      // for width.
      var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
      ctx.lineScale_ = sqrt(abs(det));
    }
  }

  contextPrototype.translate = function(aX, aY) {
    var m1 = [
      [1,  0,  0],
      [0,  1,  0],
      [aX, aY, 1]
    ];

    setM(this, matrixMultiply(m1, this.m_), false);
  };

  contextPrototype.rotate = function(aRot) {
    var c = mc(aRot);
    var s = ms(aRot);

    var m1 = [
      [c,  s, 0],
      [-s, c, 0],
      [0,  0, 1]
    ];

    setM(this, matrixMultiply(m1, this.m_), false);
  };

  contextPrototype.scale = function(aX, aY) {
    this.arcScaleX_ *= aX;
    this.arcScaleY_ *= aY;
    var m1 = [
      [aX, 0,  0],
      [0,  aY, 0],
      [0,  0,  1]
    ];

    setM(this, matrixMultiply(m1, this.m_), true);
  };

  contextPrototype.transform = function(m11, m12, m21, m22, dx, dy) {
    var m1 = [
      [m11, m12, 0],
      [m21, m22, 0],
      [dx,  dy,  1]
    ];

    setM(this, matrixMultiply(m1, this.m_), true);
  };

  contextPrototype.setTransform = function(m11, m12, m21, m22, dx, dy) {
    var m = [
      [m11, m12, 0],
      [m21, m22, 0],
      [dx,  dy,  1]
    ];

    setM(this, m, true);
  };

  /**
   * The text drawing function.
   * The maxWidth argument isn't taken in account, since no browser supports
   * it yet.
   */
  contextPrototype.drawText_ = function(text, x, y, maxWidth, stroke) {
    var m = this.m_,
        delta = 1000,
        left = 0,
        right = delta,
        offset = {x: 0, y: 0},
        lineStr = [];

    var fontStyle = getComputedStyle(processFontStyle(this.font),
                                     this.element_);

    var fontStyleString = buildStyle(fontStyle);

    var elementStyle = this.element_.currentStyle;
    var textAlign = this.textAlign.toLowerCase();
    switch (textAlign) {
      case 'left':
      case 'center':
      case 'right':
        break;
      case 'end':
        textAlign = elementStyle.direction == 'ltr' ? 'right' : 'left';
        break;
      case 'start':
        textAlign = elementStyle.direction == 'rtl' ? 'right' : 'left';
        break;
      default:
        textAlign = 'left';
    }

    // 1.75 is an arbitrary number, as there is no info about the text baseline
    switch (this.textBaseline) {
      case 'hanging':
      case 'top':
        offset.y = fontStyle.size / 1.75;
        break;
      case 'middle':
        break;
      default:
      case null:
      case 'alphabetic':
      case 'ideographic':
      case 'bottom':
        offset.y = -fontStyle.size / 2.25;
        break;
    }

    switch(textAlign) {
      case 'right':
        left = delta;
        right = 0.05;
        break;
      case 'center':
        left = right = delta / 2;
        break;
    }

    var d = getCoords(this, x + offset.x, y + offset.y);

    lineStr.push('<g_vml_:line from="', -left ,' 0" to="', right ,' 0.05" ',
                 ' coordsize="100 100" coordorigin="0 0"',
                 ' filled="', !stroke, '" stroked="', !!stroke,
                 '" style="position:absolute;width:1px;height:1px;">');

    if (stroke) {
      appendStroke(this, lineStr);
    } else {
      // TODO: Fix the min and max params.
      appendFill(this, lineStr, {x: -left, y: 0},
                 {x: right, y: fontStyle.size});
    }

    var skewM = m[0][0].toFixed(3) + ',' + m[1][0].toFixed(3) + ',' +
                m[0][1].toFixed(3) + ',' + m[1][1].toFixed(3) + ',0,0';

    var skewOffset = mr(d.x / Z) + ',' + mr(d.y / Z);

    lineStr.push('<g_vml_:skew on="t" matrix="', skewM ,'" ',
                 ' offset="', skewOffset, '" origin="', left ,' 0" />',
                 '<g_vml_:path textpathok="true" />',
                 '<g_vml_:textpath on="true" string="',
                 encodeHtmlAttribute(text),
                 '" style="v-text-align:', textAlign,
                 ';font:', encodeHtmlAttribute(fontStyleString),
                 '" /></g_vml_:line>');

    this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
  };

  contextPrototype.fillText = function(text, x, y, maxWidth) {
    this.drawText_(text, x, y, maxWidth, false);
  };

  contextPrototype.strokeText = function(text, x, y, maxWidth) {
    this.drawText_(text, x, y, maxWidth, true);
  };

  contextPrototype.measureText = function(text) {
    if (!this.textMeasureEl_) {
      var s = '<span style="position:absolute;' +
          'top:-20000px;left:0;padding:0;margin:0;border:none;' +
          'white-space:pre;"></span>';
      this.element_.insertAdjacentHTML('beforeEnd', s);
      this.textMeasureEl_ = this.element_.lastChild;
    }
    var doc = this.element_.ownerDocument;
    this.textMeasureEl_.innerHTML = '';
    this.textMeasureEl_.style.font = this.font;
    // Don't use innerHTML or innerText because they allow markup/whitespace.
    this.textMeasureEl_.appendChild(doc.createTextNode(text));
    return {width: this.textMeasureEl_.offsetWidth};
  };

  /******** STUBS ********/
  contextPrototype.clip = function() {
    // TODO: Implement
  };

  contextPrototype.arcTo = function() {
    // TODO: Implement
  };

  contextPrototype.createPattern = function(image, repetition) {
    return new CanvasPattern_(image, repetition);
  };

  // Gradient / Pattern Stubs
  function CanvasGradient_(aType) {
    this.type_ = aType;
    this.x0_ = 0;
    this.y0_ = 0;
    this.r0_ = 0;
    this.x1_ = 0;
    this.y1_ = 0;
    this.r1_ = 0;
    this.colors_ = [];
  }

  CanvasGradient_.prototype.addColorStop = function(aOffset, aColor) {
    aColor = processStyle(aColor);
    this.colors_.push({offset: aOffset,
                       color: aColor.color,
                       alpha: aColor.alpha});
  };

  function CanvasPattern_(image, repetition) {
    assertImageIsValid(image);
    switch (repetition) {
      case 'repeat':
      case null:
      case '':
        this.repetition_ = 'repeat';
        break
      case 'repeat-x':
      case 'repeat-y':
      case 'no-repeat':
        this.repetition_ = repetition;
        break;
      default:
        throwException('SYNTAX_ERR');
    }

    this.src_ = image.src;
    this.width_ = image.width;
    this.height_ = image.height;
  }

  function throwException(s) {
    throw new DOMException_(s);
  }

  function assertImageIsValid(img) {
    if (!img || img.nodeType != 1 || img.tagName != 'IMG') {
      throwException('TYPE_MISMATCH_ERR');
    }
    if (img.readyState != 'complete') {
      throwException('INVALID_STATE_ERR');
    }
  }

  function DOMException_(s) {
    this.code = this[s];
    this.message = s +': DOM Exception ' + this.code;
  }
  var p = DOMException_.prototype = new Error;
  p.INDEX_SIZE_ERR = 1;
  p.DOMSTRING_SIZE_ERR = 2;
  p.HIERARCHY_REQUEST_ERR = 3;
  p.WRONG_DOCUMENT_ERR = 4;
  p.INVALID_CHARACTER_ERR = 5;
  p.NO_DATA_ALLOWED_ERR = 6;
  p.NO_MODIFICATION_ALLOWED_ERR = 7;
  p.NOT_FOUND_ERR = 8;
  p.NOT_SUPPORTED_ERR = 9;
  p.INUSE_ATTRIBUTE_ERR = 10;
  p.INVALID_STATE_ERR = 11;
  p.SYNTAX_ERR = 12;
  p.INVALID_MODIFICATION_ERR = 13;
  p.NAMESPACE_ERR = 14;
  p.INVALID_ACCESS_ERR = 15;
  p.VALIDATION_ERR = 16;
  p.TYPE_MISMATCH_ERR = 17;

  // set up externs
  G_vmlCanvasManager = G_vmlCanvasManager_;
  CanvasRenderingContext2D = CanvasRenderingContext2D_;
  CanvasGradient = CanvasGradient_;
  CanvasPattern = CanvasPattern_;
  DOMException = DOMException_;
})();

} // if
else { // make the canvas test simple by kener.linfeng@gmail.com
    G_vmlCanvasManager = false;
}
return G_vmlCanvasManager;
}); // define;
/**
 * zrender: 公共辅助函数
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * clone：深度克隆
 * merge：合并源对象的属性到目标对象
 * getContext：获取一个自由使用的canvas 2D context，使用原生方法，如isPointInPath，measureText等
 */
define(
    'zrender/tool/util',['require','./vector','../lib/excanvas'],function(require) {

        var vec2 = require('./vector');

        /**
         * 对一个object进行深度拷贝
         *
         * @param {Any} source 需要进行拷贝的对象
         * @return {Any} 拷贝后的新对象
         */
        function clone(source) {
            // buildInObject, 用于处理无法遍历Date等对象的问题
            var buildInObject = {
                '[object Function]': 1,
                '[object RegExp]': 1,
                '[object Date]': 1,
                '[object Error]': 1,
                '[object CanvasGradient]': 1
            };
            var result = source;
            var i;
            var len;
            if (!source
                || source instanceof Number
                || source instanceof String
                || source instanceof Boolean
            ) {
                return result;
            }
            else if (source instanceof Array) {
                result = [];
                var resultLen = 0;
                for (i = 0, len = source.length; i < len; i++) {
                    result[resultLen++] = this.clone(source[i]);
                }
            }
            else if ('object' == typeof source) {
                if(buildInObject[Object.prototype.toString.call(source)]
                   || source.__nonRecursion
                ) {
                    return result;
                }
                result = {};
                for (i in source) {
                    if (source.hasOwnProperty(i)) {
                        result[i] = this.clone(source[i]);
                    }
                }
            }
            return result;
        }

        /**
         * 合并源对象的属性到目标对象
         * modify from Tangram
         * @param {*} target 目标对象
         * @param {*} source 源对象
         * @param {Object} optOptions 选项
         * @param {boolean} optOptions.overwrite 是否覆盖
         * @param {boolean} optOptions.recursive 是否递归
         * @param {boolean} optOptions.whiteList 白名单，如果定义，则仅处理白名单属性
         */
        var merge = (function() {
            // buildInObject, 用于处理无法遍历Date等对象的问题
            var buildInObject = {
                '[object Function]': 1,
                '[object RegExp]': 1,
                '[object Date]': 1,
                '[object Error]': 1,
                '[object CanvasGradient]': 1
            };
            function mergeItem(target, source, index, overwrite, recursive) {
                if (source.hasOwnProperty(index)) {
                    if (recursive
                        && typeof target[index] == 'object'
                        && buildInObject[
                            Object.prototype.toString.call(target[index])
                        ] != 1
                    ) {
                        // 如果需要递归覆盖，就递归调用merge
                        merge(
                            target[index],
                            source[index],
                            {
                                'overwrite': overwrite,
                                'recursive': recursive
                            }
                        );
                    } else if (overwrite || !(index in target)) {
                        // 否则只处理overwrite为true，或者在目标对象中没有此属性的情况
                        target[index] = source[index];
                    }
                }
            }

            return function(target, source, optOptions){
                var i = 0,
                    options = optOptions || {},
                    overwrite = options['overwrite'],
                    whiteList = options['whiteList'],
                    recursive = options['recursive'],
                    len;

                // 只处理在白名单中的属性
                if (whiteList && whiteList.length) {
                    len = whiteList.length;
                    for (; i < len; ++i) {
                        mergeItem(
                            target, source, whiteList[i], overwrite, recursive
                        );
                    }
                } else {
                    for (i in source) {
                        mergeItem(target, source, i, overwrite, recursive);
                    }
                }
                return target;
            };
        })();

        var _ctx;

        function getContext() {
            if (!_ctx) {
                require('../lib/excanvas');
                if (G_vmlCanvasManager) {
                    var _div = document.createElement('div');
                    _div.style.position = 'absolute';
                    _div.style.top = '-1000px';
                    document.body.appendChild(_div);

                    _ctx = G_vmlCanvasManager.initElement(_div)
                               .getContext('2d');
                }
                else {
                    _ctx = document.createElement('canvas').getContext('2d');
                }
            }
            return _ctx;
        }

        var _canvas;
        var _pixelCtx;
        var _width;
        var _height;
        var _offsetX = 0;
        var _offsetY = 0;

        /**
         * 获取像素拾取专用的上下文
         * @return {Object} 上下文
         */
        function getPixelContext() {
            if (!_pixelCtx) {
                _canvas = document.createElement('canvas');
                _width = _canvas.width;
                _height = _canvas.height;
                _pixelCtx = _canvas.getContext('2d');
            }
            return _pixelCtx;
        }

        /**
         * 如果坐标处在_canvas外部，改变_canvas的大小
         * @param {number} x : 横坐标
         * @param {number} y : 纵坐标
         * 注意 修改canvas的大小 需要重新设置translate
         */
        function adjustCanvasSize(x, y) {
            // 每次加的长度
            var _v = 100;
            var _flag = false;

            if (x + _offsetX > _width) {
                _width = x + _offsetX + _v;
                _canvas.width = _width;
                _flag = true;
            }

            if (y + _offsetY > _height) {
                _height = y + _offsetY + _v;
                _canvas.height = _height;
                _flag = true;
            }

            if (x < -_offsetX) {
                _offsetX = Math.ceil(-x / _v) * _v;
                _width += _offsetX;
                _canvas.width = _width;
                _flag = true;
            }

            if (y < -_offsetY) {
                _offsetY = Math.ceil(-y / _v) * _v;
                _height += _offsetY;
                _canvas.height = _height;
                _flag = true;
            }

            if (_flag) {
                _pixelCtx.translate(_offsetX, _offsetY);
            }
        }

        /**
         * 获取像素canvas的偏移量
         * @return {Object} 偏移量
         */
        function getPixelOffset() {
            return {
                x : _offsetX,
                y : _offsetY
            };
        }

        /**
         * 查询数组中元素的index
         */
        function indexOf(array, value){
            if (array.indexOf) {
                return array.indexOf(value);
            }
            for(var i = 0, len=array.length; i<len; i++) {
                if (array[i] === value) {
                    return i;
                }
            }
            return -1;
        }

        /**
         * 计算包围盒
         */
        function computeBoundingBox(points, min, max) {
            if (points.length === 0) {
                return;
            }
            var left = points[0][0];
            var right = points[0][0];
            var top = points[0][1];
            var bottom = points[0][1];
            
            for (var i = 1; i < points.length; i++) {
                var p = points[i];
                if (p[0] < left) {
                    left = p[0];
                }
                if (p[0] > right) {
                    right = p[0];
                }
                if (p[1] < top) {
                    top = p[1];
                }
                if (p[1] > bottom) {
                    bottom = p[1];
                }
            }

            min[0] = left;
            min[1] = top;
            max[0] = right;
            max[1] = bottom;
        }

        /**
         * 计算三阶贝塞尔曲线的包围盒
         * http://pissang.net/blog/?p=91
         */
        function computeCubeBezierBoundingBox(p0, p1, p2, p3, min, max) {
            var xDim = _computeCubeBezierExtremitiesDim(
                p0[0], p1[0], p2[0], p3[0]
            );
            var yDim = _computeCubeBezierExtremitiesDim(
                p0[1], p1[1], p2[1], p3[1]
            );

            xDim.push(p0[0], p3[0]);
            yDim.push(p0[1], p3[1]);

            var left = Math.min.apply(null, xDim);
            var right = Math.max.apply(null, xDim);
            var top = Math.min.apply(null, yDim);
            var bottom = Math.max.apply(null, yDim);

            min[0] = left;
            min[1] = top;
            max[0] = right;
            max[1] = bottom;
        }

        function _computeCubeBezierExtremitiesDim(p0, p1, p2, p3) {
            var extremities = [];

            var b = 6 * p2 - 12 * p1 + 6 * p0;
            var a = 9 * p1 + 3 * p3 - 3 * p0 - 9 * p2;
            var c = 3 * p1 - 3 * p0;

            var tmp = b * b - 4 * a * c;
            if (tmp > 0){
                var tmpSqrt = Math.sqrt(tmp);
                var t1 = (-b + tmpSqrt) / (2 * a);
                var t2 = (-b - tmpSqrt) / (2 * a);
                extremities.push(t1, t2);
            } else if (tmp === 0) {
                extremities.push(-b / (2 * a));
            }
            var result = [];
            for (var i = 0; i < extremities.length; i++) {
                var t = extremities[i];
                if (Math.abs(2 * a * t + b) > 0.0001 && t < 1 && t > 0) {
                    var ct = 1 - t;
                    var val = ct * ct * ct * p0 
                            + 3 * ct * ct * t * p1
                            + 3 * ct * t * t * p2
                            + t * t *t * p3;

                    result.push(val);
                }
            }

            return result;
        }

        /**
         * 计算二阶贝塞尔曲线的包围盒
         * http://pissang.net/blog/?p=91
         */
        function computeQuadraticBezierBoundingBox(p0, p1, p2, min, max) {
            // Find extremities, where derivative in x dim or y dim is zero
            var tmp = (p0[0] + p2[0] - 2 * p1[0]);
            // p1 is center of p0 and p2 in x dim
            var t1;
            if (tmp === 0) {
                t1 = 0.5;
            } else {
                t1 = (p0[0] - p1[0]) / tmp;
            }

            tmp = (p0[1] + p2[1] - 2 * p1[1]);
            // p1 is center of p0 and p2 in y dim
            var t2;
            if (tmp === 0) {
                t2 = 0.5;
            } else {
                t2 = (p0[1] - p1[1]) / tmp;
            }

            t1 = Math.max(Math.min(t1, 1), 0);
            t2 = Math.max(Math.min(t2, 1), 0);

            var ct1 = 1-t1;
            var ct2 = 1-t2;

            var x1 = ct1 * ct1 * p0[0] 
                     + 2 * ct1 * t1 * p1[0] 
                     + t1 * t1 * p2[0];
            var y1 = ct1 * ct1 * p0[1] 
                     + 2 * ct1 * t1 * p1[1] 
                     + t1 * t1 * p2[1];

            var x2 = ct2 * ct2 * p0[0] 
                     + 2 * ct2 * t2 * p1[0] 
                     + t2 * t2 * p2[0];
            var y2 = ct2 * ct2 * p0[1] 
                     + 2 * ct2 * t2 * p1[1] 
                     + t2 * t2 * p2[1];

            return computeBoundingBox(
                        [p0.slice(), p2.slice(), [x1, y1], [x2, y2]],
                        min, max
                    );
        }


        /**
         * 计算圆弧的包围盒
         * http://pissang.net/blog/?p=91
         */
        var computeArcBoundingBox = (function(){
            var start = [];
            var end = [];
            // At most 4 extremities
            var extremities = [[], [], [], []];
            return function(
                center, radius, startAngle, endAngle, clockwise, min, max
            ) {
                clockwise = clockwise ? 1 : -1;
                start[0] = Math.cos(startAngle);
                start[1] = Math.sin(startAngle) * clockwise;
                vec2.scale(start, start, radius);
                vec2.add(start, start, center);

                end[0] = Math.cos(endAngle);
                end[1] = Math.sin(endAngle) * clockwise;
                vec2.scale(end, end, radius);
                vec2.add(end, end, center);
                
                startAngle = startAngle % (Math.PI * 2);
                if (startAngle < 0) {
                    startAngle = startAngle + Math.PI * 2;
                }
                endAngle = endAngle % (Math.PI * 2);
                if (endAngle < 0) {
                    endAngle = endAngle + Math.PI * 2;
                }

                if (startAngle > endAngle) {
                    endAngle += Math.PI * 2;
                }
                var number = 0;
                for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
                    if (angle > startAngle) {
                        var extremity = extremities[number++];
                        extremity[0] = Math.cos(angle);
                        extremity[1] = Math.sin(angle) * clockwise;
                        vec2.scale(extremity, extremity, radius);
                        vec2.add(extremity, extremity, center);
                    }
                }
                var points = extremities.slice(0, number);
                points.push(start, end);
                computeBoundingBox(points, min, max);
            };
        })();

        return {
            clone : clone,
            merge : merge,
            getContext : getContext,

            getPixelContext : getPixelContext,
            getPixelOffset : getPixelOffset,
            adjustCanvasSize : adjustCanvasSize,

            computeBoundingBox : computeBoundingBox,
            computeCubeBezierBoundingBox : computeCubeBezierBoundingBox,
            computeQuadraticBezierBoundingBox : 
                computeQuadraticBezierBoundingBox,
            computeArcBoundingBox : computeArcBoundingBox,

            indexOf : indexOf
        };
    }
);
/**
 * echarts组件基类
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/base',['require','../config','zrender/tool/util'],function(require) {
    function Base(zr){
        var ecConfig = require('../config');
        var zrUtil = require('zrender/tool/util');
        var self = this;

        self.zr =zr;

        self.shapeList = [];

        /**
         * 获取zlevel基数配置
         * @param {Object} contentType
         */
        function getZlevelBase(contentType) {
            contentType = contentType || self.type + '';

            switch (contentType) {
                case ecConfig.COMPONENT_TYPE_GRID :
                case ecConfig.COMPONENT_TYPE_AXIS_CATEGORY :
                case ecConfig.COMPONENT_TYPE_AXIS_VALUE :
                    return 0;

                case ecConfig.CHART_TYPE_LINE :
                case ecConfig.CHART_TYPE_BAR :
                case ecConfig.CHART_TYPE_SCATTER :
                case ecConfig.CHART_TYPE_PIE :
                case ecConfig.CHART_TYPE_RADAR :
                case ecConfig.CHART_TYPE_MAP :
                case ecConfig.CHART_TYPE_K :
                    return 2;

                case ecConfig.COMPONENT_TYPE_LEGEND :
                case ecConfig.COMPONENT_TYPE_DATARANGE:
                case ecConfig.COMPONENT_TYPE_DATAZOOM :
                    return 4;

                case ecConfig.CHART_TYPE_ISLAND :
                    return 5;

                case ecConfig.COMPONENT_TYPE_TOOLTIP :
                case ecConfig.COMPONENT_TYPE_TOOLBOX :
                case ecConfig.COMPONENT_TYPE_TITLE :
                    return 6;

                default :
                    return 0;
            }
        }

        /**
         * 参数修正&默认值赋值
         * @param {Object} opt 参数
         *
         * @return {Object} 修正后的参数
         */
        function reformOption(opt) {
            return zrUtil.merge(
                       opt || {},
                       ecConfig[self.type] || {},
                       {
                           'overwrite': false,
                           'recursive': true
                       }
                   );
        }

        /**
         * css类属性数组补全，如padding，margin等~
         */
        function reformCssArray(p) {
            if (p instanceof Array) {
                switch (p.length + '') {
                    case '4':
                        return p;
                    case '3':
                        return [p[0], p[1], p[2], p[1]];
                    case '2':
                        return [p[0], p[1], p[0], p[1]];
                    case '1':
                        return [p[0], p[0], p[0], p[0]];
                    case '0':
                        return [0, 0, 0, 0];
                }
            }
            else {
                return [p, p, p, p];
            }
        }


        /**
         * 获取多级控制嵌套属性的基础方法
         * 返回ctrList中优先级最高（最靠前）的非undefined属性，ctrList中均无定义则返回undefined
         */
        var deepQuery = (function() {
            /**
             * 获取嵌套选项的基础方法
             * 返回optionTarget中位于optionLocation上的值，如果没有定义，则返回undefined
             */
            function _query(optionTarget, optionLocation) {
                if (typeof optionTarget == 'undefined') {
                    return undefined;
                }
                if (!optionLocation) {
                    return optionTarget;
                }
                optionLocation = optionLocation.split('.');

                var length = optionLocation.length;
                var curIdx = 0;
                while (curIdx < length) {
                    optionTarget = optionTarget[optionLocation[curIdx]];
                    if (typeof optionTarget == 'undefined') {
                        return undefined;
                    }
                    curIdx++;
                }
                return optionTarget;
            }

            return function(ctrList, optionLocation) {
                var finalOption;
                for (var i = 0, l = ctrList.length; i < l; i++) {
                    finalOption = _query(ctrList[i], optionLocation);
                    if (typeof finalOption != 'undefined') {
                        return finalOption;
                    }
                }
                return undefined;
            };
        })();

        /**
         * 获取自定义和默认配置合并后的字体设置
         */
        function getFont(textStyle) {
            var finalTextStyle = zrUtil.merge(
                zrUtil.clone(textStyle) || {},
                ecConfig.textStyle,
                { 'overwrite': false}
            );
            return finalTextStyle.fontStyle + ' '
                   + finalTextStyle.fontWeight + ' '
                   + finalTextStyle.fontSize + 'px '
                   + finalTextStyle.fontFamily;
        }

        /**
         * 清除图形数据，实例仍可用
         */
        function clear() {
            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.zr.delShape(self.shapeList[i].id);
            }
            self.shapeList = [];
        }

        /**
         * 释放后实例不可用
         */
        function dispose() {
            self.clear();
            self.shapeList = null;
            self = null;
        }

        /**
         * 基类方法
         */
        self.getZlevelBase = getZlevelBase;
        self.reformOption = reformOption;
        self.reformCssArray = reformCssArray;
        self.deepQuery = deepQuery;
        self.getFont = getFont;
        self.clear = clear;
        self.dispose = dispose;
    }

    return Base;
});

/**
 * echarts通用私有数据服务
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/util/ecData',[],function() {
    /**
     * 打包私有数据
     *
     * @param {shape} shape 修改目标
     * @param {Object} series
     * @param {number} seriesIndex
     * @param {number | Object} data
     * @param {number} dataIndex
     * @param {*=} special
     */
    function pack(shape, series, seriesIndex, data, dataIndex, name, special) {
        var value;
        if (typeof data != 'undefined') {
            if (typeof data.value != 'undefined') {
                if (data.value instanceof Array) {
                    value = data.value[2];  // 散点图最后一个为数值
                }
                else {
                    value = data.value;
                }
            }
            else {
                value = data;
            }
        }

        shape._echartsData =  {
            '_series' : series,
            '_seriesIndex' : seriesIndex,
            '_data' : data,
            '_dataIndex' : dataIndex,
            '_name' : name,
            '_value' : value,
            '_special' : special
        };
        return shape._echartsData;
    }

    /**
     * 从私有数据中获取特定项
     * @param {shape} shape
     * @param {string} key
     */
    function get(shape, key) {
        var data = shape._echartsData;
        if (!key) {
            return data;
        }

        switch (key) {
            case 'series' :
                return data && data._series;
            case 'seriesIndex' :
                return data && data._seriesIndex;
            case 'data' :
                return data && data._data;
            case 'dataIndex' :
                return data && data._dataIndex;
            case 'name' :
                return data && data._name;
            case 'value' :
                return data && data._value;
            case 'special' :
                return data && data._special;
        }

        return null;
    }

    /**
     * 修改私有数据中获取特定项
     * @param {shape} shape
     * @param {string} key
     * @param {*} value
     */
    function set(shape, key, value) {
        shape._echartsData = shape._echartsData || {};
        switch (key) {
            case 'series' :             // 当前系列值
                shape._echartsData._series = value;
                break;
            case 'seriesIndex' :        // 系列数组位置索引
                shape._echartsData._seriesIndex = value;
                break;
            case 'data' :               // 当前数据值
                shape._echartsData._data = value;
                break;
            case 'dataIndex' :          // 数据数组位置索引
                shape._echartsData._dataIndex = value;
                break;
            case 'name' :
                shape._echartsData._name = value;
                break;
            case 'value' :
                shape._echartsData._value = value;
                break;
            case 'special' :
                shape._echartsData._special = value;
                break;
        }
    }

    return {
        pack : pack,
        set : set,
        get : get
    };
});
/**
 * echarts组件基类
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/chart/calculableBase',['require','../util/ecData','zrender/tool/util'],function(require) {
    function Base(zr, option){
        var ecData = require('../util/ecData');

        var zrUtil = require('zrender/tool/util');
        var self = this;

        self.selectedMap = {};

        self.shapeHandler = {
            onclick : function() {
                self.isClick = true;
            },
            ondragover : function (param) {
                // 返回触发可计算特性的图形提示
                var calculableShape = zrUtil.clone(param.target);
                calculableShape.highlightStyle = {
                    text : '',
                    r : calculableShape.style.r + 5,
                    brushType : 'stroke',
                    strokeColor : self.zr.getCalculableColor(),
                    lineWidth : (calculableShape.style.lineWidth || 1) + 12
                };
                self.zr.addHoverShape(calculableShape);
            },

            ondrop : function (param) {
                // 排除一些非数据的拖拽进入
                if (typeof ecData.get(param.dragged, 'data') != 'undefined') {
                    self.isDrop = true;
                }
            },

            ondragend : function () {
                self.isDragend = true;
            }
        };

        function setCalculable(shape) {
            shape.ondragover = self.shapeHandler.ondragover;
            shape.ondragend = self.shapeHandler.ondragend;
            shape.ondrop = self.shapeHandler.ondrop;
            return shape;
        }

        /**
         * 数据项被拖拽进来
         */
        function ondrop(param, status) {
            if (!self.isDrop || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }

            var target = param.target;      // 拖拽安放目标
            var dragged = param.dragged;    // 当前被拖拽的图形对象

            var seriesIndex = ecData.get(target, 'seriesIndex');
            var dataIndex = ecData.get(target, 'dataIndex');

            // 落到bar上，数据被拖拽到某个数据项上，数据修改
            var data = option.series[seriesIndex].data[dataIndex] || '-';
            if (data.value) {
                if (data.value != '-') {
                    option.series[seriesIndex].data[dataIndex].value +=
                        ecData.get(dragged, 'value');
                }
                else {
                    option.series[seriesIndex].data[dataIndex].value =
                        ecData.get(dragged, 'value');
                }
            }
            else {
                if (data != '-') {
                    option.series[seriesIndex].data[dataIndex] +=
                        ecData.get(dragged, 'value');
                }
                else {
                    option.series[seriesIndex].data[dataIndex] =
                        ecData.get(dragged, 'value');
                }
            }

            // 别status = {}赋值啊！！
            status.dragIn = status.dragIn || true;

            // 处理完拖拽事件后复位
            self.isDrop = false;

            return;
        }

        /**
         * 数据项被拖拽出去
         */
        function ondragend(param, status) {
            if (!self.isDragend || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }
            var target = param.target;      // 被拖拽图形元素

            var seriesIndex = ecData.get(target, 'seriesIndex');
            var dataIndex = ecData.get(target, 'dataIndex');

            // 被拖拽的图形是折线图bar，删除被拖拽走的数据
            option.series[seriesIndex].data[dataIndex] = '-';

            // 别status = {}赋值啊！！
            status.dragOut = true;
            status.needRefresh = true;

            // 处理完拖拽事件后复位
            self.isDragend = false;

            return;
        }

        /**
         * 图例选择
         */
        function onlegendSelected(param, status) {
            var legendSelected = param.selected;
            for (var itemName in self.selectedMap) {
                if (self.selectedMap[itemName] != legendSelected[itemName]) {
                    // 有一项不一致都需要重绘
                    status.needRefresh = true;
                    return;
                }
            }
        }

        /**
         * 基类方法
         */
        self.setCalculable = setCalculable;
        self.ondrop = ondrop;
        self.ondragend = ondragend;
        self.onlegendSelected = onlegendSelected;
    }

    return Base;
});

/**
 * zrender : 颜色辅助类
 *
 * author: CrossDo (chenhuaimu@baidu.com)
 *
 * getColor：获取色板颜色
 * customPalette : 自定义调色板
 * resetPalette : 重置调色板
 *
 * getHighlightColor : 获取默认高亮颜色
 * customHighlight : 自定义默认高亮颜色
 * resetHighlight : 重置默认高亮颜色
 *
 * getRadialGradient : 径向渐变
 * getLinearGradient : 线性渐变
 * getGradientColors : 获取颜色之间渐变颜色数组
 * getStepColors : 获取两种颜色之间渐变颜色数组
 * reverse : 颜色翻转
 * mix : 颜色混合
 * lift : 颜色升降
 * trim : 清除空格
 * random : 随机颜色
 * toRGB  : 转为RGB格式
 * toRGBA : 转为RGBA格式
 * toHex  : 转为#RRGGBB格式
 * toHSL  : 转为HSL格式
 * toHSLA : 转为HSLA格式
 * toHSB  : 转为HSB格式
 * toHSBA : 转为HSBA格式
 * toHSV  : 转为HSV格式
 * toHSVA : 转为HSVA格式
 * toName : 转为颜色名字
 * toColor: 颜色值数组转为指定格式颜色
 * toArray: 返回颜色值数组
 * alpha  : 设置颜色的透明度
 **/
define( 'zrender/tool/color',['require','../tool/util'],function(require) {
    var util = require('../tool/util');

    var _ctx;

    // Color palette is an array containing the default colors for the chart's
    // series.
    // When all colors are used, new colors are selected from the start again.
    // Defaults to:
    // 默认色板
    var palette = [
        '#ff9277', ' #dddd00', ' #ffc877', ' #bbe3ff', ' #d5ffbb',
        '#bbbbff', ' #ddb000', ' #b0dd00', ' #e2bbff', ' #ffbbe3',
        '#ff7777', ' #ff9900', ' #83dd00', ' #77e3ff', ' #778fff',
        '#c877ff', ' #ff77ab', ' #ff6600', ' #aa8800', ' #77c7ff',
        '#ad77ff', ' #ff77ff', ' #dd0083', ' #777700', ' #00aa00',
        '#0088aa', ' #8400dd', ' #aa0088', ' #dd0000', ' #772e00'
    ];
    var _palette = palette;

    var highlightColor = 'rgba(255,255,0,0.5)';
    var _highlightColor = highlightColor;

    // 颜色格式
    /*jshint maxlen: 330 */
    var colorRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i;

    var _nameColors = {
        aliceblue : '#f0f8ff',
        antiquewhite : '#faebd7',
        aqua : '#0ff',
        aquamarine : '#7fffd4',
        azure : '#f0ffff',
        beige : '#f5f5dc',
        bisque : '#ffe4c4',
        black : '#000',
        blanchedalmond : '#ffebcd',
        blue : '#00f',
        blueviolet : '#8a2be2',
        brown : '#a52a2a',
        burlywood : '#deb887',
        cadetblue : '#5f9ea0',
        chartreuse : '#7fff00',
        chocolate : '#d2691e',
        coral : '#ff7f50',
        cornflowerblue : '#6495ed',
        cornsilk : '#fff8dc',
        crimson : '#dc143c',
        cyan : '#0ff',
        darkblue : '#00008b',
        darkcyan : '#008b8b',
        darkgoldenrod : '#b8860b',
        darkgray : '#a9a9a9',
        darkgrey : '#a9a9a9',
        darkgreen : '#006400',
        darkkhaki : '#bdb76b',
        darkmagenta : '#8b008b',
        darkolivegreen : '#556b2f',
        darkorange : '#ff8c00',
        darkorchid : '#9932cc',
        darkred : '#8b0000',
        darksalmon : '#e9967a',
        darkseagreen : '#8fbc8f',
        darkslateblue : '#483d8b',
        darkslategray : '#2f4f4f',
        darkslategrey : '#2f4f4f',
        darkturquoise : '#00ced1',
        darkviolet : '#9400d3',
        deeppink : '#ff1493',
        deepskyblue : '#00bfff',
        dimgray : '#696969',
        dimgrey : '#696969',
        dodgerblue : '#1e90ff',
        firebrick : '#b22222',
        floralwhite : '#fffaf0',
        forestgreen : '#228b22',
        fuchsia : '#f0f',
        gainsboro : '#dcdcdc',
        ghostwhite : '#f8f8ff',
        gold : '#ffd700',
        goldenrod : '#daa520',
        gray : '#808080',
        grey : '#808080',
        green : '#008000',
        greenyellow : '#adff2f',
        honeydew : '#f0fff0',
        hotpink : '#ff69b4',
        indianred : '#cd5c5c',
        indigo : '#4b0082',
        ivory : '#fffff0',
        khaki : '#f0e68c',
        lavender : '#e6e6fa',
        lavenderblush : '#fff0f5',
        lawngreen : '#7cfc00',
        lemonchiffon : '#fffacd',
        lightblue : '#add8e6',
        lightcoral : '#f08080',
        lightcyan : '#e0ffff',
        lightgoldenrodyellow : '#fafad2',
        lightgray : '#d3d3d3',
        lightgrey : '#d3d3d3',
        lightgreen : '#90ee90',
        lightpink : '#ffb6c1',
        lightsalmon : '#ffa07a',
        lightseagreen : '#20b2aa',
        lightskyblue : '#87cefa',
        lightslategray : '#789',
        lightslategrey : '#789',
        lightsteelblue : '#b0c4de',
        lightyellow : '#ffffe0',
        lime : '#0f0',
        limegreen : '#32cd32',
        linen : '#faf0e6',
        magenta : '#f0f',
        maroon : '#800000',
        mediumaquamarine : '#66cdaa',
        mediumblue : '#0000cd',
        mediumorchid : '#ba55d3',
        mediumpurple : '#9370d8',
        mediumseagreen : '#3cb371',
        mediumslateblue : '#7b68ee',
        mediumspringgreen : '#00fa9a',
        mediumturquoise : '#48d1cc',
        mediumvioletred : '#c71585',
        midnightblue : '#191970',
        mintcream : '#f5fffa',
        mistyrose : '#ffe4e1',
        moccasin : '#ffe4b5',
        navajowhite : '#ffdead',
        navy : '#000080',
        oldlace : '#fdf5e6',
        olive : '#808000',
        olivedrab : '#6b8e23',
        orange : '#ffa500',
        orangered : '#ff4500',
        orchid : '#da70d6',
        palegoldenrod : '#eee8aa',
        palegreen : '#98fb98',
        paleturquoise : '#afeeee',
        palevioletred : '#d87093',
        papayawhip : '#ffefd5',
        peachpuff : '#ffdab9',
        peru : '#cd853f',
        pink : '#ffc0cb',
        plum : '#dda0dd',
        powderblue : '#b0e0e6',
        purple : '#800080',
        red : '#f00',
        rosybrown : '#bc8f8f',
        royalblue : '#4169e1',
        saddlebrown : '#8b4513',
        salmon : '#fa8072',
        sandybrown : '#f4a460',
        seagreen : '#2e8b57',
        seashell : '#fff5ee',
        sienna : '#a0522d',
        silver : '#c0c0c0',
        skyblue : '#87ceeb',
        slateblue : '#6a5acd',
        slategray : '#708090',
        slategrey : '#708090',
        snow : '#fffafa',
        springgreen : '#00ff7f',
        steelblue : '#4682b4',
        tan : '#d2b48c',
        teal : '#008080',
        thistle : '#d8bfd8',
        tomato : '#ff6347',
        turquoise : '#40e0d0',
        violet : '#ee82ee',
        wheat : '#f5deb3',
        white : '#fff',
        whitesmoke : '#f5f5f5',
        yellow : '#ff0',
        yellowgreen : '#9acd32'
    };

    /**
     * 自定义调色板
     */
    function customPalette(userPalete) {
        palette = userPalete;
    }

    /**
     * 复位默认色板
     */
    function resetPalette() {
        palette = _palette;
    }

    /**
     * 获取色板颜色
     * @param {number} idx : 色板位置
     * @param {array} [userPalete] : 自定义色板
     *
     * @return {color} 颜色#000000~#ffffff
     */
    function getColor(idx, userPalete) {
        idx = +idx || 0;
        userPalete = userPalete || palette;
        return userPalete[idx % userPalete.length];
    }

    /**
     * 自定义默认高亮颜色
     */
    function customHighlight(userHighlightColor) {
        highlightColor = userHighlightColor;
    }

    /**
     * 重置默认高亮颜色
     */
    function resetHighlight() {
        _highlightColor = highlightColor;
    }

    /**
     * 获取默认高亮颜色
     */
    function getHighlightColor() {
        return highlightColor;
    }

    /**
     * 径向渐变
     * @param {number} x0 渐变起点
     * @param {number} y0
     * @param {number} r0
     * @param {number} x1 渐变终点
     * @param {number} y1
     * @param {number} r1
     * @param {Array} colorList 颜色列表
     */
    function getRadialGradient(x0, y0, r0, x1, y1, r1, colorList) {
        if (!_ctx) {
            _ctx = util.getContext();
        }
        var gradient = _ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
        for ( var i = 0, l = colorList.length; i < l; i++) {
            gradient.addColorStop(colorList[i][0], colorList[i][1]);
        }
        gradient.__nonRecursion = true;
        return gradient;
    }

    /**
     * 线性渐变
     * @param {Object} x0 渐变起点
     * @param {Object} y0
     * @param {Object} x1 渐变终点
     * @param {Object} y1
     * @param {Array} colorList 颜色列表
     */
    function getLinearGradient(x0, y0, x1, y1, colorList) {
        if (!_ctx) {
            _ctx = util.getContext();
        }
        var gradient = _ctx.createLinearGradient(x0, y0, x1, y1);
        for ( var i = 0, l = colorList.length; i < l; i++) {
            gradient.addColorStop(colorList[i][0], colorList[i][1]);
        }
        gradient.__nonRecursion = true;
        return gradient;
    }

    /**
     * 获取两种颜色之间渐变颜色数组
     * @param {color} start 起始颜色
     * @param {color} end 结束颜色
     * @param {number} step 渐变级数
     * @return {Array}  颜色数组
     */
    function getStepColors(start, end, step) {
        start = toRGBA(start);
        end = toRGBA(end);
        start = getData(start);
        end = getData(end);

        var colors = [];
        var stepR = (end[0] - start[0]) / step;
        var stepG = (end[1] - start[1]) / step;
        var stepB = (end[2] - start[2]) / step;
        // 生成颜色集合
        // fix by linfeng 颜色堆积
        for (var i = 0, r = start[0], g = start[1], b = start[2]; i < step; i++
        ) {
            colors[i] = toColor([
                adjust(Math.floor(r), [ 0, 255 ]),
                adjust(Math.floor(g), [ 0, 255 ]), 
                adjust(Math.floor(b), [ 0, 255 ])
            ]);
            r += stepR;
            g += stepG;
            b += stepB;
        }
        r = end[0];
        g = end[1];
        b = end[2];
        colors[i] = toColor( [ r, g, b ]);
        return colors;
    }

    /**
     * 获取指定级数的渐变颜色数组
     * @param {Array} colors 颜色组
     * @param {number=20} step 渐变级数
     * @return {Array}  颜色数组
     */
    function getGradientColors(colors, step) {
        var ret = [];
        var len = colors.length;
        if (step === undefined) {
            step = 20;
        }
        if (len === 1) {
            ret = getStepColors(colors[0], colors[0], step);
        } else if (len > 1) {
            for ( var i = 0, n = len - 1; i < n; i++) {
                var steps = getStepColors(colors[i], colors[i + 1], step);
                if (i < n - 1) {
                    steps.pop();
                }
                ret = ret.concat(steps);
            }
        }
        return ret;
    }

    /**
     * 颜色值数组转为指定格式颜色,例如:<br/>
     * data = [60,20,20,0.1] format = 'rgba'
     * 返回：rgba(60,20,20,0.1)
     * @param {Array} data 颜色值数组
     * @param {string} format 格式,默认rgb
     * @return {string} 颜色
     */
    function toColor(data, format) {
        format = format || 'rgb';
        if (data && (data.length === 3 || data.length === 4)) {
            data = map(data,
                function(c) {
                    return c > 1 ? Math.ceil(c) : c;
            });

            if (format.indexOf('hex') > -1) {
                data = map(data.slice(0, 3),
                    function(c) {
                        c = Number(c).toString(16);
                        return (c.length === 1) ? '0' + c : c;
                });
                return '#' + data.join('');
            } else if (format.indexOf('hs') > -1) {
                var sx = map(data.slice(1, 3),
                    function(c) {
                        return c + '%';
                });
                data[1] = sx[0];
                data[2] = sx[1];
            }

            if (format.indexOf('a') > -1) {
                if (data.length === 3) {
                    data.push(1);
                }
                data[3] = adjust(data[3], [ 0, 1 ]);
                return format + '(' + data.slice(0, 4).join(',') + ')';
            }

            return format + '(' + data.slice(0, 3).join(',') + ')';
        }
    }

    /**
     * 返回颜色值数组
     * @param {string} color 颜色
     * @return {Array} 颜色值数组
     */
    function toArray(color) {
        color = trim(color);
        if (color.indexOf('#') > -1) {
            color = toRGB(color);
        }
        var data = color.replace(/[rgbahsvl%\(\)]/ig, '').split(',');
        data = map(data,
            function(c) {
                return Number(c);
        });
        return data;
    }

    /**
     * 颜色格式转化
     * @param {Array} data 颜色值数组
     * @param {string} format 格式,默认rgb
     * @return {string} 颜色
     */
    function convert(color, format) {
        var data = getData(color);
        var alpha = data[3];
        if(typeof alpha === 'undefined') {
            alpha = 1;
        }

        if (color.indexOf('hsb') > -1) {
            data = _HSV_2_RGB(data);
        } else if (color.indexOf('hsl') > -1) {
            data = _HSL_2_RGB(data);
        }

        if (format.indexOf('hsb') > -1 || format.indexOf('hsv') > -1) {
            data = _RGB_2_HSB(data);
        } else if (format.indexOf('hsl') > -1) {
            data = _RGB_2_HSL(data);
        }

        data[3] = alpha;

        return toColor(data, format);
    }

    /**
     * 转换为rgba格式的颜色
     * @param {string} color 颜色
     * @return {string} rgba颜色，rgba(r,g,b,a)
     */
    function toRGBA(color) {
        return convert(color, 'rgba');
    }

    /**
     * 转换为rgb数字格式的颜色
     * @param {string} color 颜色
     * @return {string} rgb颜色，rgb(0,0,0)格式
     */
    function toRGB(color) {
        return convert(color, 'rgb');
    }

    /**
     * 转换为16进制颜色
     * @param {string} color 颜色
     * @return {string} 16进制颜色，#rrggbb格式
     */
    function toHex(color) {
        return convert(color, 'hex');
    }

    /**
     * 转换为HSV颜色
     * @param {string} color 颜色
     * @return {string} HSVA颜色，hsva(h,s,v,a)
     */
    function toHSVA(color) {
        return convert(color, 'hsva');
    }

    /**
     * 转换为HSV颜色
     * @param {string} color 颜色
     * @return {string} HSV颜色，hsv(h,s,v)
     */
    function toHSV(color) {
        return convert(color, 'hsv');
    }

    /**
     * 转换为HSBA颜色
     * @param {string} color 颜色
     * @return {string} HSBA颜色，hsba(h,s,b,a)
     */
    function toHSBA(color) {
        return convert(color, 'hsba');
    }

    /**
     * 转换为HSB颜色
     * @param {string} color 颜色
     * @return {string} HSB颜色，hsb(h,s,b)
     */
    function toHSB(color) {
        return convert(color, 'hsb');
    }

    /**
     * 转换为HSLA颜色
     * @param {string} color 颜色
     * @return {string} HSLA颜色，hsla(h,s,l,a)
     */
    function toHSLA(color) {
        return convert(color, 'hsla');
    }

    /**
     * 转换为HSL颜色
     * @param {string} color 颜色
     * @return {string} HSL颜色，hsl(h,s,l)
     */
    function toHSL(color) {
        return convert(color, 'hsl');
    }

    /**
     * 转换颜色名
     * @param {string} color 颜色
     * @return {String} 颜色名
     */
    function toName(color) {
        for ( var key in _nameColors) {
            if (toHex(_nameColors[key]) === toHex(color)) {
                return key;
            }
        }
        return null;
    }

    /**
     * 移除颜色中多余空格
     * @param {String} color 颜色
     * @return {String} 无空格颜色
     */
    function trim(color) {
        color = String(color);
        color = color.replace(/(^\s*)|(\s*$)/g, '');
        if (/^[^#]*?$/i.test(color)) {
            color = color.replace(/\s/g, '');
        }
        return color;
    }

    // 规范化
    function normalize(color) {
        // 颜色名
        if (_nameColors[color]) {
            color = _nameColors[color];
        }
        // 去掉空格
        color = trim(color);
        // hsv与hsb等价
        color = color.replace(/hsv/i, 'hsb');
        // rgb转为rrggbb
        if (/^#[0-9a-f]{3}$/i.test(color)) {
            var d = color.replace('#', '').split('');
            color = '#' + d[0] + d[0] + d[1] + d[1] + d[2] + d[2];
        }
        return color;
    }

    /**
     * 颜色加深或减淡，当level>0加深，当level<0减淡
     * @param {string} color 颜色
     * @param {number} level 升降程度,取值区间[-1,1]
     * @return {string} 加深或减淡后颜色值
     */
    function lift(color, level) {
        var direct = level > 0 ? 1 : -1;
        if (typeof level === 'undefined') {
            level = 0;
        }
        level = Math.abs(level) > 1 ? 1 : Math.abs(level);
        color = toRGB(color);
        var data = getData(color);
        for ( var i = 0; i < 3; i++) {
            if (direct === 1) {
                data[i] = Math.floor(data[i] * (1 - level));
            } else {
                data[i] = Math.floor((255 - data[i]) * level + data[i]);
            }
        }
        return 'rgb(' + data.join(',') + ')';
    }

    /**
     * 颜色翻转,[255-r,255-g,255-b,1-a]
     * @param {string} color 颜色
     * @return {string} 翻转颜色
     */
    function reverse(color) {
        var data = getData(toRGBA(color));
        data = map(data,
            function(c) {
                return 255 - c;
        });
        return toColor(data, 'rgb');
    }

    /**
     * 简单两种颜色混合
     * @param {String} color1 第一种颜色
     * @param {String} color2 第二种颜色
     * @param {String} weight 混合权重[0-1]
     * @return {String} 结果色,rgb(r,g,b)或rgba(r,g,b,a)
     */
    function mix(color1, color2, weight) {
        if(typeof weight === 'undefined') {
            weight = 0.5;
        }
        weight = 1 - adjust(weight, [0, 1]);

        var w = weight * 2 - 1;
        var data1 = getData(toRGBA(color1));
        var data2 = getData(toRGBA(color2));

        var d = data1[3] - data2[3];

        var weight1 = (((w * d === -1) ? w : (w + d) / (1 + w * d)) + 1) / 2;
        var weight2 = 1 - weight1;

        var data = [];

        for ( var i = 0; i < 3; i++) {
            data[i] = data1[i] * weight1 + data2[i] * weight2;
        }

        var alpha = data1[3] * weight + data2[3] * (1 - weight);
        alpha = Math.max(0, Math.min(1, alpha));

        if (data1[3] === 1 && data2[3] === 1) {// 不考虑透明度
            return toColor(data, 'rgb');
        }
        data[3] = alpha;
        return toColor(data, 'rgba');
    }

    /**
     * 随机颜色
     * @return {string} 颜色值，#rrggbb格式
     */
    function random() {
        return toHex(
            'rgb(' + Math.round(Math.random() * 256) + ','
                   + Math.round(Math.random() * 256) + ','
                   + Math.round(Math.random() * 256) + ')'
        );
    }

    /**
     * 获取颜色值数组,返回值范围： <br/>
     * RGB 范围[0-255] <br/>
     * HSL/HSV/HSB 范围[0-1]<br/>
     * A透明度范围[0-1]
     * 支持格式：
     * #rgb
     * #rrggbb
     * rgb(r,g,b)
     * rgb(r%,g%,b%)
     * rgba(r,g,b,a)
     * hsb(h,s,b) // hsv与hsb等价
     * hsb(h%,s%,b%)
     * hsba(h,s,b,a)
     * hsl(h,s,l)
     * hsl(h%,s%,l%)
     * hsla(h,s,l,a)
     * @param {string} color 颜色
     * @return {Array} 颜色值数组或null
     */
    function getData(color) {
        color = normalize(color);
        var r = color.match(colorRegExp);
        if (r === null) {
            throw new Error('The color format error'); // 颜色格式错误
        }
        var d;
        var a;
        var data = [];
        var rgb;

        if (r[2]) {
            // #rrggbb
            d = r[2].replace('#', '').split('');
            rgb = [ d[0] + d[1], d[2] + d[3], d[4] + d[5] ];
            data = map(rgb,
                function(c) {
                    return adjust(parseInt(c, 16), [ 0, 255 ]);
            });

        }
        else if (r[4]) {
            // rgb rgba
            var rgba = (r[4]).split(',');
            a = rgba[3];
            rgb = rgba.slice(0, 3);
            data = map(
                rgb,
                function(c) {
                    c = Math.floor(
                        c.indexOf('%') > 0 ? parseInt(c, 0) * 2.55 : c
                    );
                    return adjust(c, [ 0, 255 ]);
                }
            );

            if( typeof a !== 'undefined') {
                data.push(adjust(parseFloat(a), [ 0, 1 ]));
            }
        }
        else if (r[5] || r[6]) {
            // hsb hsba hsl hsla
            var hsxa = (r[5] || r[6]).split(',');
            var h = parseInt(hsxa[0], 0) / 360;
            var s = hsxa[1];
            var x = hsxa[2];
            a = hsxa[3];
            data = map( [ s, x ],
                function(c) {
                    return adjust(parseFloat(c) / 100, [ 0, 1 ]);
            });
            data.unshift(h);
            if( typeof a !== 'undefined') {
                data.push(adjust(parseFloat(a), [ 0, 1 ]));
            }
        }
        return data;
    }

    /**
     * 设置颜色透明度
     * @param {string} color 颜色
     * @param {number} alpha 透明度,区间[0,1]
     * @return {string} rgba颜色值
     */
    function alpha(color, a) {
        if (a === null) {
            a = 1;
        }
        var data = getData(toRGBA(color));
        data[3] = adjust(Number(a).toFixed(4), [ 0, 1 ]);

        return toColor(data, 'rgba');
    }

    // 数组映射
    function map(array, fun) {
        if (typeof fun !== 'function') {
            throw new TypeError();
        }
        var len = array ? array.length : 0;
        for ( var i = 0; i < len; i++) {
            array[i] = fun(array[i]);
        }
        return array;
    }

    // 调整值区间
    function adjust(value, region) {
        // < to <= & > to >=
        // modify by linzhifeng 2014-05-25 because -0 == 0
        if (value <= region[0]) {
            value = region[0];
        }
        else if (value >= region[1]) {
            value = region[1];
        }
        return value;
    }

    // 参见 http:// www.easyrgb.com/index.php?X=MATH
    function _HSV_2_RGB(data) {
        var H = data[0];
        var S = data[1];
        var V = data[2];
        // HSV from 0 to 1
        var R, G, B;
        if (S === 0) {
            R = V * 255;
            G = V * 255;
            B = V * 255;
        } else {
            var h = H * 6;
            if (h === 6) {
                h = 0;
            }
            var i = Math.floor(h);
            var v1 = V * (1 - S);
            var v2 = V * (1 - S * (h - i));
            var v3 = V * (1 - S * (1 - (h - i)));
            var r = 0;
            var g = 0;
            var b = 0;

            if (i === 0) {
                r = V;
                g = v3;
                b = v1;
            } else if (i === 1) {
                r = v2;
                g = V;
                b = v1;
            } else if (i === 2) {
                r = v1;
                g = V;
                b = v3;
            } else if (i === 3) {
                r = v1;
                g = v2;
                b = V;
            } else if (i === 4) {
                r = v3;
                g = v1;
                b = V;
            } else {
                r = V;
                g = v1;
                b = v2;
            }

            // RGB results from 0 to 255
            R = r * 255;
            G = g * 255;
            B = b * 255;
        }
        return [ R, G, B ];
    }

    function _HSL_2_RGB(data) {
        var H = data[0];
        var S = data[1];
        var L = data[2];
        // HSL from 0 to 1
        var R, G, B;
        if (S === 0) {
            R = L * 255;
            G = L * 255;
            B = L * 255;
        } else {
            var v2;
            if (L < 0.5) {
                v2 = L * (1 + S);
            } else {
                v2 = (L + S) - (S * L);
            }

            var v1 = 2 * L - v2;

            R = 255 * _HUE_2_RGB(v1, v2, H + (1 / 3));
            G = 255 * _HUE_2_RGB(v1, v2, H);
            B = 255 * _HUE_2_RGB(v1, v2, H - (1 / 3));
        }
        return [ R, G, B ];
    }

    function _HUE_2_RGB(v1, v2, vH) {
        if (vH < 0) {
            vH += 1;
        }
        if (vH > 1) {
            vH -= 1;
        }
        if ((6 * vH) < 1) {
            return (v1 + (v2 - v1) * 6 * vH);
        }
        if ((2 * vH) < 1) {
            return (v2);
        }
        if ((3 * vH) < 2) {
            return (v1 + (v2 - v1) * ((2 / 3) - vH) * 6);
        }
        return v1;
    }

    function _RGB_2_HSB(data) {
        // RGB from 0 to 255
        var R = (data[0] / 255);
        var G = (data[1] / 255);
        var B = (data[2] / 255);

        var vMin = Math.min(R, G, B); // Min. value of RGB
        var vMax = Math.max(R, G, B); // Max. value of RGB
        var delta = vMax - vMin; // Delta RGB value
        var V = vMax;
        var H;
        var S;

        // HSV results from 0 to 1
        if (delta === 0) {
            H = 0;
            S = 0;
        } else {
            S = delta / vMax;

            var deltaR = (((vMax - R) / 6) + (delta / 2)) / delta;
            var deltaG = (((vMax - G) / 6) + (delta / 2)) / delta;
            var deltaB = (((vMax - B) / 6) + (delta / 2)) / delta;

            if (R === vMax) {
                H = deltaB - deltaG;
            } else if (G === vMax) {
                H = (1 / 3) + deltaR - deltaB;
            } else if (B === vMax) {
                H = (2 / 3) + deltaG - deltaR;
            }

            if (H < 0) {
                H += 1;
            }
            if (H > 1) {
                H -= 1;
            }
        }
        H = H * 360;
        S = S * 100;
        V = V * 100;
        return [ H, S, V ];
    }

    function _RGB_2_HSL(data) {
        // RGB from 0 to 255
        var R = (data[0] / 255);
        var G = (data[1] / 255);
        var B = (data[2] / 255);

        var vMin = Math.min(R, G, B); // Min. value of RGB
        var vMax = Math.max(R, G, B); // Max. value of RGB
        var delta = vMax - vMin; // Delta RGB value

        var L = (vMax + vMin) / 2;
        var H;
        var S;
        // HSL results from 0 to 1
        if (delta === 0) {
            H = 0;
            S = 0;
        } else {
            if (L < 0.5) {
                S = delta / (vMax + vMin);
            } else {
                S = delta / (2 - vMax - vMin);
            }

            var deltaR = (((vMax - R) / 6) + (delta / 2)) / delta;
            var deltaG = (((vMax - G) / 6) + (delta / 2)) / delta;
            var deltaB = (((vMax - B) / 6) + (delta / 2)) / delta;

            if (R === vMax) {
                H = deltaB - deltaG;
            } else if (G === vMax) {
                H = (1 / 3) + deltaR - deltaB;
            } else if (B === vMax) {
                H = (2 / 3) + deltaG - deltaR;
            }

            if (H < 0) {
                H += 1;
            }

            if (H > 1) {
                H -= 1;
            }
        }

        H = H * 360;
        S = S * 100;
        L = L * 100;

        return [ H, S, L ];
    }

    return {
        customPalette : customPalette,
        resetPalette : resetPalette,
        getColor : getColor,
        getHighlightColor : getHighlightColor,
        customHighlight : customHighlight,
        resetHighlight : resetHighlight,
        getRadialGradient : getRadialGradient,
        getLinearGradient : getLinearGradient,
        getGradientColors : getGradientColors,
        getStepColors : getStepColors,
        reverse : reverse,
        mix : mix,
        lift : lift,
        trim : trim,
        random : random,
        toRGB : toRGB,
        toRGBA : toRGBA,
        toHex : toHex,
        toHSL : toHSL,
        toHSLA : toHSLA,
        toHSB : toHSB,
        toHSBA : toHSBA,
        toHSV : toHSV,
        toHSVA : toHSVA,
        toName : toName,
        toColor : toColor,
        toArray : toArray,
        alpha : alpha,
        getData : getData
    };
});


/**
 * zrender: shape仓库
 *
 * @desc zrender是一个轻量级的Canvas类库，MVC封装，数据驱动，提供类Dom事件模型。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define(
    'zrender/shape',[],function(/*require*/) {
        var self = {};

        var _shapeLibrary = {};     //shape库

        /**
         * 定义图形实现
         * @param {Object} name
         * @param {Object} clazz 图形实现
         */
        self.define = function(name, clazz) {
            _shapeLibrary[name] = clazz;
            return self;
        };

        /**
         * 获取图形实现
         * @param {Object} name
         */
        self.get = function(name) {
            return _shapeLibrary[name];
        };

        return self;
    }
);
/**
 * echart图表库
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 */
define('echarts/chart',[],function(/*require*/) {    //chart
    var self = {};

    var _chartLibrary = {};     //echart图表库

    /**
     * 定义图形实现
     * @param {Object} name
     * @param {Object} clazz 图形实现
     */
    self.define = function(name, clazz) {
        _chartLibrary[name] = clazz;
        return self;
    };

    /**
     * 获取图形实现
     * @param {Object} name
     */
    self.get = function(name) {
        return _chartLibrary[name];
    };

    return self;
});
/**
 * echarts图表类：折线图
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/chart/line',['require','../component/base','./calculableBase','../config','../util/ecData','zrender/tool/color','zrender/shape','zrender/shape','../chart'],function(require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} series 数据
     * @param {Object} component 组件
     */
    function Line(messageCenter, zr, option, component){
        // 基类装饰
        var ComponentBase = require('../component/base');
        ComponentBase.call(this, zr);
        // 可计算特性装饰
        var CalculableBase = require('./calculableBase');
        CalculableBase.call(this, zr, option);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var zrColor = require('zrender/tool/color');

        var self = this;
        self.type = ecConfig.CHART_TYPE_LINE;

        var series;                 // 共享数据源，不要修改跟自己无关的项

        var _zlevelBase = self.getZlevelBase();

        var _sIndex2ColorMap = {};  // series默认颜色索引，seriesIndex索引到color
        var _symbol = [
              'circle', 'rectangle', 'triangle', 'diamond',
              'emptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond'
            ];
        var _sIndex2ShapeMap = {};  // series拐点图形类型，seriesIndex索引到shape type

        require('zrender/shape').get('icon').define(
            'legendLineIcon', legendLineIcon
        );
        
        function _buildShape() {
            self.selectedMap = {};

            // 水平垂直双向series索引 ，position索引到seriesIndex
            var _position2sIndexMap = {
                top : [],
                bottom : [],
                left : [],
                right : []
            };
            var xAxisIndex;
            var yAxisIndex;
            var xAxis;
            var yAxis;
            for (var i = 0, l = series.length; i < l; i++) {
                if (series[i].type == ecConfig.CHART_TYPE_LINE) {
                    series[i] = self.reformOption(series[i]);
                    xAxisIndex = series[i].xAxisIndex;
                    yAxisIndex = series[i].yAxisIndex;
                    xAxis = component.xAxis.getAxis(xAxisIndex);
                    yAxis = component.yAxis.getAxis(yAxisIndex);
                    if (xAxis.type == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
                    ) {
                        _position2sIndexMap[xAxis.getPosition()].push(i);
                    }
                    else if (yAxis.type == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
                    ) {
                        _position2sIndexMap[yAxis.getPosition()].push(i);
                    }
                }
            }
            //console.log(_position2sIndexMap)
            for (var position in _position2sIndexMap) {
                if (_position2sIndexMap[position].length > 0) {
                    _buildSinglePosition(
                        position, _position2sIndexMap[position]
                    );
                }
            }

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        /**
         * 构建单个方向上的折线图
         *
         * @param {number} seriesIndex 系列索引
         */
        function _buildSinglePosition(position, seriesArray) {
            var mapData = _mapData(seriesArray);
            var locationMap = mapData.locationMap;
            var maxDataLength = mapData.maxDataLength;

            if (maxDataLength === 0 || locationMap.length === 0) {
                return;
            }

            switch (position) {
                case 'bottom' :
                case 'top' :
                    _buildHorizontal(maxDataLength, locationMap);
                    break;
                case 'left' :
                case 'right' :
                    _buildVertical(maxDataLength, locationMap);
                    break;
            }
        }

        /**
         * 数据整形
         * 数组位置映射到系列索引
         */
        function _mapData(seriesArray) {
            var serie;                              // 临时映射变量
            var dataIndex = 0;                      // 堆叠数据所在位置映射
            var stackMap = {};                      // 堆叠数据位置映射，堆叠组在二维中的第几项
            var magicStackKey = '__kener__stack__'; // 堆叠命名，非堆叠数据安单一堆叠处理
            var stackKey;                           // 临时映射变量
            var serieName;                          // 临时映射变量
            var legend = component.legend;
            var locationMap = [];                   // 需要返回的东西：数组位置映射到系列索引
            var maxDataLength = 0;                  // 需要返回的东西：最大数据长度
            var iconShape;
            // 计算需要显示的个数和分配位置并记在下面这个结构里
            for (var i = 0, l = seriesArray.length; i < l; i++) {
                serie = series[seriesArray[i]];
                serieName = serie.name;
                
                _sIndex2ShapeMap[seriesArray[i]]
                    = _sIndex2ShapeMap[seriesArray[i]]
                      || self.deepQuery([serie],'symbol')
                      || _symbol[i % _symbol.length];
                      
                if (legend){
                    self.selectedMap[serieName] = legend.isSelected(serieName);
                    
                    _sIndex2ColorMap[seriesArray[i]]
                        = legend.getColor(serieName);
                        
                    iconShape = legend.getItemShape(serieName);
                    if (iconShape) {
                        // 回调legend，换一个更形象的icon
                        iconShape.shape = 'icon';
                        iconShape.style.iconType = 'legendLineIcon';
                        iconShape.style.symbol = 
                            _sIndex2ShapeMap[seriesArray[i]];
                        legend.setItemShape(serieName, iconShape);
                    }
                } else {
                    self.selectedMap[serieName] = true;
                    _sIndex2ColorMap[seriesArray[i]]
                        = zr.getColor(seriesArray[i]);
                }

                if (self.selectedMap[serieName]) {
                    stackKey = serie.stack || (magicStackKey + seriesArray[i]);
                    if (typeof stackMap[stackKey] == 'undefined') {
                        stackMap[stackKey] = dataIndex;
                        locationMap[dataIndex] = [seriesArray[i]];
                        dataIndex++;
                    }
                    else {
                        // 已经分配了位置就推进去就行
                        locationMap[stackMap[stackKey]].push(seriesArray[i]);
                    }
                }
                // 兼职帮算一下最大长度
                maxDataLength = Math.max(maxDataLength, serie.data.length);
            }

            /* 调试输出
            var s = '';
            for (var i = 0, l = maxDataLength; i < l; i++) {
                s = '[';
                for (var j = 0, k = locationMap.length; j < k; j++) {
                    s +='['
                    for (var m = 0, n = locationMap[j].length - 1; m < n; m++) {
                        s += series[locationMap[j][m]].data[i] + ','
                    }
                    s += series[locationMap[j][locationMap[j].length - 1]]
                         .data[i];
                    s += ']'
                }
                s += ']';
                console.log(s);
            }
            console.log(locationMap)
            */

            return {
                locationMap : locationMap,
                maxDataLength : maxDataLength
            };
        }

        /**
         * 构建类目轴为水平方向的折线图系列
         */
        function _buildHorizontal(maxDataLength, locationMap) {
            // 确定类目轴和数值轴，同一方向随便找一个即可
            var seriesIndex = locationMap[0][0];
            var serie = series[seriesIndex];
            var xAxisIndex = serie.xAxisIndex;
            var categoryAxis = component.xAxis.getAxis(xAxisIndex);
            var yAxisIndex; // 数值轴各异
            var valueAxis;  // 数值轴各异

            var x;
            var y;
            var lastYP; // 正向堆叠处理
            var baseYP;
            var lastYN; // 负向堆叠处理
            var baseYN;
            var finalPLMap = {}; // 完成的point list(PL)
            var curPLMap = {};   // 正在记录的point list(PL)
            var data;
            var value;
            for (var i = 0, l = maxDataLength; i < l; i++) {
                if (typeof categoryAxis.getNameByIndex(i) == 'undefined') {
                    // 系列数据超出类目轴长度
                    break;
                }
                x = categoryAxis.getCoordByIndex(i);
                for (var j = 0, k = locationMap.length; j < k; j++) {
                    // 堆叠数据用第一条valueAxis
                    yAxisIndex = series[locationMap[j][0]].yAxisIndex || 0;
                    valueAxis = component.yAxis.getAxis(yAxisIndex);
                    baseYP = lastYP = baseYN = lastYN = valueAxis.getCoord(0);
                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
                        seriesIndex = locationMap[j][m];
                        serie = series[seriesIndex];
                        data = serie.data[i];
                        value = typeof data != 'undefined'
                                ? (typeof data.value != 'undefined'
                                  ? data.value
                                  : data)
                                : '-';
                        curPLMap[seriesIndex] = curPLMap[seriesIndex] || [];
                        if (value == '-') {
                            // 空数据则把正在记录的curPLMap添加到finalPLMap中
                            if (curPLMap[seriesIndex].length > 0) {
                                finalPLMap[seriesIndex] =
                                    finalPLMap[seriesIndex] || [];

                                finalPLMap[seriesIndex].push(
                                    curPLMap[seriesIndex]
                                );

                                curPLMap[seriesIndex] = [];
                            }
                            continue;
                        }
                        y = valueAxis.getCoord(value);
                        if (value >= 0) {
                            // 正向堆叠
                            lastYP -= (baseYP - y);
                            y = lastYP;
                        }
                        else if (value < 0){
                            // 负向堆叠
                            lastYN += y - baseYN;
                            y = lastYN;
                        }
                        curPLMap[seriesIndex].push(
                            [x, y, i, categoryAxis.getNameByIndex(i), x, baseYP]
                        );
                    }
                }
                // 补充空数据的拖拽提示
                lastYP = component.grid.getY();
                var symbolSize;
                for (var j = 0, k = locationMap.length; j < k; j++) {
                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
                        seriesIndex = locationMap[j][m];
                        serie = series[seriesIndex];
                        data = serie.data[i];
                        value = typeof data != 'undefined'
                                ? (typeof data.value != 'undefined'
                                  ? data.value
                                  : data)
                                : '-';
                        if (value != '-') {
                            // 只关心空数据
                            continue;
                        }
                        if (self.deepQuery(
                                [data, serie, option], 'calculable'
                            )
                        ) {
                            symbolSize = self.deepQuery(
                                [data, serie],
                                'symbolSize'
                            );
                            lastYP += symbolSize * 2 + 5;
                            y = lastYP;
                            self.shapeList.push(_getCalculableItem(
                                seriesIndex, i, categoryAxis.getNameByIndex(i),
                                x, y
                            ));
                        }
                    }
                }
            }

            // 把剩余未完成的curPLMap全部添加到finalPLMap中
            for (var sId in curPLMap) {
                if (curPLMap[sId].length > 0) {
                    finalPLMap[sId] = finalPLMap[sId] || [];
                    finalPLMap[sId].push(curPLMap[sId]);
                    curPLMap[sId] = [];
                }
            }
            _buildBorkenLine(finalPLMap, categoryAxis, 'horizontal');
        }

        /**
         * 构建类目轴为垂直方向的折线图系列
         */
        function _buildVertical(maxDataLength, locationMap) {
            // 确定类目轴和数值轴，同一方向随便找一个即可
            var seriesIndex = locationMap[0][0];
            var serie = series[seriesIndex];
            var yAxisIndex = serie.yAxisIndex;
            var categoryAxis = component.yAxis.getAxis(yAxisIndex);
            var xAxisIndex; // 数值轴各异
            var valueAxis;  // 数值轴各异

            var x;
            var y;
            var lastXP; // 正向堆叠处理
            var baseXP;
            var lastXN; // 负向堆叠处理
            var baseXN;
            var finalPLMap = {}; // 完成的point list(PL)
            var curPLMap = {};   // 正在记录的point list(PL)
            var data;
            var value;
            for (var i = 0, l = maxDataLength; i < l; i++) {
                if (typeof categoryAxis.getNameByIndex(i) == 'undefined') {
                    // 系列数据超出类目轴长度
                    break;
                }
                y = categoryAxis.getCoordByIndex(i);
                for (var j = 0, k = locationMap.length; j < k; j++) {
                    // 堆叠数据用第一条valueAxis
                    xAxisIndex = series[locationMap[j][0]].xAxisIndex || 0;
                    valueAxis = component.xAxis.getAxis(xAxisIndex);
                    baseXP = lastXP = baseXN = lastXN = valueAxis.getCoord(0);
                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
                        seriesIndex = locationMap[j][m];
                        serie = series[seriesIndex];
                        data = serie.data[i];
                        value = typeof data != 'undefined'
                                ? (typeof data.value != 'undefined'
                                  ? data.value
                                  : data)
                                : '-';
                        curPLMap[seriesIndex] = curPLMap[seriesIndex] || [];
                        if (value == '-') {
                            // 空数据则把正在记录的curPLMap添加到finalPLMap中
                            if (curPLMap[seriesIndex].length > 0) {
                                finalPLMap[seriesIndex] =
                                    finalPLMap[seriesIndex] || [];

                                finalPLMap[seriesIndex].push(
                                    curPLMap[seriesIndex]
                                );

                                curPLMap[seriesIndex] = [];
                            }
                            continue;
                        }
                        x = valueAxis.getCoord(value);
                        if (value >= 0) {
                            // 正向堆叠
                            lastXP += x - baseXP;
                            x = lastXP;
                        }
                        else if (value < 0){
                            // 负向堆叠
                            lastXN -= baseXN - x;
                            x = lastXN;
                        }
                        curPLMap[seriesIndex].push(
                            [x, y, i, categoryAxis.getNameByIndex(i), baseXP, y]
                        );
                    }
                }
                // 补充空数据的拖拽提示
                lastXP = component.grid.getXend();
                var symbolSize;
                for (var j = 0, k = locationMap.length; j < k; j++) {
                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
                        seriesIndex = locationMap[j][m];
                        serie = series[seriesIndex];
                        data = serie.data[i];
                        value = typeof data != 'undefined'
                                ? (typeof data.value != 'undefined'
                                  ? data.value
                                  : data)
                                : '-';
                        if (value != '-') {
                            // 只关心空数据
                            continue;
                        }
                        if (self.deepQuery(
                                [data, serie, option], 'calculable'
                            )
                        ) {
                            symbolSize = self.deepQuery(
                                [data, serie],
                                'symbolSize'
                            );
                            lastXP -= symbolSize * 2 + 5;
                            x = lastXP;
                            self.shapeList.push(_getCalculableItem(
                                seriesIndex, i, categoryAxis.getNameByIndex(i),
                                x, y
                            ));
                        }
                    }
                }
            }

            // 把剩余未完成的curPLMap全部添加到finalPLMap中
            for (var sId in curPLMap) {
                if (curPLMap[sId].length > 0) {
                    finalPLMap[sId] = finalPLMap[sId] || [];
                    finalPLMap[sId].push(curPLMap[sId]);
                    curPLMap[sId] = [];
                }
            }
            //console.log(finalPLMap);
            _buildBorkenLine(finalPLMap, categoryAxis, 'vertical');
        }

        /**
         * 生成折线和折线上的拐点
         */
        function _buildBorkenLine(pointList, categoryAxis, orient) {
            var defaultColor;

            // 折线相关
            var lineWidth;
            var lineType;
            var lineColor;
            var normalColor;
            var emphasisColor;

            // 填充相关
            var isFill;
            var fillNormalColor;

            var serie;
            var data;
            var seriesPL;
            var singlePL;

            // 堆叠层叠需求，反顺序构建
            for (var seriesIndex = series.length - 1;
                seriesIndex >= 0;
                seriesIndex--
            ) {
                serie = series[seriesIndex];
                seriesPL = pointList[seriesIndex];
                if (serie.type == ecConfig.CHART_TYPE_LINE
                    && typeof seriesPL != 'undefined'
                ) {
                    defaultColor = _sIndex2ColorMap[seriesIndex];
                    // 多级控制
                    lineWidth = self.deepQuery(
                        [serie], 'itemStyle.normal.lineStyle.width'
                    );
                    lineType = self.deepQuery(
                        [serie], 'itemStyle.normal.lineStyle.type'
                    );
                    lineColor = self.deepQuery(
                        [serie], 'itemStyle.normal.lineStyle.color'
                    );
                    normalColor = self.deepQuery(
                        [serie], 'itemStyle.normal.color'
                    );
                    emphasisColor = self.deepQuery(
                        [serie], 'itemStyle.emphasis.color'
                    );

                    isFill = typeof self.deepQuery(
                        [serie], 'itemStyle.normal.areaStyle'
                    ) != 'undefined';

                    fillNormalColor = self.deepQuery(
                        [serie], 'itemStyle.normal.areaStyle.color'
                    );

                    for (var i = 0, l = seriesPL.length; i < l; i++) {
                        singlePL = seriesPL[i];
                        for (var j = 0, k = singlePL.length; j < k; j++) {
                            data = serie.data[singlePL[j][2]];
                            if ((categoryAxis.isMainAxis(singlePL[j][2]) // 主轴
                                 && self.deepQuery(                      // 非空
                                        [data, serie], 'symbol'
                                    ) != 'none'
                                )
                                || self.deepQuery(                      // 可计算
                                        [data, serie, option],
                                        'calculable'
                                   )
                            ) {
                                self.shapeList.push(_getSymbol(
                                    seriesIndex,
                                    singlePL[j][2], // dataIndex
                                    singlePL[j][3], // name
                                    singlePL[j][0], // x
                                    singlePL[j][1], // y
                                    self.deepQuery(
                                        [data], 'itemStyle.normal.color'
                                    ) || normalColor
                                      || defaultColor,
                                    self.deepQuery(
                                        [data], 'itemStyle.emphasis.color'
                                    ) || emphasisColor
                                      || normalColor
                                      || defaultColor,
                                    lineWidth
                                ));
                            }

                        }
                        // 折线图
                        self.shapeList.push({
                            shape : 'brokenLine',
                            zlevel : _zlevelBase,
                            style : {
                                pointList : singlePL,
                                strokeColor : lineColor
                                              || normalColor
                                              || defaultColor,
                                lineWidth : lineWidth,
                                lineType : lineType,
                                shadowColor : self.deepQuery(
                                  [serie],
                                  'itemStyle.normal.lineStyle.shadowColor'
                                ),
                                shadowBlur: self.deepQuery(
                                  [serie],
                                  'itemStyle.normal.lineStyle.shadowBlur'
                                ),
                                shadowOffsetX: self.deepQuery(
                                  [serie],
                                  'itemStyle.normal.lineStyle.shadowOffsetX'
                                ),
                                shadowOffsetY: self.deepQuery(
                                  [serie],
                                  'itemStyle.normal.lineStyle.shadowOffsetY'
                                )
                            },
                            hoverable : false,
                            _main : true,
                            _seriesIndex : seriesIndex,
                            _orient : orient
                        });
                        
                        if (isFill) {
                            self.shapeList.push({
                                shape : 'polygon',
                                zlevel : _zlevelBase,
                                style : {
                                    pointList : singlePL.concat([
                                        [
                                            singlePL[singlePL.length - 1][4],
                                            singlePL[singlePL.length - 1][5] - 2
                                        ],
                                        [
                                            singlePL[0][4],
                                            singlePL[0][5] - 2
                                        ]
                                    ]),
                                    brushType : 'fill',
                                    color : fillNormalColor
                                            ? fillNormalColor
                                            : zrColor.alpha(defaultColor,0.5)
                                },
                                hoverable : false,
                                _main : true,
                                _seriesIndex : seriesIndex,
                                _orient : orient
                            });
                        }
                    }
            }
            }
        }

        /**
         * 生成空数据所需的可计算提示图形
         */
        function _getCalculableItem(seriesIndex, dataIndex, name, x, y) {
            var color = series[seriesIndex].calculableHolderColor
                        || ecConfig.calculableHolderColor;

            var itemShape = _getSymbol(
                seriesIndex, dataIndex, name,
                x, y,
                color,
                _sIndex2ColorMap[seriesIndex],
                2
            );

            itemShape.hoverable = false;
            itemShape.draggable = false;
            itemShape.highlightStyle.lineWidth = 20;

            return itemShape;
        }

        /**
         * 生成折线图上的拐点图形
         */
        function _getSymbol(
            seriesIndex, dataIndex, name, x, y,
            normalColor, emphasisColor, lineWidth
        ) {
            var serie = series[seriesIndex];
            var data = serie.data[dataIndex];
            var symbol = self.deepQuery([data], 'symbol')
                         || _sIndex2ShapeMap[seriesIndex]
                         || 'cricle';
            var symbolSize = self.deepQuery([data, serie],'symbolSize');

            var itemShape = {
                shape : 'icon',
                zlevel : _zlevelBase + 1,
                style : {
                    iconType : symbol.replace('empty', '').toLowerCase(),
                    x : x - symbolSize,
                    y : y - symbolSize,
                    width : symbolSize * 2,
                    height : symbolSize * 2,
                    brushType : 'both',
                    color : symbol.match('empty') ? '#fff' : normalColor,
                    strokeColor : normalColor,
                    lineWidth: lineWidth * 2
                },
                highlightStyle : {
                    color : emphasisColor,
                    strokeColor : emphasisColor
                },
                clickable : true
            };
            
            if (symbol.match('star')) {
                itemShape.style.iconType = 'star';
                itemShape.style.n = 
                    (symbol.replace('empty', '').replace('star','') - 0) || 5;
            }
            
            if (symbol == 'none') {
                itemShape.invisible = true;
                itemShape.hoverable = false;
            }

            if (self.deepQuery([data, serie, option], 'calculable')) {
                self.setCalculable(itemShape);
                itemShape.draggable = true;
            }

            ecData.pack(
                itemShape,
                series[seriesIndex], seriesIndex,
                series[seriesIndex].data[dataIndex], dataIndex,
                name
            );

            itemShape._x = x;
            itemShape._y = y;

            return itemShape;
        }

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newSeries
         * @param {Object} newComponent
         */
        function init(newOption, newComponent) {
            option = newOption;
            component = newComponent;

            series = option.series;

            self.clear();
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            self.clear();
            _buildShape();
        }

        /**
         * 动画设定
         */
        function animation() {
            var duration = self.deepQuery([option], 'animationDuration');
            var easing = self.deepQuery([option], 'animationEasing');
            var x;
            var y;
            var serie;
            var dataIndex = 0;

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                if (self.shapeList[i]._main) {
                    serie = series[self.shapeList[i]._seriesIndex];
                    dataIndex += 1;
                    x = self.shapeList[i].style.pointList[0][0];
                    y = self.shapeList[i].style.pointList[0][1];
                    if (self.shapeList[i]._orient == 'horizontal') {
                        zr.modShape(self.shapeList[i].id, {
                            scale : [0, 1, x, y]
                        });
                    }
                    else {
                        zr.modShape(self.shapeList[i].id, {
                            scale : [1, 0, x, y]
                        });
                    }
                    zr.animate(self.shapeList[i].id, '')
                        .when(
                            (self.deepQuery([serie],'animationDuration')
                            || duration)
                            + dataIndex * 100,

                            {scale : [1, 1, x, y]},

                            (self.deepQuery([serie], 'animationEasing')
                            || easing)
                        )
                        .start();
                }
                else {
                    x = self.shapeList[i]._x || 0;
                    y = self.shapeList[i]._y || 0;
                    zr.modShape(self.shapeList[i].id, {
                        scale : [0, 0, x, y]
                    });
                    zr.animate(self.shapeList[i].id, '')
                        .when(
                            duration,
                            {scale : [1, 1, x, y]},
                            'QuinticOut'
                        )
                        .start();
                }
            }
        }

        self.init = init;
        self.refresh = refresh;
        self.animation = animation;

        init(option, component);
    }

    function legendLineIcon(ctx, style) {
        var x = style.x;
        var y = style.y;
        var width = style.width;
        var height = style.height;
        
        var dy = height / 2;
        ctx.moveTo(x, y + dy);
        ctx.lineTo(x + width, y + dy);
        
        if (style.symbol.match('empty')) {
            ctx.fillStyle = '#fff';
        }
        style.brushType = 'both';
        
        var symbol = style.symbol.replace('empty', '').toLowerCase();
        if (symbol.match('star')) {
            dy = (symbol.replace('star','') - 0) || 5;
            y -= 1;
            symbol = 'star';
        } 
        else if (symbol == 'rectangle') {
            x += (width - height) / 2;
            width = height;
        }
        symbol = require('zrender/shape').get('icon').get(symbol);
        
        if (symbol) {
            symbol(ctx, {
                x : x + 3,
                y : y + 3,
                width : width - 6,
                height : height - 6,
                n : dy
            });
        }
    }
        
    // 图表注册
    require('../chart').define('line', Line);
    
    return Line;
});
/**
 * echarts图表类：柱形图
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/chart/bar',['require','../component/base','./calculableBase','../config','../util/ecData','../chart'],function(require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} series 数据
     * @param {Object} component 组件
     */
    function Bar(messageCenter, zr, option, component){
        // 基类装饰
        var ComponentBase = require('../component/base');
        ComponentBase.call(this, zr);
        // 可计算特性装饰
        var CalculableBase = require('./calculableBase');
        CalculableBase.call(this, zr, option);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var self = this;
        self.type = ecConfig.CHART_TYPE_BAR;

        var series;                 // 共享数据源，不要修改跟自己无关的项

        var _zlevelBase = self.getZlevelBase();

        var _sIndex2colorMap = {};  // series默认颜色索引，seriesIndex索引到color

        function _buildShape() {
            self.selectedMap = {};

            // 水平垂直双向series索引 ，position索引到seriesIndex
            var _position2sIndexMap = {
                top : [],
                bottom : [],
                left : [],
                right : []
            };
            var xAxisIndex;
            var yAxisIndex;
            var xAxis;
            var yAxis;
            for (var i = 0, l = series.length; i < l; i++) {
                if (series[i].type == ecConfig.CHART_TYPE_BAR) {
                    series[i] = self.reformOption(series[i]);
                    xAxisIndex = series[i].xAxisIndex;
                    yAxisIndex = series[i].yAxisIndex;
                    xAxis = component.xAxis.getAxis(xAxisIndex);
                    yAxis = component.yAxis.getAxis(yAxisIndex);
                    if (xAxis.type == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
                    ) {
                        _position2sIndexMap[xAxis.getPosition()].push(i);
                    }
                    else if (yAxis.type == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
                    ) {
                        _position2sIndexMap[yAxis.getPosition()].push(i);
                    }
                }
            }
            // console.log(_position2sIndexMap)
            for (var position in _position2sIndexMap) {
                if (_position2sIndexMap[position].length > 0) {
                    _buildSinglePosition(
                        position, _position2sIndexMap[position]
                    );
                }
            }

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        /**
         * 构建单个方向上的柱形图
         *
         * @param {number} seriesIndex 系列索引
         */
        function _buildSinglePosition(position, seriesArray) {
            var mapData = _mapData(seriesArray);
            var locationMap = mapData.locationMap;
            var maxDataLength = mapData.maxDataLength;

            if (maxDataLength === 0 || locationMap.length === 0) {
                return;
            }

            switch (position) {
                case 'bottom' :
                case 'top' :
                    _buildHorizontal(maxDataLength, locationMap);
                    break;
                case 'left' :
                case 'right' :
                    _buildVertical(maxDataLength, locationMap);
                    break;
            }
        }


        /**
         * 数据整形
         * 数组位置映射到系列索引
         */
        function _mapData(seriesArray) {
            var serie;                              // 临时映射变量
            var dataIndex = 0;                      // 堆叠数据所在位置映射
            var stackMap = {};                      // 堆叠数据位置映射，堆叠组在二维中的第几项
            var magicStackKey = '__kener__stack__'; // 堆叠命名，非堆叠数据安单一堆叠处理
            var stackKey;                           // 临时映射变量
            var serieName;                          // 临时映射变量
            var legend = component.legend;
            var locationMap = [];                   // 需要返回的东西：数组位置映射到系列索引
            var maxDataLength = 0;                  // 需要返回的东西：最大数据长度
            // 计算需要显示的个数和分配位置并记在下面这个结构里
            for (var i = 0, l = seriesArray.length; i < l; i++) {
                serie = series[seriesArray[i]];
                serieName = serie.name;
                if (legend){
                    self.selectedMap[serieName] = legend.isSelected(serieName);
                    _sIndex2colorMap[seriesArray[i]] =
                        legend.getColor(serieName);
                } else {
                    self.selectedMap[serieName] = true;
                    _sIndex2colorMap[seriesArray[i]] =
                        zr.getColor(seriesArray[i]);
                }

                if (self.selectedMap[serieName]) {
                    stackKey = serie.stack || (magicStackKey + seriesArray[i]);
                    if (typeof stackMap[stackKey] == 'undefined') {
                        stackMap[stackKey] = dataIndex;
                        locationMap[dataIndex] = [seriesArray[i]];
                        dataIndex++;
                    }
                    else {
                        // 已经分配了位置就推进去就行
                        locationMap[stackMap[stackKey]].push(seriesArray[i]);
                    }
                }
                // 兼职帮算一下最大长度
                maxDataLength = Math.max(maxDataLength, serie.data.length);
            }

            /* 调试输出
            var s = '';
            for (var i = 0, l = maxDataLength; i < l; i++) {
                s = '[';
                for (var j = 0, k = locationMap.length; j < k; j++) {
                    s +='['
                    for (var m = 0, n = locationMap[j].length - 1; m < n; m++) {
                        s += series[locationMap[j][m]].data[i] + ','
                    }
                    s += series[locationMap[j][locationMap[j].length - 1]]
                         .data[i];
                    s += ']'
                }
                s += ']';
                console.log(s);
            }
            console.log(locationMap)
            */

            return {
                locationMap : locationMap,
                maxDataLength : maxDataLength
            };
        }

        /**
         * 构建类目轴为水平方向的柱形图系列
         */
        function _buildHorizontal(maxDataLength, locationMap) {
            // 确定类目轴和数值轴，同一方向随便找一个即可
            var seriesIndex = locationMap[0][0];
            var serie = series[seriesIndex];
            var xAxisIndex = serie.xAxisIndex;
            var categoryAxis = component.xAxis.getAxis(xAxisIndex);
            var yAxisIndex; // 数值轴各异
            var valueAxis;  // 数值轴各异

            var size = _mapSize(categoryAxis, locationMap);
            var gap = size.gap;
            var barGap = size.barGap;
            var barWidthMap = size.barWidthMap;
            var barWidth = size.barWidth;                   // 自适应宽度
            var barMinHeightMap = size.barMinHeightMap;
            var barHeight;

            var x;
            var y;
            var lastYP; // 正向堆叠处理
            var baseYP;
            var lastYN; // 负向堆叠处理
            var baseYN;
            var barShape;
            var data;
            var value;
            for (var i = 0, l = maxDataLength; i < l; i++) {
                if (typeof categoryAxis.getNameByIndex(i) == 'undefined') {
                    // 系列数据超出类目轴长度
                    break;
                }
                x = categoryAxis.getCoordByIndex(i) - gap / 2;
                for (var j = 0, k = locationMap.length; j < k; j++) {
                    // 堆叠数据用第一条valueAxis
                    yAxisIndex = series[locationMap[j][0]].yAxisIndex || 0;
                    valueAxis = component.yAxis.getAxis(yAxisIndex);
                    baseYP = lastYP = valueAxis.getCoord(0) - 1;
                    baseYN = lastYN = lastYP + 2;
                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
                        seriesIndex = locationMap[j][m];
                        serie = series[seriesIndex];
                        data = serie.data[i];
                        value = typeof data != 'undefined'
                                ? (typeof data.value != 'undefined'
                                  ? data.value
                                  : data)
                                : '-';
                        if (value == '-') {
                            // 空数据在做完后补充拖拽提示框
                            continue;
                        }
                        y = valueAxis.getCoord(value);
                        if (value > 0) {
                            // 正向堆叠
                            barHeight = baseYP - y;
                            // 非堆叠数据最小高度有效
                            if (n == 1
                                && barMinHeightMap[seriesIndex] > barHeight
                            ) {
                                barHeight = barMinHeightMap[seriesIndex];
                            }
                            lastYP -= barHeight;
                            y = lastYP;
                            lastYP -= 0.5; //白色视觉分隔线宽修正
                        }
                        else if (value < 0){
                            // 负向堆叠
                            barHeight = y - baseYN;
                            // 非堆叠数据最小高度有效
                            if (n == 1
                                && barMinHeightMap[seriesIndex] > barHeight
                            ) {
                                barHeight = barMinHeightMap[seriesIndex];
                            }
                            y = lastYN;
                            lastYN += barHeight;
                            lastYN += 0.5; //白色视觉分隔线宽修正
                        }
                        else {
                            // 0值
                            barHeight = baseYP - y;
                            // 最小高度无效
                            lastYP -= barHeight;
                            y = lastYP;
                            lastYP -= 0.5; //白色视觉分隔线宽修正
                        }

                        barShape = _getBarItem(
                            seriesIndex, i,
                            categoryAxis.getNameByIndex(i),
                            x, y,
                            barWidthMap[seriesIndex] || barWidth,
                            barHeight
                        );
                        barShape._orient = 'vertical';

                        self.shapeList.push(barShape);
                    }

                    // 补充空数据的拖拽提示框
                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
                        seriesIndex = locationMap[j][m];
                        serie = series[seriesIndex];
                        data = serie.data[i];
                        value = typeof data != 'undefined'
                                ? (typeof data.value != 'undefined'
                                  ? data.value
                                  : data)
                                : '-';
                        if (value != '-') {
                            // 只关心空数据
                            continue;
                        }

                        if (self.deepQuery(
                                [data, serie, option], 'calculable'
                            )
                        ) {
                            lastYP -= barMinHeightMap[seriesIndex];
                            y = lastYP;

                            barShape = _getBarItem(
                                seriesIndex, i,
                                categoryAxis.getNameByIndex(i),
                                x + 1, y,
                                (barWidthMap[seriesIndex] || barWidth) - 2,
                                barMinHeightMap[seriesIndex]
                            );
                            barShape.hoverable = false;
                            barShape.draggable = false;
                            barShape.style.brushType = 'stroke';
                            barShape.style.strokeColor =
                                    serie.calculableHolderColor
                                    || ecConfig.calculableHolderColor;

                            self.shapeList.push(barShape);
                        }
                    }

                    x += ((barWidthMap[seriesIndex] || barWidth) + barGap);
                }
            }
        }

        /**
         * 构建类目轴为垂直方向的柱形图系列
         */
        function _buildVertical(maxDataLength, locationMap) {
            // 确定类目轴和数值轴，同一方向随便找一个即可
            var seriesIndex = locationMap[0][0];
            var serie = series[seriesIndex];
            var yAxisIndex = serie.yAxisIndex;
            var categoryAxis = component.yAxis.getAxis(yAxisIndex);
            var xAxisIndex; // 数值轴各异
            var valueAxis;  // 数值轴各异

            var size = _mapSize(categoryAxis, locationMap);
            var gap = size.gap;
            var barGap = size.barGap;
            var barWidthMap = size.barWidthMap;
            var barWidth = size.barWidth;                   // 自适应宽度
            var barMinHeightMap = size.barMinHeightMap;
            var barHeight;

            var x;
            var y;
            var lastXP; // 正向堆叠处理
            var baseXP;
            var lastXN; // 负向堆叠处理
            var baseXN;
            var barShape;
            var data;
            var value;
            for (var i = 0, l = maxDataLength; i < l; i++) {
                if (typeof categoryAxis.getNameByIndex(i) == 'undefined') {
                    // 系列数据超出类目轴长度
                    break;
                }
                y = categoryAxis.getCoordByIndex(i) + gap / 2;
                for (var j = 0, k = locationMap.length; j < k; j++) {
                    // 堆叠数据用第一条valueAxis
                    xAxisIndex = series[locationMap[j][0]].xAxisIndex || 0;
                    valueAxis = component.xAxis.getAxis(xAxisIndex);
                    baseXP = lastXP = valueAxis.getCoord(0) + 1;
                    baseXN = lastXN = lastXP - 2;
                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
                        seriesIndex = locationMap[j][m];
                        serie = series[seriesIndex];
                        data = serie.data[i];
                        value = typeof data != 'undefined'
                                ? (typeof data.value != 'undefined'
                                  ? data.value
                                  : data)
                                : '-';
                        if (value == '-') {
                            // 空数据在做完后补充拖拽提示框
                            continue;
                        }
                        x = valueAxis.getCoord(value);
                        if (value > 0) {
                            // 正向堆叠
                            barHeight = x - baseXP;
                            // 非堆叠数据最小高度有效
                            if (n == 1
                                && barMinHeightMap[seriesIndex] > barHeight
                            ) {
                                barHeight = barMinHeightMap[seriesIndex];
                            }
                            x = lastXP;
                            lastXP += barHeight;
                            lastXP += 0.5; //白色视觉分隔线宽修正
                        }
                        else if (value < 0){
                            // 负向堆叠
                            barHeight = baseXN - x;
                            // 非堆叠数据最小高度有效
                            if (n == 1
                                && barMinHeightMap[seriesIndex] > barHeight
                            ) {
                                barHeight = barMinHeightMap[seriesIndex];
                            }
                            lastXN -= barHeight;
                            x = lastXN;
                            lastXN -= 0.5; //白色视觉分隔线宽修正
                        }
                        else {
                            // 0值
                            barHeight = x - baseXP;
                            // 最小高度无效
                            x = lastXP;
                            lastXP += barHeight;
                            lastXP += 0.5; //白色视觉分隔线宽修正
                        }

                        barShape = _getBarItem(
                            seriesIndex, i,
                            categoryAxis.getNameByIndex(i),
                            x, y - (barWidthMap[seriesIndex] || barWidth),
                            barHeight,
                            barWidthMap[seriesIndex] || barWidth
                        );
                        barShape._orient = 'horizontal';

                        self.shapeList.push(barShape);
                    }

                    // 补充空数据的拖拽提示框
                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
                        seriesIndex = locationMap[j][m];
                        serie = series[seriesIndex];
                        data = serie.data[i];
                        value = typeof data != 'undefined'
                                ? (typeof data.value != 'undefined'
                                  ? data.value
                                  : data)
                                : '-';
                        if (value != '-') {
                            // 只关心空数据
                            continue;
                        }

                        if (self.deepQuery(
                                [data, serie, option], 'calculable'
                            )
                        ) {
                            x = lastXP;
                            lastXP += barMinHeightMap[seriesIndex];

                            barShape = _getBarItem(
                                seriesIndex,
                                i,
                                categoryAxis.getNameByIndex(i),
                                x,
                                y + 1 - (barWidthMap[seriesIndex] || barWidth),
                                barMinHeightMap[seriesIndex],
                                (barWidthMap[seriesIndex] || barWidth) - 2
                            );
                            barShape.hoverable = false;
                            barShape.draggable = false;
                            barShape.style.brushType = 'stroke';
                            barShape.style.strokeColor =
                                    serie.calculableHolderColor
                                    || ecConfig.calculableHolderColor;

                            self.shapeList.push(barShape);
                        }
                    }

                    y -= ((barWidthMap[seriesIndex] || barWidth) + barGap);
                }
            }
        }
        /**
         * 我真是自找麻烦啊，为啥要允许系列级个性化最小宽度和高度啊！！！
         * @param {CategoryAxis} categoryAxis 类目坐标轴，需要知道类目间隔大小
         * @param {Array} locationMap 整形数据的系列索引
         */
        function _mapSize(categoryAxis, locationMap, ignoreUserDefined) {
            var barWidthMap = {};
            var barMinHeightMap = {};
            var sBarWidth;
            var sBarWidthCounter = 0;
            var sBarWidthTotal = 0;
            var sBarMinHeight;
            var hasFound;

            for (var j = 0, k = locationMap.length; j < k; j++) {
                hasFound = false;   // 同一堆叠第一个barWidth生效
                for (var m = 0, n = locationMap[j].length; m < n; m++) {
                    seriesIndex = locationMap[j][m];
                    if (!ignoreUserDefined) {
                        if (!hasFound) {
                            sBarWidth = self.deepQuery(
                                [series[seriesIndex]],
                                'barWidth'
                            );
                            if (typeof sBarWidth != 'undefined') {
                                barWidthMap[seriesIndex] = sBarWidth;
                                sBarWidthTotal += sBarWidth;
                                sBarWidthCounter++;
                                hasFound = true;
                            }
                        } else {
                            barWidthMap[seriesIndex] = sBarWidth;   // 用找到的一个
                        }
                    }

                    sBarMinHeight = self.deepQuery(
                        [series[seriesIndex]],
                        'barMinHeight'
                    );
                    if (typeof sBarMinHeight != 'undefined') {
                        barMinHeightMap[seriesIndex] = sBarMinHeight;
                    }
                }
            }

            var gap;
            var barWidth;
            var barGap;
            if (locationMap.length != sBarWidthCounter) {
                // 至少存在一个自适应宽度的柱形图
                gap = Math.round(categoryAxis.getGap() * 4 / 5);
                barWidth = Math.round(
                        ((gap - sBarWidthTotal) * 3)
                        / (4 * (locationMap.length) - 3 * sBarWidthCounter - 1)
                    );
                barGap = Math.round(barWidth / 3);
                if (barWidth < 0) {
                    // 无法满足用户定义的宽度设计，忽略用户宽度，打回重做
                    return _mapSize(categoryAxis, locationMap, true);
                }
            }
            else {
                // 全是自定义宽度
                barWidth = 0;
                barGap = Math.round((sBarWidthTotal / sBarWidthCounter) / 3);
                gap = sBarWidthTotal + barGap * (sBarWidthCounter - 1);
                if (Math.round(categoryAxis.getGap() * 4 / 5) < gap) {
                    // 无法满足用户定义的宽度设计，忽略用户宽度，打回重做
                    return _mapSize(categoryAxis, locationMap, true);
                }
            }


            return {
                barWidthMap : barWidthMap,
                barMinHeightMap : barMinHeightMap ,
                gap : gap,
                barWidth : barWidth,
                barGap : barGap
            };
        }

        /**
         * 生成最终图形数据
         */
        function _getBarItem(
            seriesIndex, dataIndex, name, x, y, width, height
        ) {
            var barShape;
            var serie = series[seriesIndex];
            var data = serie.data[dataIndex];
            // 多级控制
            var defaultColor = _sIndex2colorMap[seriesIndex];
            var normalColor = self.deepQuery(
                [data, serie],
                'itemStyle.normal.color'
            );
            var emphasisColor = self.deepQuery(
                [data, serie],
                'itemStyle.emphasis.color'
            );

            barShape = {
                shape : 'rectangle',
                zlevel : _zlevelBase,
                clickable: true,
                style : {
                    x : x,
                    y : y,
                    width : width,
                    height : height,
                    brushType : 'both',
                    color : normalColor || defaultColor,
                    strokeColor : '#fff'
                },
                highlightStyle : {
                    color : emphasisColor || normalColor || defaultColor
                }
            };

            if (self.deepQuery(
                    [data, serie, option],
                    'calculable'
                )
            ) {
                self.setCalculable(barShape);
                barShape.draggable = true;
            }

            ecData.pack(
                barShape,
                series[seriesIndex], seriesIndex,
                series[seriesIndex].data[dataIndex], dataIndex,
                name
            );

            return barShape;
        }

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newSeries
         * @param {Object} newComponent
         */
        function init(newOption, newComponent) {
            option = newOption;
            component = newComponent;

            series = option.series;

            self.clear();
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            self.clear();
            _buildShape();
        }

        /**
         * 动画设定
         */
        function animation() {
            var duration;
            var easing;
            var width;
            var height;
            var x;
            var y;
            var serie;
            var dataIndex;
            var value;
            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                if (self.shapeList[i].shape == 'rectangle') {
                    serie = ecData.get(self.shapeList[i], 'series');
                    dataIndex = ecData.get(self.shapeList[i], 'dataIndex');
                    value = ecData.get(self.shapeList[i], 'value');
                    duration = self.deepQuery(
                        [serie, option], 'animationDuration'
                    );
                    easing = self.deepQuery(
                        [serie, option], 'animationEasing'
                    );

                    if (self.shapeList[i]._orient == 'horizontal') {
                        // 条形图
                        width = self.shapeList[i].style.width;
                        x = self.shapeList[i].style.x;
                        if (value < 0) {
                            zr.modShape(
                                self.shapeList[i].id,
                                {
                                    style: {
                                        x : x + width,
                                        width: 0
                                    }
                                }
                            );
                            zr.animate(self.shapeList[i].id, 'style')
                                .when(
                                    duration + dataIndex * 100,
                                    {
                                        x : x,
                                        width : width
                                    },
                                    easing
                                )
                                .start();
                        }
                        else {
                            zr.modShape(
                                self.shapeList[i].id,
                                {
                                    style: {
                                        width: 0
                                    }
                                }
                            );
                            zr.animate(self.shapeList[i].id, 'style')
                                .when(
                                    duration + dataIndex * 100,
                                    {
                                        width : width
                                    },
                                    easing
                                )
                                .start();
                        }
                    }
                    else {
                        // 柱形图
                        height = self.shapeList[i].style.height;
                        y = self.shapeList[i].style.y;
                        if (value < 0) {
                            zr.modShape(
                                self.shapeList[i].id,
                                {
                                    style: {
                                        height: 0
                                    }
                                }
                            );
                            zr.animate(self.shapeList[i].id, 'style')
                                .when(
                                    duration + dataIndex * 100,
                                    {
                                        height : height
                                    },
                                    easing
                                )
                                .start();
                        }
                        else {
                            zr.modShape(
                                self.shapeList[i].id,
                                {
                                    style: {
                                        y: y + height,
                                        height: 0
                                    }
                                }
                            );
                            zr.animate(self.shapeList[i].id, 'style')
                                .when(
                                    duration + dataIndex * 100,
                                    {
                                        y : y,
                                        height : height
                                    },
                                    easing
                                )
                                .start();
                        }
                    }
                }
            }
        }

        self.init = init;
        self.refresh = refresh;
        self.animation = animation;

        init(option, component);
    }

    // 图表注册
    require('../chart').define('bar', Bar);
    
    return Bar;
});
/**
 * zrender: 图形空间辅助类
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * isInside：是否在区域内部
 * isOutside：是否在区域外部
 * getTextWidth：测算单行文本宽度
 */
define(
    'zrender/tool/area',['require','../tool/util'],function(require) {
        var util = require('../tool/util');

        var _ctx;

        /**
         * 包含判断
         * @param {string} shapeClazz : 图形类
         * @param {Object} area ： 目标区域
         * @param {number} x ： 横坐标
         * @param {number} y ： 纵坐标
         */
        function isInside(shapeClazz, area, x, y) {
            if (!area || !shapeClazz) {
                // 无参数或不支持类型
                return false;
            }
            var zoneType = shapeClazz.type;

            if (!_ctx) {
                _ctx = util.getContext();
            }
            if (!_isInsideRectangle(
                    area.__rect || shapeClazz.getRect(area), x, y
                 )
             ) {
                // 不在矩形区域内直接返回false
                return false;
            }

            // 未实现或不可用时(excanvas不支持)则数学运算，主要是line，brokenLine，ring
            var _mathReturn = _mathMethod(zoneType, area, x, y);

            if (typeof _mathReturn != 'undefined') {
                return _mathReturn;
            }

            if (zoneType != 'beziercurve'
                && shapeClazz.buildPath
                && _ctx.isPointInPath
            ) {
                return _buildPathMethod(shapeClazz, _ctx, area, x, y);
            }
            else if (_ctx.getImageData) {
                return _pixelMethod(shapeClazz, area, x, y);
            }

            // 上面的方法都行不通时
            switch (zoneType) {
                //心形----------------------10
                case 'heart':
                    return true;    // Todo，不精确
                //水滴----------------------11
                case 'droplet':
                    return true;    // Todo，不精确
                case 'ellipse':
                    return true;     // Todo，不精确
                // 旋轮曲线  不准确
                case 'trochoid':
                    var _r = area.location == 'out'
                            ? area.r1 + area.r2 + area.d
                            : area.r1 - area.r2 + area.d;
                    return _isInsideCircle(area, x, y, _r);
                // 玫瑰线 不准确
                case 'rose' :
                    return _isInsideCircle(area, x, y, area.maxr);
                //路径，椭圆，曲线等-----------------13
                default:
                    return false;   // Todo，暂不支持
            }
        }

        /**
         * 用数学方法判断，三个方法中最快，但是支持的shape少
         *
         * @param {string} zoneType ： 图形类型
         * @param {Object} area ：目标区域
         * @param {number} x ： 横坐标
         * @param {number} y ： 纵坐标
         * @return {boolean=} true表示坐标处在图形中
         */
        function _mathMethod(zoneType, area, x, y) {
            // 在矩形内则部分图形需要进一步判断
            switch (zoneType) {
                //线-----------------------1
                case 'line':
                    return _isInsideLine(area, x, y);
                //折线----------------------2
                case 'brokenLine':
                    return _isInsideBrokenLine(area, x, y);
                //文本----------------------3
                case 'text':
                    return true;
                //圆环----------------------4
                case 'ring':
                    return _isInsideRing(area, x, y);
                //矩形----------------------5
                case 'rectangle':
                    return true;
                //圆形----------------------6
                case 'circle':
                    return _isInsideCircle(area, x, y, area.r);
                //扇形----------------------7
                case 'sector':
                    return _isInsideSector(area, x, y);
                //多边形---------------------8
                case 'path':
                    return _isInsidePath(area, x, y);
                case 'polygon':
                case 'star':
                case 'isogon':
                    return _isInsidePolygon(area, x, y);
                //图片----------------------9
                case 'image':
                    return true;
            }
        }

        /**
         * 通过buildPath方法来判断，三个方法中较快，但是不支持线条类型的shape，
         * 而且excanvas不支持isPointInPath方法
         *
         * @param {Object} shapeClazz ： shape类
         * @param {Object} context : 上下文
         * @param {Object} area ：目标区域
         * @param {number} x ： 横坐标
         * @param {number} y ： 纵坐标
         * @return {boolean} true表示坐标处在图形中
         */
        function _buildPathMethod(shapeClazz, context, area, x, y) {
            // 图形类实现路径创建了则用类的path
            context.beginPath();
            shapeClazz.buildPath(context, area);
            context.closePath();
            return context.isPointInPath(x, y);
        }

        /**
         * 通过像素值来判断，三个方法中最慢，但是支持广,不足之处是excanvas不支持像素处理
         *
         * @param {Object} shapeClazz ： shape类
         * @param {Object} area ：目标区域
         * @param {number} x ： 横坐标
         * @param {number} y ： 纵坐标
         * @return {boolean} true表示坐标处在图形中
         */
        function _pixelMethod(shapeClazz, area, x, y) {
            var _rect = area.__rect || shapeClazz.getRect(area);
            var _context = util.getPixelContext();
            var _offset = util.getPixelOffset();

            util.adjustCanvasSize(x, y);
            _context.clearRect(_rect.x, _rect.y, _rect.width, _rect.height);
            _context.beginPath();
            shapeClazz.brush(_context, {style : area});
            _context.closePath();

            return _isPainted(_context, x + _offset.x, y + _offset.y);
        }

        /**
         * 坐标像素值，判断坐标是否被作色
         *
         * @param {Object} context : 上下文
         * @param {number} x : 横坐标
         * @param {number} y : 纵坐标
         * @param {number=} unit : 触发的精度，越大越容易触发，可选，缺省是为1
         * @return {boolean} 已经被画过返回true
         */
        function _isPainted(context, x, y, unit) {
            var pixelsData;

            if (typeof unit != 'undefined') {
                unit = Math.floor((unit || 1 )/ 2);
                pixelsData = context.getImageData(
                    x - unit,
                    y - unit,
                    unit + unit,
                    unit + unit
                ).data;
            }
            else {
                pixelsData = context.getImageData(x, y, 1, 1).data;
            }

            var len = pixelsData.length;
            while (len--) {
                if (pixelsData[len] !== 0) {
                    return true;
                }
            }

            return false;
        }

        /**
         * !isInside
         */
        function isOutside(shapeClazz, area, x, y) {
            return !isInside(shapeClazz, area, x, y);
        }

        /**
         * 线段包含判断
         */
        function _isInsideLine(area, x, y) {
            var _x1 = area.xStart;
            var _y1 = area.yStart;
            var _x2 = area.xEnd;
            var _y2 = area.yEnd;
            var _l = area.lineWidth;
            var _a = 0;
            var _b = _x1;

            if (_x1 !== _x2) {
                _a = (_y1 - _y2) / (_x1 - _x2);
                _b = (_x1 * _y2 - _x2 * _y1) / (_x1 - _x2) ;
            }
            else {
                return Math.abs(x - _x1) <= _l / 2;
            }

            var _s = (_a * x - y + _b) * (_a * x - y + _b) / (_a * _a + 1);
            return  _s <= _l / 2 * _l / 2;
        }

        function _isInsideBrokenLine(area, x, y) {
            var pointList = area.pointList;
            var lineArea;
            var insideCatch = false;
            for (var i = 0, l = pointList.length - 1; i < l; i++) {
                lineArea = {
                    xStart : pointList[i][0],
                    yStart : pointList[i][1],
                    xEnd : pointList[i + 1][0],
                    yEnd : pointList[i + 1][1],
                    lineWidth : area.lineWidth
                };
                if (!_isInsideRectangle(
                        {
                            x : Math.min(lineArea.xStart, lineArea.xEnd)
                                - lineArea.lineWidth,
                            y : Math.min(lineArea.yStart, lineArea.yEnd)
                                - lineArea.lineWidth,
                            width : Math.abs(lineArea.xStart - lineArea.xEnd)
                                    + lineArea.lineWidth,
                            height : Math.abs(lineArea.yStart - lineArea.yEnd)
                                     + lineArea.lineWidth
                        },
                        x,y
                    )
                ) {
                    // 不在矩形区内跳过
                    continue;
                }
                insideCatch = _isInsideLine(lineArea, x, y);
                if (insideCatch) {
                    break;
                }
            }
            return insideCatch;
        }

        function _isInsideRing(area, x, y) {
            if (_isInsideCircle(area, x, y, area.r)
                && !_isInsideCircle(
                    {
                        x : area.x,
                        y : area.y
                    },
                    x, y,
                    area.r0 || 0
                )
            ){
                // 大圆内，小圆外
                return true;
            }
            return false;
        }

        /**
         * 矩形包含判断
         */
        function _isInsideRectangle(area, x, y) {
            if (x >= area.x
                && x <= (area.x + area.width)
                && y >= area.y
                && y <= (area.y + area.height)
            ) {
                return true;
            }
            return false;
        }

        /**
         * 圆形包含判断
         */
        function _isInsideCircle(area, x, y, r) {
            return (x - area.x) * (x - area.x) + (y - area.y) * (y - area.y)
                   < r * r;
        }

        /**
         * 扇形包含判断
         */
        function _isInsideSector(area, x, y) {
            if (!_isInsideCircle(area, x, y, area.r)
                || (area.r0 > 0
                    && _isInsideCircle(
                            {
                                x : area.x,
                                y : area.y
                            },
                            x, y,
                            area.r0
                        )
                    )
            ){
                // 大圆外或者小圆内直接false
                return false;
            }
            else {
                // 判断夹角
                var angle = (360
                             - Math.atan2(y - area.y, x - area.x)
                             / Math.PI
                             * 180)
                             % 360;
                var endA = (360 + area.endAngle) % 360;
                var startA = (360 + area.startAngle) % 360;
                if (endA > startA) {
                    return (angle >= startA && angle <= endA);
                } else {
                    return !(angle >= endA && angle <= startA);
                }

            }
        }

        /**
         * 多边形包含判断
         * 警告：下面这段代码会很难看，建议跳过~
         */
        function _isInsidePolygon(area, x, y) {
            /**
             * 射线判别法
             * 如果一个点在多边形内部，任意角度做射线肯定会与多边形要么有一个交点，要么有与多边形边界线重叠
             * 如果一个点在多边形外部，任意角度做射线要么与多边形有一个交点，
             * 要么有两个交点，要么没有交点，要么有与多边形边界线重叠。
             */
            var i;
            var j;
            var polygon = area.pointList;
            var N = polygon.length;
            var inside = false;
            var redo = true;
            var v;

            for (i = 0; i < N; ++i) {
                // 是否在顶点上
                if (polygon[i][0] == x && polygon[i][1] == y ) {
                    redo = false;
                    inside = true;
                    break;
                }
            }

            if (redo) {
                redo = false;
                inside = false;
                for (i = 0,j = N - 1;i < N;j = i++) {
                    if ((polygon[i][1] < y && y < polygon[j][1])
                        || (polygon[j][1] < y && y < polygon[i][1])
                    ) {
                        if (x <= polygon[i][0] || x <= polygon[j][0]) {
                            v = (y - polygon[i][1])
                                * (polygon[j][0] - polygon[i][0])
                                / (polygon[j][1] - polygon[i][1])
                                + polygon[i][0];
                            if (x < v) {          // 在线的左侧
                                inside = !inside;
                            }
                            else if (x == v) {   // 在线上
                                inside = true;
                                break;
                            }
                        }
                    }
                    else if (y == polygon[i][1]) {
                        if (x < polygon[i][0]) {    // 交点在顶点上
                            polygon[i][1] > polygon[j][1] ? --y : ++y;
                            //redo = true;
                            break;
                        }
                    }
                    else if (polygon[i][1] == polygon[j][1] // 在水平的边界线上
                             && y == polygon[i][1]
                             && ((polygon[i][0] < x && x < polygon[j][0])
                                 || (polygon[j][0] < x && x < polygon[i][0]))
                    ) {
                        inside = true;
                        break;
                    }
                }
            }
            return inside;
        }
        
        /**
         * 路径包含判断，依赖多边形判断
         */
        function _isInsidePath(area, x, y) {
            var pointList = area.pointList;
            var insideCatch = false;
            for (var i = 0, l = pointList.length; i < l; i++) {
                insideCatch = _isInsidePolygon(
                    { pointList : pointList[i] }, x, y
                );
                if (insideCatch) {
                    break;
                }
            }
            return insideCatch;
        }

        /**
         * 测算单行文本欢度
         * @param {Object} text
         * @param {Object} textFont
         */
        function getTextWidth(text, textFont) {
            if (!_ctx) {
                _ctx = util.getContext();
            }

            _ctx.save();
            if (textFont) {
                _ctx.font = textFont;
            }
            var width = _ctx.measureText(text).width;
            _ctx.restore();

            return width;
        }

        return {
            isInside : isInside,
            isOutside : isOutside,
            getTextWidth : getTextWidth
        };
    }
);

/**
 * zrender: 3x2矩阵操作类
 *
 * author: lang(shenyi01@baidu.com)
 * code from mat2d in http://glmatrix.net/
 */

define(
    'zrender/tool/matrix',[],function() {

        var matrix = {
            create : function() {
                return [1, 0,
                        0, 1,
                        0, 0];
            },
            identity : function(out) {
                out[0] = 1;
                out[1] = 0;
                out[2] = 0;
                out[3] = 1;
                out[4] = 0;
                out[5] = 0;
            },
            mul : function(out, m1, m2) {
               out[0] = m1[0] * m2[0] + m1[2] * m2[1];
               out[1] = m1[1] * m2[0] + m1[3] * m2[1];
               out[2] = m1[0] * m2[2] + m1[2] * m2[3];
               out[3] = m1[1] * m2[2] + m1[3] * m2[3];
               out[4] = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
               out[5] = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
               return out;
            },

            translate : function(out, a, v) {
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                out[4] = a[4] + v[0];
                out[5] = a[5] + v[1];
                return out;
            },
            rotate : function(out, a, rad) {
                var aa = a[0], ac = a[2], atx = a[4];
                var ab = a[1], ad = a[3], aty = a[5];
                var st = Math.sin(rad);
                var ct = Math.cos(rad);

                out[0] = aa*ct + ab*st;
                out[1] = -aa*st + ab*ct;
                out[2] = ac*ct + ad*st;
                out[3] = -ac*st + ct*ad;
                out[4] = ct*atx + st*aty;
                out[5] = ct*aty - st*atx;
                return out;
            },
            scale : function(out, a, v) {
                var vx = v[0], vy = v[1];
                out[0] = a[0] * vx;
                out[1] = a[1] * vy;
                out[2] = a[2] * vx;
                out[3] = a[3] * vy;
                out[4] = a[4] * vx;
                out[5] = a[5] * vy;
                return out;
            },
            /**
             * 求逆矩阵
             */
            invert : function(out, a) {
            
                var aa = a[0], ac = a[2], atx = a[4];
                var ab = a[1], ad = a[3], aty = a[5];

                var det = aa * ad - ab * ac;
                if(!det){
                    return null;
                }
                det = 1.0 / det;

                out[0] = ad * det;
                out[1] = -ab * det;
                out[2] = -ac * det;
                out[3] = aa * det;
                out[4] = (ac * aty - ad * atx) * det;
                out[5] = (ab * atx - aa * aty) * det;
                return out;
            },

            /**
             * 矩阵左乘向量
             */
            mulVector : function(out, a, v) {
                var aa = a[0], ac = a[2], atx = a[4];
                var ab = a[1], ad = a[3], aty = a[5];

                out[0] = v[0] * aa + v[1] * ac + atx;
                out[1] = v[0] * ab + v[1] * ad + aty;

                return out;
            }
        };

        return matrix;
    }
);
/**
 * zrender : shape基类
 *
 * desc:    zrender是一个轻量级的Canvas类库，MVC封装，数据驱动，提供类Dom事件模型。
 * author:  Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * 可配图形属性：
   {
       // 基础属性，详见各shape
       shape  : {string},       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 变换
       position : {array},        // 默认为[0, 0], shape的坐标
       rotation : {number|array}, // 默认为[0, 0, 0]，shape绕自身旋转的角度，不被translate 影响
                                  // 后两个值为旋转的origin
       scale : {array},           // 默认为[1, 1, 0, 0], shape纵横缩放比例，不被translate影响
                                  // 后两个值为缩放的origin

       // 样式属性，详见各shape，默认状态样式属性
       style  : {Object},

       // 样式属性，详见各shape，高亮样式属性，当不存在highlightStyle时使用默认样式扩展显示
       highlightStyle : {Object},

       // 交互属性，zrender支持，非图形类实现
       hoverable : {boolean},   // 默认为true，可悬浮响应，默认悬浮响应为高亮显示
                                // 可在onbrush中捕获并阻塞高亮绘画
       clickable : {boolean},   // 默认为false，可点击响应，影响鼠标hover时图标是否为可点击样式
                                // 为false则阻断点击事件抛出，为true可在onclick中捕获
       draggable : {boolean},   // 默认为false，可拖拽响应，默认拖拽响应改变图形位置，
                                // 可在ondrift中捕获并阻塞默认拖拽行为

       // 事件属性
       onbrush : {Function}, // 默认为null，当前图形被刷画时回调，可用于实现自定义绘画
                 // 回传参数为：
                 // @param {2D Context} context 当前canvas context
                 // @param {Object} shape 当前shape
                 // @param {boolean} isHighlight 是否高亮
                 // @return {boolean} 回调返回true则不执行默认绘画
       ondrift : {Function}, // 默认为null，当前图形被拖拽改变位置时回调，可用于限制拖拽范围
                 // 回传参数为：
                 // @param {Object} shape 当前shape
                 // @param {number} dx x方向变化
                 // @param {number} dy y方向变化
       onclick : {Function}, // 默认为null，当前图形点击响应，回传参数为：
                 // @param {Object} eventPacket 对象内容如下：
                 // @param {string} eventPacket.type 事件类型，EVENT.CLICK
                 // @param {event} eventPacket.event 原始dom事件对象
                 // @param {Object} eventPacket.target 当前图形shape对象
                 // @return {boolean} 回调返回true则阻止抛出全局事件

       onmousewheel : {Function}, // 默认为null，当前图形上鼠标滚轮触发，回传参数格式同onclick，其中：
                      // 事件类型为confit.EVENT.MOUSEWHEEL
                      // @return {boolean} 回调返回true则阻止抛出全局事件

       onmousemove : {Function}, // 默认为null，当前图上形鼠标（或手指）移动触发，回传参数格式同onclick，其中：
                     // 事件类型为confit.EVENT.MOUSEMOVE
                     // @return {boolean} 回调返回true则阻止抛出全局事件

       onmouseover : {Function}, // 默认为null，鼠标（或手指）移动到当前图形上触发，回传参数格式同onclick：
                     // 事件类型为confit.EVENT.MOUSEOVER
                     // @return {boolean} 回调返回true则阻止抛出全局事件

       onmouseout : {Function}, // 默认为null，鼠标（或手指）从当前图形移开，回传参数格式同onclick，其中：
                    // 事件类型为confit.EVENT.MOUSEOUT
                    // @return {boolean} 回调返回true则阻止抛出全局事件

       onmousedown : {Function}, // 默认为null，鼠标按钮（或手指）按下，回传参数格式同onclick，其中：
                     // 事件类型为confit.EVENT.MOUSEDOWN
                     // @return {boolean} 回调返回true则阻止抛出全局事件

       onmouseup : {Function}, // 默认为null，鼠标按钮（或手指）松开，回传参数格式同onclick，其中：
                   // 事件类型为confit.EVENT.MOUSEUP
                   // @return {boolean} 回调返回true则阻止抛出全局事件

       ondragstart : {Function}, // 默认为null，开始拖拽时触发，回传参数格式同onclick，其中：
                     // 事件类型为confit.EVENT.DRAGSTART
                     // @return {boolean} 回调返回true则阻止抛出全局事件

       ondragend : {Function}, // 默认为null，拖拽完毕时触发，回传参数格式同onclick，其中：
                   // 事件类型为confit.EVENT.DRAGEND
                   // @return {boolean} 回调返回true则阻止抛出全局事件

       ondragenter : {Function}, // 默认为null，拖拽图形元素进入目标图形元素时触发
                     // 回传参数格式同onclick，其中：
                     // @param {string} eventPacket.type 事件类型，EVENT.DRAGENTER
                     // @param {Object} eventPacket.target 目标图形元素shape对象
                     // @param {Object} eventPacket.dragged 拖拽图形元素shape对象
                     // @return {boolean} 回调返回true则阻止抛出全局事件

       ondragover : {Function}, // 默认为null，拖拽图形元素在目标图形元素上移动时触发，
                    // 回传参数格式同onclick，其中：
                    // @param {string} eventPacket.type 事件类型，EVENT.DRAGOVER
                    // @param {Object} eventPacket.target 目标图形元素shape对象
                    // @param {Object} eventPacket.dragged 拖拽图形元素shape对象
                    // @return {boolean} 回调返回true则阻止抛出全局事件

       ondragleave : {Function}, // 默认为null，拖拽图形元素离开目标图形元素时触发，
                     // 回传参数格式同onclick，其中：
                     // @param {string} eventPacket.type 事件类型，EVENT.DRAGLEAVE
                     // @param {Object} eventPacket.target 目标图形元素shape对象
                     // @param {Object} eventPacket.dragged 拖拽图形元素shape对象
                     // @return {boolean} 回调返回true则阻止抛出全局事件

       ondrop : {Function}, // 默认为null，拖拽图形元素放在目标图形元素内时触发，
                // 回传参数格式同onclick，其中：
                // @param {string} eventPacket.type 事件类型，EVENT.DRAG
                // @param {Object} eventPacket.target 目标图形元素shape对象
                // @param {Object} eventPacket.dragged 拖拽图形元素shape对象
                // @return {boolean} 回调返回true则阻止抛出全局事件
   }
 */
define(
    'zrender/shape/base',['require','../tool/area','../tool/matrix','../tool/color'],function(require) {

        var self;
        var area = require('../tool/area');
        var matrix = require('../tool/matrix');

        /**
         * 派生实现通用功能
         * @param {Object} clazz 图形类
         */
        function derive(clazz) {
            var methods = [             // 派生实现的基类方法
                    'brush',
                    'setContext',
                    'drawText',
                    'getHighlightStyle',
                    'getHighlightZoom',
                    'drift',
                    'isCover',
                    'updateTransform'
                ];
            var len = methods.length;
            var proto = clazz.prototype;
            var i = 0;
            var method;

            for (; i < len; i++) {
                method = methods[i];
                if (!proto[method]) {
                    proto[method] = self[method];
                }
            }
        }

        /**
         * 画刷
         * @param ctx       画布句柄
         * @param e         形状实体
         * @param isHighlight   是否为高亮状态
         * @param updateCallback 需要异步加载资源的shape可以通过这个callback(e)
         *                       让painter更新视图，base.brush没用，需要的话重载brush
         */
        function brush(ctx, e, isHighlight) {
            var style = e.style || {};

            if (this.brushTypeOnly) {
                style.brushType = this.brushTypeOnly;
            }

            if (isHighlight) {
                // 根据style扩展默认高亮样式
                style = this.getHighlightStyle(
                    style,
                    e.highlightStyle || {},
                    this.brushTypeOnly
                );
            }

            if (this.brushTypeOnly == 'stroke') {
                style.strokeColor = style.strokeColor || style.color;
            }

            ctx.save();
            this.setContext(ctx, style);

            // 设置transform
            if (e.__needTransform) {
                ctx.transform.apply(ctx,this.updateTransform(e));
            }

            ctx.beginPath();
            this.buildPath(ctx, style);
            if (this.brushTypeOnly != 'stroke') {
                ctx.closePath();
            }

            switch (style.brushType) {
                case 'fill':
                    ctx.fill();
                    break;
                case 'stroke':
                    ctx.stroke();
                    break;
                case 'both':
                    ctx.stroke();
                    ctx.fill();
                    break;
                default:
                    ctx.fill();
            }

            if (style.text) {
                this.drawText(ctx, style, e.style);
            }

            ctx.restore();

            return;
        }

        /**
         * 画布通用设置
         * @param ctx       画布句柄
         * @param style     通用样式
         */
        function setContext(ctx, style) {
            // 简单判断不做严格类型检测
            if (style.color) {
                ctx.fillStyle = style.color;
            }

            if (style.strokeColor) {
                ctx.strokeStyle = style.strokeColor;
            }

            if (typeof style.opacity != 'undefined') {
                ctx.globalAlpha = style.opacity;
            }

            if (style.lineCap) {
                ctx.lineCap = style.lineCap;
            }

            if (style.lineJoin) {
                ctx.lineJoin = style.lineJoin;
            }

            if (style.miterLimit) {
                ctx.miterLimit = style.miterLimit;
            }

            if (typeof style.lineWidth != 'undefined') {
                ctx.lineWidth = style.lineWidth;
            }

            if (typeof style.shadowBlur != 'undefined') {
                ctx.shadowBlur = style.shadowBlur;
            }

            if (style.shadowColor) {
                ctx.shadowColor = style.shadowColor;
            }

            if (typeof style.shadowOffsetX != 'undefined') {
                ctx.shadowOffsetX = style.shadowOffsetX;
            }

            if (typeof style.shadowOffsetY != 'undefined') {
                ctx.shadowOffsetY = style.shadowOffsetY;
            }
        }

        /**
         * 附加文本
         * @param {Context2D} ctx Canvas 2D上下文
         * @param {Object} style 样式
         * @param {Object} normalStyle 默认样式，用于定位文字显示
         */
        function drawText(ctx, style, normalStyle) {
            // 字体颜色策略
            style.textColor= style.textColor
                            || style.color
                            || style.strokeColor;
            ctx.fillStyle = style.textColor;

            if (style.textPosition == 'inside') {
                ctx.shadowColor = 'rgba(0,0,0,0)';   // 内部文字不带shadowColor
            }

            // 文本与图形间空白间隙
            var dd = 10;
            var al;         // 文本水平对齐
            var bl;         // 文本垂直对齐
            var tx;         // 文本横坐标
            var ty;         // 文本纵坐标

            var textPosition = style.textPosition       // 用户定义
                               || this.textPosition     // shape默认
                               || 'top';                // 全局默认

            if ((textPosition == 'inside'
                || textPosition == 'top'
                || textPosition == 'bottom'
                || textPosition == 'left'
                || textPosition == 'right')
                && this.getRect // 矩形定位文字的图形必须提供getRect方法
            ) {
                var rect = (normalStyle || style).__rect
                           || this.getRect(normalStyle || style);
                switch (textPosition) {
                    case 'inside':
                        tx = rect.x + rect.width / 2;
                        ty = rect.y + rect.height / 2;
                        al = 'center';
                        bl = 'middle';
                        if (style.brushType != 'stroke'
                            && style.textColor == style.color
                        ) {
                            ctx.fillStyle = '#fff';
                        }
                        break;
                    case 'left':
                        tx = rect.x - dd;
                        ty = rect.y + rect.height / 2;
                        al = 'end';
                        bl = 'middle';
                        break;
                    case 'right':
                        tx = rect.x + rect.width + dd;
                        ty = rect.y + rect.height / 2;
                        al = 'start';
                        bl = 'middle';
                        break;
                    case 'top':
                        tx = rect.x + rect.width / 2;
                        ty = rect.y - dd;
                        al = 'center';
                        bl = 'bottom';
                        break;
                    case 'bottom':
                        tx = rect.x + rect.width / 2;
                        ty = rect.y + rect.height + dd;
                        al = 'center';
                        bl = 'top';
                        break;
                }
            }
            else if (textPosition == 'start' || textPosition == 'end') {
                var xStart;
                var xEnd;
                var yStart;
                var yEnd;
                if (typeof style.pointList != 'undefined') {
                    var pointList = style.pointList;
                    if (pointList.length < 2) {
                        // 少于2个点就不画了~
                        return;
                    }
                    var length = pointList.length;
                    switch (textPosition) {
                        case 'start':
                            xStart = pointList[0][0];
                            xEnd = pointList[1][0];
                            yStart = pointList[0][1];
                            yEnd = pointList[1][1];
                            break;
                        case 'end':
                            xStart = pointList[length - 2][0];
                            xEnd = pointList[length - 1][0];
                            yStart = pointList[length - 2][1];
                            yEnd = pointList[length - 1][1];
                            break;
                    }
                }
                else {
                    xStart = style.xStart || 0;
                    xEnd = style.xEnd || 0;
                    yStart = style.yStart || 0;
                    yEnd = style.yEnd || 0;
                }
                switch (textPosition) {
                    case 'start':
                        al = xStart < xEnd ? 'end' : 'start';
                        bl = yStart < yEnd ? 'bottom' : 'top';
                        tx = xStart;
                        ty = yStart;
                        break;
                    case 'end':
                        al = xStart < xEnd ? 'start' : 'end';
                        bl = yStart < yEnd ? 'top' : 'bottom';
                        tx = xEnd;
                        ty = yEnd;
                        break;
                }
                dd -= 4;
                if (xStart != xEnd) {
                    tx -= (al == 'end' ? dd : -dd);
                } else {
                    al = 'center';
                }
                if (yStart != yEnd) {
                    ty -= (bl == 'bottom' ? dd : -dd);
                } else {
                    bl = 'middle';
                }
            }
            else if (textPosition == 'specific') {
                tx = style.textX || 0;
                ty = style.textY || 0;
                al = 'start';
                bl = 'middle';
            }

            if (typeof tx != 'undefined' && typeof ty != 'undefined') {
                if (style.textFont) {
                    ctx.font = style.textFont;
                }
                ctx.textAlign = style.textAlign || al;
                ctx.textBaseline = style.textBaseLine || bl;

                ctx.fillText(style.text, tx, ty);
            }
        }

        /**
         * 根据默认样式扩展高亮样式
         * @param ctx Canvas 2D上下文
         * @param {Object} style 默认样式
         * @param {Object} highlightStyle 高亮样式
         */
        function getHighlightStyle(style, highlightStyle, brushTypeOnly) {
            var newStyle = {};
            for (var k in style) {
                newStyle[k] = style[k];
            }

            var color = require('../tool/color');
            var highlightColor = color.getHighlightColor();
            // 根据highlightStyle扩展
            if (style.brushType != 'stroke') {
                // 带填充则用高亮色加粗边线
                newStyle.strokeColor = highlightColor;
                newStyle.lineWidth = (style.lineWidth || 1)
                                      + this.getHighlightZoom();
                newStyle.brushType = 'both';
            }
            else {
                if (brushTypeOnly != 'stroke') {
                    // 描边型的则用原色加工高亮
                    newStyle.strokeColor = highlightColor;
                    newStyle.lineWidth = (style.lineWidth || 1)
                                          + this.getHighlightZoom();
                } else {
                    // 线型的则用原色加工高亮
                    newStyle.strokeColor = highlightStyle.strokeColor
                                           || color.mix(
                                                 style.strokeColor,
                                                 color.toRGB(highlightColor)
                                              );
                }
            }

            // 可自定义覆盖默认值
            for (var k in highlightStyle) {
                newStyle[k] = highlightStyle[k];
            }

            return newStyle;
        }

        /**
         * 高亮放大效果参数
         * 当前统一设置为6，如有需要差异设置，通过this.type判断实例类型
         */
        function getHighlightZoom() {
            return this.type != 'text' ? 6 : 2;
        }

        /**
         * 默认漂移
         * @param e 图形实体
         * @param dx 横坐标变化
         * @param dy 纵坐标变化
         */
        function drift(e, dx, dy) {
            e.position[0] += dx;
            e.position[1] += dy;
        }

        /**
         * 默认区域包含判断
         * @param e 图形实体
         * @param x 横坐标
         * @param y 纵坐标
         */
        function isCover(e, x, y) {
            //对鼠标的坐标也做相同的变换
            if(e.__needTransform && e._transform){
                var inverseMatrix = [];
                matrix.invert(inverseMatrix, e._transform);

                var originPos = [x, y];
                matrix.mulVector(originPos, inverseMatrix, [x, y, 1]);

                if (x == originPos[0] && y == originPos[1]) {
                    // 避免外部修改导致的__needTransform不准确
                    if (Math.abs(e.rotation[0]) > 0.0001
                        || Math.abs(e.position[0]) > 0.0001
                        || Math.abs(e.position[1]) > 0.0001
                        || Math.abs(e.scale[0] - 1) > 0.0001
                        || Math.abs(e.scale[1] - 1) > 0.0001
                    ) {
                        e.__needTransform = true;
                    } else {
                        e.__needTransform = false;
                    }
                }

                x = originPos[0];
                y = originPos[1];
            }

            // 快速预判并保留判断矩形
            var rect;
            if (e.style.__rect) {
                rect = e.style.__rect;
            }
            else {
                rect = this.getRect(e.style);
                e.style.__rect = rect;
            }
            if (x >= rect.x
                && x <= (rect.x + rect.width)
                && y >= rect.y
                && y <= (rect.y + rect.height)
            ) {
                // 矩形内
                return area.isInside(this, e.style, x, y);
            }
            else {
                return false;
            }

        }

        function updateTransform(e) {
            var _transform = e._transform || matrix.create();
            matrix.identity(_transform);
            if (e.scale && (e.scale[0] !== 1 || e.scale[1] !== 1)) {
                var originX = e.scale[2] || 0;
                var originY = e.scale[3] || 0;
                if (originX || originY ) {
                    matrix.translate(
                        _transform, _transform, [-originX, -originY]
                    );
                }
                matrix.scale(_transform, _transform, e.scale);
                if ( originX || originY ) {
                    matrix.translate(
                        _transform, _transform, [originX, originY]
                    );
                }
            }
            if (e.rotation) {
                if (e.rotation instanceof Array) {
                    if (e.rotation[0] !== 0) {
                        var originX = e.rotation[1] || 0,
                            originY = e.rotation[2] || 0;
                        if (originX || originY ) {
                            matrix.translate(
                                _transform, _transform, [-originX, -originY]
                            );
                        }
                        matrix.rotate(_transform, _transform, e.rotation[0]);
                        if (originX || originY ) {
                            matrix.translate(
                                _transform, _transform, [originX, originY]
                            );
                        }
                    }
                }else{
                    if (e.rotation !== 0) {
                        matrix.rotate(_transform, _transform, e.rotation);
                    }
                }
            }
            if (e.position && (e.position[0] !==0 || e.position[1] !== 0)) {
                matrix.translate(_transform, _transform, e.position);
            }
            // 保存这个变换矩阵
            e._transform = _transform;

            return _transform;
        }

        self = {
            derive : derive,
            brush : brush,
            setContext : setContext,
            drawText : drawText,
            getHighlightStyle : getHighlightStyle,
            getHighlightZoom : getHighlightZoom,
            drift : drift,
            isCover : isCover,

            updateTransform : updateTransform
        };

        return self;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：大规模散点图图形
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'symbol',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           pointList     : {Array},   // 必须，二维数组，二维内容如下
               x         : {number},  // 必须，横坐标
               y         : {number},  // 必须，纵坐标数组
               size      : {number},  // 必须，半宽
               type      : {string=}, // 默认为'circle',图形类型
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'symbol',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : [100,123,90,125],
           width : 150,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'echarts/util/shape/symbol',['require','zrender/tool/color','zrender/shape','zrender/shape/base','zrender/shape'],function(require) {
        function Symbol() {
            this.type = 'symbol';
        }

        Symbol.prototype =  {
            /*
             * pointlist=[
             *      0  x,
             *      1  y, 
             *      2  图形大小
             *      3  图形类型
             *      4  数据index
             *      5  名称
             * ]
             */
            _buildSinglePoint : function(ctx, singlePoint) {
                switch (singlePoint[3]) {
                    case 'circle' :
                    case 'emptyCircle' :
                        ctx.arc(
                            singlePoint[0], 
                            singlePoint[1], 
                            singlePoint[2],
                            0,
                            Math.PI * 2, 
                            true
                        );
                        break;
                    case 'rectangle' :
                    case 'emptyRectangle' :
                        ctx.rect(
                            singlePoint[0] - singlePoint[2], 
                            singlePoint[1] - singlePoint[2], 
                            singlePoint[2] * 2,
                            singlePoint[2] * 2
                        );
                        break;
                    case 'triangle' :
                    case 'emptyTriangle' :
                        itemShape = {
                            shape : 'polygon',
                            style : {
                                pointList : [
                                    [x, y - symbolSize],
                                    [x + symbolSize, y + symbolSize],
                                    [x - symbolSize, y + symbolSize]
                                ],
                                brushType : symbolType == 'triangle'
                                            ? 'fill' : 'stroke'
                            }
                        };
                        break;
                    case 'diamond' :
                    case 'emptyDiamond' :
                        itemShape = {
                            shape : 'polygon',
                            style : {
                                pointList : [
                                    [x, y - symbolSize],
                                    [x + symbolSize, y],
                                    [x, y + symbolSize],
                                    [x - symbolSize, y]
                                ],
                                brushType : symbolType == 'diamond'
                                            ? 'fill' : 'stroke'
                            }
                        };
                        break;
                    default:
                        itemShape = {
                            shape : 'circle',
                            style : {
                                x : x,
                                y : y,
                                r : symbolSize,
                                brushType : 'fill'
                            }
                        };
                        break;
                }
            },
            
            /**
             * 创建矩形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                var pointList = style.pointList;
                var rect = this.getRect(style);
                var ratio = window.devicePixelRatio || 1;
                // console.log(rect)
                // var ti = new Date();
                var pixels = ctx.getImageData(
                    rect.x * ratio, rect.y * ratio, 
                    rect.width * ratio, rect.height * ratio
                );
               
                var data = pixels.data;
                var idx;
                var zrColor = require('zrender/tool/color');
                var color = zrColor.toArray(style.color);
                var r = color[0];
                var g = color[1];
                var b = color[2];
                var width = rect.width;

                for (var i = 1, l = pointList.length; i < l; i++) {
                    idx = ( (pointList[i][0] - rect.x) * ratio
                           + (pointList[i][1]- rect.y) * width * ratio * ratio
                          ) * 4;
                    data[idx] = r;
                    data[idx + 1] = g;
                    data[idx + 2] = b;
                    data[idx + 3] = 255; 
                }
                ctx.putImageData(pixels, rect.x * ratio, rect.y * ratio);
                // console.log(new Date() - ti);
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var shape = require('zrender/shape');
                return shape.get('polygon').getRect(style);
            },
            
            isCover : function() {
                return false;
            }
        };

        require('zrender/shape/base').derive(Symbol);
        require('zrender/shape').define('symbol', new Symbol());
        
        return Symbol;
    }
);
/**
 * echarts图表类：散点图
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/chart/scatter',['require','../component/base','./calculableBase','../config','../util/ecData','zrender/tool/color','../util/shape/symbol','../chart'],function(require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} series 数据
     * @param {Object} component 组件
     */
    function Scatter(messageCenter, zr, option, component){
        // 基类装饰
        var ComponentBase = require('../component/base');
        ComponentBase.call(this, zr);
        // 可计算特性装饰
        var CalculableBase = require('./calculableBase');
        CalculableBase.call(this, zr, option);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var zrColor = require('zrender/tool/color');

        var self = this;
        self.type = ecConfig.CHART_TYPE_SCATTER;

        var series;                 // 共享数据源，不要修改跟自己无关的项

        var _zlevelBase = self.getZlevelBase();
        
        var _sIndex2ColorMap = {};  // series默认颜色索引，seriesIndex索引到color
        var _symbol = [
              'circle', 'rectangle', 'triangle', 'diamond',
              'emptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond'
            ];
        var _sIndex2ShapeMap = {};  // series图形类型，seriesIndex索引到_symbol

        function _buildShape() {
            self.selectedMap = {};
            
            var legend = component.legend;
            var seriesArray = [];
            var serie;                              // 临时映射变量
            var serieName;                          // 临时映射变量
            var iconShape;
            for (var i = 0, l = series.length; i < l; i++) {
                serie = series[i];
                serieName = serie.name;
                if (serie.type == ecConfig.CHART_TYPE_SCATTER) {
                    series[i] = self.reformOption(series[i]);
                    _sIndex2ShapeMap[i] = self.deepQuery([serie], 'symbol')
                                          || _symbol[i % _symbol.length];
                    if (legend){
                        self.selectedMap[serieName] = 
                            legend.isSelected(serieName);
                            
                        _sIndex2ColorMap[i] = 
                            zrColor.alpha(legend.getColor(serieName),0.5);
                            
                        iconShape = legend.getItemShape(serieName);
                        if (iconShape) {
                            // 回调legend，换一个更形象的icon
                            iconShape.shape = 'icon';
                            iconShape.style.iconType = _sIndex2ShapeMap[i];
                            legend.setItemShape(serieName, iconShape);
                        }
                    } else {
                        self.selectedMap[serieName] = true;
                        _sIndex2ColorMap[i] = zr.getColor(i);
                    }
                      
                    if (self.selectedMap[serieName]) {
                        seriesArray.push(i);
                    }
                }
            }
            if (seriesArray.length === 0) {
                return;
            }
            _buildSeries(seriesArray);

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        /**
         * 构建类目轴为水平方向的散点图系列
         */
        function _buildSeries(seriesArray) {
            var seriesIndex;
            var serie;
            var data;
            var value;
            var xAxis;
            var yAxis; 

            var pointList = {};
            var x;
            var y;
            var symbolSize;
            for (var j = 0, k = seriesArray.length; j < k; j++) {
                seriesIndex = seriesArray[j];
                serie = series[seriesIndex];
                if (serie.data.length === 0) {
                    continue;
                }
                
                xAxis = component.xAxis.getAxis(serie.xAxisIndex || 0);
                yAxis = component.yAxis.getAxis(serie.yAxisIndex || 0);
                
                symbolSize = self.deepQuery([serie], 'symbolSize');
                pointList[seriesIndex] = [];
                for (var i = 0, l = serie.data.length; i < l; i++) {
                    data = serie.data[i];
                    value = typeof data != 'undefined'
                            ? (typeof data.value != 'undefined'
                              ? data.value
                              : data)
                            : '-';
                    if (value == '-' || value.length < 2) {
                        // 数据格式不符
                        continue;
                    }
                    x = xAxis.getCoord(value[0]);
                    y = yAxis.getCoord(value[1]);
                    pointList[seriesIndex].push([
                        x,  // 横坐标
                        y,  // 纵坐标
                        (typeof symbolSize == 'function'
                        ? symbolSize(value)
                        : symbolSize),                  // 图形大小
                        _sIndex2ShapeMap[seriesIndex],  // 图形类型
                        i,                              // 数据index
                        data.name || ''                 // 名称
                    ]);
                }
            }
            // console.log(pointList)
            _buildPointList(pointList);
        }

        /**
         * 生成折线和折线上的拐点
         */
        function _buildPointList(pointList) {
            var dataRange = component.dataRange;
            var rangColor;  // 更高优先级
            var nColor;     // normal
            var nLineWidth;
            var eColor;     // emphasis
            var eLineWidth;
            
            var serie;
            var queryTarget;
            var data;
            var seriesPL;
            var singlePoint;
            
            for (var seriesIndex in pointList) {
                serie = series[seriesIndex];
                seriesPL = pointList[seriesIndex];
                // 多级控制
                queryTarget = [serie];
                nColor = self.deepQuery(
                    queryTarget, 'itemStyle.normal.color'
                ) || _sIndex2ColorMap[seriesIndex];
                nLineWidth = self.deepQuery(
                    queryTarget, 'itemStyle.normal.lineStyle.width'
                );
                
                eColor = self.deepQuery(
                    queryTarget, 'itemStyle.emphasis.color'
                );
                eLineWidth = self.deepQuery(
                    queryTarget, 'itemStyle.emphasis.lineStyle.width'
                );
                
                if (serie.large && serie.data.length > serie.largeThreshold) {
                    self.shapeList.push(_getLargeSymbol(
                        seriesPL, nColor, eColor
                    ));
                    continue;
                }

                /*
                 * pointlist=[
                 *      0  x,
                 *      1  y, 
                 *      2  图形大小
                 *      3  图形类型
                 *      4  数据index
                 *      5  名称
                 * ]
                 */
                for (var i = 0, l = seriesPL.length; i < l; i++) {
                    singlePoint = seriesPL[i];
                    data = serie.data[singlePoint[4]];
                    
                    if (dataRange) {
                        if (isNaN(data[2])) {
                            continue;
                        }
                        rangColor = dataRange.getColor(data[2]);
                        if (!rangColor) {
                            continue;
                        }
                    }
                    else {
                        rangColor = nColor;
                    }
                    
                    queryTarget = [data];
                    self.shapeList.push(_getSymbol(
                        seriesIndex,    // seriesIndex
                        singlePoint[4], // dataIndex
                        singlePoint[5], // name
                        
                        singlePoint[0], // x
                        singlePoint[1], // y
                        
                        // 大小
                        self.deepQuery(queryTarget, 'symbolSize')
                        || singlePoint[2],
                        
                        // 类型
                        self.deepQuery(queryTarget, 'symbol')
                        || singlePoint[3],
                        
                        // 填充颜色
                        self.deepQuery(queryTarget, 'itemStyle.normal.color')
                        || rangColor,
                        // 线宽
                        self.deepQuery(
                            queryTarget, 'itemStyle.normal.lineStyle.width'
                        )|| nLineWidth,
                        
                        //------------高亮
                        // 填充颜色
                        self.deepQuery(
                            queryTarget, 'itemStyle.emphasis.color'
                        ) || eColor || nColor,
                        // 线宽
                        self.deepQuery(
                            queryTarget, 'itemStyle.emphasis.lineStyle.width'
                        )|| eLineWidth || nLineWidth
                    ));
                }
            }
            // console.log(self.shapeList)
        }

        /**
         * 生成散点图上的图形
         */
        function _getSymbol(
            seriesIndex, dataIndex, name, 
            x, y, symbolSize, symbol,
            nColor, nLineWidth, eColor, eLineWidth
        ) {
            var itemShape = {
                shape : 'icon',
                zlevel : _zlevelBase,
                style : {
                    iconType : symbol.replace('empty', '').toLowerCase(),
                    x : x - symbolSize,
                    y : y - symbolSize,
                    width : symbolSize * 2,
                    height : symbolSize * 2,
                    brushType : symbol.match('empty') ? 'stroke' : 'fill',
                    color : nColor,
                    strokeColor : nColor,
                    lineWidth: nLineWidth
                },
                highlightStyle : {
                    color : eColor,
                    strokeColor : eColor,
                    lineWidth : eLineWidth
                },
                clickable : true
            };
            
            if (symbol.match('star')) {
                itemShape.style.iconType = 'star';
                itemShape.style.n = 
                    (symbol.replace('empty', '').replace('star','') - 0) || 5;
            }
            
            if (symbol == 'none') {
                itemShape.invisible = true;
                itemShape.hoverable = false;
            }

            /*
            if (self.deepQuery([data, serie, option], 'calculable')) {
                self.setCalculable(itemShape);
                itemShape.draggable = true;
            }
            */

            ecData.pack(
                itemShape,
                series[seriesIndex], seriesIndex,
                series[seriesIndex].data[dataIndex], dataIndex,
                name
            );

            // for animation
            itemShape._x = x;
            itemShape._y = y;
            
            return itemShape;
        }
        
        function _getLargeSymbol(symbolList, nColor, eColor) {
            return {
                shape : 'symbol',
                zlevel : _zlevelBase,
                hoverable: false,
                style : {
                    pointList : symbolList,
                    color : nColor,
                    strokeColor : nColor
                },
                highlightStyle : {
                    color : eColor,
                    strokeColor : eColor
                }
            };
        }

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newSeries
         * @param {Object} newComponent
         */
        function init(newOption, newComponent) {
            option = newOption;
            component = newComponent;

            series = option.series;

            self.clear();
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            self.clear();
            _buildShape();
        }
        
        /**
         * 值域响应
         * @param {Object} param
         * @param {Object} status
         */
        function ondataRange(param, status) {
            if (component.dataRange) {
                refresh();
                status.needRefresh = true;
            }
            return;
        }

        /**
         * 动画设定
         */
        function animation() {
            var duration = self.deepQuery([option], 'animationDuration');
            var easing = self.deepQuery([option], 'animationEasing');
            var x;
            var y;
            var serie;

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                x = self.shapeList[i]._x || 0;
                y = self.shapeList[i]._y || 0;
                zr.modShape(self.shapeList[i].id, {
                    scale : [0, 0, x, y]
                });
                zr.animate(self.shapeList[i].id, '')
                    .when(
                        (self.deepQuery([serie],'animationDuration')
                        || duration),
                        
                        {scale : [1, 1, x, y]},
                        
                        (self.deepQuery([serie], 'animationEasing')
                        || easing)
                    )
                    .start();
            }
        }

        self.init = init;
        self.refresh = refresh;
        self.ondataRange = ondataRange;
        self.animation = animation;

        init(option, component);
    }
    
    // 动态扩展zrender shape：symbol
    require('../util/shape/symbol');
    
    // 自注册
    require('../chart').define('scatter', Scatter);
    
    return Scatter;
});
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：蜡烛
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'candle',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，横坐标
           y             : {Array},   // 必须，纵坐标数组
           width         : {number},  // 必须，宽度
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'candle',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : [100,123,90,125],
           width : 150,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'echarts/util/shape/candle',['require','zrender/tool/matrix','zrender/shape/base','zrender/shape'],function(require) {
        var matrix = require('zrender/tool/matrix');
        
        function Candle() {
            this.type = 'candle';
        }

        Candle.prototype =  {
            _numberOrder : function(a, b) {
                return b - a;
            },
            /**
             * 创建矩形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                style.y.sort(this._numberOrder);
                
                ctx.moveTo(style.x, style.y[3]);
                ctx.lineTo(style.x, style.y[2]);
                ctx.moveTo(style.x - style.width / 2, style.y[2]);
                ctx.rect(
                    style.x - style.width / 2,
                    style.y[2],
                    style.width,
                    style.y[1] - style.y[2]
                );
                ctx.moveTo(style.x, style.y[1]);
                ctx.lineTo(style.x, style.y[0]);
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - style.width / 2 - lineWidth / 2),
                    y : Math.round(style.y[3] - lineWidth / 2),
                    width : style.width + lineWidth,
                    height : style.y[0] - style.y[3] + lineWidth
                };
            },
            
            
            isCover : function(e, x, y) {
                //对鼠标的坐标也做相同的变换
                if(e.__needTransform && e._transform){
                    var inverseMatrix = [];
                    matrix.invert(inverseMatrix, e._transform);

                    var originPos = [x, y];
                    matrix.mulVector(originPos, inverseMatrix, [x, y, 1]);

                    if (x == originPos[0] && y == originPos[1]) {
                        // 避免外部修改导致的__needTransform不准确
                        if (Math.abs(e.rotation[0]) > 0.0001
                            || Math.abs(e.position[0]) > 0.0001
                            || Math.abs(e.position[1]) > 0.0001
                            || Math.abs(e.scale[0] - 1) > 0.0001
                            || Math.abs(e.scale[1] - 1) > 0.0001
                        ) {
                            e.__needTransform = true;
                        } else {
                            e.__needTransform = false;
                        }
                    }

                    x = originPos[0];
                    y = originPos[1];
                }

                // 快速预判并保留判断矩形
                var rect;
                if (e.style.__rect) {
                    rect = e.style.__rect;
                }
                else {
                    rect = this.getRect(e.style);
                    rect = [
                        rect.x,
                        rect.x + rect.width,
                        rect.y,
                        rect.y + rect.height
                    ];
                    e.style.__rect = rect;
                }
                if (x >= rect[0]
                    && x <= rect[1]
                    && y >= rect[2]
                    && y <= rect[3]
                ) {
                    // 矩形内
                    return true;
                }
                else {
                    return false;
                }
            }
        };

        require('zrender/shape/base').derive(Candle);
        require('zrender/shape').define('candle', new Candle());
        
        return Candle;
    }
);
/**
 * echarts图表类：K线图
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/chart/k',['require','../component/base','./calculableBase','../config','../util/ecData','../util/shape/candle','../chart'],function(require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} series 数据
     * @param {Object} component 组件
     */
    function K(messageCenter, zr, option, component){
        // 基类装饰
        var ComponentBase = require('../component/base');
        ComponentBase.call(this, zr);
        // 可计算特性装饰
        var CalculableBase = require('./calculableBase');
        CalculableBase.call(this, zr, option);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var self = this;
        self.type = ecConfig.CHART_TYPE_K;

        var series;                 // 共享数据源，不要修改跟自己无关的项

        var _zlevelBase = self.getZlevelBase();

        function _buildShape() {
            self.selectedMap = {};

            // 水平垂直双向series索引 ，position索引到seriesIndex
            var _position2sIndexMap = {
                top : [],
                bottom : []
            };
            var xAxis;
            for (var i = 0, l = series.length; i < l; i++) {
                if (series[i].type == ecConfig.CHART_TYPE_K) {
                    series[i] = self.reformOption(series[i]);
                    xAxis = component.xAxis.getAxis(series[i].xAxisIndex);
                    if (xAxis.type == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
                    ) {
                        _position2sIndexMap[xAxis.getPosition()].push(i);
                    }
                }
            }
            //console.log(_position2sIndexMap)
            for (var position in _position2sIndexMap) {
                if (_position2sIndexMap[position].length > 0) {
                    _buildSinglePosition(
                        position, _position2sIndexMap[position]
                    );
                }
            }

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        /**
         * 构建单个方向上的K线图
         *
         * @param {number} seriesIndex 系列索引
         */
        function _buildSinglePosition(position, seriesArray) {
            var mapData = _mapData(seriesArray);
            var locationMap = mapData.locationMap;
            var maxDataLength = mapData.maxDataLength;

            if (maxDataLength === 0 || locationMap.length === 0) {
                return;
            }
            _buildHorizontal(maxDataLength, locationMap);
        }

        /**
         * 数据整形
         * 数组位置映射到系列索引
         */
        function _mapData(seriesArray) {
            var serie;                              // 临时映射变量
            var serieName;                          // 临时映射变量
            var legend = component.legend;
            var locationMap = [];                   // 需要返回的东西：数组位置映射到系列索引
            var maxDataLength = 0;                  // 需要返回的东西：最大数据长度
            // 计算需要显示的个数和分配位置并记在下面这个结构里
            for (var i = 0, l = seriesArray.length; i < l; i++) {
                serie = series[seriesArray[i]];
                serieName = serie.name;
                if (legend){
                    self.selectedMap[serieName] = legend.isSelected(serieName);
                } else {
                    self.selectedMap[serieName] = true;
                }

                if (self.selectedMap[serieName]) {
                    locationMap.push(seriesArray[i]);
                }
                // 兼职帮算一下最大长度
                maxDataLength = Math.max(maxDataLength, serie.data.length);
            }
            return {
                locationMap : locationMap,
                maxDataLength : maxDataLength
            };
        }

        /**
         * 构建类目轴为水平方向的K线图系列
         */
        function _buildHorizontal(maxDataLength, locationMap) {
            // 确定类目轴和数值轴，同一方向随便找一个即可
            var seriesIndex;
            var serie;
            var xAxisIndex;
            var categoryAxis;
            var yAxisIndex; // 数值轴各异
            var valueAxis;  // 数值轴各异

            var pointList = {};
            var candleWidth;
            var data;
            var value;
            for (var j = 0, k = locationMap.length; j < k; j++) {
                seriesIndex = locationMap[j];
                serie = series[seriesIndex];
                
                xAxisIndex = serie.xAxisIndex || 0;
                categoryAxis = component.xAxis.getAxis(xAxisIndex);
                candleWidth = Math.floor(categoryAxis.getGap() / 2);
                yAxisIndex = serie.yAxisIndex || 0;
                valueAxis = component.yAxis.getAxis(yAxisIndex);
                
                pointList[seriesIndex] = [];
                for (var i = 0, l = maxDataLength; i < l; i++) {
                    if (typeof categoryAxis.getNameByIndex(i) 
                        == 'undefined'
                    ) {
                        // 系列数据超出类目轴长度
                        break;
                    }
                    
                    data = serie.data[i];
                    value = typeof data != 'undefined'
                            ? (typeof data.value != 'undefined'
                              ? data.value
                              : data)
                            : '-';
                    if (value == '-' || value.length != 4) {
                        // 数据格式不符
                        continue;
                    }
                    pointList[seriesIndex].push([
                        categoryAxis.getCoordByIndex(i),    // 横坐标
                        candleWidth,
                        valueAxis.getCoord(value[0]),       // 纵坐标：开盘
                        valueAxis.getCoord(value[1]),       // 纵坐标：收盘
                        valueAxis.getCoord(value[2]),       // 纵坐标：最低
                        valueAxis.getCoord(value[3]),       // 纵坐标：最高
                        i,                                  // 数据index
                        categoryAxis.getNameByIndex(i)      // 类目名称
                    ]);
                }
            }
            // console.log(pointList)
            _buildKLine(pointList);
        }

        /**
         * 生成折线和折线上的拐点
         */
        function _buildKLine(pointList) {
            // normal:
            var nLineWidth;
            var nLineColor;
            var nLineColor0;    // 阴线
            var nColor;
            var nColor0;        // 阴线
            
            // emphasis:
            var eLineWidth;
            var eLineColor;
            var eLineColor0;
            var eColor;
            var eColor0;

            var serie;
            var queryTarget;
            var data;
            var seriesPL;
            var singlePoint;
            var candleType;

            for (var seriesIndex = 0, len = series.length;
                seriesIndex < len;
                seriesIndex++
            ) {
                serie = series[seriesIndex];
                seriesPL = pointList[seriesIndex];
                if (serie.type == ecConfig.CHART_TYPE_K
                    && typeof seriesPL != 'undefined'
                ) {
                    // 多级控制
                    queryTarget = [serie];
                    nLineWidth = self.deepQuery(
                        queryTarget, 'itemStyle.normal.lineStyle.width'
                    );
                    nLineColor = self.deepQuery(
                        queryTarget, 'itemStyle.normal.lineStyle.color'
                    );
                    nLineColor0 = self.deepQuery(
                        queryTarget, 'itemStyle.normal.lineStyle.color0'
                    );
                    nColor = self.deepQuery(
                        queryTarget, 'itemStyle.normal.color'
                    );
                    nColor0 = self.deepQuery(
                        queryTarget, 'itemStyle.normal.color0'
                    );
                    
                    eLineWidth = self.deepQuery(
                        queryTarget, 'itemStyle.emphasis.lineStyle.width'
                    );
                    eLineColor = self.deepQuery(
                        queryTarget, 'itemStyle.emphasis.lineStyle.color'
                    );
                    eLineColor0 = self.deepQuery(
                        queryTarget, 'itemStyle.emphasis.lineStyle.color0'
                    );
                    eColor = self.deepQuery(
                        queryTarget, 'itemStyle.emphasis.color'
                    );
                    eColor0 = self.deepQuery(
                        queryTarget, 'itemStyle.emphasis.color0'
                    );

                    /*
                     * pointlist=[
                     *      0  x,
                     *      1  width, 
                     *      2  y0,
                     *      3  y1,
                     *      4  y2,
                     *      5  y3,
                     *      6  dataIndex,
                     *      7  categoryName
                     * ]
                     */
                    for (var i = 0, l = seriesPL.length; i < l; i++) {
                        singlePoint = seriesPL[i];
                        data = serie.data[singlePoint[6]];
                        queryTarget = [data];
                        candleType = singlePoint[3] > singlePoint[2];
                        self.shapeList.push(_getCandle(
                            seriesIndex,    // seriesIndex
                            singlePoint[6], // dataIndex
                            singlePoint[7], // name
                            
                            singlePoint[0], // x
                            singlePoint[1], // width
                            singlePoint[2], // y开盘
                            singlePoint[3], // y收盘
                            singlePoint[4], // y最低
                            singlePoint[5], // y最高
                            
                            // 填充颜色
                            candleType
                            ? (self.deepQuery(          // 阳
                                   queryTarget, 'itemStyle.normal.color'
                               ) || nColor)
                            : (self.deepQuery(          // 阴
                                   queryTarget, 'itemStyle.normal.color0'
                               ) || nColor0),
                            
                            // 线宽
                            self.deepQuery(
                               queryTarget, 'itemStyle.normal.lineStyle.width'
                            ) || nLineWidth,
                            
                            // 线色
                            candleType
                            ? (self.deepQuery(          // 阳
                                   queryTarget,
                                   'itemStyle.normal.lineStyle.color'
                               ) || nLineColor)
                            : (self.deepQuery(          // 阴
                                   queryTarget,
                                   'itemStyle.normal.lineStyle.color0'
                               ) || nLineColor0),
                            
                            //------------高亮
                            
                            // 填充颜色
                            candleType
                            ? (self.deepQuery(          // 阳
                                   queryTarget, 'itemStyle.emphasis.color'
                               ) || eColor || nColor)
                            : (self.deepQuery(          // 阴
                                   queryTarget, 'itemStyle.emphasis.color0'
                               ) || eColor0 || nColor0),
                            
                            // 线宽
                            self.deepQuery(
                               queryTarget, 'itemStyle.emphasis.lineStyle.width'
                            ) || eLineWidth || nLineWidth,
                            
                            // 线色
                            candleType
                            ? (self.deepQuery(          // 阳
                                   queryTarget,
                                   'itemStyle.emphasis.lineStyle.color'
                               ) || eLineColor || nLineColor)
                            : (self.deepQuery(          // 阴
                                   queryTarget,
                                   'itemStyle.emphasis.lineStyle.color0'
                               ) || eLineColor0 || nLineColor0)
                        ));
                    }
                }
            }
            // console.log(self.shapeList)
        }

        /**
         * 生成K线图上的图形
         */
        function _getCandle(
            seriesIndex, dataIndex, name, 
            x, width, y0, y1, y2, y3, 
            nColor, nLinewidth, nLineColor, 
            eColor, eLinewidth, eLineColor
        ) {
            var itemShape = {
                shape : 'candle',
                zlevel : _zlevelBase,
                clickable: true,
                style : {
                    x : x,
                    y : [y0, y1, y2, y3],
                    width : width,
                    color : nColor,
                    strokeColor : nLineColor,
                    lineWidth : nLinewidth,
                    brushType : 'both'
                },
                highlightStyle : {
                    color : eColor,
                    strokeColor : eLineColor,
                    lineWidth : eLinewidth
                },
                _serieIndex: seriesIndex
            };
            ecData.pack(
                itemShape,
                series[seriesIndex], seriesIndex,
                series[seriesIndex].data[dataIndex], dataIndex,
                name
            );

            return itemShape;
        }

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newSeries
         * @param {Object} newComponent
         */
        function init(newOption, newComponent) {
            option = newOption;
            component = newComponent;

            series = option.series;

            self.clear();
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            self.clear();
            _buildShape();
        }

        /**
         * 动画设定
         */
        function animation() {
            var duration = self.deepQuery([option], 'animationDuration');
            var easing = self.deepQuery([option], 'animationEasing');
            var x;
            var y;
            var serie;

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                if (self.shapeList[i].shape == 'candle') {
                    serie = series[self.shapeList[i]._serieIndex];
                    x = self.shapeList[i].style.x;
                    y = self.shapeList[i].style.y[0];
                    zr.modShape(self.shapeList[i].id, {
                        scale : [1, 0, x, y]
                    });
                    zr.animate(self.shapeList[i].id, '')
                        .when(
                            (self.deepQuery([serie],'animationDuration')
                            || duration),

                            {scale : [1, 1, x, y]},

                            (self.deepQuery([serie], 'animationEasing')
                            || easing)
                        )
                        .start();
                }
            }
        }

        self.init = init;
        self.refresh = refresh;
        self.animation = animation;

        init(option, component);
    }
    
    // 动态扩展zrender shape：candle
    require('../util/shape/candle');

    // 图表注册
    require('../chart').define('k', K);
    
    return K;
});
/**
 * zrender: 数学辅助类
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * sin：正弦函数，自动缓存
 * cos：余弦函数，自动缓存
 * degreeToRadian：角度转弧度
 * radianToDegree：弧度转角度
 */
define(
    'zrender/tool/math',[],function() {
        var _cache = {
            sin : {},     //sin缓存
            cos : {}      //cos缓存
        };
        var _radians = Math.PI / 180;

        /**
         * @param angle 弧度（角度）参数
         * @param isDegrees angle参数是否为角度计算，默认为false，angle为以弧度计量的角度
         */
        function sin(angle, isDegrees) {
            angle = (isDegrees ? angle * _radians : angle).toFixed(4);
            if(typeof _cache.sin[angle] == 'undefined') {
                _cache.sin[angle] = Math.sin(angle);
            }
            return _cache.sin[angle];
        }

        /**
         * @param radians 弧度参数
         */
        function cos(angle, isDegrees) {
            angle = (isDegrees ? angle * _radians : angle).toFixed(4);
            if(typeof _cache.cos[angle] == 'undefined') {
                _cache.cos[angle] = Math.cos(angle);
            }
            return _cache.cos[angle];
        }

        /**
         * 角度转弧度
         * @param {Object} angle
         */
        function degreeToRadian(angle) {
            return angle * _radians;
        }

        /**
         * 弧度转角度
         * @param {Object} angle
         */
        function radianToDegree(angle) {
            return angle / _radians;
        }

        return {
            sin : sin,
            cos : cos,
            degreeToRadian : degreeToRadian,
            radianToDegree : radianToDegree
        };
    }
);
/**
 * echarts图表类：饼图
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/chart/pie',['require','../component/base','./calculableBase','../config','../util/ecData','zrender/tool/math','zrender/tool/util','../chart'],function(require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} series 数据
     * @param {Object} component 组件
     */
    function Pie(messageCenter, zr, option, component){
        // 基类装饰
        var ComponentBase = require('../component/base');
        ComponentBase.call(this, zr);
        // 可计算特性装饰
        var CalculableBase = require('./calculableBase');
        CalculableBase.call(this, zr, option);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var zrMath = require('zrender/tool/math');
        var zrUtil = require('zrender/tool/util');

        var self = this;
        self.type = ecConfig.CHART_TYPE_PIE;

        var series;                 // 共享数据源，不要修改跟自己无关的项

        var _zlevelBase = self.getZlevelBase();
        
        var _selectedMode;
        var _selected = {};

        function _buildShape() {
            self.selectedMap = {};
            _selected = {};

            var pieCase;        // 饼图箱子
            _selectedMode = false;
            for (var i = 0, l = series.length; i < l; i++) {
                if (series[i].type == ecConfig.CHART_TYPE_PIE) {
                    series[i] = self.reformOption(series[i]);
                    _selectedMode = _selectedMode || series[i].selectedMode;
                    _selected[i] = [];
                    if (self.deepQuery([series[i], option], 'calculable')) {
                        pieCase = {
                            shape : series[i].radius[0] <= 10
                                    ? 'circle' : 'ring',
                            zlevel : _zlevelBase,
                            hoverable : false,
                            style : {
                                x : series[i].center[0],          // 圆心横坐标
                                y : series[i].center[1],          // 圆心纵坐标
                                r0 : series[i].radius[0] <= 10    // 圆环内半径
                                     ? 0 : series[i].radius[0] - 10,
                                r : series[i].radius[1] + 10,     // 圆环外半径
                                brushType : 'stroke',
                                strokeColor : series[i].calculableHolderColor
                                              || ecConfig.calculableHolderColor
                            }
                        };
                        ecData.pack(pieCase, series[i], i, undefined, -1);
                        self.setCalculable(pieCase);
                        self.shapeList.push(pieCase);
                    }
                    _buildSinglePie(i);
                }
            }

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        /**
         * 构建单个饼图
         *
         * @param {number} seriesIndex 系列索引
         */
        function _buildSinglePie(seriesIndex) {
            var serie = series[seriesIndex];
            var data = serie.data;
            var legend = component.legend;
            var itemName;
            var totalSelected = 0;               // 迭代累计
            var totalValue = 0;                  // 迭代累计

            // 计算需要显示的个数和总值
            for (var i = 0, l = data.length; i < l; i++) {
                itemName = data[i].name;
                if (legend){
                    self.selectedMap[itemName] = legend.isSelected(itemName);
                } else {
                    self.selectedMap[itemName] = true;
                }
                if (self.selectedMap[itemName]) {
                    totalSelected++;
                    totalValue += +data[i].value;
                }
            }

            var percent;
            var startAngle = serie.startAngle.toFixed(2) - 0;
            var endAngle;
            var minAngle = serie.minAngle;
            var totalAngle = 360 - (minAngle * totalSelected);
            var defaultColor;

            for (var i = 0, l = data.length; i < l; i++){
                itemName = data[i].name;
                if (!self.selectedMap[itemName]) {
                    continue;
                }
                // 默认颜色策略
                if (legend) {
                    // 有图例则从图例中获取颜色定义
                    defaultColor = legend.getColor(itemName);
                }
                else {
                    // 全局颜色定义
                    defaultColor = zr.getColor(i);
                }

                percent = data[i].value / totalValue;
                endAngle = (percent * totalAngle + startAngle + minAngle)
                           .toFixed(2) - 0;
                percent = (percent * 100).toFixed(2);

                _buildItem(
                    seriesIndex, i, percent, data[i].selected,
                    startAngle, endAngle, defaultColor
                );
                startAngle = endAngle;
            }
        }

        /**
         * 构建单个扇形及指标
         */
        function _buildItem(
            seriesIndex, dataIndex, percent, isSelected,
            startAngle, endAngle, defaultColor
        ) {
            // 扇形
            var sector = _getSector(
                    seriesIndex, dataIndex, percent, isSelected,
                    startAngle, endAngle, defaultColor
                );
            // 图形需要附加的私有数据
            ecData.pack(
                sector,
                series[seriesIndex], seriesIndex,
                series[seriesIndex].data[dataIndex], dataIndex,
                series[seriesIndex].data[dataIndex].name,
                percent
            );
            self.shapeList.push(sector);

            // 文本标签，需要显示则会有返回
            var label = _getLabel(
                    seriesIndex, dataIndex, percent,
                    startAngle, endAngle, defaultColor,
                    false
                );
            if (label) {
                label._dataIndex = dataIndex;
                self.shapeList.push(label);
            }

            // 文本标签视觉引导线，需要显示则会有返回
            var labelLine = _getLabelLine(
                    seriesIndex, dataIndex,
                    startAngle, endAngle, defaultColor,
                    false
                );
            if (labelLine) {
                labelLine._dataIndex = dataIndex;
                self.shapeList.push(labelLine);
            }
        }

        /**
         * 构建扇形
         */
        function _getSector(
            seriesIndex, dataIndex, percent, isSelected,
            startAngle, endAngle, defaultColor
        ) {
            var serie = series[seriesIndex];
            var data = serie.data[dataIndex];

            // 多级控制
            var normalColor = self.deepQuery(
                    [data, serie],
                    'itemStyle.normal.color'
                );

            var emphasisColor = self.deepQuery(
                    [data, serie],
                    'itemStyle.emphasis.color'
                );

            var sector = {
                shape : 'sector',             // 扇形
                zlevel : _zlevelBase,
                clickable : true,
                style : {
                    x : serie.center[0],          // 圆心横坐标
                    y : serie.center[1],          // 圆心纵坐标
                    r0 : serie.radius[0],         // 圆环内半径
                    r : serie.radius[1],          // 圆环外半径
                    startAngle : startAngle,
                    endAngle : endAngle,
                    brushType : 'both',
                    color : normalColor || defaultColor,
                    strokeColor : '#fff',
                    lineWidth: 1
                },
                highlightStyle : {
                    color : emphasisColor || normalColor || defaultColor
                }
            };
            
            if (isSelected) {
                var midAngle = 
                    ((sector.style.startAngle + sector.style.endAngle) / 2)
                    .toFixed(2) - 0;
                sector.style._hasSelected = true;
                sector.style._x = sector.style.x;
                sector.style._y = sector.style.y;
                var offset = self.deepQuery([serie], 'selectedOffset');
                sector.style.x += zrMath.cos(midAngle, true) * offset;
                sector.style.y -= zrMath.sin(midAngle, true) * offset;
                
                _selected[seriesIndex][dataIndex] = true;
            }
            else {
                _selected[seriesIndex][dataIndex] = false;
            }
            
            
            if (_selectedMode) {
                sector.onclick = self.shapeHandler.onclick;
            }
            
            if (self.deepQuery([data, serie, option], 'calculable')) {
                self.setCalculable(sector);
                sector.draggable = true;
            }

            if (_needLabel(serie, data, false)
                && self.deepQuery(
                    [data, serie],
                    'itemStyle.normal.label.position'
                ) == 'inner'
            ) {
                sector.style.text = _getLabelText(
                    seriesIndex, dataIndex, percent, 'normal'
                );
                sector.style.textPosition = 'specific';
                sector.style.textColor = self.deepQuery(
                    [data, serie],
                    'itemStyle.normal.label.textStyle.color'
                ) || '#fff';
                sector.style.textAlign = self.deepQuery(
                    [data, serie],
                    'itemStyle.normal.label.textStyle.align'
                ) || 'center';
                sector.style.textBaseLine = self.deepQuery(
                    [data, serie],
                    'itemStyle.normal.label.textStyle.baseline'
                ) || 'middle';
                sector.style.textX = Math.round(
                    serie.center[0]
                    + (serie.radius[1] + serie.radius[0]) / 2
                      * zrMath.cos((startAngle + endAngle) / 2, true)
                );
                sector.style.textY = Math.round(
                    serie.center[1]
                    - (serie.radius[1] + serie.radius[0]) / 2
                       * zrMath.sin((startAngle + endAngle) / 2, true)
                );
                sector.style.textFont = self.getFont(self.deepQuery(
                    [data, serie],
                    'itemStyle.normal.label.textStyle'
                ));
            }

            if (_needLabel(serie, data, true)
                && self.deepQuery(
                    [data, serie],
                    'itemStyle.emphasis.label.position'
                ) == 'inner'
            ) {
                sector.highlightStyle.text = _getLabelText(
                    seriesIndex, dataIndex, percent, 'emphasis'
                );
                sector.highlightStyle.textPosition = 'specific';
                sector.highlightStyle.textColor = self.deepQuery(
                    [data, serie],
                    'itemStyle.emphasis.label.textStyle.color'
                ) || '#fff';
                sector.highlightStyle.textAlign = self.deepQuery(
                    [data, serie],
                    'itemStyle.emphasis.label.textStyle.align'
                ) || 'center';
                sector.highlightStyle.textBaseLine = self.deepQuery(
                    [data, serie],
                    'itemStyle.normal.label.textStyle.baseline'
                ) || 'middle';
                sector.highlightStyle.textX = Math.round(
                    serie.center[0]
                    + (serie.radius[1] + serie.radius[0]) / 2
                      * zrMath.cos((startAngle + endAngle) / 2, true)
                );
                sector.highlightStyle.textY = Math.round(
                    serie.center[1]
                    - (serie.radius[1] + serie.radius[0]) / 2
                      * zrMath.sin((startAngle + endAngle) / 2, true)
                );
                sector.highlightStyle.textFont = self.getFont(self.deepQuery(
                    [data, serie],
                    'itemStyle.emphasis.label.textStyle'
                ));
            }

            // “normal下不显示，emphasis显示”添加事件响应
            if (_needLabel(serie, data, true)          // emphasis下显示文本
                || _needLabelLine(serie, data, true)   // emphasis下显示引导线
            ) {
                sector.onmouseover = self.shapeHandler.onmouserover;
            }
            return sector;
        }

        /**
         * 需要显示则会有返回构建好的shape，否则返回undefined
         */
        function _getLabel(
            seriesIndex, dataIndex, percent,
            startAngle, endAngle, defaultColor,
            isEmphasis
        ) {
            var serie = series[seriesIndex];
            var data = serie.data[dataIndex];
            // 特定状态下是否需要显示文本标签
            if (_needLabel(serie, data, isEmphasis)) {
                var status = isEmphasis ? 'emphasis' : 'normal';

                // serie里有默认配置，放心大胆的用！
                var itemStyle = zrUtil.merge(
                        zrUtil.clone(data.itemStyle) || {},
                        serie.itemStyle,
                        {
                            'overwrite' : false,
                            'recursive' : true
                        }
                    );
                // label配置
                var labelControl = itemStyle[status].label;
                var textStyle = labelControl.textStyle || {};

                var centerX = serie.center[0];                      // 圆心横坐标
                var centerY = serie.center[1];                      // 圆心纵坐标
                var midAngle = ((endAngle + startAngle) / 2) % 360; // 角度中值
                var radius;                                         // 标签位置半径
                var textAlign;
                if (labelControl.position == 'outer') {
                    // 外部显示，默认
                    radius = serie.radius[1]
                             + itemStyle[status].labelLine.length
                             + textStyle.fontSize;
                    textAlign = (midAngle >= 150 && midAngle <= 210)
                                ? 'right'
                                : ((midAngle <= 30 || midAngle >= 330)
                                       ? 'left'
                                       : 'center'
                                   );
                    return {
                        shape : 'text',
                        zlevel : _zlevelBase + 1,
                        hoverable : false,
                        style : {
                            x : centerX + radius * zrMath.cos(midAngle, true),
                            y : centerY - radius * zrMath.sin(midAngle, true),
                            color : textStyle.color || defaultColor,
                            text : _getLabelText(
                                seriesIndex, dataIndex, percent, status
                            ),
                            textAlign : textStyle.align
                                        || textAlign,
                            textBaseline : textStyle.baseline || 'middle',
                            textFont : self.getFont(textStyle)
                        },
                        highlightStyle : {
                            brushType : 'fill'
                        }
                    };
                }
                else if (labelControl.position == 'center') {
                    return {
                        shape : 'text',
                        zlevel : _zlevelBase + 1,
                        hoverable : false,
                        style : {
                            x : centerX,
                            y : centerY,
                            color : textStyle.color || defaultColor,
                            text : _getLabelText(
                                seriesIndex, dataIndex, percent, status
                            ),
                            textAlign : textStyle.align
                                        || 'center',
                            textBaseline : textStyle.baseline || 'middle',
                            textFont : self.getFont(textStyle)
                        },
                        highlightStyle : {
                            brushType : 'fill'
                        }
                    };
                }
                else {
                    // 内部显示由sector自带，不返回即可
                    return;
                    /*
                    radius = (serie.radius[0] + serie.radius[1]) / 2;
                    textAlign = 'center';
                    defaultColor = '#fff';
                    */
                }
            }
            else {
                return;
            }
        }

        /**
         * 根据lable.format计算label text
         */
        function _getLabelText(seriesIndex, dataIndex, percent, status) {
            var serie = series[seriesIndex];
            var data = serie.data[dataIndex];
            var formatter = self.deepQuery(
                [data, serie],
                'itemStyle.' + status + '.label.formatter'
            );
            
            if (formatter) {
                if (typeof formatter == 'function') {
                    return formatter(
                        serie.name,
                        data.name,
                        data.value,
                        percent
                    );
                }
                else if (typeof formatter == 'string') {
                    formatter = formatter.replace('{a}','{a0}')
                                         .replace('{b}','{b0}')
                                         .replace('{c}','{c0}')
                                         .replace('{d}','{d0}');
                    formatter = formatter.replace('{a0}', serie.name)
                                         .replace('{b0}', data.name)
                                         .replace('{c0}', data.value)
                                         .replace('{d0}', percent);
    
                    return formatter;
                }
            }
            else {
                return data.name;
            }
        }
        
        /**
         * 需要显示则会有返回构建好的shape，否则返回undefined
         */
        function _getLabelLine(
            seriesIndex, dataIndex,
            startAngle, endAngle, defaultColor,
            isEmphasis
        ) {
            var serie = series[seriesIndex];
            var data = serie.data[dataIndex];

            // 特定状态下是否需要显示文本标签
            if (_needLabelLine(serie, data, isEmphasis)) {
                var status = isEmphasis ? 'emphasis' : 'normal';

                // serie里有默认配置，放心大胆的用！
                var itemStyle = zrUtil.merge(
                        zrUtil.clone(data.itemStyle) || {},
                        serie.itemStyle,
                        {
                            'overwrite' : false,
                            'recursive' : true
                        }
                    );
                // labelLine配置
                var labelLineControl = itemStyle[status].labelLine;
                var lineStyle = labelLineControl.lineStyle || {};

                var centerX = serie.center[0];                    // 圆心横坐标
                var centerY = serie.center[1];                    // 圆心纵坐标
                // 视觉引导线起点半径
                var midRadius = serie.radius[1];
                // 视觉引导线终点半径
                var maxRadius = midRadius + labelLineControl.length;
                var midAngle = ((endAngle + startAngle) / 2) % 360; // 角度中值
                var cosValue = zrMath.cos(midAngle, true);
                var sinValue = zrMath.sin(midAngle, true);
                // 三角函数缓存已在zrender/tool/math中做了
                return {
                    shape : 'line',
                    zlevel : _zlevelBase + 1,
                    hoverable : false,
                    style : {
                        xStart : centerX + midRadius * cosValue,
                        yStart : centerY - midRadius * sinValue,
                        xEnd : centerX + maxRadius * cosValue,
                        yEnd : centerY - maxRadius * sinValue,
                        strokeColor : lineStyle.color || defaultColor,
                        lineType : lineStyle.type,
                        lineWidth : lineStyle.width
                    }
                };
            }
            else {
                return;
            }
        }

        /**
         * 返回特定状态（normal or emphasis）下是否需要显示label标签文本
         * @param {Object} serie
         * @param {Object} data
         * @param {boolean} isEmphasis true is 'emphasis' and false is 'normal'
         */
        function _needLabel(serie, data, isEmphasis) {
            return self.deepQuery(
                [data, serie],
                'itemStyle.'
                + (isEmphasis ? 'emphasis' : 'normal')
                + '.label.show'
            );
        }

        /**
         * 返回特定状态（normal or emphasis）下是否需要显示labelLine标签视觉引导线
         * @param {Object} serie
         * @param {Object} data
         * @param {boolean} isEmphasis true is 'emphasis' and false is 'normal'
         */
        function _needLabelLine(serie, data, isEmphasis) {
            return self.deepQuery(
                [data, serie],
                'itemStyle.'
                + (isEmphasis ? 'emphasis' : 'normal')
                +'.labelLine.show'
            );
        }
        /**
         * 参数修正&默认值赋值，重载基类方法
         * @param {Object} opt 参数
         */
        function reformOption(opt) {
            // 常用方法快捷方式
            var _merge = zrUtil.merge;
            opt = _merge(
                      opt || {},
                      ecConfig.pie,
                      {
                          'overwrite' : false,
                          'recursive' : true
                      }
                  );

            // 圆心坐标，无则为自适应居中
            if (!opt.center 
                || (opt.center && !(opt.center instanceof Array))) {
                opt.center = [
                    Math.round(zr.getWidth() / 2),
                    Math.round(zr.getHeight() / 2)
                ];
            }
            else {
                if (typeof opt.center[0] == 'undefined') {
                    opt.center[0] = Math.round(zr.getWidth() / 2);
                }
                if (typeof opt.center[1] == 'undefined') {
                    opt.center[1] = Math.round(zr.getHeight() / 2);
                }
            }

            // 传数组实现环形图，[内半径，外半径]，传单个则默认为外半径为
            if (typeof opt.radius == 'undefined') {
                opt.radius = [
                    0,
                    Math.round(Math.min(zr.getWidth(), zr.getHeight()) / 2 - 50)
                ];
            } else if (!(opt.radius instanceof Array)) {
                opt.radius = [0, opt.radius];
            }

            // 通用字体设置
            opt.itemStyle.normal.label.textStyle = _merge(
                opt.itemStyle.normal.label.textStyle || {},
                ecConfig.textStyle,
                {
                    'overwrite' : false,
                    'recursive' : true
                }
            );
            opt.itemStyle.emphasis.label.textStyle = _merge(
                opt.itemStyle.emphasis.label.textStyle || {},
                ecConfig.textStyle,
                {
                    'overwrite' : false,
                    'recursive' : true
                }
            );

            return opt;
        }

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newSeries
         * @param {Object} newComponent
         */
        function init(newOption, newComponent) {
            option = newOption;
            component = newComponent;

            series = option.series;

            self.clear();
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            self.clear();
            _buildShape();
        }

        /**
         * 动画设定
         */
        function animation() {
            var duration = self.deepQuery([option], 'animationDuration');
            var easing = self.deepQuery([option], 'animationEasing');
            var x;
            var y;
            var r0;
            var r;
            var serie;
            var dataIndex;

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                if (self.shapeList[i].shape == 'sector'
                    || self.shapeList[i].shape == 'circle'
                    || self.shapeList[i].shape == 'ring'
                ) {
                    x = self.shapeList[i].style.x;
                    y = self.shapeList[i].style.y;
                    r0 = self.shapeList[i].style.r0;
                    r = self.shapeList[i].style.r;

                    zr.modShape(self.shapeList[i].id, {
                        rotation : [Math.PI*2, x, y],
                        style : {
                            r0 : 0,
                            r : 0
                        }
                    });

                    serie = ecData.get(self.shapeList[i], 'series');
                    dataIndex = ecData.get(self.shapeList[i], 'dataIndex');
                    zr.animate(self.shapeList[i].id, 'style')
                        .when(
                            (self.deepQuery([serie],'animationDuration')
                            || duration)
                            + dataIndex * 10,

                            {
                                r0 : r0,
                                r : r
                            },

                            'QuinticOut'
                        )
                        .start();
                    zr.animate(self.shapeList[i].id, '')
                        .when(
                            (self.deepQuery([serie],'animationDuration')
                            || duration)
                            + dataIndex * 100,

                            {rotation : [0, x, y]},

                            (self.deepQuery([serie], 'animationEasing')
                            || easing)
                        )
                        .start();
                }
                else {
                    dataIndex = self.shapeList[i]._dataIndex;
                    zr.modShape(self.shapeList[i].id, {
                        scale : [0, 0, x, y]
                    });
                    zr.animate(self.shapeList[i].id, '')
                        .when(
                            duration + dataIndex * 100,
                            {scale : [1, 1, x, y]},
                            'QuinticOut'
                        )
                        .start();
                }
            }
        }

        function onclick(param) {
            if (!self.isClick || !param.target) {
                // 没有在当前实例上发生点击直接返回
                return;
            }
            var offset;             // 偏移
            var target = param.target;
            var style = target.style;
            var seriesIndex = ecData.get(target, 'seriesIndex');
            var dataIndex = ecData.get(target, 'dataIndex');

            for (var i = 0, len = self.shapeList.length; i < len; i++) {
                if (self.shapeList[i].id == target.id) {
                    seriesIndex = ecData.get(target, 'seriesIndex');
                    dataIndex = ecData.get(target, 'dataIndex');
                    // 当前点击的
                    if (!style._hasSelected) {
                        var midAngle = 
                            ((style.startAngle + style.endAngle) / 2)
                            .toFixed(2) - 0;
                        target.style._hasSelected = true;
                        _selected[seriesIndex][dataIndex] = true;
                        target.style._x = target.style.x;
                        target.style._y = target.style.y;
                        offset = self.deepQuery(
                            [series[seriesIndex]],
                            'selectedOffset'
                        );
                        target.style.x += zrMath.cos(midAngle, true) 
                                          * offset;
                        target.style.y -= zrMath.sin(midAngle, true) 
                                          * offset;
                    }
                    else {
                        // 复位
                        target.style.x = target.style._x;
                        target.style.y = target.style._y;
                        target.style._hasSelected = false;
                        _selected[seriesIndex][dataIndex] = false;
                    }
                    
                    zr.modShape(target.id, target);
                }
                else if (self.shapeList[i].style._hasSelected
                         && _selectedMode == 'single'
                ) {
                    seriesIndex = ecData.get(self.shapeList[i], 'seriesIndex');
                    dataIndex = ecData.get(self.shapeList[i], 'dataIndex');
                    // 单选模式下需要取消其他已经选中的
                    self.shapeList[i].style.x = self.shapeList[i].style._x;
                    self.shapeList[i].style.y = self.shapeList[i].style._y;
                    self.shapeList[i].style._hasSelected = false;
                    _selected[seriesIndex][dataIndex] = false;
                    zr.modShape(
                        self.shapeList[i].id, self.shapeList[i]
                    );
                }
            }
            
            messageCenter.dispatch(
                ecConfig.EVENT.PIE_SELECTED,
                param.event,
                {selected : _selected}
            );
            zr.refresh();
        }

        /**
         * 数据项被拖拽进来， 重载基类方法
         */
        function ondrop(param, status) {
            if (!self.isDrop || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }

            var target = param.target;      // 拖拽安放目标
            var dragged = param.dragged;    // 当前被拖拽的图形对象

            var seriesIndex = ecData.get(target, 'seriesIndex');
            var dataIndex = ecData.get(target, 'dataIndex');

            var data;
            var legend = component.legend;
            if (dataIndex == -1) {
                // 落到pieCase上，数据被拖拽进某个饼图，增加数据
                data = {
                    value : ecData.get(dragged, 'value'),
                    name : ecData.get(dragged, 'name')
                };

                // 修饼图数值不为负值
                if (data.value < 0) {
                    data.value = 0;
                }

                series[seriesIndex].data.push(data);

                legend.add(
                    data.name,
                    dragged.style.color || dragged.style.strokeColor
                );
            }
            else {
                // 落到sector上，数据被拖拽到某个数据项上，数据修改
                data = series[seriesIndex].data[dataIndex];
                legend.del(data.name);
                data.name += option.nameConnector
                             + ecData.get(dragged, 'name');
                data.value += ecData.get(dragged, 'value');
                legend.add(
                    data.name,
                    dragged.style.color || dragged.style.strokeColor
                );
            }

            // 别status = {}赋值啊！！
            status.dragIn = status.dragIn || true;

            // 处理完拖拽事件后复位
            self.isDrop = false;

            return;
        }

        /**
         * 数据项被拖拽出去，重载基类方法
         */
        function ondragend(param, status) {
            if (!self.isDragend || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }

            var target = param.target;      // 被拖拽图形元素

            var seriesIndex = ecData.get(target, 'seriesIndex');
            var dataIndex = ecData.get(target, 'dataIndex');

            // 被拖拽的图形是饼图sector，删除被拖拽走的数据
            component.legend.del(
                series[seriesIndex].data[dataIndex].name
            );
            series[seriesIndex].data.splice(dataIndex, 1);

            // 别status = {}赋值啊！！
            status.dragOut = true;
            status.needRefresh = true;

            // 处理完拖拽事件后复位
            self.isDragend = false;

            return;
        }

        /**
         * 输出动态视觉引导线
         */
        self.shapeHandler.onmouserover = function(param) {
            var shape = param.target;
            var seriesIndex = ecData.get(shape, 'seriesIndex');
            var dataIndex = ecData.get(shape, 'dataIndex');
            var percent = ecData.get(shape, 'special');

            var startAngle = shape.style.startAngle;
            var endAngle = shape.style.endAngle;
            var defaultColor = shape.highlightStyle.color;

            // 文本标签，需要显示则会有返回
            var label = _getLabel(
                    seriesIndex, dataIndex, percent,
                    startAngle, endAngle, defaultColor,
                    true
                );
            if (label) {
                zr.addHoverShape(label);
            }

            // 文本标签视觉引导线，需要显示则会有返回
            var labelLine = _getLabelLine(
                    seriesIndex, dataIndex,
                    startAngle, endAngle, defaultColor,
                    true
                );
            if (labelLine) {
                zr.addHoverShape(labelLine);
            }
        };

        self.reformOption = reformOption;   // 重载基类方法
        
        // 接口方法
        self.init = init;
        self.refresh = refresh;
        self.animation = animation;
        self.onclick = onclick;
        self.ondrop = ondrop;
        self.ondragend = ondragend;

        init(option, component);
    }

    // 图表注册
    require('../chart').define('pie', Pie);
    
    return Pie;
});
/**
 * echarts地图数据：中国
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/util/mapData/china',[],function() {
    var heiLongJiang ='m 601.689,106.185 c 0.71171,-6.42654 14.5038,0.76148 14.1123,-4.35238 -0.63747,-8.32526 1.21563,-3.96272 1.14305,-8.6608 -0.038,-2.44785 3.3153,-6.75917 2.11024,-10.2435 -0.47281,-1.36722 -0.007,-2.64486 -0.57152,-5.84714 -0.40895,-2.31969 1.08644,-3.39327 0.26378,-5.45147 -1.49082,-3.72943 7.80807,-5.43342 1.84646,-10.3314 -1.82241,-1.49725 1.16586,-6.32804 -1.27494,-6.81433 -3.82026,-0.763761 -8.04116,5.56241 -11.5184,6.81433 -4.62881,1.66667 -5.43052,6.90309 -6.3747,7.21 -8.44513,2.7446 -8.8999,1.69798 -10.9029,2.19817 -4.71383,1.17706 -0.12007,3.44366 -5.97903,-2.59384 -2.52499,-2.60193 -0.13812,-0.905813 -0.43964,-4.44031 -0.33346,-3.90777 -2.94762,-0.385924 -2.7529,-5.60928 0.1545,-4.14583 -2.23674,2.16188 -9.43679,-4.7101 -4.83847,-4.61803 -3.78687,1.53105 -6.76871,-0.840282 -4.98135,-3.96127 -6.16504,-0.247813 -11.5976,-0.840282 -4.5131,-0.4921 -3.03037,-7.50531 -4.50335,-8.51356 -2.62308,-1.79566 -0.72685,-1.87923 -3.72611,-6.70007 -2.18428,-3.51127 -3.09839,-1.23015 -3.56643,-5.46183 -0.13998,-1.26561 -1.58953,-1.9149 -1.87405,-3.29498 -0.6327,-3.06915 -3.90632,-6.13891 -3.96874,-6.36848 -0.30028,-1.10406 0.28245,-2.38896 -0.19846,-3.42749 -0.27083,-0.585004 -1.71126,0.745927 -2.11667,-1.74692 -0.0975,-0.599728 -3.75058,-6.3326 -3.85841,-6.39046 -3.39555,-1.8251 -6.38859,-6.10221 -10.4511,-3.40551 -2.74543,1.82241 -8.06003,-6.88028 -17.749,-2.25541 -1.81349,0.865582 -4.64934,-0.212974 -5.37992,0.751733 -0.81062,1.07026 -4.61118,1.51695 -6.99267,2.05674 10.1576,5.92946 -5.56552,9.49258 2.30995,13.0126 3.0117,1.34607 2.89225,3.16412 5.09976,-0.483598 1.4143,-2.33711 3.42293,1.76082 4.70409,2.33006 3.11788,1.38526 -1.12916,-0.508068 1.18701,4.39634 1.88172,3.9845 2.96193,10.9448 9.0125,7.78153 2.7247,-1.42446 4.02618,-0.09767 9.93574,-2.46195 4.65847,-1.86368 -0.13831,-9.07575 8.6608,-0.923232 5.64495,5.2302 5.03112,5.08503 -0.13189,17.7173 -2.03082,4.96849 4.29349,12.057 -2.11024,14.5079 -2.40596,0.920744 -0.091,6.69447 -1.67061,8.44098 -0.7735,0.855213 2.48476,4.74411 0.4836,5.80317 -2.25354,1.1924 -1.74879,-8.69356 -4.52823,-3.25329 -2.61375,5.11614 -12.2459,12.9143 -13.3039,15.5687 -1.09598,2.74979 3.69645,4.12738 5.04916,6.96572 2.94161,6.172301 3.54549,-4.05646 5.22543,-0.04438 0.22998,0.549336 2.58907,-0.905605 2.13866,1.34897 -0.54643,2.735059 -8.3937,0.991251 -3.9453,6.627699 0.15408,0.19514 0.2194,0.44648 0.32931,0.66961 1.26457,0.14911 2.81905,0.30671 4.06703,-0.0149 6.70816,-1.7293 2.79209,2.15898 5.8911,6.29154 4.94983,6.60074 7.56171,1.01655 9.80385,2.54988 2.40161,1.64261 3.85053,-2.37527 5.8911,-1.8025 0.11987,0.0336 3.51127,6.33675 6.59452,3.82482 3.38311,-2.75622 8.74769,-1.37054 8.08927,1.8025 -1.53582,7.40141 5.47137,1.61379 5.67128,4.0886 0.59227,7.33484 7.40888,6.68286 6.50659,4.17653 -1.15549,-3.20892 1.80603,-7.88999 3.07744,-3.64897 1.38983,4.63607 1.8249,3.91752 4.04464,7.6936 2.87214,4.88616 5.8208,2.33068 5.31958,1.09909 -1.41222,-3.47021 2.34831,-2.27614 3.91275,-4.48427 2.62018,-3.69811 3.38436,1.10821 4.87994,-1.58268 1.51798,-2.73154 2.4829,2.87898 4.39634,3.51707 4.33496,1.4454 2.22845,1.53789 6.92217,0.50703 -0.0375,-0.17336 -0.0827,-0.35087 -0.13666,-0.53357 -1.61068,-5.4496 1.61296,-5.49958 -5.86228,-17.7347 -0.43362,-0.70985 4.83059,-2.84684 5.01183,-4.48427 l -1.2e-4,-5e-5 z';
    var jiLin='m 570.123,125.837 c 0.90229,2.50633 -5.91433,3.15832 -6.50659,-4.17653 -0.19991,-2.47481 -7.2071,3.31281 -5.67128,-4.0886 0.65842,-3.17304 -4.70616,-4.55872 -8.08927,-1.8025 -3.08325,2.51193 -6.47465,-3.79122 -6.59452,-3.82482 -2.04057,-0.57277 -3.48949,3.44512 -5.8911,1.8025 -2.24214,-1.53333 -4.85402,4.05086 -9.80385,-2.54988 -3.09901,-4.13256 0.81706,-8.02084 -5.8911,-6.29154 -1.24798,0.32164 -2.80246,0.16403 -4.06703,0.0149 0,4.63959 -4.64084,1.76683 -2.57953,4.70989 0.52922,0.75547 1.13413,5.56055 -3.15292,1.92382 -2.31886,-1.96716 0.66775,2.82444 -4.23335,-0.68537 -3.082,-2.20709 -1.45121,0.67666 -3.15292,2.80827 -1.24487,1.55925 2.23944,-0.65883 2.80018,2.01236 0.34217,1.63017 4.2657,2.84228 2.33711,5.77145 -1.19469,1.81453 1.53685,1.82034 0.19846,3.71491 -1.04641,1.48107 2.99408,4.9546 3.41754,7.93851 0.31645,2.22907 2.80495,-0.87823 6.50431,-3.40551 3.36569,-2.29937 -0.83759,0.19037 2.73403,2.32197 1.44934,0.86496 -0.0145,1.70172 2.55755,4.75427 0.0321,0.0379 1.47796,3.47125 0.81581,4.02452 -2.78795,2.32965 -0.42553,1.65278 0.79362,2.63138 0.75858,0.60885 0.26627,-0.038 1.87425,0.22106 0.68413,-2.13368 1.19427,-1.10904 1.389,-0.90644 2.43333,2.5308 5.45499,1.39086 5.8208,3.80325 1.04144,6.86846 3.17698,0.12132 3.1971,0.0885 2.18946,-3.54984 1.96114,-0.26233 1.9402,1.41512 -0.0102,0.80835 4.64105,6.92569 5.49004,8.4472 1.53955,2.75912 3.9818,-0.14454 2.38128,1.41512 -0.002,0.002 -2.32094,4.7381 -0.41889,6.12543 2.59301,1.89126 2.30953,3.28025 3.63797,4.57717 5.24803,5.12319 -1.44789,2.83087 2.24898,6.35935 0.28472,-0.22811 0.57691,-0.39193 0.88196,-0.45518 2.41384,-0.50102 3.63238,-4.75116 5.1151,-7.12021 1.1474,-1.83361 2.32322,-9.51145 5.62255,-5.48402 3.54217,4.32376 6.42032,0.86516 10.3627,1.83527 1.9684,0.48442 3.44926,-1.34358 0.30857,-5.15222 -0.65675,-0.79632 -2.08329,-3.45714 0.13231,-3.80346 11.9997,-1.87591 8.49531,-8.05029 10.7818,-8.20374 2.23944,-0.15014 0.19742,1.15383 2.64569,-0.50869 1.8363,-1.24694 -0.98358,-3.14712 -0.19846,-5.15222 0.21235,-0.54229 1.1474,-2.88272 1.67579,-2.89682 0.49729,-0.0133 7.13618,5.71172 7.27595,5.99251 0.1292,0.25942 0.49604,-1.66543 -1.25669,-2.71993 -4.0154,-2.41612 5.15699,-1.57397 5.02697,-6.92113 -0.0502,-2.06607 0.51968,-3.48618 0.0927,-5.45914 -4.69372,1.03086 -2.58721,0.93837 -6.92217,-0.50703 -1.91345,-0.6381 -2.87836,-6.24861 -4.39634,-3.51707 -1.49559,2.69089 -2.25976,-2.11543 -4.87994,1.58268 -1.56443,2.20813 -5.32497,1.01406 -3.91275,4.48427 0.50122,1.2316 -2.44744,3.78708 -5.31958,-1.09909 -2.21974,-3.77609 -2.65481,-3.05753 -4.04464,-7.6936 -1.27141,-4.24102 -4.23293,0.44004 -3.07744,3.64897 l 4e-5,1e-5 z';
    var liaoNing='m 546.359,156.509 c -0.84899,-1.52151 -5.5002,-7.63885 -5.49004,-8.4472 0.0209,-1.67745 0.24926,-4.96497 -1.9402,-1.41512 -0.0201,0.0328 -2.15566,6.77991 -3.1971,-0.0885 -0.36581,-2.41239 -3.38747,-1.27245 -5.8208,-3.80325 -0.19472,-0.2026 -0.70487,-1.22724 -1.389,0.90644 0,10.8797 -1.92319,0.60325 -4.47598,8.00487 -1.2345,3.57949 -8.69273,-0.14848 -7.78298,1.68056 0.38966,0.78346 2.7923,0.65178 -3.13094,1.52586 -3.09465,0.45663 0.53109,4.24309 -4.56411,3.51604 -1.63183,-0.23289 -2.42462,2.96007 -6.50078,4.42081 -5.1263,1.83713 -6.74403,9.72546 -7.91342,7.38586 -3.91772,-7.83814 -2.49741,-4.44072 -5.45147,-6.8583 -0.77226,-0.63187 -4.89114,0.008 -2.63781,2.63781 1.61379,1.88338 -0.28348,3.01792 1.58268,8.44098 0.2588,0.75194 1.45266,1.22994 -1.3189,2.81366 0,1.2457 -0.3515,1.78612 -1.18701,3.07744 -4.36814,6.75171 -0.36685,4.19872 1.97835,6.63848 2.27656,2.36843 3.17366,-1.17022 4.35238,2.2861 2.00179,5.86995 2.05778,1.83651 2.85202,5.52135 1.16234,-0.92759 2.59281,-1.92921 4.35798,-3.01544 3.32816,-2.04783 6.62998,-13.4325 11.3191,-11.9879 3.76468,1.15964 2.54241,-2.87587 4.63026,-1.32658 1.01178,0.7509 -0.0852,1.39439 2.44744,3.64855 2.95986,2.6347 0.883,5.34031 -0.59537,8.2701 -1.29174,2.56004 -5.85854,4.54379 -4.10104,6.47922 0.80067,0.88175 -5.24596,3.19336 -1.1024,4.57738 1.30895,0.43714 4.72047,-0.79217 2.9105,1.19406 -0.44855,0.4923 1.71333,4.5807 3.52765,2.47668 l 2.84435,-3.44968 c 1.53043,-2.04741 6.19117,-5.97011 8.64296,-6.6559 1.614,-0.45146 1.49745,-1.77409 3.15292,-1.87964 1.78322,-0.11385 3.71657,-1.34379 5.66651,-1.57003 3.66597,-0.42533 1.91987,-1.93999 5.07114,-5.46183 2.14508,-2.39725 1.50409,-2.62847 4.47577,-4.64374 1.39107,-0.94335 0.0987,-1.05077 3.30721,-2.94099 1.2204,-0.71897 2.2187,-2.59073 3.3294,-3.48099 -3.69687,-3.52848 2.99905,-1.23616 -2.24898,-6.35935 -1.32844,-1.29692 -1.04496,-2.68592 -3.63797,-4.57717 -1.90204,-1.38734 0.41661,-6.12315 0.41889,-6.12543 1.60052,-1.55967 -0.84173,1.344 -2.38128,-1.41512 l 7e-5,-4e-5 z m -35.3595,50.1961 c -2.52126,2.4238 -1.21045,0.14807 -1.35602,3.11788 -0.0755,1.54079 1.26644,-0.34403 2.32612,-0.59703 0.81747,-0.19514 3.4671,-1.75937 3.47249,-1.7911 0.0703,-0.41558 -0.78118,-1.56132 -0.91494,-1.63639 -0.005,-0.002 -2.90221,0.30546 -3.52765,0.90664 l 0,0 z m 15.7754,-3.31696 c -0.98337,0.18705 -0.82597,1.37593 0,1.43752 0.49666,-0.55908 3.14712,-1.58165 0.47385,-1.43752 -0.1576,0.008 -0.31894,-0.0294 -0.47385,0 z m 3.63777,-0.66318 c -0.25528,0.58832 0.30899,1.39024 1.14657,0.55265 0.0552,-0.0552 0.24263,-0.12152 0.24263,-0.12152 -0.017,-0.52093 -1.27639,-0.6918 -1.3892,-0.43113 l 0,0 z m -8.0254,-0.74095 c -1.9263,1.61835 0.61735,2.43251 0.61735,0.34279 0,-0.42346 -0.51843,-0.42595 -0.61735,-0.34279 z m 2.06151,-0.75174 c 1.39335,1.86616 3.46316,-0.0176 2.57953,-0.0664 -2.79437,-0.15408 -2.52665,-1.03314 -3.45051,-0.68558 -0.32703,0.12215 0.77517,0.62358 0.87097,0.75194 l 1e-5,0 z m 3.89139,-0.71876 c -0.94418,0.73577 2.24483,1.10137 1.13558,-0.61901 -0.10618,-0.16466 -0.5286,-0.10016 -0.52922,-0.0995 -0.41309,0.39235 0.96015,-0.50205 -0.60636,0.71855 l 0,0 z m 0.84899,-2.95198 c -0.37286,0.14599 -0.38178,1.97047 0.47406,1.22724 0,-0.1715 0.0879,-1.44602 -0.47406,-1.22724 z m -0.34175,-0.68558 c -2.01361,-0.98379 -1.46116,1.59409 -0.0332,0.4865 0.18332,-0.14226 0.0939,-0.45705 0.0332,-0.4865 z m -24.0324,-9.409 c 0.0156,-0.0162 1.95285,-0.88445 -0.65033,-0.88445 -0.0367,0 -0.0941,-0.0328 -0.11032,0 -0.001,0.002 -0.33367,2.01257 0.76065,0.88445 z';
    var heBei='m 487.12,186.946 c -2.3452,-2.43976 -6.3465,0.11323 -1.97835,-6.63848 0.83551,-1.29132 1.18701,-1.83174 1.18701,-3.07744 l -0.87927,0.13189 -0.74738,0 -1.23098,0.044 -1.18701,0 -0.57152,-0.52756 -0.52756,0.35171 -0.79134,0.13189 -0.79135,0 -1.27494,0.13189 -0.43963,0.52756 -0.92323,0 -0.30775,-0.9672 0,-1.01116 -0.13189,-0.87926 -0.70341,-0.83531 -1.18701,-0.39567 -0.43964,-0.87927 0.0879,-1.01116 0.79134,-0.61549 0.83531,-0.39567 0.13189,-0.70341 -1.14305,-0.74738 -0.61549,-1.01116 -0.74738,-0.79134 -0.30774,-1.09909 -0.79134,-0.83531 -0.21982,-1.18701 -0.044,-0.96719 -0.4836,-0.79135 -0.65945,-0.61548 -0.57153,-0.70342 -0.70341,-0.70341 -0.92324,-0.30775 -1.05512,0 -0.96719,0.21982 -0.52756,0.57152 -0.61549,0.61549 -0.4836,0.43964 -1.05512,0.3517 -1.36287,0 -0.92323,0 -0.61549,0.74738 -0.43963,0.79134 -0.0879,0.65945 0.13189,0.4836 0.30774,0.39567 0,0.57153 -0.30774,0.57152 -0.4836,0.52756 0.26378,0.4836 0.35171,0.39567 0.26378,0.43964 -0.52756,0.79134 -0.30774,0.65945 -0.92324,0.35171 -1.09909,0.13189 -1.05512,-0.13189 -0.8353,0 -0.70342,-0.57153 -0.49687,-0.0214 -0.39691,0.17689 -0.24242,0.48651 -0.63934,0.6412 -0.66152,0.64141 -0.33077,0.48629 -0.46306,0.30961 -0.39671,0.28763 -0.97031,-0.50869 -0.39671,-0.66339 -0.4191,-0.6412 -1.33321,0.32329 -0.88134,0.88135 -0.88134,0.61694 -0.96948,0.88134 -0.88134,0.61694 -0.79321,0.70507 -0.61694,0.88134 -0.44067,0.96948 -0.79321,0.52881 -1.23388,0 -1.14575,0 -0.52881,-1.41015 0,-1.41015 0.44068,-1.32201 0.44067,-1.41015 -0.70508,-0.79321 -0.88134,-0.96948 -0.79321,-0.61694 -0.88134,-0.2644 -0.96948,0.88134 -0.7932,1.14575 -0.79321,0.96948 -0.88134,0.96947 -0.44068,0.79321 -0.2644,1.05761 -0.35254,0.88134 -0.2644,1.05761 -0.5288,0.96948 -1.32201,0 -0.44067,1.14575 -0.0676,1.40911 -0.4836,0.74738 0.4836,0.74738 0.35171,0.8353 -0.13189,0.65945 -0.30775,0.52756 -0.044,0.65946 0.43963,0.57152 0.4836,0.65945 0.43964,0.61549 0.3517,0.87927 c 2.02875,3.92581 1.51135,1.78695 2.89246,5.877 0.62773,1.85932 6.15613,-0.30443 -2.0725,3.40551 -5.25923,2.37112 3.03742,3.78853 3.41733,5.24077 1.9122,7.3112 2.61292,-2.01859 0.79383,8.24812 -0.59454,3.35553 -5.97488,0.36394 -7.3421,3.75908 -0.38799,0.96367 2.59446,2.19091 -0.39691,4.26777 -1.1783,0.81809 -3.02933,5.22045 0.20198,6.39481 1.36287,0.49542 5.22999,7.47358 5.23165,7.51775 0.011,0.30111 -4.18627,7.68074 -4.30842,10.3314 -0.17689,3.8356 -5.66091,0.68289 0.76978,7.91134 0.9618,0.0877 13.2102,2.90345 13.2106,2.90366 2.08474,1.23782 1.54577,-3.93099 4.0886,-0.8353 1.05471,1.28386 1.16835,0.23827 2.46009,-0.55079 0.48069,-1.85787 -5.98525,-5.27064 1.10095,-8.98928 3.09133,-1.62229 1.92382,-6.66253 5.58336,-8.00135 1.21584,-0.44482 0.89897,-3.08283 2.11024,-2.81366 1.27784,0.28389 -0.69678,2.94991 3.95671,-3.1214 1.52773,-1.99329 7.2436,-0.28514 7.86946,-2.72573 0.74489,-2.9049 0.35793,-1.08415 2.33006,-2.41799 0.75505,-0.51056 0.3965,-0.95828 0.98731,-1.82199 -1.80312,-1.23305 0.86205,0.25859 -2.65792,-4.72856 -0.11738,-0.16652 -0.20966,-0.37079 -0.27851,-0.60595 -5.62255,0.83966 -13.1133,-2.53744 -8.77796,-5.72479 2.4267,-1.78425 -0.49313,-1.37489 -0.47696,-7.38399 -1.01717,-0.13542 -2.41115,-0.41558 -3.26076,0.28846 -5.37246,4.4513 -0.51512,0.67272 -4.98301,0.44233 -4.74805,-0.24491 -0.0259,2.00697 -5.13729,0 -3.64834,-1.43254 -0.76376,-2.10382 -1.34482,-3.69293 -1.67766,-4.58734 -1.30667,-1.23658 3.37336,-5.17441 2.21041,-1.85994 -4.33061,-5.19577 0.26461,-5.77145 1.0375,-0.13003 5.06865,-3.44449 5.07114,-3.44968 3.35014,-6.85021 3.76634,1.49248 7.40825,1.32678 10.2779,-0.46763 -2.54117,1.69156 4.18524,6.445 1.35374,-0.0705 4.83826,2.69732 3.07744,2.98951 -3.25018,0.53938 -0.64203,5.44255 1.84646,5.84714 3.48307,0.56613 -0.88964,1.80022 1.58268,3.07744 0.61466,0.31749 0.49065,0.54415 0.62897,1.06031 0.29489,-0.0786 0.58832,-0.0377 0.87201,0.15055 5.79612,3.84722 1.50201,2.90698 6.08541,0.24325 0.80295,-0.46659 3.3321,1.48252 5.86497,-2.18925 1.65609,-2.40078 -0.54394,-5.28308 6.15073,-10.6255 -0.79425,-3.68484 -0.85024,0.3486 -2.85202,-5.52135 -1.17872,-3.45631 -2.07582,0.0823 -4.35238,-2.2861 l -10e-6,6e-5 z m -20.6628,13.4088 c -0.0774,-1.58455 -1.15238,-0.29198 -0.86931,-3.24666 -1.35416,0.045 -5.1655,-0.32579 -3.57473,2.24504 0.75774,1.22475 1.96467,0.34943 1.378,2.53184 -0.067,0.24947 -0.0108,0.26938 0.0765,0.4921 0.78864,0.13915 3.19129,2.10506 2.98951,-2.02232 l 10e-6,0 z';
    var shanDong = 'm 457.693,252.769 c 0.0834,-0.20344 0.11095,-0.16569 0,0 z m 29.2075,-29.2015 c -2.67327,-2.39746 -1.88649,1.93667 -4.87994,0.61549 -2.70271,-1.19303 -2.93373,2.81262 -4.79201,0.17585 -0.41122,-0.58334 -0.84961,-1.0939 -1.45079,-1.49476 -0.40583,-0.27062 -0.71378,-0.47551 -0.94708,-0.63498 -0.59081,0.86372 -0.23226,1.31144 -0.98731,1.82199 -1.97213,1.33383 -1.58517,-0.48692 -2.33006,2.41799 -0.62586,2.44059 -6.34173,0.73245 -7.86946,2.72573 -4.65349,6.07131 -2.67887,3.4053 -3.95671,3.1214 -1.21128,-0.26917 -0.89441,2.36884 -2.11024,2.81366 -3.65954,1.33881 -2.49202,6.37905 -5.58336,8.00135 -7.0862,3.71864 -0.62026,7.13141 -1.10095,8.98928 1.04911,1.83734 -1.06549,2.9161 -1.32554,3.47664 -1.56215,3.36839 2.28631,0.26523 2.42525,0.24325 2.88914,-0.4585 0.91245,-1.01842 2.84435,-1.48148 1.89271,-0.45373 2.63926,-1.26623 2.85638,-1.58994 -0.0396,0.096 -0.0915,0.24595 -0.14724,0.46162 -0.66629,2.57725 -7.18242,5.63396 -7.25127,7.03249 -0.14391,2.92357 -2.94804,1.89146 -3.5938,3.47166 -0.57754,1.41326 -4.74639,5.19681 -1.32637,5.19681 5.62151,0 2.18096,0.38903 4.14501,1.1277 5.87306,2.20854 -3.56228,4.45897 10.9799,3.98014 1.56402,-0.89814 0.8716,-0.72664 1.80333,-1.46676 1.24342,-0.98731 -0.6976,-3.58696 1.76849,-3.75182 2.61292,-0.17461 1.86015,-1.55967 2.60172,-0.95082 0.0442,0.0363 0.0875,0.0716 0.12961,0.10577 -2.27988,-2.52997 -3.82295,-2.77343 -1.40455,-4.72752 1.09639,-0.88591 0.21837,1.28012 3.43952,4.51102 l 1.79628,2.08059 c 0.52902,0.45124 1.21439,1.0713 2.10796,1.91593 0.20053,0.18954 0.41164,0.39027 0.63374,0.60304 4.99877,4.78766 5.99354,-5.13709 8.8634,-0.33159 2.05301,3.43786 3.61993,1.7575 3.77007,0.81809 0.9392,-5.87679 1.6449,-1.58082 2.80018,-3.56 2.60815,-4.4681 -0.54851,-3.75016 5.77559,-5.40149 0.12422,-0.1182 0.26585,-0.20758 0.42429,-0.25963 2.21207,-0.72747 2.09988,-7.48312 4.74059,-8.02706 1.51052,-0.31127 4.83639,-4.83473 3.48369,-6.19159 -2.14674,-2.15338 2.27614,-3.66348 1.91822,-0.75173 -0.18602,1.51425 3.61661,-0.45374 3.72611,-1.32678 0.15387,-1.226 -1.23429,-3.06355 0.33076,-4.09088 0.36664,-0.24056 3.23753,1.22766 1.60944,-1.81328 -0.47634,-0.88985 -3.49924,-0.01 -0.74966,-0.77393 3.79558,-1.0545 7.3927,-2.54158 10.4206,-4.99151 1.30003,-1.05201 3.27486,-1.28033 4.26445,-0.044 1.11485,1.39294 4.16802,-1.12584 2.11024,-2.24214 -0.94708,-0.51367 0.90187,-2.31803 0.92323,-3.47311 0.0261,-1.42176 2.00386,-3.21016 -1.45079,-1.97835 -2.56771,0.91556 -3.73876,-2.15006 -5.14372,-0.79134 -1.6957,1.63971 -2.65212,1.05761 -4.5722,1.45079 -1.46946,0.3009 -1.108,-1.71374 -3.38518,-1.53872 -2.39518,0.18415 -3.77671,-4.46851 -6.8583,-2.19817 -1.69695,1.25026 -3.51272,1.03086 -4.0886,3.20933 -0.65572,2.48062 -3.14048,2.23467 -3.91275,5.4075 -1.14181,4.69165 -13.644,1.87405 -10.5073,-1.8025 0.64846,-0.76003 1.25856,-3.84887 0.61549,-4.30842 -2.11356,-1.51031 1.15798,-1.32305 -1.58268,-3.78086 l -3e-5,1e-5 z m 20.7864,-7.72927 c -0.0261,0.0319 -0.52549,2.54013 1.03625,0.66339 0.73058,-0.87781 -1.02132,-0.68143 -1.03625,-0.66339 z m -0.24263,1.57003 c -0.24512,-0.0579 -0.97072,-0.20634 -1.14657,0.0222 -0.19908,0.25818 2.42939,2.40804 1.14657,-0.0222 z m 0.0881,2.21144 c -2.24359,-1.23906 -4.35819,2.46465 -1.16856,0.72975 0.53088,-0.28866 1.84626,-0.35523 1.16856,-0.72975 z m 0.77185,1.41512 c -0.27146,0.27249 0.50744,1.72536 0.88175,0.59703 0.39567,-1.19261 -0.72913,-0.75028 -0.88175,-0.59703 z m -1.76393,2.6094 c 1.12314,1.83983 1.37344,-2.19257 -1.85206,-1.3048 -0.11012,0.0303 -0.10203,0.21816 -0.0883,0.3318 0.12775,1.05761 1.21376,-0.21733 1.94041,0.973 l 0,0 z';
    var jiangSu = 'm 514.37,317.233 c 0.0566,-0.0199 0.0487,-0.003 0,0 z m -25.5618,-47.9479 c -1.15528,1.97918 -1.86098,-2.31679 -2.80018,3.56 -0.15014,0.93941 -1.71706,2.61976 -3.77007,-0.81809 -2.86986,-4.80549 -3.86463,5.11925 -8.8634,0.33159 l -0.63374,-0.60305 c 1.07254,2.6799 -1.05761,3.0061 -1.39459,1.62022 -0.12235,-0.50329 -2.63594,-4.21012 -2.71205,-4.24558 l -0.4527,-0.21276 c -0.2644,-0.10825 -0.68226,-0.37722 -1.37987,-0.9419 -0.0421,-0.0342 -0.0854,-0.0695 -0.1296,-0.10576 -0.74158,-0.60885 0.0112,0.7762 -2.60172,0.95081 -2.4661,0.16487 -0.52508,2.76451 -1.76849,3.75182 5.4693,4.03759 4.71529,0.84651 8.33874,5.95539 2.61976,3.69376 5.99188,-1.3863 8.16206,5.15264 0.66256,1.9964 7.60298,-4.36047 3.30721,5.63873 -1.70172,3.96106 1.99764,2.25354 3.0285,1.75543 -1.93356,-1.32429 1.19987,-0.48422 2.10879,-1.18058 1.89872,-1.45453 3.82689,0.49874 1.96239,-0.92862 -1.04724,-0.80171 -2.77343,-5.02759 -0.35275,-4.09088 0.44358,0.17171 0.67355,0.49148 0.81581,0.92862 0.86807,2.66725 3.93099,1.94849 2.86613,4.44466 -1.97317,4.62487 -2.80184,2.85513 -2.82216,2.85265 -0.78221,-0.0956 -1.51653,2.09241 -2.05052,0.59704 -0.25942,-0.72685 -0.29053,-1.11485 -0.22334,-1.30397 -0.16092,-0.0705 -0.36311,-0.17109 -0.61445,-0.31024 -0.49044,-0.27145 -0.88922,-0.50205 -1.20858,-0.69844 0.59952,1.94559 -0.20219,8.42729 5.11116,5.67377 1.05886,-0.54871 3.17366,-7.16583 6.26168,-0.81809 0.8606,1.76891 0.74302,4.78082 -2.53557,3.2506 -1.73075,-0.80793 -6.66606,-1.2177 -3.28523,1.32678 3.5488,2.67099 -2.82921,4.07097 -2.86613,4.79844 -0.37016,7.28093 9.64209,5.27831 5.57817,10.2383 -2.67244,3.2618 5.65614,0.21443 6.76892,0.9728 1.34835,0.91887 2.05031,1.0769 3.68215,0.99519 0.76272,-0.80462 1.38589,-0.79611 3.00486,-0.79611 -0.0593,-4.20991 4.18441,-5.56905 5.96887,-4.24558 0.6636,0.4921 -1.46676,-0.3007 -0.26461,1.08353 0.95641,1.10137 -1.49849,0.53274 0.0661,1.39314 2.13637,1.17478 0.33367,0.91162 0.77164,1.6142 0.20489,0.32889 0.40563,0.36581 0.48837,0.36124 -0.0767,0.027 -0.27166,0.12173 -0.64265,0.41268 -0.0255,0.0199 -0.0496,0.0382 -0.0726,0.055 0.17876,0.23724 0.34072,0.89275 0.29302,2.4437 l -0.0442,0.50869 0.85999,0.92863 0.66152,0 c 0.73369,-1.17934 2.03912,-1.53271 2.29294,-2.69774 0.98669,-0.46908 1.10842,-1.05865 2.09469,-1.23823 l 0.044,-1.1277 c 2.99138,-1.68824 0.57629,-4.30759 3.54984,-5.39568 l 1.06985,-0.72333 c -0.65033,-0.89295 -0.2922,-1.5634 -6.29527,-2.8147 -2.35515,-0.49085 -1.61711,-6.33239 -6.12958,-1.96799 -0.46618,0.45084 -3.19875,0.73722 -3.13074,0.61923 0.30857,-0.53503 1.96944,-0.67211 2.60172,-1.23844 5.01473,-4.49111 6.39875,2.8317 9.2823,1.26042 4.34326,-2.36677 10.6477,4.63773 9.19416,-0.46432 -1.389,-4.87559 -6.92549,-2.18449 -7.36408,-6.19159 -0.36706,-3.35429 -5.35483,-0.86164 -5.8208,-6.74445 -0.18954,-2.39373 -5.72935,-10.0531 -6.57046,-14.1301 -0.0139,-0.0678 -2.84871,-6.0149 -4.59086,-6.21378 -4.29991,-0.49106 -9.0152,-4.31298 -10.1862,-4.37809 -1.7378,-0.0966 -1.94746,-3.23795 -0.8828,-4.2516 -6.3241,1.65132 -3.16744,0.9334 -5.77559,5.40149 l -6e-5,10e-6 z';
    var zheJiang = 'm 533.75467,341.586 c -0.2078,-1.43877 0.1829,-0.96886 0,0 z m 5.8849,-20.9996 c 0.2443,1.0713 1.872,-0.46597 -0.6503,-1.68056 -0.3103,0.17502 -0.5317,0.23682 -0.5844,0.60802 -0.1605,1.12978 0.5966,0.76169 1.4112,0.92883 -0.0701,0.18623 -0.2093,0 -0.1765,0.14372 l 0,-10e-6 z m 1.1908,-3.0847 c -0.7441,0.0794 -0.3547,0.92717 1.2125,0.6412 0,-0.2756 -0.045,-1.12812 -0.4465,-1.11671 -0.2101,0.006 -0.3946,0.43591 -0.766,0.47551 l 0,0 z m 2.2046,1.31559 c -1.7646,0.54747 0.0391,1.04952 1.0032,0.84028 0.2014,-0.43673 -0.8898,-0.87553 -1.0032,-0.84028 z m 2.0009,3.84763 c -0.967,1.35976 1.602,0.55763 0.507,-0.42014 -0.2426,-0.21671 -0.418,0.2953 -0.507,0.42014 z m -1.4551,4.42268 0.1323,1.21625 c 0.6036,-0.0384 0.8347,-1.34545 -0.1323,-1.21625 z m -1.5655,-0.8183 c -0.3737,0.83489 1.0267,0.66733 1.411,0.59724 -0.2084,-0.51097 -1.2932,-0.86081 -1.411,-0.59724 z m -4.9388,-2.18905 c 0.3081,0.34777 2.6579,0.10389 2.8441,-0.24325 0.009,-0.016 -1.4214,-0.18125 -1.5655,-1.19406 -0.3969,-0.0765 -0.9902,0.0184 -1.3448,0.24325 0,0 -0.1103,0.99498 0.0662,1.19406 l 0,0 z m -3.1971,2.87463 c 0.1372,0.13728 0.2204,-1.05305 0.2204,-1.08353 l -0.6393,-0.22106 c -0.2298,0.30754 -0.235,1.63619 0.4189,1.30459 l 0,0 z m 2.4694,-1.70275 c -2.1231,-0.0979 -0.9291,3.20954 3.1971,1.43731 -0.1151,-0.1321 -1.0348,-1.49289 -0.8378,-0.75173 -0.5595,0.84132 -0.8955,-0.0888 -1.4774,-0.39796 -0.2729,-0.14495 -0.5879,-0.19182 -0.8819,-0.28762 l 0,0 z m -1.367,5.08607 c 1.8713,-0.10701 2.3275,0.97715 4.079,1.06134 3.948,0.18975 -2.637,-3.36071 -3.4837,-3.56021 -1.16,-0.27394 -3.252,2.65087 -0.5953,2.49887 l 0,0 z m 2.7394,4.67609 c 0.7376,-0.32786 2.3315,-0.47987 0.7474,-0.9672 -0.0772,-0.85687 0.7086,-0.21608 0.7473,-1.14305 0.0202,-0.47903 -0.7314,-0.79922 -1.099,-0.61549 -0.3669,0.18332 -0.3592,1.47775 -1.0991,1.58268 -1.5415,0.21837 -0.7845,0.34756 -0.044,1.18701 0.5593,0.63416 0.1041,0.24201 0.7474,-0.044 l 0,1e-5 z m -0.2638,3.605 c 2.1121,0.38281 0.6709,-1.61296 0.2198,-1.27494 -0.1773,0.13293 -0.0222,0.44772 -0.0879,0.65945 -0.1406,0.45208 -0.1319,0.61549 -0.1319,0.61549 l 0,0 z m -1.4172,2.68675 c -0.759,0.62212 0.8598,2.02356 0.8598,0.95102 0,-0.27436 -0.5037,-1.243 -0.8598,-0.95102 z m -2.205,2.54324 c 2.3819,1.75957 2.4093,-1.09598 0.9968,-0.67086 -0.2204,0.0664 -0.1561,0.0483 -0.1561,0.0483 -0.338,0.10452 -0.7659,0.5147 -0.8407,0.62254 l 0,0 z m 0.2372,4.74307 c -0.8836,0.74468 1.2472,1.55593 0.9152,0.68537 -0.2769,-0.72581 -0.3669,-0.56551 -0.9152,-0.68537 z m 1.3724,2.86364 c 0.0533,1.07316 1.2598,4.59667 1.6317,1.6142 0.1204,-0.96595 -0.1133,-1.56589 -0.9923,-1.90163 l -0.6394,0.28742 0,10e-6 z m -2.9766,3.62636 c -0.3789,1.90557 1.8269,1.05906 0.838,0.0664 -0.158,-0.15864 -0.6943,-0.08 -0.838,-0.0664 z m -5.6224,5.15243 c 0.3412,0.54166 3.4215,1.25959 1.8963,-1.4595 -0.1763,0.0664 -0.3708,0.097 -0.5293,0.19908 l -1.367,1.26042 0,0 z m -0.2866,2.34396 c 0.3619,-0.79321 0.4948,-1.44478 -0.6393,-1.34897 -0.1584,0.57235 0.2673,0.98752 0.6393,1.34897 z m 1.742,-0.99519 c -0.4689,0.21587 -0.208,0.50309 -0.882,0.53088 -1.5798,0.0651 1.6657,2.53536 1.4552,0.0883 -0.0257,-0.29924 -0.1234,-0.82639 -0.5732,-0.61922 l 0,0 z m -14.6467,-43.8832 c -0.702,0.50869 -0.3233,-0.42865 0,0 z m -0.3463,-4.91976 c -1.7845,-1.32347 -6.0282,0.0357 -5.9689,4.24558 -1.619,0 -2.2421,-0.008 -3.0049,0.79611 l -0.0441,0.4865 0.0441,0.4865 0.0882,0.57484 -0.3969,0.79611 -0.1323,0.59704 -0.3086,0.6412 0,0.42014 -0.1323,0.70777 -0.1765,0.39795 -0.2424,0.42014 -0.1323,0.72976 -0.4189,0.42014 -0.6396,0.22106 -0.6393,0.26544 -0.485,0.42014 -0.6174,0.39795 0.7055,0.4865 0.3088,0.3318 0.5512,0.57484 0.3747,0.57485 0.0661,0.4865 -0.2424,0.59703 -0.5072,0.53088 -0.3528,0.44212 -0.6615,0.39816 -0.7872,0.022 -0.5953,-0.24325 -0.6284,-0.40894 -0.507,-0.12173 -0.6284,0.17689 -0.5512,0.45332 -0.3749,0.58604 -0.0881,0.57485 0.0219,0.86247 -0.0329,0.18788 0.2976,0.84028 0.2756,0.4865 0.2865,0.47551 0.0882,0.19908 -0.055,0.58584 -0.0993,0.67459 -0.2756,0.25424 -0.3637,0.43113 -0.2427,0.36498 -0.1101,0.54166 -0.2094,0.26544 -0.2205,0.28742 -0.2094,0.23226 -0.1655,0.37576 -0.1875,0.26544 -0.282,0.4975 -0.4411,0.44233 -0.2424,0.4865 -0.3969,0.37597 -0.4409,0.57484 -0.4411,0.39795 -0.3747,0.44233 -0.5292,0.44233 -0.5732,0.30961 -0.3969,0.26523 -0.5293,0.28743 -0.463,0.26544 -0.4629,0.1547 -0.4857,0.0498 c 0.1174,1.18204 -1.3991,2.61458 -1.407,2.63573 -1.1165,2.95343 5.3544,4.99047 5.9276,10.4054 0.1528,1.44436 0.4465,2.17743 0.8125,2.52002 1.3085,1.22393 3.5471,-2.53059 3.6413,3.36196 0.0386,2.42525 2.1826,4.33351 2.1826,6.96551 0,2.02066 2.0258,-0.0962 3.2852,0.79611 2.2517,1.59554 4.6373,-5.03879 6.0635,-2.94099 2.8174,4.1448 1.1602,4.55229 6.4161,2.49866 2.0165,-0.78803 3.1704,0.91639 4.3873,2.19506 2.577,-0.73577 0.9711,-5.18872 1.1797,-5.71048 0.8084,-2.02149 3.4522,-3.89719 0.5715,-5.18769 -5.2339,-2.34479 3.063,0.31624 3.605,-1.62665 0.652,-2.33649 1.7028,-1.24052 0.4836,-3.29726 -0.8031,-1.35499 1.411,-1.94186 2.8577,0.39567 1.1836,1.91241 1.3384,-2.25209 3.561,-2.19817 0.6406,0.0156 1.9858,0.83302 -0.5715,-2.63781 -2.3614,-3.20477 -5.5376,-1.87612 -0.3517,-2.72573 1.5412,-0.25258 1.9169,-1.78073 0.3517,-2.19817 -4.4824,-1.19531 5.7003,0.94003 -1.8025,-3.07744 -1.0323,-0.55265 0.6675,-1.77575 1.0551,-2.50592 0.6686,-1.25939 1.3276,3.42604 2.374,1.01116 0.1045,-0.24118 0.1707,-0.47344 0.2101,-0.68226 0.0218,0.15055 0.05,0.32205 0.0863,0.51615 0.103,0.55266 2.1705,1.83319 1.3999,-2.10071 -1.2788,-6.52961 -0.1625,-3.37025 -3.781,-1.81328 -0.1529,0.0657 -3.5878,2.75601 -2.8502,0.4865 0.007,-0.0211 1.9182,-0.44979 4.9169,-3.71491 2.4101,-2.62433 3.5423,-1.61545 -2.0725,-3.33894 -4.1454,-1.27245 -4.1029,-7.05323 -9.2384,-2.34416 -4.4824,4.11017 -2.8916,-3.26532 -8.2842,0.1659 -3.0975,1.97089 0.3441,-2.1287 3.6712,-2.02335 5.2578,0.16632 2.2218,-1.43939 5.3245,-3.61537 0.983,-0.68931 1.754,-1.49019 2.5433,-2.22969 -0.9909,-0.11716 -1.0257,0.005 -1.513,-0.81083 -0.9662,0.0367 -1.0263,-0.0315 -1.3229,-0.59703 l -1.0584,-0.11053 c -1.2063,-1.20879 0.7689,-1.98893 -1.7637,-2.41032 -0.9863,0.17958 -1.108,0.76915 -2.0947,1.23823 -0.2539,1.16503 -1.5593,1.5184 -2.293,2.69774 l -0.6615,0 -0.86,-0.92863 0.0442,-0.50869 c 0.0477,-1.55096 -0.1143,-2.20647 -0.293,-2.4437 0.001,-0.001 0.003,-0.002 0.004,-0.003 l 0.0687,-0.0521 c 0.1298,-0.10182 0.238,-0.17959 0.3272,-0.2389 0.0442,-0.0292 0.0836,-0.0541 0.1188,-0.0751 0.0965,-0.0577 0.1599,-0.0859 0.1966,-0.0987 -0.0827,0.005 -0.2835,-0.0324 -0.4884,-0.36125 -0.4379,-0.70258 1.3648,-0.43942 -0.7716,-1.6142 -1.5646,-0.86039 0.8903,-0.29177 -0.0661,-1.39314 -1.2022,-1.38423 0.9282,-0.59143 0.2646,-1.08353 l 0,4e-5 z';
    var anHui='m 496.184,331.267 0.0881,-0.57484 0.37494,-0.58604 0.5512,-0.45333 0.62834,-0.17689 0.50704,0.12173 0.62834,0.40895 0.59537,0.24325 0.7872,-0.022 0.66152,-0.39816 0.35275,-0.44213 0.50724,-0.53088 0.24242,-0.59703 -0.0662,-0.4865 -0.37472,-0.57484 -0.5512,-0.57484 -0.30879,-0.3318 -0.70548,-0.48651 0.61735,-0.39795 0.48505,-0.42014 0.63933,-0.26544 0.63955,-0.22106 0.4189,-0.42014 0.1323,-0.72975 0.24242,-0.42014 0.17648,-0.39796 0.1323,-0.70777 0,-0.42014 0.30858,-0.6412 0.1323,-0.59703 0.39692,-0.79611 -0.0881,-0.57485 -0.0442,-0.4865 0.0442,-0.4865 c -1.63183,0.0817 -2.33379,-0.0763 -3.68215,-0.99519 -1.11277,-0.75837 -9.44136,2.289 -6.76892,-0.97279 4.06392,-4.95999 -5.94834,-2.95737 -5.57817,-10.2383 0.0369,-0.72747 6.41493,-2.12746 2.86613,-4.79844 -3.38083,-2.54449 1.55448,-2.13472 3.28523,-1.32678 3.27859,1.53022 3.39618,-1.48169 2.53557,-3.2506 -3.08802,-6.34774 -5.20282,0.26938 -6.26168,0.81809 -5.31335,2.75352 -4.51164,-3.72818 -5.11116,-5.67377 -0.18684,-0.11468 -0.34652,-0.21774 -0.48131,-0.31023 -1.03086,0.49811 -4.73022,2.20564 -3.0285,-1.75543 4.29577,-9.99919 -2.64465,-3.64233 -3.30721,-5.63873 -2.17018,-6.53894 -5.5423,-1.45888 -8.16206,-5.15264 -3.62346,-5.10888 -2.86944,-1.9178 -8.33874,-5.95539 -0.93174,0.74012 -0.23931,0.56862 -1.80333,1.46676 -0.12422,5.8376 4.07305,1.77492 4.41957,5.31771 0.38862,3.97205 3.35408,1.47236 -2.2861,5.62732 -4.35798,3.21037 -3.58468,-5.66755 -8.00135,-3.605 -3.6218,1.69135 2.83274,6.12751 -2.37403,7.16604 -3.55523,0.70922 2.76451,6.46263 -4.00067,6.46263 -0.77455,0 -2.9105,-1.60093 -1.62665,1.36287 0.77433,1.78736 3.24521,0.36705 3.47311,3.64897 0.22707,3.27134 1.19717,0.14951 4.04464,3.47311 2.50322,2.9217 3.68215,-6.1723 5.36354,4.39634 1.38526,8.70746 -4.81918,0.67106 -6.31518,10.793 0.79486,0.3629 1.74609,0.93235 2.31451,1.95637 0.46783,0.84235 2.77426,-0.0726 4.74805,1.45079 2.99283,2.30974 0.9365,0.53834 -1.14305,4.52823 -0.73598,1.41201 1.27079,3.49426 1.58268,5.36354 0.5315,3.1861 0.77247,-1.66543 2.68177,5.97903 0.22126,0.88673 0.50765,1.43234 0.8409,1.72474 1.7996,1.57937 4.96725,-4.22111 6.67684,-3.52724 4.87413,1.97815 -0.93194,2.56958 -0.39567,5.67128 0.43507,2.51608 6.00433,-1.2851 4.9239,-2.7697 -0.5962,-0.81934 1.1727,-2.14301 1.84646,-1.23098 0.49334,0.66795 -0.30546,0.67272 0.87927,0.61548 3.57784,-0.17274 -0.89731,3.73046 6.68244,3.605 3.04716,-0.0504 4.00316,0.67853 4.08881,1.54079 l 0.48567,-0.0498 0.46286,-0.1547 0.46307,-0.26544 0.52922,-0.28742 0.39691,-0.26523 0.57319,-0.30961 0.52922,-0.44233 0.37472,-0.44233 0.44109,-0.39795 0.44088,-0.57485 0.39691,-0.37597 0.24242,-0.4865 0.44109,-0.44233 0.28203,-0.49749 0.18747,-0.26544 0.16548,-0.37576 0.20945,-0.23226 0.22044,-0.28742 0.20945,-0.26544 0.11011,-0.54167 0.24263,-0.36497 0.36374,-0.43114 0.2756,-0.25424 0.0993,-0.67459 0.055,-0.58583 -0.0881,-0.19908 -0.28659,-0.47551 -0.2756,-0.4865 -0.29759,-0.84028 0.033,-0.18789 -0.022,-0.86247 2e-5,5e-5 z';
    var heNan='m 459.511,307.889 c -1.68139,-10.5686 -2.86032,-1.47464 -5.36354,-4.39634 -2.84746,-3.32359 -3.81756,-0.20178 -4.04464,-3.47311 -0.22791,-3.28191 -2.69877,-1.8616 -3.47311,-3.64897 -1.28386,-2.9638 0.8521,-1.36287 1.62665,-1.36287 6.76518,0 0.44544,-5.7534 4.00067,-6.46263 5.20676,-1.03853 -1.24777,-5.47469 2.37403,-7.16604 4.41667,-2.06255 3.64337,6.81537 8.00135,3.605 5.64018,-4.15496 2.67472,-1.65526 2.2861,-5.62732 -0.34652,-3.54279 -4.54379,0.51989 -4.41957,-5.31771 -14.5422,0.47883 -5.10681,-1.7716 -10.9799,-3.98014 -1.96405,-0.73867 1.47651,-1.1277 -4.14501,-1.1277 -3.42002,0 0.74883,-3.78355 1.32637,-5.19681 0.64576,-1.5802 3.44989,-0.54809 3.5938,-3.47166 0.0688,-1.39853 6.58498,-4.45524 7.25127,-7.03249 0.0112,-0.0429 0.022,-0.0834 0.0328,-0.12111 0.0317,-0.11156 0.0614,-0.20115 0.0875,-0.27145 0.01,-0.0255 0.0184,-0.0485 0.027,-0.0691 -0.21713,0.32372 -0.96367,1.13621 -2.85638,1.58994 -1.9319,0.46307 0.0448,1.02298 -2.84435,1.48148 -0.13895,0.022 -3.9874,3.12514 -2.42525,-0.24325 0.26004,-0.56053 2.37465,-1.6393 1.32554,-3.47664 -1.29174,0.78906 -1.40538,1.83464 -2.46009,0.55079 -2.54283,-3.09569 -2.00386,2.07312 -4.0886,0.83531 -4.2e-4,-2.1e-4 -12.2488,-2.81594 -13.2106,-2.90366 -0.89151,8.84287 -0.13169,11.9431 -7.45222,14.4221 -4.63317,1.569 2.99055,1.26291 -7.82549,1.58268 -6.25608,0.18497 0.10721,0.80565 -4.5722,2.15421 -6.36433,1.83402 0.2194,2.87712 -7.86946,4.0886 -3.12949,0.46866 -2.08598,1.84315 -9.67196,3.29726 -0.236,0.0452 -0.44462,0.18352 -0.66713,0.27539 1.42757,1.80001 1.45225,4.23252 2.18428,4.84676 0.51263,0.42989 2.20771,3.43724 1.41347,4.26819 -0.24532,0.25673 0.70715,0.63768 1.74195,2.29958 2.25479,3.62138 1.86616,-1.49165 2.02854,5.81582 0.004,0.18207 0.0365,0.33512 0.0921,0.4697 l 0.005,0.0131 c 0.41226,0.96429 2.03165,0.98254 2.96712,4.09461 0.4836,1.6084 3.52019,4.95978 5.13792,4.99835 2.8064,0.0668 6.08894,4.44798 8.74872,3.16537 2.82092,-1.36038 3.03327,0.49148 5.67128,-0.61549 4.84075,-2.03103 4.3277,3.30721 8.83665,-0.17585 2.75601,-2.12912 1.16005,4.31754 1.49476,4.74805 0.55307,0.7115 1.46054,2.18677 2.24214,2.68177 2.17142,1.37531 -0.27975,1.59243 3.16537,0.17585 0.29157,-0.11986 4.9013,1.21107 4.96787,1.49476 0.53212,2.26743 1.24943,1.89769 3.34122,2.90159 2.67451,1.28365 3.98491,-5.13232 4.70409,0.39567 0.0236,0.18187 0.63228,0.34051 1.37842,0.68143 1.496,-10.122 7.70044,-2.08557 6.31518,-10.793 l 3e-5,-3e-5 z';
    var shan1Xi='m 423.681,265.025 c 7.32053,-2.47896 6.56071,-5.57921 7.45222,-14.4221 -6.43069,-7.22846 -0.94667,-4.07574 -0.76977,-7.91134 0.12214,-2.65066 4.31941,-10.0303 4.30842,-10.3314 -0.002,-0.0442 -3.86878,-7.02233 -5.23165,-7.51775 -3.23131,-1.17436 -1.38029,-5.57672 -0.20199,-6.39481 2.99138,-2.07686 0.009,-3.3041 0.39692,-4.26777 1.36722,-3.39514 6.74756,-0.40355 7.3421,-3.75908 1.81909,-10.2667 1.11837,-0.93692 -0.79383,-8.24812 -0.37991,-1.45225 -8.67656,-2.86965 -3.41733,-5.24077 8.22863,-3.70993 2.70023,-1.54619 2.0725,-3.40551 -1.38112,-4.09005 -0.86372,-1.95119 -2.89246,-5.877 0.76956,6.41514 -1.65402,3.47083 -4.31733,6.60675 -1.89934,2.23633 -5.66859,-0.78139 -7.46487,1.70234 -2.39207,3.30763 -5.6914,-2.25748 -7.91342,2.37403 -0.65593,1.36701 -1.76787,5.39485 -2.19444,6.86949 -0.73307,2.53453 -2.94783,-1.62561 -5.90893,1.54805 -2.47191,2.64942 -1.29692,0.64639 -3.52786,1.52566 -0.0189,3.1691 2.71184,0.1547 -0.77164,6.36848 -1.0321,1.84107 0.0659,6.31746 -4.30323,9.14315 -1.65651,1.0713 -0.9813,4.73893 -0.044,5.93506 4.4428,5.66983 -0.25465,4.06537 0.79134,7.78153 0.50019,1.77699 -4.47079,3.10772 -2.02232,11.4305 0.81976,2.7867 -1.37614,6.30357 0.70342,8.88061 3.07039,3.8047 -6.44583,14.6604 -2.60214,17.8827 0.26731,0.22417 0.49998,0.46825 0.70404,0.7254 0.22251,-0.0919 0.43113,-0.23019 0.66712,-0.2754 7.58597,-1.45411 6.54246,-2.82859 9.67196,-3.29726 8.08886,-1.21148 1.50513,-2.25458 7.86946,-4.0886 4.67941,-1.34856 -1.68388,-1.96923 4.5722,-2.15421 10.816,-0.31977 3.19233,-0.0137 7.82549,-1.58268 l -1e-5,5e-5 z';
    var shan3Xi='m 378.319,227.898 c 0.21422,0.10804 0.20012,0.18477 0,0 z m 14.0513,47.7995 c -3.84369,-3.2224 5.67253,-14.078 2.60214,-17.8827 -2.07955,-2.57705 0.11634,-6.09391 -0.70341,-8.88061 -2.44847,-8.32278 2.52251,-9.6535 2.02232,-11.4305 -1.046,-3.71615 3.65145,-2.1117 -0.79135,-7.78153 -0.93733,-1.19614 -1.61255,-4.86377 0.044,-5.93506 4.36918,-2.82569 3.27113,-7.30208 4.30323,-9.14315 3.48348,-6.21378 0.75277,-3.19938 0.77164,-6.36848 0.9954,-3.15313 -2.31389,-1.74858 -3.99072,1.21625 -1.13807,2.01216 -0.0334,-0.65116 -3.35138,-0.13272 -0.21277,0.0332 -4.05086,-1.89001 -3.68215,-0.59703 0.0491,0.17233 3.18154,1.71934 -0.11012,2.16707 -2.2046,0.29986 0.38613,-1.17353 -3.46171,2.6094 -1.34752,1.32471 0.99436,1.25399 -2.9105,3.33894 -0.24823,0.13251 -6.97691,7.51816 -5.97509,9.33165 0.56365,1.02028 0.97363,1.49662 1.18183,1.68907 -0.29903,-0.15097 -1.04392,-0.36312 -2.35038,-0.008 -2.22036,0.60283 3.28191,6.87634 -3.92457,4.46685 -2.42649,-0.81125 -0.27104,2.76493 -5.97509,-0.9952 -1.15922,-0.76417 -2.07354,-1.22932 -3.07101,-0.93629 -0.82659,0.24263 -1.71043,1.00597 -2.83813,2.55071 -1.68326,2.30518 -1.23367,4.66676 -1.43317,7.27491 -0.46991,5.25239 1.49994,1.94849 7.89475,6.68618 5.4272,4.02079 9.50689,2.2917 7.40328,8.81342 -1.15425,3.57846 -4.12219,-0.18104 -1.14575,7.40328 2.02232,5.15305 -11.3737,1.00162 -10.6642,3.70164 0.0709,0.27 4.74266,4.14231 -4.23044,4.14231 -3.04405,0 -4.89052,-5.039 -8.90156,-2.55589 -2.81366,1.74174 1.87073,1.56423 -1.05761,4.75925 -4.17134,4.55125 2.40596,1.89416 3.0847,5.28805 0.253,1.26499 -3.43724,-0.99893 -3.43724,6.25753 0,5.31149 6.3185,4.55747 -2.90843,4.23044 -2.00863,-0.0711 -1.63867,-2.21746 -5.99313,2.64403 0.4386,1.1389 5.91308,5.16695 0.35254,6.34567 -1.7602,0.37306 -3.44989,-1.12148 -3.4024,1.73407 0.3432,-0.16984 0.45332,0.31832 1.70317,1.4622 0.28224,0.25839 5.20448,-4.21012 6.06695,-0.21982 0.68724,3.17926 9.96767,-1.3216 10.771,1.62665 1.32886,4.87642 4.14189,0.8322 4.52823,2.33006 0.47364,1.83651 1.92319,0.70673 3.56104,2.54988 2.16022,2.43085 1.89167,1.57646 3.78086,0.74738 0.84381,-0.37037 2.1287,-0.18664 3.56145,0.3009 7.93789,2.70002 2.9103,2.7952 6.59286,3.77795 2.07624,0.5541 1.37614,0.40666 2.06753,1.32865 2.317,3.0903 4.82976,2.06898 6.102,2.13181 0.31376,-4.04277 -2.08246,-1.8755 -0.16694,-4.81358 1.0769,-1.65174 -3.50131,-3.0005 -0.0879,-6.90226 1.20899,-1.38194 7.14385,1.12916 6.90226,-1.89043 -0.30318,-3.78998 -3.95028,-1.38692 -4.30842,-3.95671 -0.39712,-2.85016 -3.94987,-2.22637 -4.13256,-2.63781 -0.8268,-1.86243 7.34438,-0.70653 8.26513,-0.52756 6.36329,1.23637 2.21144,-2.59612 5.01183,0.4836 1.51135,1.66211 2.97583,-0.62503 4.6004,-1.3554 l -0.005,-0.0131 c -0.0556,-0.13458 -0.0881,-0.28763 -0.0921,-0.4697 -0.16238,-7.30747 0.22624,-2.19444 -2.02854,-5.81582 -1.0348,-1.6619 -1.98727,-2.04285 -1.74195,-2.29958 0.79424,-0.83095 -0.90084,-3.8383 -1.41347,-4.26819 -0.73203,-0.61425 -0.75671,-3.04675 -2.18428,-4.84676 -0.20406,-0.25715 -0.43673,-0.50123 -0.70404,-0.7254 l 2e-5,-5e-5 z';
    var ganSu='m 347.769,265.061 c -0.59081,-0.01 -4.96165,-4.09959 -5.00499,-4.11286 -3.95381,-1.21916 1.43773,-0.55265 -3.70413,-2.43251 -5.26794,-1.9261 -0.0939,-5.40273 -0.0661,-6.28014 0.15968,-5.02573 -5.50518,-3.96355 -1.78591,-8.00487 1.18141,-1.28386 -3.44159,-3.58737 -4.45379,-5.83781 -0.74261,-1.65112 -4.60082,-0.12359 -2.38128,-1.4593 2.08183,-1.25275 -0.50683,-2.52582 -1.9402,-2.67576 -6.29424,0.22044 -5.64225,-1.88483 -10.1203,-5.17441 -0.52155,-0.38323 -1.39501,-0.8465 -1.69778,-1.43731 -1.34503,-2.62433 2.70624,-3.98263 1.43317,-6.58954 -0.8042,-1.64697 3.58883,-0.6692 7.0777,-6.36848 2.81636,-4.60082 0.13728,-2.58866 0,-6.58975 -0.17378,-5.06368 -10.7988,4.07989 -13.3174,2.63138 -4.37623,-2.51691 -4.89155,-1.2598 -6.46014,-1.21605 -7.35517,0.2053 -0.51367,2.37154 -1.83008,3.75908 -3.78376,3.98802 -2.96421,4.6566 -9.78954,-1.43731 -2.28008,-2.0358 -3.71844,0.12007 -2.84414,-3.09569 1.17561,-4.32376 -1.66626,-3.37793 -3.62159,-5.48382 -0.85148,-0.91722 -1.23139,-0.43507 -1.49476,-1.8025 -0.18146,-0.9421 -2.18511,-1.86077 -3.25329,-2.68177 -5.48423,-4.21448 -8.83644,1.45619 1.34939,-8.24107 6.17603,-5.8799 0.88798,-8.62534 -7.61998,-7.55238 -10.663,1.34462 -5.5002,0.55473 -6.63661,3.47166 -0.49915,1.28137 -4.95314,0.45083 -3.28523,-2.89682 0.86268,-1.73158 -3.58841,-6.33924 -4.76257,-8.1154 -3.31862,-5.01992 -0.2754,-2.08992 0.70569,-5.79343 0.39733,-1.50015 -3.68297,-12.7813 -4.50065,-15.0583 -3.07557,-0.37576 -5.72292,-0.63374 -7.34335,-0.70093 -0.86309,-0.0359 -1.27162,-0.0715 -1.5157,-0.28348 -3.5544,2.9976 -3.71118,2.65066 -2.61686,7.14178 0.34383,1.41118 1.27224,3.42687 -3.605,3.51707 -4.22484,0.078 -3.87708,2.60317 -5.80317,1.3189 -4.37312,-2.9159 -12.21,3.89014 -14.9036,7.12208 -1.41554,1.6984 -7.0833,7.7724 -9.32025,6.81433 -6.33633,-2.71371 -3.93763,0.12194 -6.33073,6.59452 -1.38589,3.74851 0.80337,6.90744 -2.85762,9.62799 -2.25396,1.67497 -1.87633,2.26681 -1.89665,2.33193 1.89499,1.73552 5.66651,1.79006 5.89732,4.57033 0.14952,1.80188 10.1713,0.71275 6.63848,2.24214 -2.84103,1.22994 1.40393,1.59575 3.38518,1.14305 3.2114,-0.7339 1.51446,6.39274 5.36354,5.8911 9.90836,-1.29132 3.64627,0.78678 12.046,2.50592 2.25603,0.46162 2.70168,-1.29941 4.61616,1.01116 2.48746,3.00237 2.67099,-0.47488 4.48427,0.0879 2.71806,0.84381 0.14247,-3.42293 2.24214,-4.44031 4.95252,-2.39974 -0.90954,-14.2585 9.18836,-5.31958 l 4.9239,3.95671 c 1.76974,0.39774 1.64842,-3.31613 3.78086,-2.15421 2.84539,1.55054 3.77857,-2.61748 5.75921,0.4836 0.90042,1.40953 12.0526,14.3576 11.9581,10.1556 -0.0987,-4.38494 1.98769,1.24964 3.605,1.8025 1.71457,0.58604 -0.13479,0.91887 3.86878,3.78086 2.79914,2.00075 1.2148,0.19742 5.4075,4.26445 5.59787,5.4299 3.80387,0.65613 6.19884,0.57152 1.71188,-0.0603 0.33325,3.54694 1.36287,4.22049 9.16119,5.99271 1.14865,4.79554 5.49543,9.14439 1.05657,1.0572 -1.79815,0.92759 0.26378,2.98951 1.48833,1.48833 0.40148,2.68405 2.24214,4.04464 2.23177,1.64967 -0.55514,2.73838 -0.48359,4.83598 0.0848,2.48435 -2.33006,0.82598 -2.33006,4.04464 0,3.43288 -6.39751,1.05409 -4.9239,6.02299 0.70569,2.37962 -9.19499,3.54694 -5.67128,7.6936 4.28063,5.03734 4.15143,1.67828 0.21981,6.19884 -3.27528,3.76592 -11.399,-8.06688 -13.7166,-1.62665 -0.17772,0.49376 4.87331,7.84146 5.49543,8.00135 2.82569,0.72623 2.83336,-0.42366 4.38452,2.46216 0.18332,-0.55078 0.56614,-0.85044 1.33072,-0.65966 1.96985,0.49169 -2.795,8.52123 1.93439,5.09976 4.32521,-3.12908 6.04103,-3.25516 4.5722,-4.96787 -4.13733,-4.82437 -0.0106,-5.20635 0.52756,-5.67128 0.50144,-0.4332 -0.26004,-0.88155 1.09909,-1.09909 3.42293,-0.54809 2.31098,-4.33185 5.49543,-1.58268 1.3666,1.17996 2.54324,1.5578 1.97835,3.25329 -1.40559,4.21945 3.23007,3.89387 3.82482,4.30842 1.81515,1.26478 3.2479,0.41703 5.27561,0.79135 2.41633,0.44585 5.04895,8.18155 3.38518,10.815 -1.54764,2.44972 7.941,5.80711 10.2997,4.4063 1.49621,-0.88881 2.27967,-1.42777 2.7249,-1.64801 -0.0475,-2.85555 1.6422,-1.361 3.4024,-1.73407 5.56055,-1.17872 0.0861,-5.20676 -0.35253,-6.34567 4.35445,-4.86149 3.9845,-2.71516 5.99313,-2.64403 9.22693,0.32703 2.90843,1.08104 2.90843,-4.23044 0,-7.25646 3.69023,-4.99255 3.43724,-6.25753 -0.67874,-3.39389 -7.25604,-0.73681 -3.0847,-5.28805 2.92834,-3.19502 -1.75605,-3.01751 1.05761,-4.75925 4.01104,-2.4831 5.85751,2.55589 8.90156,2.55589 8.9731,0 4.30137,-3.87231 4.23044,-4.14231 -0.70943,-2.70002 12.6866,1.45142 10.6642,-3.70164 -2.97645,-7.58431 -0.009,-3.82482 1.14575,-7.40328 2.10361,-6.52173 -1.97607,-4.79264 -7.40328,-8.81342 -6.39481,-4.73768 -8.36467,-1.43379 -7.89475,-6.68618 -9.65806,0.74613 -6.5773,-1.85621 -7.16563,3.95837 -0.14869,1.46987 -3.6585,2.53972 -2.29315,3.84763 2.42462,2.32239 -1.78156,3.065 1.27888,3.36113 6.17417,0.59744 4.06143,7.91715 1.65361,7.76162 -2.76721,-0.17876 -2.50882,-2.1822 -3.50567,2.56502 -0.0583,0.27767 1.66874,3.36092 -0.92614,3.31696 l -5e-5,-2e-5 z';
    var huBei='m 384.201,304.02 c -3.41339,3.90175 1.16482,5.25052 0.0879,6.90226 -1.91552,2.93808 0.48069,0.77081 0.16693,4.81358 0.49812,0.0245 0.88176,0.15677 1.15197,0.63788 1.01945,1.81474 -0.59952,1.53333 0.91867,1.52317 0.97632,-0.006 5.54893,2.94099 4.22505,6.2144 -0.83198,2.05737 0.0261,4.36399 -2.98951,3.56104 -3.09942,-0.82535 -5.39402,7.11649 -10.0676,4.00067 -0.77039,-0.51366 -1.23367,-0.84339 -1.89043,0.044 -1.52752,2.06359 -1.93087,0.05 -4.82706,1.26353 -2.15089,0.90104 -1.11754,1.62851 0.0351,2.7811 0.71067,0.71067 0.42201,4.23646 -0.33532,5.05808 -1.79794,1.95036 -0.2445,3.29892 0.81581,1.70255 1.04309,-1.57066 1.12356,1.07026 1.74174,1.54805 1.65589,1.27992 1.6646,4.11639 3.66016,4.48883 1.33612,0.24926 0.72685,2.49202 1.89603,3.2506 0.14433,0.0937 0.27311,0.18581 0.38696,0.27581 0.92447,-0.81893 3.19502,-6.56984 4.02286,-6.68866 2.70977,-0.38925 6.21834,-4.45731 8.92955,-1.50367 1.87467,2.04223 4.50252,-0.67065 4.45379,-0.72955 0.16009,-1.01676 -1.48854,-1.25918 -1.16856,-3.75929 0.80503,-0.29074 1.74692,-0.20094 2.53557,-0.46431 0.60761,-1.30605 2.4914,-0.0612 3.48369,0.0442 2.77115,0.29447 4.76962,2.18925 7.58473,2.18925 2.4858,0 6.58912,2.6994 7.27595,3.56 1.40185,1.75667 2.02398,0.0885 3.77028,0.0885 3.81341,0 2.39601,-2.12165 3.99072,-2.47668 2.97023,-0.66111 1.3892,1.67683 1.3892,2.52085 0,6.19594 5.34259,-1.59285 6.372,-2.9188 1.87363,-2.41343 0.0834,0.9842 1.14637,1.6142 4.48303,2.65668 1.06902,2.92875 1.26457,6.87717 0.0396,0.80109 1.90785,1.31434 3.56643,2.5196 -0.17565,-3.2029 2.0049,-2.32985 3.67986,-4.55416 0.11634,-0.15449 4.17798,-1.32658 4.18918,-1.32658 4.04671,0 3.98533,-4.74349 5.95311,-2.69794 1.29464,1.34565 0.14018,-1.59202 1.49932,-1.59202 3.77816,0 2.20294,-2.00573 3.54984,-2.74212 3.58634,-1.96052 2.32882,4.07989 7.55425,-0.36104 -0.33325,-0.2924 -0.61964,-0.838 -0.84091,-1.72474 -1.9093,-7.64445 -2.15027,-2.79292 -2.68177,-5.97903 -0.31189,-1.86928 -2.31866,-3.95152 -1.58268,-5.36354 2.07955,-3.98989 4.13588,-2.21849 1.14305,-4.52823 -1.97379,-1.52337 -4.28021,-0.60844 -4.74805,-1.45079 -0.56841,-1.02402 -1.51964,-1.59347 -2.31451,-1.95637 -0.74613,-0.34092 -1.35478,-0.49956 -1.37842,-0.68143 -0.71917,-5.52799 -2.02958,0.88798 -4.70409,-0.39567 -2.09179,-1.0039 -2.8091,-0.63415 -3.34122,-2.90159 -0.0666,-0.28369 -4.6763,-1.61462 -4.96787,-1.49476 -3.44512,1.41658 -0.99394,1.19946 -3.16537,-0.17586 -0.78159,-0.495 -1.68907,-1.97027 -2.24214,-2.68177 -0.3347,-0.43051 1.26125,-6.87717 -1.49476,-4.74805 -4.50895,3.48307 -3.9959,-1.85517 -8.83665,0.17586 -2.63801,1.10697 -2.85037,-0.74489 -5.67128,0.61549 -2.65979,1.28261 -5.94232,-3.09859 -8.74872,-3.16537 -1.61773,-0.0386 -4.65432,-3.38995 -5.13792,-4.99835 -0.93546,-3.11207 -2.55486,-3.13032 -2.96712,-4.09461 -1.62457,0.73037 -3.08905,3.01751 -4.6004,1.3554 -2.80039,-3.07972 1.35146,0.75277 -5.01183,-0.4836 -0.92074,-0.17897 -9.09193,-1.33487 -8.26513,0.52756 0.1827,0.41143 3.73544,-0.21235 4.13256,2.63781 0.35814,2.56979 4.00523,0.16673 4.30842,3.95671 0.2416,3.01958 -5.69326,0.50848 -6.90226,1.89043 l -2e-5,10e-6 z';
    var jiangXi = 'm 440.299,357.084 c 0.23703,2.42836 2.50612,4.82665 -0.13189,6.50659 -1.31683,0.83862 -0.59268,2.48269 -2.04347,3.43288 -2.92606,1.91635 -1.53831,2.03912 -3.10896,4.40049 -0.87533,1.316 -1.98561,5.01308 0.5512,4.97533 5.11697,-0.0763 -0.29613,1.59658 2.51359,5.08586 0.90602,1.12501 -1.44416,4.97803 0.72768,5.13024 2.32177,0.16279 1.43483,0.67791 1.85206,2.43251 0.21837,0.91784 -1.25669,3.35698 -1.08042,3.67074 1.04206,1.85476 2.60919,-1.21128 3.17491,-0.8183 0.60616,0.42097 -1.96218,2.16437 -1.96218,2.45449 0,2.06898 -0.65074,2.60276 -1.58745,4.13526 -0.0129,0.0209 0.32247,2.7923 0.92303,4.83826 0.35481,1.2092 0.80254,2.1652 1.32575,2.14944 5.91101,-0.17959 4.3051,-3.74187 8.1801,-0.17689 l -0.0222,0.75173 c 0.29302,2.83792 -2.33815,1.2204 -3.65996,5.1966 -0.30236,0.90955 -2.68965,3.08574 -2.66788,3.18424 0.48131,2.18366 5.04646,0.84485 6.21772,0.75173 3.71512,-0.29509 3.33687,-2.01941 4.65224,-2.07852 2.73195,-0.12255 3.78749,-1.4595 5.09312,-1.4595 0.50558,0.53524 3.46274,3.42002 4.05687,3.44968 1.86036,0.0927 0.31666,-2.10278 0.22769,-2.49887 -0.45705,-2.03227 0.22417,-2.86405 1.33881,-3.12721 0.20551,-7.21436 0.37722,-3.70869 1.45432,-9.3443 1.75626,-9.18981 6.78696,-6.28677 5.00499,-8.88953 -2.61748,-3.82316 2.63345,-2.32529 1.54328,-4.75427 -3.08221,-6.86721 0.53171,-6.37885 3.28523,-7.96049 3.44263,-1.97753 2.08246,-5.08296 2.08225,-5.08379 -0.49313,-3.7848 -1.88918,-3.5235 0.0964,-4.1815 1.12916,-0.3741 3.59111,-5.94046 5.13709,-4.10208 2.68364,3.19129 1.78985,-0.55929 4.90586,-1.14969 2.61375,-0.49521 1.53893,-1.43379 2.6237,-1.51487 3.78106,-0.28265 -0.85625,-0.9674 3.25329,-3.33977 -0.36601,-0.34258 -0.65966,-1.07565 -0.81249,-2.52002 -0.57319,-5.41497 -7.0441,-7.45201 -5.9276,-10.4054 0.008,-0.0212 1.52441,-1.4537 1.40704,-2.63573 -0.0856,-0.86226 -1.04164,-1.59119 -4.08881,-1.54079 -7.57975,0.12547 -3.10461,-3.77774 -6.68244,-3.605 -1.18473,0.0572 -0.38593,0.0525 -0.87927,-0.61548 -0.67376,-0.91204 -2.44267,0.41164 -1.84646,1.23098 1.08042,1.4846 -4.48883,5.28577 -4.9239,2.7697 -0.53627,-3.1017 5.26981,-3.69314 0.39567,-5.67128 -1.7096,-0.69388 -4.87725,5.1066 -6.67684,3.52724 -5.22543,4.44093 -3.96791,-1.59948 -7.55425,0.36104 -1.3469,0.73638 0.22832,2.74212 -3.54984,2.74212 -1.35913,0 -0.20468,2.93767 -1.49932,1.59202 -1.96778,-2.04555 -1.9064,2.69794 -5.95311,2.69794 -0.0112,0 -4.07284,1.17208 -4.18918,1.32658 -1.67497,2.2243 -3.85551,1.35124 -3.67986,4.55416 1.21003,0.87947 2.30891,2.12766 2.50384,4.12551 l 10e-6,-8e-5 z';
    var huNan='m 440.127,403.329 c -0.60056,-2.04596 -0.93588,-4.81731 -0.92302,-4.83826 0.93671,-1.5325 1.58745,-2.06628 1.58745,-4.13526 0,-0.29012 2.56833,-2.03352 1.96217,-2.45449 -0.56571,-0.39297 -2.13285,2.67306 -3.17491,0.8183 -0.17626,-0.31376 1.29879,-2.7529 1.08042,-3.67074 -0.41723,-1.7546 0.46971,-2.26972 -1.85206,-2.43251 -2.17183,-0.15221 0.17835,-4.00523 -0.72767,-5.13024 -2.80972,-3.48929 2.60338,-5.16218 -2.51359,-5.08586 -2.53681,0.0377 -1.42653,-3.65933 -0.55121,-4.97533 1.57066,-2.36138 0.18291,-2.48414 3.10896,-4.40049 1.45079,-0.95019 0.72665,-2.59426 2.04347,-3.43288 2.63802,-1.67994 0.36892,-4.07823 0.13189,-6.50659 -0.19493,-1.99785 -1.29381,-3.24604 -2.50384,-4.12551 -1.65858,-1.20526 -3.52682,-1.71851 -3.56643,-2.5196 -0.19555,-3.94841 3.21846,-4.22049 -1.26457,-6.87717 -1.063,-0.63 0.72727,-4.02763 -1.14637,-1.6142 -1.02941,1.32595 -6.372,9.11474 -6.372,2.9188 0,-0.84401 1.58102,-3.18196 -1.3892,-2.52085 -1.59471,0.35503 -0.1773,2.47668 -3.99072,2.47668 -1.7463,0 -2.36843,1.66812 -3.77028,-0.0885 -0.68682,-0.8606 -4.79015,-3.56 -7.27595,-3.56 -2.81511,0 -4.81358,-1.89478 -7.58473,-2.18925 -0.99228,-0.10534 -2.87608,-1.35022 -3.48369,-0.0442 -0.78864,0.26337 -1.73054,0.17357 -2.53557,0.46431 -0.31997,2.50011 1.32865,2.74253 1.16856,3.75929 0.0487,0.0589 -2.57912,2.77177 -4.45379,0.72955 -2.71122,-2.95364 -6.21979,1.11443 -8.92955,1.50367 -0.82784,0.11882 -3.09839,5.86974 -4.02286,6.68866 1.70607,1.3498 0.0925,2.30767 0.0319,4.32356 -0.0183,0.60512 1.02899,1.12418 0.55141,1.37116 -0.44917,0.23226 -0.90644,1.28489 -0.46307,1.83527 0.94231,1.17001 0.22148,0.73058 -0.11032,1.96799 0.46244,3.50194 2.31347,2.57829 1.56547,4.24579 -2.92979,6.53189 2.54573,5.63873 1.34503,8.04904 -1.57377,3.15935 -3.87957,1.02464 -7.95966,6.83279 -2.57663,3.66784 5.68476,-2.63698 8.57702,0.50869 1.61213,1.75315 -1.15632,1.38132 -0.24263,2.54304 1.31559,1.67289 -2.68944,2.44267 -1.9402,3.4053 2.06317,2.65066 -0.84215,2.87919 -0.3992,5.15222 1.13392,0.0398 0.62005,-0.1151 1.81909,0.14371 0.58999,1.31517 0.22376,2.63138 0.27975,4.021 0.7957,-0.49231 1.721,-0.54415 2.8091,0.54394 0.0604,0.0604 0.98006,3.38539 1.6648,-0.57339 0.41185,-2.38108 2.23985,-3.55399 3.54984,-1.19427 2.60836,4.6987 4.60351,-4.48717 7.91528,-3.20622 1.6702,0.64597 5.26462,-1.72059 6.57046,0.46431 0.71731,1.20028 -2.12953,6.4562 1.3892,4.82063 1.97193,-0.91659 -0.60823,3.09569 -0.57339,5.46183 0.0251,1.70027 -6.65673,7.07998 -3.63797,8.00487 0.87263,0.26731 4.44777,-5.48859 5.86497,-0.55286 0.36332,1.26561 -1.19634,6.17666 1.85206,4.7101 2.3396,-1.12563 -0.4529,-2.4211 4.63005,-1.14989 2.99843,0.74987 1.59305,-5.5902 3.1971,-5.92635 7.2521,-1.51985 6.58788,5.0755 9.50295,2.78629 0.928,-0.72871 1.26664,-4.20784 -0.22044,-4.40049 -1.76953,-0.22935 1.64718,-1.88006 2.33711,-2.67555 2.36739,-2.72947 5.19681,3.91316 9.61306,0.28742 0.42222,-0.34673 0.91888,-0.42242 1.43026,-0.55721 l 2e-5,-3e-5 z';
    var guiZhou='m 382.232,396.485 c -0.056,-1.38962 0.31023,-2.70583 -0.27975,-4.021 -1.19904,-0.2588 -0.68516,-0.1039 -1.81909,-0.14371 -0.44295,-2.27303 2.46237,-2.50156 0.3992,-5.15222 -0.74925,-0.96263 3.25578,-1.73241 1.9402,-3.4053 -0.91369,-1.16171 1.85476,-0.78989 0.24263,-2.54304 -2.89225,-3.14567 -11.1536,3.15915 -8.57702,-0.50869 4.0801,-5.80815 6.3859,-3.67344 7.95966,-6.83279 1.2007,-2.41032 -4.27482,-1.51715 -1.34503,-8.04904 0.748,-1.6675 -1.10303,-0.74385 -1.56547,-4.24579 -0.23206,0.86558 -0.97819,0.55224 -1.27888,1.41533 -1.62105,4.65121 -1.45888,1.79296 -2.82216,1.52566 -2.79624,-0.5483 -1.57543,-4.33662 -2.80018,-3.05152 -0.79777,0.83717 -1.018,2.98163 -0.94791,-1.57003 0.0222,-1.44665 -2.90802,-0.61735 -3.08698,-2.96297 -0.42637,-5.58626 0.17336,-2.48725 -2.40327,-3.5824 -2.6405,-1.12231 -3.13633,2.58223 -4.6398,-0.80192 -1.00369,-2.25935 -4.49754,-1.13392 -4.5722,-0.57152 -0.22293,1.68015 0.9251,2.03124 -0.17586,3.16537 -2.87795,2.96484 -2.85327,-1.98437 -4.79201,0.43963 -1.59865,1.99868 -2.58534,-0.94978 -1.62665,1.40683 0.44254,1.08789 -2.81366,5.08421 -2.81366,2.15421 0,-1.88172 -1.68699,-5.20614 -1.53872,-1.01116 0.0572,1.62022 -1.15549,1.8307 -2.21435,1.4989 -0.48132,-0.15097 -0.93111,-0.41392 -1.2148,-0.70756 -1.94206,-2.00988 -6.95514,-1.20174 -7.56171,1.14305 -0.85189,3.2929 1.96819,2.54324 3.42915,4.35238 0.67169,0.83157 7.73487,1.6001 4.66012,5.23165 -0.89835,1.06114 -8.06999,1.7857 -9.10043,1.09909 -0.7818,-0.52114 -1.8052,-0.39318 -2.62993,-0.33118 -1.75107,1.17727 -0.35585,4.65494 -4.85236,5.33264 -8.16289,1.23056 -5.26441,-1.81639 -7.93727,-1.59222 -2.24981,0.18871 -0.82203,3.127 -3.81445,0.55286 -0.89524,-0.76998 -0.78159,-0.19866 -1.63162,-0.24325 -0.28327,2.28029 -5.22605,3.36486 -3.08677,4.90897 1.9964,1.44084 -1.12107,3.71657 0.68351,4.62176 0.0591,0.19721 0.0937,4.22547 3.43952,2.45449 0.42926,-0.22728 0.75546,-0.78284 1.05844,-1.14989 1.22247,0 1.57708,0.48588 2.66788,-0.13272 1.98831,-1.1275 5.23434,3.47539 3.10875,5.10805 -1.10365,0.84775 -5.36167,8.05049 -3.90258,9.7518 1.06798,1.24508 2.01693,1.39377 2.73403,2.98516 0.83676,1.85704 3.93556,1.54577 1.56547,3.31696 -0.73908,0.55245 -0.50682,2.07872 -1.34503,2.91901 -0.61238,0.61383 -1.03542,1.19552 -1.31164,1.7687 1.34503,6.10553 6.86846,-2.65647 8.92333,-1.93501 3.20539,1.12542 5.28826,3.49613 8.6608,4.04464 0.0363,0.006 3.02809,3.22758 3.82482,-2.7697 0.19929,-1.49973 2.8964,-0.51159 5.14372,-2.41799 1.24923,-1.05948 6.41099,-0.77724 5.31958,-3.78086 -1.0263,-2.82424 3.57224,-4.06931 4.13256,-1.18701 0.15138,0.7789 1.87757,3.71138 2.59384,3.47311 2.60691,-0.86703 0.50558,-1.2683 2.81366,0.83531 3.34703,3.05048 6.00993,-4.15268 7.29793,-4.66012 1.54142,-0.6074 3.78086,4.05542 3.78086,1.40683 0,-1.12667 1.15093,-3.42127 2.11024,-2.46195 2.09448,2.09448 4.63586,-0.52736 2.81366,-1.09909 -3.12348,-0.98026 2.18884,-1.25607 3.25329,-1.09909 0.77268,0.11385 1.75937,-2.04326 3.13074,-2.89163 l -10e-6,-2e-5 z';
    var siChuang='m 334.699,360.074 c 0.60657,-2.34479 5.61965,-3.15292 7.56171,-1.14305 0.28369,0.29364 0.73348,0.55659 1.2148,0.70756 0.0272,-0.13479 0.0668,-0.26751 0.0815,-0.40396 0.82473,-7.62786 -6.28615,-4.92494 -6.48398,-6.5464 -0.79922,-6.552 -2.21725,-2.25313 -3.69293,-4.5722 l -2.41799,-3.29726 c -0.004,-0.0129 3.95505,-3.30161 4.52823,-3.605 4.7692,-2.52499 -0.79694,-2.93435 0.39567,-5.31958 3.61143,-7.22286 6.64387,2.30124 9.45214,-0.61549 2.90283,-3.01502 1.4651,4.17072 7.47378,3.20933 1.46842,-0.23496 5.09976,-6.07857 5.09976,-7.25397 0,-5.12817 2.15877,-3.16537 4.87994,-3.16537 1.36598,0 4.06102,-9.09711 6.3747,-10.4633 5.21775,-3.08117 -1.93895,-3.42189 -0.52756,-5.45147 0.95683,-1.37593 1.37054,-1.3189 1.4931,-1.22517 -0.0817,-0.16362 -0.27,-0.73826 -0.43756,-2.43064 -1.43275,-0.48754 -2.71765,-0.67127 -3.56145,-0.3009 -1.88918,0.82908 -1.62063,1.68347 -3.78086,-0.74738 -1.63785,-1.84315 -3.08739,-0.71337 -3.56104,-2.54988 -0.38634,-1.49787 -3.19938,2.54635 -4.52823,-2.33006 -0.80337,-2.94825 -10.0838,1.55261 -10.771,-1.62665 -0.86247,-3.9903 -5.78472,0.47821 -6.06695,0.21982 -1.24985,-1.14388 -1.35996,-1.63204 -1.70317,-1.4622 -0.44524,0.22023 -1.2287,0.7592 -2.7249,1.64801 -2.35868,1.40082 -11.8473,-1.95658 -10.2997,-4.4063 1.66377,-2.63345 -0.96886,-10.3691 -3.38518,-10.815 -2.02771,-0.37431 -3.46046,0.47343 -5.27561,-0.79135 -0.59475,-0.41454 -5.2304,-0.089 -3.82482,-4.30842 0.56489,-1.6955 -0.61176,-2.07333 -1.97835,-3.25329 -3.18445,-2.74917 -2.0725,1.03459 -5.49543,1.58268 -1.35913,0.21754 -0.59766,0.66588 -1.09909,1.09909 -0.53814,0.46494 -4.66489,0.84692 -0.52756,5.67128 1.46883,1.71271 -0.24699,1.83879 -4.5722,4.96787 -4.72939,3.42148 0.0355,-4.60807 -1.93439,-5.09976 -0.76459,-0.19078 -1.1474,0.10888 -1.33072,0.65966 -0.65489,1.96716 1.23139,7.13804 -2.66995,4.61595 -2.91465,-1.884 -5.23123,1.34918 -3.91275,4.13256 1.17893,2.48891 -3.14214,3.2618 -5.14372,2.98951 -1.90204,-0.2588 -0.0485,-0.28887 -1.97835,1.27494 -0.45291,0.36706 -2.95696,0.92904 -2.19817,-0.26378 0.30297,-0.47634 2.96173,-1.52379 -0.4836,-3.29726 -1.09204,-0.56198 -3.88143,4.10498 -3.56104,0.65945 0.19286,-2.07395 2.89143,-0.93028 -1.23098,-4.39634 -2.57974,-2.16893 -0.39588,6.67166 -7.25397,0.43964 -1.40932,-1.28054 -1.94746,-2.44039 -3.82482,-3.34122 -4.32459,-2.07499 0.16362,-12.3896 -8.88082,-12.6542 -4.50439,-0.13189 -3.65104,-2.63553 -7.05074,0.61694 -3.41588,3.26823 3.35449,5.45893 2.20336,6.61007 -8.3e-4,8.3e-4 -0.79031,0.001 -2.73216,2.55589 -0.85998,1.13144 -0.22334,1.69218 -1.451,2.61147 -2.75518,2.06276 1.27017,5.65096 3.08719,6.41265 0.27809,0.11654 0.49666,0.26025 0.69533,0.44876 1.43109,0.39816 4.21676,2.81636 4.44155,5.07944 0.10638,1.07026 1.39563,1.71934 1.32284,5.26296 -0.0135,0.65219 1.84501,2.8091 2.29315,3.80325 0.22355,0.49583 3.80056,5.07778 0.72767,3.93618 -3.44159,-1.27847 0.23454,3.75327 -0.0662,5.04169 -0.27933,1.19655 2.16064,0.6974 0.88176,5.48402 -0.90353,3.38166 2.06234,7.30996 0.0442,10.3488 -0.0396,0.0597 -0.19182,4.31775 -0.17399,9.12283 0.0214,5.74428 0.28618,12.2706 1.27639,13.3437 2.21684,2.40306 -0.71275,-2.18469 2.227,-4.28975 2.09863,-1.50284 3.36839,-5.23808 4.63005,-0.26544 0.68807,2.71163 5.22252,3.86422 2.41446,6.83279 -1.56008,1.64904 2.33068,6.50783 3.47249,5.21879 0.47282,-0.53379 3.32505,-1.03833 3.54984,-0.59704 0.67812,1.33114 4.32044,10.3312 4.45379,11.4324 0.22874,1.88939 4.6425,4.56307 3.68215,6.10304 -2.28402,3.66265 1.51321,2.17018 1.63681,5.2275 0.13645,3.37585 5.39112,4.15454 7.93229,2.00345 6.42841,-5.44193 3.05214,3.60542 5.44587,0.61923 1.01551,-1.26685 0.5456,-1.41803 2.29315,-1.76911 1.13019,-0.22708 2.01983,-3.52703 0.88197,-7.38565 -0.18913,-0.64121 -0.21049,-6.86037 0.0881,-7.00989 1.51487,-0.75817 2.64361,-0.49356 3.70413,-2.16707 1.77616,-2.80267 5.72479,-2.70541 4.07885,-6.87696 -0.44689,-1.13289 1.51487,-3.90818 2.7782,-2.38833 1.03065,1.23989 3.32629,-1.63826 1.91739,-2.79728 -4.48365,-3.68816 9.83433,-3.2479 6.30668,-1.20505 -4.12136,2.38668 2.67824,3.05256 0.15429,7.18657 -1.87052,3.06375 4.11846,4.28312 7.15152,0.68765 1.99225,-2.36158 4.36669,-0.001 3.47311,2.41799 -0.73929,2.002 0.0199,2.03994 1.15093,1.95492 0.82473,-0.062 1.84812,-0.18995 2.62993,0.33118 1.03044,0.68662 8.20208,-0.038 9.10043,-1.09909 3.07474,-3.63155 -3.98844,-4.40008 -4.66012,-5.23165 -1.46095,-1.80914 -4.28104,-1.05948 -3.42915,-4.35238 l -5e-5,3e-5 z';
    var yunNan='m 310.419,384.007 c -1.80457,-0.90519 1.31289,-3.18092 -0.68351,-4.62176 -2.13928,-1.54411 2.8035,-2.62868 3.08677,-4.90897 0.85003,0.0446 0.73639,-0.52673 1.63162,0.24325 2.99242,2.57414 1.56464,-0.36415 3.81445,-0.55286 2.67285,-0.22417 -0.22562,2.82278 7.93727,1.59222 4.49651,-0.6777 3.10129,-4.15537 4.85236,-5.33264 -1.13102,0.085 -1.89022,0.0471 -1.15093,-1.95492 0.89358,-2.41923 -1.48086,-4.77957 -3.47311,-2.41799 -3.03306,3.59546 -9.02204,2.3761 -7.15152,-0.68766 2.52396,-4.13401 -4.27565,-4.79989 -0.15428,-7.18657 3.52765,-2.04285 -10.7903,-2.4831 -6.30668,1.20505 1.4089,1.15902 -0.88674,4.03717 -1.91739,2.79728 -1.26333,-1.51985 -3.22509,1.25545 -2.7782,2.38833 1.64593,4.17155 -2.30269,4.07429 -4.07885,6.87696 -1.06051,1.67351 -2.18925,1.4089 -3.70413,2.16707 -0.29862,0.14952 -0.27726,6.36868 -0.0881,7.00989 1.13786,3.85862 0.24823,7.15857 -0.88196,7.38565 -1.74755,0.35109 -1.27764,0.50227 -2.29315,1.76911 -2.39373,2.9862 0.98254,-6.06115 -5.44587,-0.61922 -2.54117,2.1511 -7.79584,1.37241 -7.93229,-2.00345 -0.1236,-3.05733 -3.92083,-1.56485 -1.63681,-5.2275 0.96035,-1.53996 -3.45341,-4.21365 -3.68215,-6.10304 -0.13335,-1.10116 -3.77567,-10.1012 -4.45379,-11.4324 -0.2248,-0.44129 -3.07703,0.0632 -3.54984,0.59704 -1.14181,1.28904 -5.03257,-3.56975 -3.47249,-5.21879 2.80806,-2.96857 -1.72639,-4.12116 -2.41446,-6.83279 -1.26167,-4.97264 -2.53142,-1.2374 -4.63005,0.26544 -2.93974,2.10506 -0.0102,6.69281 -2.227,4.28975 -0.99022,-1.07316 -1.25503,-7.59945 -1.27639,-13.3437 -2.85472,0.10431 -1.06715,3.9845 -2.40575,5.22833 -1.43109,1.32989 -1.26582,-1.66916 -1.49911,-2.10071 -1.64469,-3.04177 -2.09469,3.49385 -2.09469,3.49385 -1.64116,2.95073 1.92672,5.9923 -1.12439,6.54537 -3.11249,0.56426 -2.9779,1.5889 -3.17511,-1.39314 -0.22853,-3.45528 -2.41488,0.16403 -3.15956,1.59015 0.011,0.27477 -0.0624,0.9 0.0915,2.91237 0.10887,1.42487 1.26001,6.35147 2.59384,5.62732 5.56635,-3.02166 2.37755,5.24513 2.72573,6.63848 0.47634,1.90619 -0.40065,3.4306 0,4.96787 0.50371,1.93252 -2.35661,6.32845 -1.53872,7.07811 2.08909,1.91511 -3.18113,1.62395 -1.18701,3.16537 3.20954,2.48082 -2.11066,1.60363 -2.46195,2.81366 -1.58289,5.45375 -2.32446,-0.41994 -4.86895,4.41293 -2.58741,4.91416 -3.1467,-0.32537 -5.62234,4.33413 -1.15674,2.17743 1.50844,2.39953 -2.13866,3.8918 -0.82245,0.33657 -1.66916,4.12821 -0.68351,4.44466 5.04501,1.62001 -1.34545,6.70982 -1.32284,6.85498 0.62752,4.01457 2.70437,-1.67683 13.8464,-0.6634 6.88339,0.62607 -0.0359,0.93672 0.48505,4.11307 0.29758,1.81432 2.90428,1.84252 1.23471,4.00233 -0.56904,0.73618 1.98852,1.53229 0.79362,3.2506 -3.28958,4.73042 12.4846,2.76762 6.2399,7.03187 -2.53495,1.73096 -0.48442,4.5583 -2.62391,6.28014 -7.6936,6.19221 9.81463,3.77111 8.26824,7.56254 -1.56278,3.83187 2.69504,3.7147 1.63162,4.7101 -2.79147,2.61292 3.68691,1.88296 4.54192,2.45449 2.67907,1.79089 8.06169,-5.48548 8.95174,-1.85746 0.58169,2.37112 -2.55278,8.62824 3.37336,6.34629 0.53773,-0.20696 6.26147,4.1195 3.96874,-0.24325 -1.64552,-3.13094 2.90242,-5.0052 -0.44088,-9.0884 -2.18552,-2.66912 -0.2109,-9.37396 2.64569,-7.05385 0.92427,0.7507 5.15368,1.24176 6.04124,-0.13272 6.74217,-10.4419 5.85875,6.95908 12.4354,-1.32678 3.35988,-4.23293 2.71163,3.34392 4.74038,-0.90664 1.48708,-3.1158 3.59733,7.03788 5.33575,1.48148 1.73842,-5.55619 4.28561,0.88383 5.53421,-0.28742 2.44267,-2.29128 4.77874,-1.18681 5.09312,-3.86982 0.32392,-2.76472 3.66887,-2.81553 5.49025,-4.40028 0.92116,-0.8015 2.30663,0.6074 3.61164,2.13078 1.2148,-1.0404 3.4223,-2.71827 4.03904,-4.12095 1.31724,-0.27519 2.0866,1.3245 2.84435,0.50848 4.00814,-4.31671 0.68953,-10.561 -0.92613,-9.44218 -3.55565,2.46257 -4.33745,0.0467 -5.22543,0.77393 -0.90872,0.74426 -1.56692,-0.0587 -2.75601,-0.26524 -2.67596,-0.46493 -0.54809,-3.1691 -1.94041,-4.26777 -3.14152,-2.47896 -6.44064,1.0319 -6.96717,-0.75194 -0.65717,-2.2272 -1.14823,-3.87417 -0.31956,-5.59476 0.27622,-0.57318 0.69926,-1.15487 1.31164,-1.7687 0.8382,-0.84028 0.60594,-2.36656 1.34503,-2.91901 2.37009,-1.77119 -0.72872,-1.45992 -1.56547,-3.31696 -0.71711,-1.59139 -1.66605,-1.74008 -2.73403,-2.98516 -1.45909,-1.7013 2.79894,-8.90405 3.90258,-9.7518 2.12559,-1.63266 -1.12045,-6.23555 -3.10875,-5.10805 -1.09079,0.6186 -1.4454,0.13272 -2.66788,0.13272 -0.30298,0.36706 -0.62918,0.92261 -1.05844,1.14989 -3.34578,1.77098 -3.38041,-2.25727 -3.43952,-2.45449 l 6e-5,1e-5 z';
    var qingHai='m 252.135,276.814 c 9.04444,0.26461 4.55623,10.5792 8.88082,12.6542 1.87736,0.90084 2.4155,2.06068 3.82482,3.34122 6.85809,6.23202 4.67423,-2.60857 7.25397,-0.43963 4.1224,3.46606 1.42383,2.32239 1.23098,4.39634 -0.32039,3.44553 2.469,-1.22144 3.56104,-0.65946 3.44532,1.77347 0.78657,2.82092 0.4836,3.29726 -0.75879,1.19282 1.74527,0.63084 2.19817,0.26379 1.92983,-1.56381 0.0763,-1.53374 1.97835,-1.27494 2.00158,0.27228 6.32265,-0.50061 5.14372,-2.98951 -1.31849,-2.78338 0.99809,-6.01656 3.91275,-4.13256 3.90134,2.52209 2.01506,-2.6488 2.66995,-4.61595 -1.55116,-2.88583 -1.55884,-1.73593 -4.38452,-2.46216 -0.62213,-0.15989 -5.67315,-7.50759 -5.49543,-8.00135 2.31762,-6.44023 10.4413,5.39257 13.7166,1.62665 3.93162,-4.52056 4.06081,-1.16151 -0.21982,-6.19884 -3.52371,-4.14666 6.37698,-5.31399 5.67128,-7.6936 -1.4736,-4.96891 4.9239,-2.59011 4.9239,-6.02299 0,-3.21866 2.41488,-1.56029 2.33006,-4.04464 -0.0715,-2.0976 2.71536,-3.18631 0.4836,-4.83598 -1.84066,-1.36059 -0.75381,-2.55631 -2.24214,-4.04464 -2.06193,-2.06193 0.79279,-1.93232 -0.26378,-2.98951 -4.34678,-4.34885 3.66576,-3.15168 -5.49543,-9.14439 -1.02962,-0.67356 0.34901,-4.28084 -1.36287,-4.22049 -2.39497,0.0846 -0.60097,4.85837 -6.19884,-0.57153 -4.1927,-4.06703 -2.60836,-2.2637 -5.4075,-4.26445 -4.00358,-2.86198 -2.15421,-3.19481 -3.86878,-3.78086 -1.61732,-0.55286 -3.70371,-6.18744 -3.605,-1.8025 0.0946,4.20203 -11.0576,-8.74603 -11.9581,-10.1556 -1.98064,-3.10108 -2.91382,1.06694 -5.75921,-0.4836 -2.13243,-1.16192 -2.01112,2.55195 -3.78086,2.15421 l -4.9239,-3.95671 c -10.0979,-8.93889 -4.23584,2.91984 -9.18836,5.31958 -2.09967,1.01738 0.47592,5.28411 -2.24214,4.44031 -1.81328,-0.56281 -1.99681,2.91444 -4.48427,-0.0879 -1.91448,-2.31057 -2.36013,-0.54955 -4.61616,-1.01116 -8.39971,-1.71914 -2.13762,-3.79724 -12.046,-2.50592 -3.84908,0.50163 -2.15213,-6.625 -5.36354,-5.8911 -1.98126,0.45269 -6.22622,0.0869 -3.38518,-1.14305 3.53284,-1.52939 -6.48896,-0.44026 -6.63848,-2.24214 -0.23081,-2.78027 -4.00233,-2.83481 -5.89732,-4.57033 -0.0201,0.0647 -0.4386,-0.39713 -4.28332,-0.82909 -2.82527,-0.31749 -23.5279,2.18884 -23.6579,3.8918 -0.18291,2.3958 3.39618,0.54623 1.69757,4.31194 -2.43168,5.39112 5.47511,7.84644 5.77684,12.6264 0.13375,2.11937 4.18441,4.77294 -1.3892,4.48904 -2.43893,-0.12422 -9.28665,3.02663 -2.55755,5.37329 1.87964,0.65551 2.19693,9.99691 -3.70413,5.26296 -1.92983,-1.54805 -4.26134,-1.22061 -6.08541,-2.96318 -1.64925,-1.57543 0.33512,1.4736 -5.07114,1.26042 l -0.39007,-0.0127 c -6.99827,-0.18 0.67749,2.85472 0.72083,3.52869 0.001,0.0197 -0.44109,0.27954 -0.44109,0.66339 0,0.95185 -0.82348,1.70752 -0.92592,3.07371 -0.20945,2.79458 -5.40875,0.95061 -3.30721,5.79343 0.71046,1.63722 -1.4593,2.604 1.23471,3.00735 3.05857,0.45789 -1.67103,2.6911 -0.79383,3.62657 0.91825,0.97943 0.99249,1.56423 0.74966,3.8918 -0.29468,2.82486 -4.5836,2.94742 -2.35909,5.63893 1.88338,2.27863 4.46436,10.3212 5.86704,11.1449 8.23755,4.83722 7.96505,-0.11198 9.95855,0.47531 0.60532,0.17834 2.68426,6.49622 7.89849,8.56872 3.62636,1.44146 1.73925,1.55572 8.81944,3.27258 5.59435,1.35665 5.85916,5.7814 7.98144,4.15724 1.77243,-1.35623 4.15517,3.9256 9.10603,1.26042 5.72748,-3.08325 4.78248,5.6831 9.08405,5.6831 4.05106,0 0.73763,4.55893 1.27888,5.37349 1.74153,2.62101 1.5439,1.5692 4.5639,2.96297 2.25167,1.03915 2.49679,-0.47178 3.77028,1.85746 0.97238,1.77824 2.86053,0.0336 1.47734,-1.39294 -0.56676,-0.58459 -0.6184,-4.58174 2.93249,0.0661 2.41529,3.16163 3.70226,0.83758 3.4615,-2.25541 -0.0419,-0.53731 5.38469,0.66132 6.65859,-2.32177 1.70192,-3.98512 2.3705,-4.03447 6.98956,-3.53823 0.0786,0.008 0.16382,0.0257 0.25465,0.0508 -0.19866,-0.18851 -0.41724,-0.33222 -0.69533,-0.44876 -1.81702,-0.76169 -5.84237,-4.34989 -3.08719,-6.41265 1.22766,-0.9193 0.59102,-1.48003 1.451,-2.61147 1.94186,-2.55444 2.73133,-2.55506 2.73216,-2.55589 1.15114,-1.15114 -5.61923,-3.34184 -2.20336,-6.61007 3.3997,-3.25246 2.54635,-0.74883 7.05074,-0.61694 l 2e-5,1.3e-4 z';    //m 22.9838,-40.1237 c 4.78973,-0.4639 -1.42736,-1.32823 1.85227,-3.00735 l 1.05823,-0.0885 c 7.50219,0.50911 4.52492,4.14169 7.58473,5.32932 1.51135,0.58666 0.70321,1.00639 0.77164,2.12269 0.2783,4.54773 -3.61537,0.98503 -5.07114,0.86247 -4.70409,-0.39588 -8.91566,-4.95522 -6.19573,-5.21858 l 0,0 z
    var chongQing='m 370.131,310.928 c 0.0599,0.0458 0.0502,0.10058 0,0 z m 3.10315,33.1422 c -0.61818,-0.47779 -0.69864,-3.11871 -1.74174,-1.54805 -1.06031,1.59637 -2.61375,0.24781 -0.81581,-1.70255 0.75733,-0.82162 1.046,-4.3474 0.33532,-5.05808 -1.15259,-1.15259 -2.18594,-1.88006 -0.035,-2.7811 2.8962,-1.21356 3.29954,0.80005 4.82706,-1.26353 0.65675,-0.88736 1.12003,-0.55763 1.89043,-0.044 4.6736,3.1158 6.9682,-4.82602 10.0676,-4.00067 3.01564,0.80295 2.15753,-1.50367 2.98951,-3.56104 1.32388,-3.27341 -3.24873,-6.22083 -4.22505,-6.2144 -1.51819,0.0102 0.10078,0.29157 -0.91867,-1.52317 -0.27021,-0.48111 -0.65386,-0.61342 -1.15197,-0.63789 -1.27224,-0.0628 -3.785,0.95849 -6.102,-2.13181 -0.69139,-0.92199 0.009,-0.77454 -2.06753,-1.32865 -3.68256,-0.98275 1.34503,-1.07793 -6.59286,-3.77795 0.16756,1.69238 0.35585,2.26702 0.43756,2.43064 -0.12256,-0.0937 -0.53627,-0.15076 -1.4931,1.22517 -1.41139,2.02958 5.74532,2.37029 0.52756,5.45147 -2.31368,1.36618 -5.00872,10.4633 -6.3747,10.4633 -2.72117,0 -4.87994,-1.9628 -4.87994,3.16537 0,1.1754 -3.63134,7.01901 -5.09976,7.25397 -6.00868,0.96139 -4.57095,-6.22435 -7.47378,-3.20933 -2.80827,2.91673 -5.84071,-6.60737 -9.45214,0.61549 -1.19261,2.38522 4.37353,2.79458 -0.39567,5.31958 -0.57319,0.30339 -4.53176,3.59214 -4.52823,3.605 l 2.41799,3.29726 c 1.47568,2.31907 2.89371,-1.97981 3.69293,4.5722 0.19783,1.62146 7.30871,-1.08146 6.48398,6.5464 -0.0147,0.13645 -0.0543,0.26917 -0.0815,0.40397 1.05886,0.3318 2.27158,0.12131 2.21435,-1.4989 -0.14827,-4.19498 1.53872,-0.87056 1.53872,1.01116 0,2.93 3.2562,-1.06632 2.81366,-2.15421 -0.95869,-2.35661 0.028,0.59184 1.62665,-1.40683 1.93875,-2.424 1.91407,2.5252 4.79201,-0.43964 1.10095,-1.13413 -0.0471,-1.48522 0.17585,-3.16537 0.0747,-0.5624 3.5685,-1.68782 4.5722,0.57153 1.50347,3.38415 1.9993,-0.3204 4.6398,0.80191 2.57663,1.09515 1.9769,-2.00386 2.40327,3.5824 0.17897,2.34562 3.10917,1.51632 3.08698,2.96297 -0.0701,4.55167 0.15014,2.40721 0.94791,1.57003 1.22475,-1.2851 0.004,2.50322 2.80018,3.05152 1.36328,0.26731 1.20111,3.12555 2.82216,-1.52566 0.3007,-0.86309 1.04683,-0.54975 1.27888,-1.41533 0.3318,-1.2374 1.05263,-0.79797 0.11033,-1.96799 -0.44337,-0.55037 0.0139,-1.60301 0.46306,-1.83527 0.47759,-0.24698 -0.56965,-0.76604 -0.5514,-1.37116 0.0606,-2.01589 1.67414,-2.97375 -0.0319,-4.32356 -0.11385,-0.09 -0.24263,-0.18207 -0.38696,-0.2758 -1.16918,-0.75858 -0.55991,-3.00133 -1.89603,-3.2506 -1.99557,-0.37245 -2.00428,-3.20892 -3.66016,-4.48883 l 3e-5,-10e-6 z';
    var ningXia='m 330.372,236.934 c -2.21953,1.3357 1.63867,-0.19182 2.38128,1.4593 1.0122,2.25043 5.6352,4.55395 4.45379,5.83781 -3.71927,4.04132 1.94559,2.97914 1.78591,8.00487 -0.0278,0.8774 -5.20179,4.35404 0.0661,6.28014 5.14186,1.87985 -0.24968,1.21335 3.70413,2.43251 0.0433,0.0133 4.41418,4.10291 5.00499,4.11286 2.59488,0.044 0.86787,-3.03928 0.92614,-3.31696 0.99685,-4.74722 0.73846,-2.74377 3.50567,-2.56502 2.40783,0.15553 4.52056,-7.16417 -1.65361,-7.76162 -3.06044,-0.29613 1.14575,-1.03874 -1.27888,-3.36113 -1.36536,-1.30791 2.14446,-2.37776 2.29315,-3.84763 0.58832,-5.81458 -2.49244,-3.21223 7.16563,-3.95837 0.19949,-2.60815 -0.2501,-4.96973 1.43317,-7.27491 1.1277,-1.54473 2.01153,-2.30808 2.83813,-2.55071 -3.81424,-3.09362 -0.31853,1.88089 -3.32816,-2.76907 -2.84808,-4.40028 -4.61616,1.5634 -8.48494,-3.73689 -0.55203,-0.7563 3.45279,-7.52044 4.61616,-8.52891 0.8239,-0.71399 1.23575,0.45125 -1.53872,-5.09976 -1.18183,-2.36469 -6.19864,2.11004 -6.19884,2.11024 -2.23446,1.09846 0.73244,-1.36743 -3.1214,4.48427 -3.23691,4.91499 0.76562,4.55561 -1.36287,7.47378 -2.40575,3.29829 4.35197,4.74162 -8.44098,8.61683 l -6.70608,1.28261 c 1.43337,0.14993 4.02203,1.42301 1.9402,2.67576 l -2e-5,0 z';
    var beiJing='m 454.395,204.516 c 4.46789,0.23039 -0.38945,4.00897 4.98301,-0.44233 0.84961,-0.70404 2.24359,-0.42387 3.26076,-0.28846 0.0272,-0.53378 -0.0767,-0.93132 0.82867,-1.4087 -0.0873,-0.22272 -0.1435,-0.24263 -0.0765,-0.4921 0.58666,-2.18241 -0.62026,-1.30708 -1.378,-2.53184 -1.59077,-2.57082 2.22057,-2.20004 3.57473,-2.24504 0.0641,-0.68454 2.0049,-2.38875 2.62785,-2.90822 -6.72641,-4.75344 6.09267,-6.91263 -4.18524,-6.445 -3.64191,0.16569 -4.05812,-8.17699 -7.40825,-1.32678 -0.002,0.005 -4.03365,3.31965 -5.07114,3.44968 -4.59522,0.57567 1.9458,3.9115 -0.26461,5.77145 -4.68003,3.93784 -5.05103,0.58708 -3.37336,5.17441 0.58106,1.58911 -2.30352,2.26038 1.34482,3.69293 5.11137,2.00697 0.38924,-0.24491 5.13729,0 l -1e-5,0 z';
    var tianJin='m 463.116,211.17 c -4.33538,3.18735 3.15541,6.56445 8.77796,5.72479 -0.77309,-2.63822 1.37427,-9.1641 3.45735,-9.72027 -0.13832,-0.51616 -0.0143,-0.74282 -0.62897,-1.06031 -2.47232,-1.27722 1.90038,-2.51131 -1.58268,-3.07744 -2.4885,-0.40459 -5.09665,-5.30776 -1.84646,-5.84714 1.76082,-0.29219 -1.7237,-3.06002 -3.07744,-2.98951 -0.62295,0.51947 -2.56377,2.22368 -2.62785,2.90822 -0.28306,2.95467 0.79197,1.66211 0.86932,3.24666 0.20177,4.12738 -2.20087,2.16147 -2.98951,2.02232 -0.9054,0.47738 -0.80151,0.87491 -0.82867,1.4087 -0.0162,6.0091 2.90366,5.59974 0.47696,7.38399 l -1e-5,-1e-5 z';
    var neiMengGu='m 311.808,210.73 c 2.51857,1.44851 13.1436,-7.69505 13.3174,-2.63138 0.13728,4.00109 2.81636,1.98893 0,6.58975 -3.48887,5.69928 -7.8819,4.72151 -7.0777,6.36848 1.27307,2.60691 -2.7782,3.96521 -1.43317,6.58954 0.30277,0.59081 1.17623,1.05409 1.69778,1.43731 4.47805,3.28958 3.82606,5.39485 10.1203,5.17441 l 6.70608,-1.28261 c 12.7929,-3.87521 6.03523,-5.31854 8.44098,-8.61683 2.12849,-2.91818 -1.87405,-2.5588 1.36287,-7.47378 3.85385,-5.8517 0.88694,-3.38581 3.1214,-4.48427 2.1e-4,-2.1e-4 5.01702,-4.47494 6.19884,-2.11024 2.77447,5.55101 2.36262,4.38577 1.53872,5.09976 -1.16337,1.00846 -5.16819,7.77261 -4.61616,8.52891 3.86878,5.30029 5.63686,-0.66339 8.48494,3.73689 3.00963,4.64996 -0.48609,-0.32454 3.32816,2.76907 0.99747,-0.29302 1.91179,0.17212 3.07101,0.9363 5.70405,3.76012 3.5486,0.18394 5.97509,0.99519 7.20648,2.40949 1.70421,-3.86401 3.92457,-4.46685 1.30646,-0.35461 2.05135,-0.14247 2.35038,0.008 -0.11634,-0.10763 -0.29592,-0.30401 -0.53005,-0.63457 -0.18477,-0.26067 -0.40334,-0.6047 -0.65178,-1.0545 -1.00183,-1.81349 5.72686,-9.19914 5.97509,-9.33165 3.90487,-2.08495 1.56298,-2.01423 2.9105,-3.33894 3.84784,-3.78293 1.25711,-2.30953 3.46171,-2.6094 3.29166,-0.44772 0.15927,-1.99474 0.11012,-2.16707 -0.36871,-1.29298 3.46938,0.63022 3.68215,0.59704 3.318,-0.51844 2.21331,2.14488 3.35138,0.13272 1.67683,-2.96484 4.98612,-4.36938 3.99072,-1.21625 2.23094,-0.87927 1.05595,1.12376 3.52786,-1.52566 2.9611,-3.17366 5.17587,0.98648 5.90893,-1.54805 0.42657,-1.47464 1.53851,-5.50248 2.19444,-6.86949 2.22202,-4.63151 5.52135,0.9336 7.91342,-2.37403 1.79628,-2.48373 5.56552,0.53399 7.46487,-1.70234 2.66331,-3.13592 5.0869,-0.19162 4.31733,-6.60675 l -0.35171,-0.87927 -0.43963,-0.61549 -0.4836,-0.65945 -0.43964,-0.57153 0.044,-0.65945 0.30774,-0.52756 0.13189,-0.65945 -0.35171,-0.83531 -0.48359,-0.74738 0.48359,-0.74737 0.0676,-1.40911 0.44067,-1.14575 1.32201,0 0.5288,-0.96948 0.26441,-1.05761 0.35253,-0.88134 0.26441,-1.05761 0.44067,-0.79321 0.88134,-0.96948 0.79321,-0.96948 0.79321,-1.14575 0.96947,-0.88134 0.88135,0.26441 0.7932,0.61694 0.88135,0.96947 0.70507,0.79321 -0.44067,1.41015 -0.44067,1.32201 0,1.41015 0.5288,1.41015 1.14575,0 1.23388,0 0.79321,-0.5288 0.44067,-0.96948 0.61694,-0.88134 0.79321,-0.70508 0.88134,-0.61694 0.96948,-0.88134 0.88134,-0.61694 0.88134,-0.88134 1.33321,-0.3233 0.41911,0.6412 0.3967,0.6634 0.97031,0.50869 0.39671,-0.28763 0.46307,-0.30961 0.33076,-0.4863 0.66152,-0.64141 0.63934,-0.6412 0.24242,-0.4865 0.39692,-0.17689 0.49687,0.0214 0.70341,0.57152 0.83531,0 1.05512,0.13189 1.09909,-0.13189 0.92323,-0.3517 0.30774,-0.65946 0.52756,-0.79134 -0.26378,-0.43963 -0.3517,-0.39567 -0.26379,-0.4836 0.4836,-0.52756 0.30775,-0.57153 0,-0.57152 -0.30775,-0.39567 -0.13189,-0.4836 0.0879,-0.65945 0.43963,-0.79135 0.61549,-0.74737 0.92323,0 1.36287,0 1.05512,-0.35171 0.4836,-0.43963 0.61549,-0.61549 0.52756,-0.57153 0.9672,-0.21981 1.05512,0 0.92323,0.30774 0.70341,0.70341 0.57153,0.70342 0.65945,0.61549 0.4836,0.79134 0.044,0.9672 0.21982,1.18701 0.79134,0.8353 0.30774,1.09909 0.74738,0.79134 0.61549,1.01116 1.14305,0.74738 -0.13189,0.70342 -0.8353,0.39567 -0.79135,0.61548 -0.0879,1.01116 0.43963,0.87927 1.18701,0.39567 0.70342,0.83531 0.13189,0.87927 0,1.01116 0.30774,0.96719 0.92323,0 0.43964,-0.52756 1.27494,-0.13189 0.79134,0 0.79134,-0.13189 0.52756,-0.3517 0.57153,0.52756 1.18701,0 1.23098,-0.044 0.74737,0 0.87927,-0.13189 c 2.77156,-1.58372 1.57771,-2.06172 1.3189,-2.81366 -1.86616,-5.42306 0.0311,-6.5576 -1.58268,-8.44098 -2.25333,-2.62993 1.86554,-3.26968 2.63781,-2.63781 2.95405,2.41757 1.53374,-0.97984 5.45147,6.8583 1.16939,2.3396 2.78712,-5.54872 7.91342,-7.38586 4.07616,-1.46075 4.86895,-4.6537 6.50078,-4.42081 5.0952,0.72706 1.46946,-3.0594 4.56411,-3.51604 5.92324,-0.87408 3.5206,-0.7424 3.13094,-1.52586 -0.90975,-1.82904 6.54848,1.89893 7.78298,-1.68056 2.55278,-7.40162 4.47598,2.87484 4.47598,-8.00487 -1.60798,-0.25901 -1.11568,0.3878 -1.87425,-0.22106 -1.21916,-0.9786 -3.58157,-0.30173 -0.79362,-2.63138 0.66215,-0.55327 -0.78367,-3.98657 -0.81581,-4.02452 -2.57207,-3.05256 -1.10821,-3.88931 -2.55755,-4.75427 -3.57161,-2.1316 0.63166,-4.62135 -2.73403,-2.32197 -3.69936,2.52728 -6.18785,5.63458 -6.50431,3.40551 -0.42346,-2.98391 -4.46395,-6.45744 -3.41754,-7.93851 1.3384,-1.89458 -1.39314,-1.90038 -0.19846,-3.71491 1.92858,-2.92917 -1.99494,-4.14127 -2.33711,-5.77145 -0.56074,-2.67119 -4.04505,-0.45311 -2.80018,-2.01236 1.70172,-2.1316 0.0709,-5.01536 3.15292,-2.80827 4.90109,3.50982 1.91448,-1.28178 4.23335,0.68538 4.28706,3.63673 3.68215,-1.16835 3.15292,-1.92382 -2.0613,-2.94306 2.57953,-0.0703 2.57953,-4.70989 -0.10991,-0.22314 -0.17523,-0.47448 -0.32931,-0.66962 -4.44839,-5.636436 3.39887,-3.89263 3.9453,-6.627696 0.45042,-2.25458 -1.90868,-0.799637 -2.13866,-1.34897 -1.67994,-4.01208 -2.28382,6.216676 -5.22543,0.04438 -1.35271,-2.83834 -6.14513,-4.21593 -5.04916,-6.96572 1.05803,-2.6544 10.6902,-10.4525 13.3039,-15.5687 2.77944,-5.44027 2.27469,4.4457 4.52823,3.25329 2.00117,-1.05906 -1.25711,-4.94796 -0.4836,-5.80317 1.57957,-1.74651 -0.73535,-7.52024 1.67061,-8.44098 6.40373,-2.45096 0.0794,-9.53944 2.11024,-14.5079 5.16301,-12.6322 5.77684,-12.4871 0.13189,-17.7173 -8.79912,-8.15252 -4.00233,-0.940444 -8.6608,0.923232 -5.90956,2.36428 -7.21104,1.0375 -9.93574,2.46195 -6.05057,3.16329 -7.13079,-3.79703 -9.0125,-7.78153 -2.31617,-4.90441 1.93087,-3.01108 -1.18701,-4.39634 -1.28116,-0.569244 -3.28979,-4.66717 -4.70409,-2.33006 -2.2075,3.64772 -2.08806,1.82967 -5.09976,0.483598 -7.87547,-3.51998 7.84768,-7.08309 -2.30995,-13.0126002 -0.89399,0.202605 -1.58808,0.418482 -1.84875,0.685373 -2.91258,2.9810102 -0.62793,-3.13343 -8.51066,7.2971002 -0.84484,1.11775 -2.89744,2.34396 -1.21273,4.13526 1.21273,1.28946 5.69306,-4.49734 5.57838,2.4323 -0.0533,3.2226 4.76423,2.96732 -2.62391,9.28748 -3.03617,2.59716 -1.93273,8.25579 -4.54192,11.1669 l -3.25889,9.1782 c 0.10473,0.943555 5.60596,0.224379 -0.57152,5.53939 -2.0555,1.76849 -2.59343,-0.432791 -7.03415,4.66012 -5.61965,6.445 -13.8763,-1.46614 -14.2002,0.219817 -1.28821,6.70297 -6.64532,12.8574 -6.90226,19.9594 -0.15574,4.30614 -5.54935,1.83195 0.21981,9.27629 1.88918,2.4379 2.89848,-2.47751 10.1995,-2.59384 4.37104,-0.06968 3.27714,6.10096 7.6936,-0.703415 2.14156,-3.29933 8.9252,-1.36224 11.1667,0.879269 1.06881,1.06881 3.05193,0.968855 3.25329,2.46195 0.20613,1.52794 14.2943,10.625504 7.16604,12.793404 -5.47697,1.66563 -7.62143,-2.69131 -10.1556,-0.43964 -1.82365,1.62043 -2.51172,-1.51591 -5.18769,0.74738 -5.52819,4.67588 -7.10901,-0.78989 -7.21,3.69293 -0.0761,3.37606 -7.07749,-0.20198 -9.05647,4.74805 -1.50741,3.77069 -1.84646,-0.0633 -1.84646,5.97903 0,1.86782 -5.91225,5.97903 -11.6063,5.97903 -5.59559,0 -1.24736,-0.47572 -8.04531,5.0558 -4.4318,3.60625 -6.53147,5.37951 -12.6559,4.1363 -3.50733,-0.71192 -3.88807,-5.7899 -9.89965,-3.53823 -0.0238,0.009 -5.5311,8.54259 -4.12302,11.0786 4.55291,8.1998 8.63405,5.64121 -1.32616,12.2834 -3.88102,2.58824 -0.52839,-3.22841 -7.95738,8.22116 -2.49783,3.8497 -5.21299,0.83593 -8.52891,3.95671 -3.38767,3.18839 -16.5943,0.41869 -24.3557,1.67061 -14.9884,2.41757 -20.1286,10.8231 -27.7849,9.45214 -3.64897,-0.65344 2.91797,-3.81072 -5.84714,-2.68177 -6.63454,0.85459 -10.8032,-6.06695 -17.0138,-6.06695 -4.9293,0 -3.40115,-4.44051 -6.8583,-5.62732 -15.4264,-5.29552 -17.631,-1.15632 -24.5756,-3.69293 -3.51231,-1.28303 -14.1108,-3.00279 -21.9363,-3.9592 0.81768,2.27697 4.89798,13.5582 4.50065,15.0583 -0.98109,3.7035 -4.02431,0.77351 -0.70569,5.79343 1.17416,1.77616 5.62525,6.38382 4.76257,8.1154 -1.66791,3.34765 2.78608,4.17819 3.28523,2.89682 1.13641,-2.91693 -4.02639,-2.12704 6.63661,-3.47166 8.50796,-1.07296 13.796,1.67248 7.61998,7.55238 -10.1858,9.69726 -6.83362,4.02659 -1.34939,8.24107 1.06819,0.821 3.07184,1.73967 3.25329,2.68177 0.26336,1.36743 0.64327,0.88528 1.49476,1.8025 1.95534,2.10589 4.7972,1.16005 3.62159,5.48382 -0.87429,3.21576 0.56406,1.05989 2.84414,3.09569 6.82532,6.09391 6.00578,5.42534 9.78954,1.43731 1.31641,-1.38754 -5.52508,-3.55378 1.83008,-3.75908 1.56858,-0.0438 2.08391,-1.30086 6.46014,1.21605 l 9e-5,4e-5 z';
    var guangXi='m 404.653,442.257 c -4.2545,2.5702 1.29754,-1.17104 0,0 z m -37.5089,-39.6262 c -1.288,0.50745 -3.9509,7.71061 -7.29793,4.66012 -2.30808,-2.10361 -0.20675,-1.70234 -2.81366,-0.8353 -0.71627,0.23827 -2.44246,-2.69421 -2.59384,-3.47311 -0.56033,-2.8823 -5.15886,-1.63723 -4.13256,1.187 1.09141,3.00363 -4.07035,2.72139 -5.31958,3.78087 -2.24732,1.9064 -4.94443,0.91825 -5.14372,2.41798 -0.79673,5.99728 -3.78853,2.77551 -3.82482,2.7697 -3.37253,-0.5485 -5.45541,-2.91921 -8.6608,-4.04464 -2.05488,-0.72145 -7.5783,8.04054 -8.92333,1.93501 -0.82867,1.72059 -0.33761,3.36756 0.31956,5.59476 0.52653,1.78384 3.82565,-1.72702 6.96717,0.75195 1.39231,1.09867 -0.73555,3.80284 1.94041,4.26777 1.18909,0.20654 1.84729,1.0095 2.75601,0.26523 0.88798,-0.72727 1.66978,1.68865 5.22543,-0.77392 1.61566,-1.11879 4.93427,5.12547 0.92614,9.44218 -0.75775,0.81601 -1.52711,-0.78367 -2.84435,-0.50849 -0.61673,1.40268 -2.82424,3.08055 -4.03904,4.12095 0.99602,1.16254 1.94538,2.39186 2.60587,2.75601 4.60206,2.53764 0.55887,1.20734 4.78455,0.86247 3.82565,-0.3123 0.35585,2.85721 5.5369,0.78554 0.92489,-0.36996 6.30378,1.53996 1.40683,5.36354 -2.96442,2.31472 0.48712,3.63424 0.87927,7.03415 0.2026,1.75667 2.77177,1.43918 3.64897,2.46195 0.18498,0.21567 1.26996,4.03862 7.64964,4.22049 2.09096,0.0595 2.75311,-0.95061 4.52823,0.39567 3.74125,2.8373 5.78368,-1.7013 6.46263,0.26378 0.76397,2.21124 2.61479,-0.56364 1.40683,-2.15421 -1.44561,-1.90349 1.67725,-2.23052 1.62665,-1.36287 -0.11447,1.95969 -0.11924,0.58418 1.27494,2.54988 1.46635,2.06732 1.67538,-3.27424 2.11024,-0.43963 0.31728,2.06773 5.65677,0.60325 3.34122,3.1214 -1.51612,1.64884 5.15202,0.66214 5.8911,-0.4836 0.73618,-1.14118 -1.35105,-1.78259 0.0879,-3.07744 1.01406,-0.91245 -0.77972,1.24591 0.70342,1.93439 1.33819,0.62109 0.19866,1.89478 2.41799,2.02232 -0.69865,-3.27403 1.58662,-0.97093 2.09158,-4.81234 0.29302,-2.22949 6.90247,0.9786 5.53421,-3.22862 -1.34752,-4.14376 1.23533,0.0931 4.45379,-2.96297 2.39393,-2.27303 -0.80855,-0.41226 0.24242,-3.86982 0.36726,-1.20796 3.46544,-1.10572 4.45379,-1.85746 0.37141,-0.28245 0.68206,-0.52217 0.93982,-0.72457 0.43632,-0.34279 0.72063,-0.57774 0.88902,-0.72996 l 0.66277,-0.40293 c 4.4598,-2.72739 -0.92821,-8.77942 4.29701,-12.4495 1.45494,-1.02194 -0.3542,-0.71378 1.53872,-2.19817 5.8743,-4.60621 -0.15201,-4.74888 2.59384,-6.15488 3.68215,-1.88545 -0.58501,-4.76112 0.52196,-7.23655 -5.08296,-1.27121 -2.29045,0.0243 -4.63005,1.14989 -3.04841,1.46655 -1.48874,-3.44449 -1.85206,-4.7101 -1.4172,-4.93573 -4.99234,0.82017 -5.86497,0.55286 -3.01875,-0.92489 3.66307,-6.30461 3.63797,-8.00487 -0.0348,-2.36615 2.54532,-6.37842 0.57339,-5.46183 -3.51873,1.63556 -0.67189,-3.62035 -1.3892,-4.82063 -1.30584,-2.1849 -4.90026,0.18166 -6.57046,-0.46431 -3.31177,-1.28095 -5.30693,7.90492 -7.91528,3.20622 -1.30999,-2.35972 -3.13799,-1.18681 -3.54984,1.19427 -0.68475,3.95878 -1.60446,0.63374 -1.6648,0.57339 -1.0881,-1.0881 -2.0134,-1.03625 -2.8091,-0.54394 -1.37137,0.84837 -2.35806,3.00548 -3.13074,2.89163 -1.06445,-0.15698 -6.37677,0.11883 -3.25329,1.09909 1.8222,0.57173 -0.71917,3.19357 -2.81366,1.09909 -0.95931,-0.95932 -2.11024,1.33529 -2.11024,2.46195 0,2.64859 -2.23944,-2.01423 -3.78086,-1.40683 l -3e-5,-10e-6 z';
    var xinJiang='m 201.571,198.07 c 0.0203,-0.0651 -0.35731,-0.65696 1.89665,-2.33193 3.66099,-2.72055 1.47174,-5.87949 2.85762,-9.62799 2.3931,-6.47258 -0.006,-9.30822 6.33073,-6.59452 2.23695,0.95807 7.90471,-5.11593 9.32025,-6.81433 2.69359,-3.23193 10.5305,-10.038 14.9036,-7.12208 1.9261,1.28427 1.57833,-1.24093 5.80317,-1.3189 4.87725,-0.0902 3.94883,-2.10589 3.605,-3.51707 -1.09432,-4.49111 -0.93754,-4.14418 2.61686,-7.14178 -0.63,-0.54726 -0.163,-2.26951 -3.58406,-8.20146 -1.25628,-2.17826 -1.14492,-10.304 -2.94555,-11.2986 -1.70483,-0.94169 -2.62246,-0.69865 -0.17585,-2.7697 1.43503,-1.2148 -3.62035,-0.37473 -5.45147,-2.54988 -14.8225,-17.6065 -18.3141,-10.1527 -25.5428,-14.9036 -1.64241,-1.07939 -3.61516,-0.35316 -5.01183,-1.62665 -1.69861,-1.54888 -10.3285,-1.74796 -6.11092,-10.4193 1.69176,-3.47809 3.12534,-0.15512 3.69293,-6.68244 0.45352,-5.21589 4.15579,-2.68841 -0.51263,-11.1489 -1.44706,-2.62225 -0.64805,-12.7527 -5.20345,-12.8253 -2.39539,-0.03816 -1.54473,-3.05339 -5.97509,-3.36113 -3.54611,-0.246361 -4.61492,-6.53313 -7.25397,-8.55773 -4.58754,-3.51956 1.03003,-2.75435 -2.64589,-4.79844 -2.23446,-1.24259 5.89006,-6.72558 -3.32919,-5.66091 -1.61006,0.186015 -4.87331,-4.71446 -5.97509,0.818093 -1.524,7.65337 -10.1122,3.59297 -12.9425,7.1424 -3.88226,4.86874 -0.66029,18.4122 -7.99512,15.443 -2.38585,-0.965744 -3.42687,2.82444 -4.96787,-0.08793 -1.85434,-3.50463 -3.68007,1.73075 -12.3098,-6.41866 -2.46444,-2.32716 -3.7456,0.221269 -8.48494,6.24281 -1.23512,1.5692 -7.4462,9.55126 -7.47378,10.859 -0.10639,5.04626 3.26055,6.26355 1.09909,6.90226 -3.7344,1.10365 -6.45226,-4.34657 -6.99019,-4.30842 -2.26184,0.160508 -4.87434,1.5213 -11.7822,0.219817 -0.7534,-0.141844 -7.973354,-0.923647 -8.133244,-0.04396 -0.62088,3.41546 5.1601,1.82739 2.50592,8.35305 -1.1727,2.88355 0.845052,6.85601 -0.703415,9.54007 -0.846711,1.4678 3.17387,9.39076 -2.24214,8.30909 -2.2834,-0.45602 -2.7556,1.61109 -1.62665,2.68177 1.25959,1.19448 -4.45731,-0.5595 -4.66012,4.87994 -0.194103,5.20469 -2.19859,3.90362 -6.50659,5.58336 -1.05367,0.41081 -10.3304,1.95368 -13.277,2.7697 -4.58423,1.26955 -4.49422,-2.2579 -5.31958,0 -1.09204,2.98765 -2.97686,0.51304 -4.39634,1.89043 -3.9227,3.80616 -8.04987,-6.09329 -12.8373,0 -6.79608,8.6496 -5.40315,2.11045 -10.1556,3.86878 -2.27718,0.84256 -1.93273,-2.78276 -1.40683,-3.73689 2.16582,-3.9283 -4.67754,1.45764 -7.12208,-1.8025 -1.7772,-2.37029 -0.921366,0.94708 -7.03415,2.59384 -1.21501,0.32724 -4.95874,-4.26756 -8.57287,4.00067 -1.52317,3.48452 -5.21008,-0.793 -4.87994,4.30842 0.148895,2.30103 1.81183,2.93062 -0.439634,4.83598 -2.07478,1.75563 0.139356,6.12191 2.59384,5.18769 2.01859,-0.76832 7.80061,2.39933 6.72641,4.9239 -2.84601,6.68887 -0.459957,7.22722 -2.54988,9.80385 -2.05861,2.53806 4.12365,6.75523 -2.59384,6.06695 -1.17416,-0.12028 -6.48668,-4.0465 -5.18769,0.57152 0.360002,1.28012 2.48414,0.17897 3.20933,1.49476 1.28552,2.33234 3.73212,1.25711 6.19884,5.93506 0.936297,1.77554 3.56187,0.71213 3.69293,5.53939 0.07652,2.81843 -3.52537,4.40692 -1.53872,7.16604 2.24068,3.11186 -2.99283,2.21352 4.39634,3.07744 2.37174,0.27726 -2.75622,0.65738 2.2861,4.48427 3.35263,2.54449 6.02154,5.18188 10.4633,5.97903 4.03344,0.72374 -1.67725,2.3705 -0.351707,4.04464 3.02145,3.81611 -2.51857,7.39187 2.05114,9.31486 1.19178,0.50144 4.01457,3.44325 3.46419,5.63769 18.0331,0.70176 8.73711,1.25379 14.4171,-4.77522 1.54038,-1.63494 3.57493,-1.80851 5.03879,-3.75867 1.88524,-2.51172 4.85402,1.75024 8.08927,2.33006 7.80372,1.39833 4.31319,5.80421 14.2881,1.09909 2.55278,-1.20422 7.27802,-0.8718 7.6936,2.59384 0.518851,4.32563 12.2129,6.39067 14.7278,5.4075 4.85962,-1.90017 9.74744,-1.99536 12.6252,-0.97797 4.1056,1.45183 7.7863,1.49704 9.34223,-1.63308 1.46614,-2.94949 9.45815,-1.16275 16.7644,-1.03791 13.7904,0.23557 9.55956,2.77301 13.7606,3.78086 3.27611,0.78595 5.6746,3.31302 8.07372,5.58398 l 0.39007,0.0126 c 5.40626,0.21318 3.42189,-2.83585 5.07114,-1.26042 1.82407,1.74257 4.15558,1.41512 6.08541,2.96318 5.90105,4.73395 5.58377,-4.60745 3.70413,-5.26296 -6.7291,-2.34665 0.11862,-5.4975 2.55755,-5.37329 5.57361,0.28389 1.52296,-2.36967 1.3892,-4.48904 -0.30173,-4.77999 -8.20851,-7.2353 -5.77684,-12.6264 1.69861,-3.76572 -1.88047,-1.91614 -1.69757,-4.31194 0.13003,-1.70296 20.8327,-4.20929 23.6579,-3.8918 3.84473,0.43196 4.26321,0.89378 4.28332,0.82908 l 1.5e-4,-1.1e-4 z';
    var xiZang='m 159.188,247.548 c -2.694,-0.40334 -0.52424,-1.37012 -1.23471,-3.00735 -2.10154,-4.84282 3.09776,-2.99885 3.30721,-5.79343 0.10244,-1.36618 0.92593,-2.12186 0.92593,-3.07371 0,-0.38385 0.44233,-0.64369 0.44108,-0.66339 -0.0433,-0.67397 -7.71911,-3.70869 -0.72083,-3.52869 -2.39912,-2.27096 -4.79761,-4.79803 -8.07372,-5.58398 -4.201,-1.00784 0.0299,-3.54528 -13.7606,-3.78086 -7.30623,-0.12484 -15.2982,-1.91158 -16.7644,1.03791 -1.55593,3.13011 -5.23663,3.08491 -9.34223,1.63308 -2.87774,-1.01738 -7.76556,-0.9222 -12.6252,0.97798 -2.51483,0.98316 -14.2089,-1.08187 -14.7278,-5.4075 -0.415579,-3.46565 -5.14082,-3.79807 -7.6936,-2.59384 -9.97493,4.70512 -6.4844,0.29924 -14.2881,-1.09909 -3.23525,-0.57982 -6.20403,-4.84178 -8.08927,-2.33006 -1.46386,1.95015 -3.49841,2.12372 -5.03879,3.75867 -5.67999,6.029 3.61599,5.47697 -14.4171,4.77522 -0.121314,0.48277 -0.405625,0.92945 -0.906642,1.30584 -3.03597,2.28133 -2.55278,-0.86372 -2.9103,4.24558 -0.07465,1.06756 -2.61728,1.92299 -1.47858,5.65428 0.714613,2.34147 3.82026,3.77339 2.14011,11.2399 -0.820789,3.64793 -6.84337,5.70737 -6.50431,-0.44213 0.13189,-2.39124 -4.17425,-1.20588 -3.94676,1.19406 0.361454,3.813 -3.31675,-0.24864 0.220439,6.72226 0.828669,1.63308 -2.52935,1.51964 -0.418897,3.7371 1.75999,1.84916 -1.68616,1.91117 -0.898762,3.48721 1.1275,2.25707 -1.47195,-0.29944 1.05512,3.86878 0.689314,1.13683 0.812701,7.31722 3.47311,4.17653 0.756296,-0.89295 2.1679,1.28593 3.20933,1.89043 3.4982,2.0302 1.90992,5.34197 8.83665,10.1116 1.85082,1.27452 4.39966,4.37581 4.48427,6.68244 0.171084,4.6651 5.49481,-4.54835 7.86946,-2.46195 0.27332,0.24014 0.446063,0.57796 0.703415,0.83531 1.93107,1.93107 4.00067,1.59554 4.00067,4.79201 0,0.009 4.10706,4.74017 5.82951,7.81388 2.07022,3.69397 4.12613,0.55597 5.77684,6.87717 1.884,7.21477 3.4897,-0.35233 8.00135,3.94945 1.9093,1.82034 -1.3442,5.0475 0.791342,5.71525 2.31492,0.72374 4.17881,7.27553 7.95738,5.18769 3.42106,-1.89022 -0.135623,4.08901 0.175854,4.61616 0.860812,1.45701 1.82531,0.17046 4.96787,2.15421 1.38671,0.87533 1.93501,-2.84663 3.69293,5.01183 0.954131,4.26487 3.29518,-3.27735 3.64897,-0.0879 0.611133,5.51015 3.913161,0.0929 5.935061,1.8025 10.647,9.00255 5.0616,2.25707 9.80385,5.53939 2.04741,1.4172 2.42214,-1.78425 4.04464,-0.43963 2.75954,2.28672 9.10976,-1.48874 10.3314,-0.044 4.54358,5.37329 -5.17856,7.36678 0.8353,12.1779 1.77368,1.41886 3.39535,-0.16507 2.06628,-2.19817 -0.79051,-1.2092 8.70912,-10.4069 12.7054,-8.1772 1.96052,1.0939 4.25968,0.86621 5.80317,2.7697 1.19282,1.47132 1.84792,-0.11405 4.96787,2.90159 3.99818,3.86463 5.29884,-3.26366 8.1772,3.07744 1.0742,2.36656 -2.53744,5.43259 2.63781,5.8911 4.65764,0.41247 -0.19845,4.50293 0.83531,6.50659 2.29481,4.44798 -1.79566,1.1783 12.7054,4.22049 12.4506,2.61209 8.01213,-5.1601 19.2999,-6.77037 15.8407,-2.25997 9.76362,-9.16721 19.4318,-5.75921 2.37817,0.83821 3.79516,-0.44046 8.6608,5.18769 0.96637,1.11796 2.77778,1.24487 3.605,2.50592 0.92344,1.40745 1.48335,0.15222 3.16537,-0.48359 4.74515,-1.794 -2.019,-1.53685 2.50592,-5.49543 1.87591,-1.64116 3.20145,-6.83486 4.39634,-0.61549 0.1715,0.89233 1.23699,-0.56655 2.46195,1.40683 1.44436,2.32695 1.6505,1.9514 1.66709,2.36324 0.74468,-1.42612 2.93103,-5.04543 3.15956,-1.59015 0.19721,2.98205 0.0626,1.95741 3.17511,1.39314 3.0511,-0.55307 -0.51678,-3.59463 1.12439,-6.54537 0,0 0.45,-6.53562 2.09469,-3.49385 0.2333,0.43155 0.068,3.4306 1.49911,2.10071 1.3386,-1.24383 -0.44897,-5.12402 2.40575,-5.22833 -0.0178,-4.80508 0.13438,-9.0631 0.17399,-9.12283 2.01817,-3.03887 -0.94771,-6.96717 -0.0442,-10.3488 1.27888,-4.78662 -1.16109,-4.28747 -0.88176,-5.48402 0.30069,-1.28842 -3.37544,-6.32016 0.0661,-5.04169 3.07288,1.1416 -0.50413,-3.44035 -0.72768,-3.93618 -0.44813,-0.99416 -2.30663,-3.15106 -2.29315,-3.80325 0.0728,-3.54362 -1.21646,-4.1927 -1.32284,-5.26296 -0.22479,-2.26308 -3.01046,-4.68128 -4.44155,-5.07944 -0.0908,-0.0251 -0.17606,-0.0425 -0.25465,-0.0508 -4.61906,-0.49625 -5.28764,-0.44689 -6.98956,3.53823 -1.2739,2.98309 -6.70048,1.78446 -6.65859,2.32177 0.24076,3.09299 -1.04621,5.41704 -3.4615,2.25541 -3.55088,-4.64789 -3.49924,-0.65074 -2.93249,-0.0661 1.38319,1.42653 -0.50496,3.17117 -1.47734,1.39294 -1.27349,-2.32923 -1.5186,-0.8183 -3.77028,-1.85746 -3.02,-1.39377 -2.82237,-0.34196 -4.5639,-2.96297 -0.54125,-0.81457 2.77218,-5.37349 -1.27888,-5.37349 -4.30157,0 -3.35657,-8.76635 -9.08405,-5.6831 -4.95086,2.66518 -7.3336,-2.61665 -9.10603,-1.26042 -2.12227,1.62416 -2.38709,-2.8006 -7.98144,-4.15724 -7.08019,-1.71686 -5.19308,-1.83112 -8.81944,-3.27258 -5.21423,-2.0725 -7.29316,-8.39038 -7.89849,-8.56872 -1.99349,-0.58729 -1.721,4.36192 -9.95855,-0.4753 -1.40268,-0.8237 -3.98367,-8.86631 -5.86704,-11.1449 -2.22451,-2.69152 2.06442,-2.81407 2.35909,-5.63893 0.24283,-2.32757 0.16859,-2.91237 -0.74966,-3.8918 -0.8772,-0.93547 3.8524,-3.16869 0.79383,-3.62657 l 2.7e-4,-1.3e-4 z';
    var haiNan='m 377.909,484.708 c -0.66215,2.41384 1.89955,-0.11136 -3.57182,3.98035 -5.08172,3.80035 -3.22405,1.58061 -3.70413,7.03187 -0.19887,2.2581 0.83054,2.86032 0.63954,4.42268 -0.61756,5.04978 8.17367,4.1786 10.4289,6.12523 3.98056,3.43599 2.77073,-3.93805 6.61442,-2.41032 1.93439,0.76895 1.50119,-3.01896 5.84299,-3.91399 0.39692,-0.0819 2.72553,-9.0658 4.68252,-10.7057 1.78135,-1.49268 -0.29488,-1.95803 2.24214,-2.19817 1.89146,-0.17917 0.74075,-4.34761 -0.13189,-5.36354 -0.10099,-0.11758 -0.31023,-0.009 -0.46493,-0.0199 -1.54867,-0.10866 -3.09362,-2.90325 -4.38763,-0.70756 -0.87471,1.48397 -3.17947,-0.96595 -5.37971,0.19887 -2.33462,1.23595 -3.06852,0.76853 -3.10896,0.79611 -1.66957,1.13745 -3.39638,-1.08312 -5.20345,1.03936 -1.09494,1.28614 -3.78728,-0.86558 -4.49796,1.72474 l -3e-5,-2e-5 z';
    var fuJiang='m 476.157,378.522 c -2.75352,1.58165 -6.36744,1.09328 -3.28523,7.96049 1.09017,2.42898 -4.16077,0.93111 -1.54328,4.75427 1.78197,2.60276 -3.24873,-0.30028 -5.00499,8.88953 -1.0771,5.63561 -1.24881,2.12995 -1.45432,9.3443 2.28216,-0.53876 6.38009,1.30439 6.23866,0.0979 -0.26979,-2.29937 1.80727,3.7456 2.99864,2.89661 3.21493,-2.29087 1.78881,0.81955 4.39655,3.96936 2.89267,3.49406 -1.48854,2.25852 3.50152,9.93532 0.83261,-0.29178 1.64593,-0.66858 2.08183,-1.80209 0.36913,-0.95994 1.51715,-0.86683 2.11024,-1.8025 0.34943,-0.55141 10.2516,-6.51551 8.04531,-8.13324 -1.1416,-0.83696 -2.86737,-0.703 -0.92323,-2.59384 0.91411,-0.88901 2.47232,-0.88196 3.605,-1.53872 2.18013,-1.26416 2.85576,3.3097 4.52823,-1.3189 0.6298,-1.74278 -1.41201,-1.83423 0.8353,-2.72573 3.9115,-1.55158 -1.71416,-3.61786 3.64897,-5.09976 3.43889,-0.95019 -2.36179,-2.81843 1.49476,-4.22049 1.07337,-0.39028 8.34621,1.09722 3.47311,-1.18701 -3.72984,-1.74817 1.01178,-1.35291 0.61549,-3.16537 -0.73079,-3.34267 1.91635,-0.38198 -1.05512,-4.13256 -1.24487,-1.57128 3.28025,-1.68762 0.39567,-4.5722 -2.25002,-2.25002 5.42181,-0.58708 -0.30774,-2.90159 -2.85555,-1.15363 -0.55245,-3.84784 1.62665,-2.54988 3.54403,2.11107 4.41107,-3.68132 6.41866,-5.0558 2.29045,-1.56837 -0.0757,-0.55058 -1.42238,-1.8755 l 0.64867,0.18685 c 1.05367,0.28866 1.83423,0.30898 2.40762,0.14516 -1.21687,-1.27867 -2.37071,-2.98309 -4.38722,-2.19506 -5.25591,2.05363 -3.59878,1.64614 -6.41617,-2.49866 -1.42612,-2.0978 -3.81175,4.53653 -6.06343,2.94099 -1.25939,-0.89234 -3.28523,1.22455 -3.28523,-0.79611 0,-2.632 -2.14405,-4.54026 -2.18262,-6.96551 -0.0942,-5.89255 -2.33276,-2.13803 -3.64129,-3.36196 -4.10954,2.37237 0.52777,3.05712 -3.25329,3.33977 -1.08478,0.0811 -0.01,1.01966 -2.6237,1.51487 -3.11601,0.59039 -2.22223,4.34097 -4.90586,1.14969 -1.54598,-1.83838 -4.00793,3.72797 -5.13709,4.10208 -1.98561,0.658 -0.58957,0.3967 -0.0964,4.1815 2e-4,8.3e-4 1.36038,3.10627 -2.08225,5.08379 l -1e-5,2e-5 z m 8.1492,52.5523 c -0.98586,1.97193 1.71292,0.39505 0,0 z m 1.53872,-1.45079 c -2.70251,1.30853 1.64365,1.70586 0.52756,0.26378 -0.12028,-0.15532 -0.35067,-0.34942 -0.52756,-0.26378 z m -4.04464,0.52756 c 0.61217,-0.44896 3.11186,-1.92693 -0.43963,-1.27494 l -0.92324,0.17586 c -1.09452,0.82078 0.92013,0.95143 1.36287,1.09908 l 0,0 z m 31.5085,-48.4228 c 0.8662,2.02564 4.16263,-2.71619 3.68194,-3.11788 -0.1323,-0.11053 -0.70549,-0.26523 -0.70549,-0.26523 -0.65986,0.49168 -2.66497,2.63304 -2.97645,3.38311 l 0,0 z m -0.97031,3.60438 c 0.11468,1.28303 0.79114,-0.15864 1.30086,-0.37576 1.21211,-0.51637 0.33512,-0.83759 -0.41889,-1.3048 -0.65966,0.59205 -0.96741,0.72602 -0.88197,1.68056 l 0,0 z m -0.33532,16.0224 c 0.007,-0.0614 -2.28983,-1.69944 -2.02232,-0.65945 0.20468,0.79611 1.83195,2.37631 2.02232,0.65945 z m 0.6441,-7.70791 c -0.22168,1.22268 0.65095,1.64116 0.63934,2.43251 -0.0124,0.84899 -0.46182,0.81726 0.17648,1.63639 0.96429,1.23782 2.0246,-1.77782 1.63162,-2.63158 -0.17254,-0.37473 -1.18909,-1.67932 -1.60964,-1.70255 -0.29219,-0.0162 -0.55846,0.17668 -0.8378,0.26523 l 0,0 z';
    var guangDong='m 454.153,413.107 c -1.31538,0.0591 -0.93713,1.78342 -4.65224,2.07852 -1.17125,0.0931 -5.7364,1.43192 -6.21772,-0.75173 -0.0218,-0.0985 2.36552,-2.27469 2.66788,-3.18424 1.32181,-3.9762 3.95298,-2.35868 3.65996,-5.1966 l 0.0222,-0.75174 c -3.875,-3.56498 -2.26909,-0.003 -8.1801,0.1769 -0.52321,0.0158 -0.97093,-0.94024 -1.32575,-2.14944 -0.51139,0.13479 -1.00805,0.21048 -1.43026,0.55721 -4.41625,3.62574 -7.24567,-3.01689 -9.61306,-0.28742 -0.68994,0.79549 -4.10664,2.44619 -2.33711,2.67555 1.48708,0.19265 1.14844,3.67178 0.22044,4.40049 -2.91507,2.28921 -2.25084,-4.30614 -9.50295,-2.78629 -1.60404,0.33615 -0.19867,6.67622 -3.1971,5.92635 -1.10697,2.47543 3.16018,5.3511 -0.52196,7.23655 -2.74585,1.406 3.28046,1.54867 -2.59384,6.15488 -1.89292,1.48439 -0.0838,1.17623 -1.53872,2.19817 -5.22522,3.67012 0.16279,9.72214 -4.29701,12.4495 -0.24346,0.1489 -0.46369,0.28286 -0.66277,0.40293 -0.26793,0.24201 -0.82867,0.69388 -1.82884,1.45453 -0.98835,0.75173 -4.08653,0.6495 -4.45379,1.85746 -1.05097,3.45756 2.15151,1.59679 -0.24242,3.86982 -3.21846,3.05608 -5.80131,-1.18079 -4.45379,2.96297 1.36826,4.20722 -5.24119,0.99913 -5.53421,3.22862 -0.50496,3.84141 -2.79023,1.53831 -2.09158,4.81234 3.23878,0.18601 0.0211,1.76144 -0.21982,2.7697 -0.31583,1.3216 -1.1754,1.91635 -0.9672,3.16537 0.45374,2.72304 -1.62499,1.00349 0.65945,5.0558 2.88023,5.10951 2.56771,2.3481 3.25329,4.0886 0.86185,2.18822 1.15134,3.39286 4.26445,2.37403 4.86957,-1.59388 0.66277,-4.44176 0.30775,-6.72641 -0.46058,-2.96484 -4.48904,-2.16624 -0.0879,-5.0558 1.35872,-0.89192 1.75978,-7.17164 2.68177,-3.20933 0.65261,2.80495 1.94911,-0.72809 3.42915,-1.01116 2.2664,-0.43341 3.82461,-1.82635 6.28677,-1.14305 1.46178,0.40562 0.83012,-0.92323 4.66012,-0.92323 3.60666,0 -0.0257,-5.39382 2.19817,-2.90159 1.11257,1.24674 3.30306,1.16565 2.46195,-0.9672 -0.72705,-1.84356 0.59351,0.22708 1.58268,0.044 2.27697,-0.42159 0.77475,0.70259 2.54988,0.83531 1.88877,0.14122 2.7697,-5.46225 2.7697,-2.68177 0,5.35338 3.7315,-1.31745 4.79201,-0.70342 5.56324,3.22053 1.79732,-4.06517 2.50592,-6.50659 0.37763,-1.30065 0.13459,7.07542 2.98951,4.22049 1.5551,-1.5551 2.57435,-1.65361 3.22592,-1.78342 0.34445,-0.0686 0.58625,-0.14578 0.75008,-0.45166 0.26875,-0.50143 0.32827,-1.6169 0.28845,-4.31547 -0.0437,-2.96276 -4.1307,-5.85958 1.75854,-3.1214 2.59923,1.20858 0.3262,2.91071 2.54988,1.71457 0.80524,-0.4332 1.01448,0.17358 2.09697,0.34404 0.51429,0.0811 1.22558,0.0637 2.29149,-0.21028 0.19556,-0.0504 0.40293,-0.10929 0.62337,-0.17772 2.36905,-0.7366 4.90856,5.21299 3.16537,0.30774 -0.92655,-2.60711 2.67596,-3.77588 3.03348,-1.62665 0.1321,0.79446 1.87156,1.77658 2.02232,1.67061 0.89109,-0.62648 1.81183,-6.67601 5.67128,-2.59384 2.84373,3.00776 2.54117,-4.90856 5.0558,-2.11024 1.70669,1.89934 4.81711,-1.22828 8.88061,-1.71457 2.79479,-0.33449 0.40355,-3.13633 2.98951,-4.0886 5.18126,-1.90785 -2.82755,-1.524 -1.89043,-2.46195 1.2231,-1.22413 4.31173,1.23284 4.70409,-1.62665 0.26088,-1.90183 1.46013,-2.14322 2.62225,-2.55029 -4.99006,-7.6768 -0.60885,-6.44127 -3.50152,-9.93532 -2.60774,-3.14981 -1.18162,-6.26023 -4.39655,-3.96936 -1.19137,0.849 -3.26843,-5.19598 -2.99864,-2.89661 0.14143,1.20651 -3.9565,-0.63664 -6.23866,-0.0979 -1.11464,0.26316 -1.79586,1.09494 -1.33881,3.12721 0.089,0.39609 1.63266,2.59156 -0.2277,2.49887 -0.59412,-0.0297 -3.55129,-2.91444 -4.05687,-3.44968 -1.30563,0 -2.36117,1.33694 -5.09312,1.4595 l 2e-5,1e-5 z';
    var taiWan='M 441.63236,360.737265 L 442.793075,360.380125 L 443.06093,357.96941 L 442.52522,355.737265 L 443.15022,352.79084 L 444.93593,349.933695 L 445.918075,346.54084 L 446.45379,343.32655 L 446.81093,334.130125 L 447.168075,331.362265 L 447.614505,330.64798 L 447.614505,328.77298 L 446.989505,328.058695 L 446.45379,326.630125 L 447.346645,325.20155 L 447.70379,324.39798 L 447.07879,323.683695 L 445.293075,323.237265 L 444.489505,323.237265 L 443.596645,322.16584 L 442.346645,322.16584 L 441.721645,323.14798 L 441.989505,324.21941 L 439.846645,325.02298 L 438.32879,326.27298 L 437.614505,327.880125 L 437.346645,329.84441 L 436.18593,331.09441 L 435.38236,334.04084 L 434.489505,336.630125 L 433.15022,339.755125 L 432.43593,342.34441 L 432.168075,345.112265 L 432.346645,347.70155 L 433.06093,348.862265 L 434.13236,350.46941 L 435.114505,353.32655 L 436.364505,355.02298 L 437.88236,355.64798 L 439.31093,356.005125 L 440.471645,357.52298 L 441.18593,359.39798 L 441.18593,360.46941 L 441.63236,360.737265 z';
    var aoMen='M 447.009,450.787 C 446.48414,450.62711 446.14508,450.47013 445.6198,450.74283 z';//C 445.38733,450.86331 445.20837,451.06716 445.00245,451.22933 C 445.77782,451.42364 447.09258,451.96406 447.00901,450.787 L 447.009,450.787 z M 445.399,451.539 L 443.92166,451.51681 C 443.37855,454.47936 445.85626,451.64124 445.399,451.539 z M 442.93,454.237 C 443.98346,453.26877 443.04945,452.47307 442.75352,452.95439 C 442.43583,453.472 442.64362,453.79592 442.93,454.237 z M 1177.8533,446.21 C 1172.8334,448.60518 1176.71,449.74076 1177.236,448.55396 C 1177.5273,447.89637 1177.8601,447.76303 1178.1179,447.11665 C 1177.9904,446.83897 1178.1627,446.52065 1177.8533,446.21001 L 1177.8533,446.21 z M 1173.4215,447.58116 C 1172.6258,447.84701 1169.9287,449.01847 1172.5395,449.01847 C 1173.9101,449.01847 1174.5687,448.34803 1173.4215,447.58116 z M 1174.4074,443.55291 C 1174.351,443.97181 1171.8019,450.0145 1177.236,445.9006 C 1179.4088,444.2557 1177.0761,445.70816 1176.839,443.88824 C 1176.8148,443.70202 1176.7455,443.5245 1176.6989,443.34264 C 1175.6329,443.61658 1174.9217,443.634 1174.4074,443.55291 L 1174.4074,443.55291 z ';
    var xiangGang='M 1145.247,435.68159 C 1141.5662,437.11476 1144.5617,438.46057 1144.9138,437.62541 C 1145.1087,437.16268 1145.1316,438.20429 1144.784,436.82426 C 1144.6987,436.62886 1145.4542,435.9002 1145.247,435.68161 L 1145.247,435.68159 z M 1141.5998,437.69783 C 1140.8826,438.07889 1139.9416,437.65792 1141.6895,437.65792 C 1142.6071,437.65792 1142.368,438.23748 1141.5998,437.69783 z M 1142.9401,433.81182 C 1142.9022,434.1066 1141.1957,438.35882 1144.8338,435.46388 C 1146.2884,434.30636 1143.8464,436.50596 1143.6877,435.22529 C 1143.6715,435.09424 1143.1051,434.25441 1143.4739,435.26189 C 1142.7603,435.45465 1143.2843,433.86889 1142.9401,433.81182 L 1142.9401,433.81182 z';
    var shangHai='M 529.184,319.371 C 533.83977,318.29991 529.22983,312.79515 527.13369,312.00754 C 525.38034,311.34871 524.80259,310.84624 524.47722,310.39956 L 523.40737,311.12288 C 520.43382,312.21098 522.84891,314.83032 519.85753,316.51856 L 519.81357,317.64626 C 522.34624,318.06765 520.37099,318.84779 521.57729,320.05658 L 522.63573,320.16711 C 522.93227,320.73263 522.99241,320.80085 523.95857,320.76415 C 524.4459,321.57954 524.48074,321.45781 525.47158,321.57498 C 526.50534,320.60613 527.57021,319.7422 529.184,319.371 L 529.184,319.371 z M 524.88471,308.7789 C 525.70861,309.28448 528.49033,310.68198 529.86751,310.61437 C 530.44401,310.58596 531.66939,310.2328 531.52132,309.50865 C 531.13394,307.62175 530.16654,309.25047 526.78073,307.43013 C 521.31164,304.48997 520.94355,307.38077 523.2311,308.15988 C 523.92498,308.39629 523.07536,307.66861 524.88471,308.77889 L 524.88471,308.7789 z M 528.786,311.165 C 525.81743,310.92465 530.15364,313.00006 531.19383,312.20996 C 532.11063,311.5136 529.28266,311.20502 528.786,311.165 z';
    var nanHaiZhuDao='M 571.2 439.6 L 577.2 446.2 L 583.8 446.8 L 597 442.6 L 607.2 437.2 L 615.6 437.2 L 619.2 443.2 L 621.6 437.2 L 625.8 437.2 L 625.8 436.6 L 575.4 436.6 L 571.2 439.6 M 582 450.4 L 587.4 449.2 L 585 455.2 L 580.2 456.4 L 582 450.4 M 581.4 464.2 L 583.2 469.6 L 584.4 469.6 L 582.6 464.2 L 581.4 464.2 M 585 477.4 L 581.4 482.2 L 582.6 482.2 L 586.2 477.4 L 585 477.4 M 576.6 491.8 L 577.8 496.6 L 579 496.6 L 577.8 491.8 L 576.6 491.8 M 591 507.4 L 595.8 505 L 597 505 L 592.2 507.4 L 591 507.4 M 603 497.2 L 607.8 490 L 609 490 L 604.2 497.2 L 603 497.2 M 612.6 480.4 L 615 475.6 L 616.2 475.6 L 613.8 480.4 L 612.6 480.4 M 615 466.6 L 615 461.2 L 616.2 461.2 L 616.2 466.6 L 615 466.6 M 615.6 455.8 L 618 451.6 L 619.2 451.6 L 616.8 455.8 L 615.6 455.8 M 621 447.4 L 624 442.6 L 625.2 442.6 L 622.2 447.4 L 621 447.4 M 571.2 439.6 L 571.2 516.4 L 625.8 516.4 L 625.8 436.6 L 625.2 436.6 L 625.2 515.8 L 571.8 515.8 L 571.8 439.6 L 571.2 439.6 Z';
    var PROVINCE_LIST = [
        {'id' : '020', 'text': '广东', 'path':guangDong, x:0, y:0, 'textX': 419,'textY': 454-27},
        {'id' : '0591', 'text': '福建', 'path':fuJiang, x:0, y:0, 'textX': 475,'textY': 422-27},
        {'id' : '0898', 'text': '海南', 'path':haiNan, x:0, y:0, 'textX': 371,'textY': 479+18},
        {'id' : '0851', 'text': '贵州', 'path':guiZhou, x:0, y:0, 'textX': 334,'textY': 390},
        {'id' : '0931', 'text': '甘肃', 'path':ganSu, x:0, y:0, 'textX': 210+10,'textY': 229-37},
        {'id' : '0771', 'text': '广西', 'path':guangXi, x:0, y:0, 'textX': 353,'textY': 431},
        {'id' : '0371', 'text': '河南', 'path':heNan, x:0, y:0, 'textX': 412,'textY': 318-27},
        {'id' : '0451', 'text': '黑龙江', 'path':heiLongJiang, x:0, y:0, 'textX': 572-25,'textY': 96},
        {'id' : '027', 'text': '湖北', 'path':huBei, x:0, y:0, 'textX': 398,'textY': 355-27},
        {'id' : '0731', 'text': '湖南', 'path':huNan, x:0, y:0, 'textX': 390,'textY': 404-27},
        {'id' : '0551', 'text': '安徽', 'path':anHui, x:0, y:0, 'textX': 465,'textY': 343-27},
        {'id' : '0431', 'text': '吉林', 'path':jiLin, x:0, y:0, 'textX': 550,'textY': 176-27},
        {'id' : '025', 'text': '江苏', 'path':jiangSu, x:0, y:0, 'textX': 490,'textY': 332-37},
        {'id' : '0791', 'text': '江西', 'path':jiangXi, x:0, y:0, 'textX': 441,'textY': 405-27},
        {'id' : '024', 'text': '辽宁', 'path':liaoNing, x:0, y:0, 'textX': 514,'textY': 210-35},
        {'id' : '0471', 'text': '内蒙古', 'path':neiMengGu, x:0, y:0, 'textX': 465,'textY': 161-27},
        {'id' : '0951', 'text': '宁夏', 'path':ningXia, x:0, y:0, 'textX': 327+2,'textY': 270-27},
        {'id' : '0971', 'text': '青海', 'path':qingHai, x:0, y:0, 'textX': 216,'textY': 297-37},
        {'id' : '0531', 'text': '山东', 'path':shanDong, x:0, y:0, 'textX': 472,'textY': 284-30},
        {'id' : '0311', 'text': '河北', 'path':heBei, x:0, y:0, 'textX': 434,'textY': 259-27},
        {'id' : '0351', 'text': '山西', 'path':shan1Xi, x:0, y:0, 'textX': 400,'textY': 265-27},
        {'id' : '029', 'text': '陕西', 'path':shan3Xi, x:0, y:0, 'textX': 368,'textY': 293-20},
        {'id' : '028', 'text': '四川', 'path':siChuang, x:0, y:0, 'textX': 292,'textY': 368-37},
        {'id' : '0891', 'text': '西藏', 'path':xiZang, x:0, y:0, 'textX': 131,'textY': 321-27},
        {'id' : '0991', 'text': '新疆', 'path':xinJiang, x:0, y:0, 'textX': 87,'textY': 174},
        {'id' : '0871', 'text': '云南', 'path':yunNan, x:0, y:0, 'textX': 276,'textY': 412},
        {'id' : '0571', 'text': '浙江', 'path':zheJiang, x:0, y:0, 'textX': 497,'textY': 381-27},
        {'id' : '023', 'text': '重庆', 'path':chongQing, x:0, y:0, 'textX': 346,'textY': 373-27},
        {'id' : '021', 'text': '上海', 'path':shangHai, x:0, y:0, 'textX': 520,'textY': 322},
        {'id' : '022', 'text': '天津', 'path':tianJin, x:0, y:0, 'textX': 460,'textY': 218},
        {'id' : '000', 'text': '北京', 'path':beiJing, x:0,y:0, 'textX': 445,'textY': 195},
        {'id' : '00853', 'text': '香港', 'path':xiangGang, x:-697, y:12, 'textX': 449,'textY': 457,tooSmall:true},
        {'id' : '00886', 'text': '台湾', 'path':taiWan, x:90, y:90, 'textX': 498+20,'textY': 452-20},
        {'id' : '00852', 'text': '澳门', 'path':aoMen, x:-10, y:0, 'textX': 420,'textY': 467,tooSmall:true},
        {'id' : '00000', 'text': '南海诸岛', 'path':nanHaiZhuDao, x:0, y:0, 'textX': 575,'textY': 506}
    ];
    return {
        data : PROVINCE_LIST,
        width : 630,
        height : 530
    };
});
/**
 * echarts图表类：地图
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/chart/map',['require','../component/base','./calculableBase','../config','../util/ecData','zrender/tool/util','../util/mapData/china','../chart'],function(require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} series 数据
     * @param {Object} component 组件
     */
    function Map(messageCenter, zr, option, component){
        // 基类装饰
        var ComponentBase = require('../component/base');
        ComponentBase.call(this, zr);
        // 可计算特性装饰
        var CalculableBase = require('./calculableBase');
        CalculableBase.call(this, zr, option);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var zrUtil = require('zrender/tool/util');

        var self = this;
        self.type = ecConfig.CHART_TYPE_MAP;

        var series;                 // 共享数据源，不要修改跟自己无关的项

        var _zlevelBase = self.getZlevelBase();
        var _mapSeries;
        var _scale;
        var _position;
        var _selectedMode;
        var _valueCalculation;
        var _selected = {};

        function _buildShape() {
            self.selectedMap = {};
            
            var legend = component.legend;
            var seriesName;
            var valueData = {};
            var mapType;
            var data;
            var name;
            _mapSeries = {};
            _selectedMode = false;
            _valueCalculation = null;
            for (var i = 0, l = series.length; i < l; i++) {
                if (series[i].type == ecConfig.CHART_TYPE_MAP) {
                    series[i] = self.reformOption(series[i]);
                    _mapSeries[i] = true;
                    
                    _selectedMode = _selectedMode || series[i].selectedMode;
                    _valueCalculation = _valueCalculation 
                                        || series[i].mapValueCalculation;
                    mapType = series[i].mapType;
                    
                    seriesName = series[i].name;
                    self.selectedMap[seriesName] = legend
                            ? legend.isSelected(seriesName)
                            : true;
                    if (self.selectedMap[seriesName]) {
                        data = series[i].data;
                        for (var j = 0, k = data.length; j < k; j++) {
                            name = data[j].name;
                            valueData[name] = valueData[name] 
                                || {
                                    value: 0,
                                    seriesIndex : []
                                };
                            for (var key in data[j]) {
                                if (key != 'value') {
                                    valueData[name][key] = data[j][key];
                                }
                                else if (!isNaN(data[j].value)) {
                                    valueData[name].value += data[j].value;
                                }
                            }
                            //索引有该区域的系列样式
                            valueData[name].seriesIndex.push(i);
                        }
                    }
                }
            }
            
            if (_valueCalculation && _valueCalculation == 'average') {
                for (var k in valueData) {
                    valueData[k].value = valueData[k].value 
                                         / valueData[k].seriesIndex.length;
                    if (valueData[k].value > 10) {
                        valueData[k].value = Math.round(valueData[k].value);
                    }
                    else {
                        valueData[k].value = valueData[k].value.toFixed(2) - 0;
                    }
                }
            }
            
            switch (mapType) {
                case 'china':
                    _buildMap(_getMapDataOfChina(), valueData);
                    break;
            }

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }
        
        /**
         * 按需加载相关地图 
         */
        function _getMapDataOfChina() {
            var province = require('../util/mapData/china');
            _getTransform(province.width, province.height);
            return province.data;
        }
        
        /**
         * 获取缩放 
         */
        function _getTransform(mapWidth, mapHeight) {
            var mapLocation;
            var x;
            var cusX;
            var y;
            var cusY;
            var width;
            var height;
            var zrWidth = zr.getWidth();
            var zrHeight = zr.getHeight();
            for (var key in _mapSeries) {
                mapLocation = series[key].mapLocation;
                cusX = mapLocation.x || cusX;
                cusY = mapLocation.y || cusY;
                width = mapLocation.width || width;
                height = mapLocation.height || height;
            }
            
            x = isNaN(cusX) ? 0 : cusX;
            y = isNaN(cusY) ? 0 : cusY;
            
            if (typeof width == 'undefined') {
                width = zrWidth;
            }
            if (x + width > zrWidth) {
                width = zrWidth - x;
            }
            
            if (typeof height == 'undefined') {
                height = zrHeight;
            }
            if (y + height > zrHeight) {
                height = zrHeight - y;
            }
            // console.log(width,height,x,y)
            var minScale = Math.min(
                width / mapWidth,
                height / mapHeight
            );
            _scale = [minScale, minScale];
            
            width = Math.round(mapWidth * minScale);
            height = Math.round(mapHeight * minScale);
            if (isNaN(cusX)) {
                switch (cusX + '') {
                    case 'center' :
                        x = Math.floor((zrWidth - width) / 2);
                        break;
                    case 'right' :
                        x = zrWidth - width;
                        break;
                    //case 'left' :
                    default:
                        x = 0;
                        break;
                }
            }
            if (isNaN(cusY)) {
                switch (cusY + '') {
                    case 'center' :
                        y = Math.floor((zrHeight - height) / 2);
                        break;
                    case 'bottom' :
                        y = zrHeight - height;
                        break;
                    //case 'top' :
                    default:
                        y = 0;
                        break;
                }
            }
            
            _position = [x, y];
        }
        
        /**
         * 构建地图
         * @param {Object} mapData 图形数据
         * @param {Object} valueData 用户数据
         */
        function _buildMap(mapData, valueData) {
            var legend = component.legend;
            var dataRange = component.dataRange;
            var seriesName;
            var name;
            var data;
            var value;
            var queryTarget;
            var defaultOption = ecConfig.map;
            
            var color;
            var font;
            var style;
            var highlightStyle;
            
            var shape;
            for (var i = 0, l = mapData.length; i < l; i++) {
                style = zrUtil.clone(mapData[i]);
                highlightStyle = zrUtil.clone(style);
                name = style.text;
                data = valueData[name]; // 多系列合并后的数据
                if (data) {
                    queryTarget = [data]; // level 3
                    seriesName = '';
                    for (var j = 0, k = data.seriesIndex.length; j < k; j++) {
                        queryTarget.push(series[data.seriesIndex[j]]);// level 2
                        seriesName += series[data.seriesIndex[j]].name + ' ';
                        if (legend 
                            && legend.hasColor(series[data.seriesIndex[j]].name)
                        ) {
                            self.shapeList.push({
                                shape : 'circle',
                                zlevel : _zlevelBase + 1,
                                scale: _scale,
                                position : _position,
                                style : {
                                    x : style.textX + 3 + j * 7,
                                    y : style.textY - 10,
                                    r : 3,
                                    color : legend.getColor(
                                        series[data.seriesIndex[j]].name
                                    )
                                },
                                hoverable : false
                            });
                        }
                    }
                    queryTarget.push(defaultOption); // level 1
                    value = data.value;
                }
                else {
                    seriesName = '';
                    queryTarget = [];
                    for (var key in _mapSeries) {
                        queryTarget.push(series[key]);
                    }
                    queryTarget.push(defaultOption);
                    value = '-';
                }
                
                style.brushType = 'both';
                color = dataRange && !isNaN(value)
                        ? dataRange.getColor(value)
                        : null;
                style.color = color
                    ? color
                    : self.deepQuery(
                        queryTarget,
                        'itemStyle.normal.areaStyle.color'
                    );
                style.strokeColor = self.deepQuery(
                    queryTarget,
                    'itemStyle.normal.lineStyle.color'
                );
                style.lineWidth = self.deepQuery(
                    queryTarget,
                    'itemStyle.normal.lineStyle.width'
                );
                if (self.deepQuery(
                    queryTarget,
                    'itemStyle.normal.label.show'
                )) {
                    style.text = name;
                    style.textColor = self.deepQuery(
                        queryTarget,
                        'itemStyle.normal.label.textStyle.color'
                    );
                    font = self.deepQuery(
                        queryTarget,
                        'itemStyle.normal.label.textStyle'
                    );
                    style.textFont = self.getFont(font);
                    style.textPosition = 'specific';
                }
                else {
                    style.text = null;
                }
                
                highlightStyle.brushType = 'both';
                highlightStyle.color = self.deepQuery(
                    queryTarget,
                    'itemStyle.emphasis.areaStyle.color'
                ) || style.color;
                highlightStyle.strokeColor = self.deepQuery(
                    queryTarget,
                    'itemStyle.emphasis.lineStyle.color'
                ) || style.strokeColor;
                highlightStyle.lineWidth = self.deepQuery(
                    queryTarget,
                    'itemStyle.emphasis.lineStyle.width'
                ) || style.lineWidth;
                
                if (self.deepQuery(
                    queryTarget,
                    'itemStyle.emphasis.label.show'
                )) {
                    highlightStyle.text = name;
                    highlightStyle.textColor = self.deepQuery(
                        queryTarget,
                        'itemStyle.emphasis.label.textStyle.color'
                    ) || style.textColor;
                    font = self.deepQuery(
                        queryTarget,
                        'itemStyle.emphasis.label.textStyle'
                    ) || font;
                    highlightStyle.textFont = self.getFont(font);
                    highlightStyle.textPosition = 'specific';
                }
                else {
                    highlightStyle.text = null;
                }
                
                if ((style.text || highlightStyle.text) && style.tooSmall) {
                    var textShape = {
                        shape : 'text',
                        zlevel : _zlevelBase,
                        scale: _scale,
                        position : _position,
                        clickable : true,
                        style : {
                            x : style.textX,
                            y : style.textY,
                            text : style.text || highlightStyle.text,
                            color : style.text
                                    ? style.textColor
                                    : 'rgba(0,0,0,0)',
                            textFont : style.textFont,
                            textPosition : style.textPosition
                        },
                        highlightStyle : {
                            brushType: 'both',
                            x : style.textX,
                            y : style.textY,
                            text : highlightStyle.text || style.text,
                            color : highlightStyle.textColor,
                            strokeColor: highlightStyle.color,
                            textFont : highlightStyle.textFont,
                            textPosition : highlightStyle.textPosition
                        }
                    };
                    textShape._style = textShape.style;
                    if (_selectedMode &&
                        _selected[name]
                        || (data && data.selected && _selected[name] !== false)
                    ) {
                        textShape.style = zrUtil.clone(
                            textShape.highlightStyle
                        );
                    }
                    if (_selectedMode) {
                        textShape.onclick = self.shapeHandler.onclick;
                    }
                
                    ecData.pack(
                        textShape,
                        {
                            name: seriesName,
                            tooltip: self.deepQuery(queryTarget, 'tooltip')
                        },
                        0,
                        data, 0,
                        name
                    );
                    self.shapeList.push(textShape);
                    style.text = null;
                    highlightStyle.text = null;
                }
                
                shape = {
                    shape : 'path',
                    zlevel : _zlevelBase,
                    clickable : true,
                    scale: _scale,
                    position : _position,
                    style : style,
                    highlightStyle : highlightStyle,
                    _style: style
                };
                if (_selectedMode &&
                     _selected[name]
                     || (data && data.selected && _selected[name] !== false) 
                ) {
                    shape.style = zrUtil.clone(shape.highlightStyle);
                }
                
                if (_selectedMode) {
                    _selected[name] = typeof _selected[name] != 'undefined'
                                      ? _selected[name]
                                      : (data && data.selected);
                    shape.onclick = self.shapeHandler.onclick;
                }
                // console.log(name,shape);
                
                ecData.pack(
                    shape,
                    {
                        name: seriesName,
                        tooltip: self.deepQuery(queryTarget, 'tooltip')
                    },
                    0,
                    data, 0,
                    name
                );
                self.shapeList.push(shape);
            }
            //console.log(_selected);
        }
        
        /**
         * 点击响应 
         */
        function onclick(param) {
            if (!self.isClick || !param.target) {
                // 没有在当前实例上发生点击直接返回
                return;
            }

            var target = param.target;
            var name = target.style.text;
            var len = self.shapeList.length;
            if (_selectedMode == 'single') {
                for (var p in _selected) {
                    if (_selected[p]) {
                        //找到那个shape
                        for (var i = 0; i < len; i++) {
                            if (self.shapeList[i].style.text == p) {
                                self.shapeList[i].style = 
                                    self.shapeList[i]._style;
                                zr.modShape(
                                    self.shapeList[i].id, self.shapeList[i]
                                );
                            }
                        }
                        p != name && (_selected[p] = false);
                    }
                }
            }

            _selected[name] = !_selected[name];
            
            if (_selected[name]) {
                target.style = zrUtil.clone(target.highlightStyle);
            }
            else {
                target.style = target._style;
            }
            zr.modShape(target.id, target);
            
            messageCenter.dispatch(
                ecConfig.EVENT.MAP_SELECTED,
                param.event,
                {selected : _selected}
            );
            
            zr.refresh();
        }

        
        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newSeries
         * @param {Object} newComponent
         */
        function init(newOption, newComponent) {
            option = newOption;
            component = newComponent;

            series = option.series;
            
            _selected = {};

            self.clear();
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            self.clear();
            _buildShape();
        }
        
        /**
         * 值域响应
         * @param {Object} param
         * @param {Object} status
         */
        function ondataRange(param, status) {
            if (component.dataRange) {
                refresh();
                status.needRefresh = true;
            }
            return;
        }

        self.init = init;
        self.refresh = refresh;
        self.ondataRange = ondataRange;
        self.onclick = onclick;
        
        init(option, component);
    }

    // 图表注册
    require('../chart').define('map', Map);
    
    return Map;
});
/**
 * zrender: config默认配置项
 *
 * @desc zrender是一个轻量级的Canvas类库，MVC封装，数据驱动，提供类Dom事件模型。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define(
    'zrender/config',{
        loadingEffect : 'spin',         // 默认loading特效
        EVENT : {                       // 支持事件列表
            RESIZE : 'resize',          // 窗口大小变化
            CLICK : 'click',            // 鼠标按钮被（手指）按下，事件对象是：目标图形元素或空

            MOUSEWHEEL : 'mousewheel',  // 鼠标滚轮变化，事件对象是：目标图形元素或空
            MOUSEMOVE : 'mousemove',    // 鼠标（手指）被移动，事件对象是：目标图形元素或空
            MOUSEOVER : 'mouseover',    // 鼠标移到某图形元素之上，事件对象是：目标图形元素
            MOUSEOUT : 'mouseout',      // 鼠标从某图形元素移开，事件对象是：目标图形元素
            MOUSEDOWN : 'mousedown',    // 鼠标按钮（手指）被按下，事件对象是：目标图形元素或空
            MOUSEUP : 'mouseup',        // 鼠标按键（手指）被松开，事件对象是：目标图形元素或空

            // 一次成功元素拖拽的行为事件过程是：
            // dragstart > dragenter > dragover [> dragleave] > drop > dragend
            DRAGSTART : 'dragstart',    // 开始拖拽时触发，事件对象是：被拖拽图形元素
            DRAGEND : 'dragend',        // 拖拽完毕时触发（在drop之后触发），事件对象是：被拖拽图形元素
            DRAGENTER : 'dragenter',    // 拖拽图形元素进入目标图形元素时触发，事件对象是：目标图形元素
            DRAGOVER : 'dragover',      // 拖拽图形元素在目标图形元素上移动时触发，事件对象是：目标图形元素
            DRAGLEAVE : 'dragleave',    // 拖拽图形元素离开目标图形元素时触发，事件对象是：目标图形元素
            DROP : 'drop',              // 拖拽图形元素放在目标图形元素内时触发，事件对象是：目标图形元素

            touchClickDelay : 300       // touch end - start < delay is click
        }
    }
);
/**
 * zrender: 事件辅助类
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * getX：获取事件横坐标
 * getY：或者事件纵坐标
 * getDelta：或者鼠标滚轮变化
 * stop：停止事件传播
 * Dispatcher：事件分发器
 */
define(
    'zrender/tool/event',[],function() {
        /**
        * 提取鼠标（手指）x坐标
        * @param  {event} e 事件.
        * @return {number} 鼠标（手指）x坐标.
        */
        function getX(e) {
            return typeof e.zrenderX != 'undefined' && e.zrenderX
                   || typeof e.offsetX != 'undefined' && e.offsetX
                   || typeof e.layerX != 'undefined' && e.layerX
                   || typeof e.clientX != 'undefined' && e.clientX;
        }

        /**
        * 提取鼠标y坐标
        * @param  {event} e 事件.
        * @return {number} 鼠标（手指）y坐标.
        */
        function getY(e) {
            return typeof e.zrenderY != 'undefined' && e.zrenderY
                   || typeof e.offsetY != 'undefined' && e.offsetY
                   || typeof e.layerY != 'undefined' && e.layerY
                   || typeof e.clientY != 'undefined' && e.clientY;
        }

        /**
        * 提取鼠标滚轮变化
        * @param  {event} e 事件.
        * @return {number} 滚轮变化，正值说明滚轮是向上滚动，如果是负值说明滚轮是向下滚动
        */
        function getDelta(e) {
            return typeof e.wheelDelta != 'undefined' && e.wheelDelta
                   || typeof e.detail != 'undefined' && -e.detail;
        }

        /**
         * 停止冒泡和阻止默认行为
         * @param {Object} e : event对象
         */
        function stop(e) {
            if (e.preventDefault) {
                e.preventDefault();
                e.stopPropagation();
            }
            else {
                e.returnValue = false;
            }
        }

        /**
         * 事件分发器
         */
        function Dispatcher() {
            var _self = this;
            var _h = {};

            /**
             * 单次触发绑定，dispatch后销毁
             * @param {string} event 事件字符串
             * @param {function} handler 响应函数
             */
            function one(event, handler) {
                if(!handler || !event) {
                    return _self;
                }

                if(!_h[event]) {
                    _h[event] = [];
                }

                _h[event].push({
                    h : handler,
                    one : true
                });

                return _self;
            }

            /**
             * 事件绑定
             * @param {string} event 事件字符串
             * @param {function} handler : 响应函数
             */
            function bind(event, handler) {
                if(!handler || !event) {
                    return _self;
                }

                if(!_h[event]) {
                    _h[event] = [];
                }

                _h[event].push({
                    h : handler,
                    one : false
                });

                return _self;
            }

            /**
             * 事件解绑定
             * @param {string} event 事件字符串
             * @param {function} handler : 响应函数
             */
            function unbind(event, handler) {
                if(!event) {
                    _h = {};
                    return _self;
                }

                if(handler) {
                    if(_h[event]) {
                        var newList = [];
                        for (var i = 0, l = _h[event].length; i < l; i++) {
                            if (_h[event][i]['h'] != handler) {
                                newList.push(_h[event][i]);
                            }
                        }
                        _h[event] = newList;
                    }

                    if(_h[event] && _h[event].length === 0) {
                        delete _h[event];
                    }
                }
                else {
                    delete _h[event];
                }

                return _self;
            }

            /**
             * 事件分发
             * @param {string} type : 事件类型
             * @param {Object} event : event对象
             * @param {Object} [attachment] : 附加信息
             */
            function dispatch(type, event, attachment) {
                if(_h[type]) {
                    var newList = [];
                    var eventPacket = attachment || {};
                    eventPacket.type = type;
                    eventPacket.event = event;
                    //eventPacket._target = self;
                    for (var i = 0, l = _h[type].length; i < l; i++) {
                        _h[type][i]['h'](eventPacket);
                        if (!_h[type][i]['one']) {
                            newList.push(_h[type][i]);
                        }
                    }

                    if (newList.length != _h[type].length) {
                        _h[type] = newList;
                    }
                }

                return _self;
            }

            _self.one = one;
            _self.bind = bind;
            _self.unbind = unbind;
            _self.dispatch = dispatch;
        }

        return {
            getX : getX,
            getY : getY,
            getDelta : getDelta,
            stop : stop,
            Dispatcher : Dispatcher
        };
    }
);
/**
 * echarts图表类：力导向图
 *
 * @author pissang (shenyi01@baidu.com)
 *
 */

define('echarts/chart/force',['require','../component/base','./calculableBase','../config','../util/ecData','zrender/config','zrender/tool/event','zrender/tool/util','zrender/tool/vector','../chart'],function(require) {
    
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} series 数据
     * @param {Object} component 组件
     */
    function Force(messageCenter, zr, option, component) {
        // 基类装饰
        var ComponentBase = require('../component/base');
        ComponentBase.call(this, zr);
        // 可计算特性装饰
        var CalculableBase = require('./calculableBase');
        CalculableBase.call(this, zr, option);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var zrConfig = require('zrender/config');
        var zrEvent = require('zrender/tool/event');
        // var zrColor = require('zrender/tool/color');
        var zrUtil = require('zrender/tool/util');
        var vec2 = require('zrender/tool/vector');

        var self = this;
        self.type = ecConfig.CHART_TYPE_FORCE;

        var series;

        var forceSerie;
        // var forceSerieIndex;

        var nodeShapes = [];
        var linkShapes = [];

        // 节点分类
        var categories = [];
        // 默认节点样式
        var nodeStyle;
        var nodeEmphasisStyle;
        // 默认边样式
        var linkStyle;
        var linkEmphasisStyle;
        // nodes和links的原始数据
        var nodesRawData = [];
        var linksRawData = [];

        // nodes和links的权重, 用来计算引力和斥力
        var nodeWeights = [];
        var linkWeights = [];

        // 节点的受力
        var nodeForces = [];
        // 节点的加速度
        var nodeAccelerations = [];
        // 节点的位置
        var nodePositions = [];
        var nodePrePositions = [];
        // 节点的质量
        var nodeMasses = [];

        var temperature;
        var k;
        
        //- ----------外部参数
        var density;
        var coolDown;
        var centripetal;
        var initializeSize;
        var attractiveness;
        //- ----------

        var stepTime = 1/60;
        
        var viewportWidth;
        var viewportHeight;
        var centroid = [];

        var mouseX, mouseY;

        function _buildShape() {
            var legend = component.legend;
            temperature = 1.0;
            viewportWidth = zr.getWidth();
            viewportHeight = zr.getHeight();
            centroid = [viewportWidth/2, viewportHeight/2];

            for (var i = 0, l = series.length; i < l; i++) {
                var serie = series[i];
                if (serie.type === ecConfig.CHART_TYPE_FORCE) {
                    series[i] = self.reformOption(series[i]);
                    forceSerie = serie;

                    var minRadius = self.deepQuery([serie], 'minRadius');
                    var maxRadius = self.deepQuery([serie], 'maxRadius');

                    // ----------获取外部参数
                    attractiveness = self.deepQuery(
                        [serie], 'attractiveness'
                    );
                    density = self.deepQuery([serie], 'density');
                    initSize = self.deepQuery([serie], 'initSize');
                    centripetal = self.deepQuery([serie], 'centripetal');
                    coolDown = self.deepQuery([serie], 'coolDown');
                    // ----------

                    categories = self.deepQuery([serie], 'categories');
                    
                    // 同步selected状态
                    for (var j = 0, len = categories.length; j < len; j++) {
                        if (categories[j].name) {
                            if (legend){
                                self.selectedMap[j] = 
                                    legend.isSelected(categories[j].name);
                            } else {
                                self.selectedMap[j] = true;
                            }
                        }
                    }

                    linkStyle = self.deepQuery(
                        [serie], 'itemStyle.normal.linkStyle'
                    );
                    linkEmphasisStyle = self.deepQuery(
                        [serie], 'itemStyle.emphasis.linkStyle'
                    );
                    nodeStyle = self.deepQuery(
                        [serie], 'itemStyle.normal.nodeStyle'
                    );
                    nodeEmphasisStyle = self.deepQuery(
                        [serie], 'itemStyle.emphasis.nodeStyle'
                    );
                    
                    _filterData(
                        zrUtil.clone(self.deepQuery([serie], 'nodes')),
                        zrUtil.clone(self.deepQuery([serie], 'links'))
                    );
                    // Reset data
                    nodePositions = [];
                    nodePrePositions = [];
                    nodeMasses = [];
                    nodeWeights = [];
                    linkWeights = [];
                    nodeMasses = [];
                    nodeShapes = [];
                    linkShapes = [];

                    var area = viewportWidth * viewportHeight;

                    // Formula in 'Graph Drawing by Force-directed Placement'
                    k = 0.5 / attractiveness 
                        * Math.sqrt( area / nodesRawData.length );
                    
                    // 这两方法里需要加上读取self.selectedMap判断当前系列是否显示的逻辑
                    _buildLinkShapes(nodesRawData, linksRawData);
                    _buildNodeShapes(nodesRawData, minRadius, maxRadius);
                }
            }
        }

        function _filterData(nodes, links) {
            var filteredNodeMap = [];
            var cursor = 0;
            nodesRawData = _filter(nodes, function(node, idx) {
                if(!node){
                    return;
                }
                if (self.selectedMap[node.category]) {
                    filteredNodeMap[idx] = cursor++;
                    return true;
                }else{
                    filteredNodeMap[idx] = -1;
                }
            });
            var source;
            var target;
            var ret;
            linksRawData = _filter(links, function(link/*, idx*/){
                source = link.source;
                target = link.target;
                ret = true;
                if (filteredNodeMap[source] >= 0) {
                    link.source = filteredNodeMap[source];
                } else {
                    ret = false;
                }
                if (filteredNodeMap[target] >= 0) {
                    link.target = filteredNodeMap[target];
                } else {
                    ret = false;
                }

                return ret;
            });
        }

        function _buildNodeShapes(nodes, minRadius, maxRadius) {
            // 将值映射到minRadius-maxRadius的范围上
            var radius = [];
            var l = nodes.length;
            for (var i = 0; i < l; i++) {
                var node = nodes[i];
                radius.push(node.value);
            }
            _map(radius, radius, minRadius, maxRadius);
            _normalize(nodeWeights, radius);

            for (var i = 0; i < l; i++) {
                var node = nodes[i];
                var x, y;
                var r = radius[i];

                var random = _randomInSquare(
                    viewportWidth/2, viewportHeight/2, initSize
                );
                x = typeof(node.initial) === 'undefined' 
                    ? random.x
                    : node.initial.x;
                y = typeof(node.initial) === 'undefined'
                    ? random.y
                    : node.initial.y;
                // 初始化位置
                nodePositions[i] = [x, y];
                nodePrePositions[i] = [x, y];
                // 初始化受力
                nodeForces[i] = [0, 0];
                // 初始化加速度
                nodeAccelerations[i] = [0, 0];
                // 初始化质量
                nodeMasses[i] = r * r * density * 0.035;

                var shape = {
                    id : zr.newShapeId(self.type),
                    shape : 'circle',
                    style : {
                        r : r,
                        x : 0,
                        y : 0
                    },
                    highlightStyle : {},
                    position : [x, y],

                    __forceIndex : i
                };

                // Label 
                var labelStyle;
                if (self.deepQuery([forceSerie], 'itemStyle.normal.label.show')
                ) {
                    shape.style.text = node.name;
                    shape.style.textPosition = 'inside';
                    labelStyle = self.deepQuery(
                        [forceSerie], 'itemStyle.normal.label.textStyle'
                    ) || {};
                    shape.style.textColor = labelStyle.color || '#fff';
                    shape.style.textAlign = labelStyle.align || 'center';
                    shape.style.textBaseLine = labelStyle.baseline || 'middle';
                    shape.style.textFont = self.getFont(labelStyle);
                }

                if (self.deepQuery(
                        [forceSerie], 'itemStyle.emphasis.label.show'
                    )
                ) {
                    shape.highlightStyle.text = node.name;
                    shape.highlightStyle.textPosition = 'inside';
                    labelStyle = self.deepQuery(
                        [forceSerie], 'itemStyle.emphasis.label.textStyle'
                    ) || {};
                    shape.highlightStyle.textColor = labelStyle.color || '#fff';
                    shape.highlightStyle.textAlign = labelStyle.align 
                                                     || 'center';
                    shape.highlightStyle.textBaseLine = labelStyle.baseline 
                                                        || 'middle';
                    shape.highlightStyle.textFont = self.getFont(labelStyle);
                }

                // 优先级 node.style > category.style > defaultStyle
                zrUtil.merge(shape.style, nodeStyle);
                zrUtil.merge(shape.highlightStyle, nodeEmphasisStyle);

                if (typeof(node.category) !== 'undefined') {
                    var category = categories[node.category];
                    if (category) {
                        var style = category.itemStyle;
                        if (style) {
                            if (style.normal) {
                                zrUtil.merge(shape.style, style.normal, {
                                    overwrite : true
                                });
                            }
                            if (style.emphasis) {
                                zrUtil.merge(
                                    shape.highlightStyle, 
                                    style.emphasis, 
                                    { overwrite : true }
                                );
                            }
                        }
                    }
                }
                if (typeof(node.itemStyle) !== 'undefined') {
                    var style = node.itemStyle;
                    if( style.normal ){ 
                        zrUtil.merge(shape.style, style.normal, {
                            overwrite : true
                        });
                    }
                    if( style.normal ){ 
                        zrUtil.merge(shape.highlightStyle, style.emphasis, {
                            overwrite : true
                        });
                    }
                }
                
                // 拖拽特性
                self.setCalculable(shape);
                shape.ondragstart = self.shapeHandler.ondragstart;
                shape.draggable = true;
                
                nodeShapes.push(shape);
                self.shapeList.push(shape);

                zr.addShape(shape);


                var categoryName = '';
                if (typeof(node.category) !== 'undefined') {
                    var category = categories[node.category];
                    categoryName = (category && category.name) || '';
                }
                ecData.pack(
                    shape,
                    {
                        name : categoryName
                    },
                    0,
                    node, 0,
                    node.name || ''
                );
            }

            // _normalize(nodeMasses, nodeMasses);
        }

        function _buildLinkShapes(nodes, links) {
            var l = links.length;

            for (var i = 0; i < l; i++) {
                var link = links[i];
                //var source = nodes[link.source];
                // var target = nodes[link.target];
                var weight = link.weight || 1;
                linkWeights.push(weight);

                var shape = {
                    id : zr.newShapeId(self.type),
                    shape : 'line',
                    style : {
                        xStart : 0,
                        yStart : 0,
                        xEnd : 0,
                        yEnd : 0
                    },
                    highlightStyle : {}
                };

                zrUtil.merge(shape.style, linkStyle);
                zrUtil.merge(shape.highlightStyle, linkEmphasisStyle);
                if (typeof(link.itemStyle) !== 'undefined') {
                    if(link.itemStyle.normal){
                        zrUtil.merge(shape.style, link.itemStyle.normal, {
                            overwrite : true
                        });
                    }
                    if(link.itemStyle.emphasis){
                        zrUtil.merge(
                            shape.highlightStyle, 
                            link.itemStyle.emphasis, 
                            { overwrite : true }
                        );
                    }
                }

                linkShapes.push(shape);
                self.shapeList.push(shape);

                zr.addShape(shape);
            }
            _normalize(linkWeights, linkWeights);
        }

        function _updateLinkShapes(){
            for (var i = 0, l = linksRawData.length; i < l; i++) {
                var link = linksRawData[i];
                var linkShape = linkShapes[i];
                var sourceShape = nodeShapes[link.source];
                var targetShape = nodeShapes[link.target];

                linkShape.style.xStart = sourceShape.position[0];
                linkShape.style.yStart = sourceShape.position[1];
                linkShape.style.xEnd = targetShape.position[0];
                linkShape.style.yEnd = targetShape.position[1];
            }
        }

        function _update(stepTime) {
            var len = nodePositions.length;
            var v12 = [];
            // 计算节点之间斥力
            var k2 = k*k;
            // Reset force
            for (var i = 0; i < len; i++) {
                nodeForces[i][0] = 0;
                nodeForces[i][1] = 0;
            }
            for (var i = 0; i < len; i++) {
                for (var j = i+1; j < len; j++){
                    var w1 = nodeWeights[i];
                    var w2 = nodeWeights[j];
                    var p1 = nodePositions[i];
                    var p2 = nodePositions[j];

                    // 节点1到2的向量
                    vec2.sub(v12, p2, p1);
                    var d = vec2.length(v12);
                    // 距离大于500忽略斥力
                    if(d > 500){
                        continue;
                    }
                    if(d < 5){
                        d = 5;
                    }

                    vec2.scale(v12, v12, 1/d);
                    var forceFactor = 1 * (w1 + w2) * k2 / d;

                    vec2.scale(v12, v12, forceFactor);
                    //节点1受到的力
                    vec2.sub(nodeForces[i], nodeForces[i], v12);
                    //节点2受到的力
                    vec2.add(nodeForces[j], nodeForces[j], v12);
                }
            }
            // 计算节点之间引力
            for (var i = 0, l = linksRawData.length; i < l; i++) {
                var link = linksRawData[i];
                var w = linkWeights[i];
                var s = link.source;
                var t = link.target;
                var p1 = nodePositions[s];
                var p2 = nodePositions[t];

                vec2.sub(v12, p2, p1);
                var d2 = vec2.lengthSquare(v12);
                vec2.normalize(v12, v12);

                var forceFactor = w * d2 / k;
                // 节点1受到的力
                vec2.scale(v12, v12, forceFactor);
                vec2.add(nodeForces[s], nodeForces[s], v12);
                // 节点2受到的力
                vec2.sub(nodeForces[t], nodeForces[t], v12);
            }
            // 到质心的向心力
            for (var i = 0, l = nodesRawData.length; i < l; i++){
                var p = nodePositions[i];
                vec2.sub(v12, centroid, p);
                var d2 = vec2.lengthSquare(v12);
                vec2.normalize(v12, v12);
                // 100是可调参数
                var forceFactor = d2 / 100 * centripetal;
                vec2.scale(v12, v12, forceFactor);
                vec2.add(nodeForces[i], nodeForces[i], v12);

            }
            // 计算加速度
            for (var i = 0, l = nodeAccelerations.length; i < l; i++) {
                vec2.scale(
                    nodeAccelerations[i], nodeForces[i], 1 / nodeMasses[i]
                );
            }
            var velocity = [];
            var tmp = [];
            // 计算位置(verlet积分)
            for (var i = 0, l = nodePositions.length; i < l; i++) {
                if (nodesRawData[i].fixed) {
                    // 拖拽同步
                    nodePositions[i][0] = mouseX;
                    nodePositions[i][1] = mouseY;
                    nodePrePositions[i][0] = mouseX;
                    nodePrePositions[i][1] = mouseY;
                    nodeShapes[i].position[0] = mouseX;
                    nodeShapes[i].position[1] = mouseY;
                    continue;
                }
                var p = nodePositions[i];
                var __P = nodePrePositions[i];
                vec2.sub(velocity, p, __P);
                __P[0] = p[0];
                __P[1] = p[1];
                vec2.add(
                    velocity, 
                    velocity, 
                    vec2.scale(tmp, nodeAccelerations[i], stepTime)
                );
                // Damping
                vec2.scale(velocity, velocity, temperature);
                // 防止速度太大
                velocity[0] = Math.max(Math.min(velocity[0], 100), -100);
                velocity[1] = Math.max(Math.min(velocity[1], 100), -100);

                vec2.add(p, p, velocity);
                nodeShapes[i].position[0] = p[0];
                nodeShapes[i].position[1] = p[1];

                if(isNaN(p[0]) || isNaN(p[1])){
                    throw new Error('NaN');
                }
            }
        }

        function _step(){
            if (temperature < 0.01) {
                return;
            }

            _update(stepTime);
            _updateLinkShapes();

            for (var i = 0; i < nodeShapes.length; i++) {
                var shape = nodeShapes[i];
                zr.modShape(shape.id, shape);
            }
            for (var i = 0; i < linkShapes.length; i++) {
                var shape = linkShapes[i];
                zr.modShape(shape.id, shape);
            }

            zr.refresh();

            // Cool Down
            temperature *= coolDown;
        }

        var _updating;

        function init(newOption, newComponent) {
            option = newOption;
            component = newComponent;

            series = option.series;

            self.clear();
            _buildShape();

            _updating = true;
            function cb() {
                if (_updating) {
                    _step();
                    setTimeout(cb, stepTime * 1000);
                }
            }
            setTimeout(cb, stepTime * 1000);
        }

        function refresh() {
            self.clear();
            _buildShape();
            temperature = 1.0;
        }

        function dispose(){
            _updating = false;
        }
        
        /**
         * 输出动态视觉引导线
         */
        self.shapeHandler.ondragstart = function() {
            self.isDragstart = true;
        };
        
        /**
         * 拖拽开始
         */
        function ondragstart(param) {
            if (!self.isDragstart || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }
            var shape = param.target;
            var idx = shape.__forceIndex;
            var node = nodesRawData[idx];
            node.fixed = true;

            // 处理完拖拽事件后复位
            self.isDragstart = false;
            
            zr.on(zrConfig.EVENT.MOUSEMOVE, _onmousemove);
        }
        
        /**
         * 数据项被拖拽出去，重载基类方法
         */
        function ondragend(param, status) {
            if (!self.isDragend || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }
            var shape = param.target;
            var idx = shape.__forceIndex;
            var node = nodesRawData[idx];
            node.fixed = false;

            // 别status = {}赋值啊！！
            status.dragIn = true;
            //你自己refresh的话把他设为false，设true就会重新调refresh接口
            status.needRefresh = false;

            // 处理完拖拽事件后复位
            self.isDragend = false;
            
            zr.un(zrConfig.EVENT.MOUSEMOVE, _onmousemove);
        }

        // 拖拽中位移信息
        function _onmousemove(param) {
            temperature = 0.8;
            mouseX = zrEvent.getX(param.event);
            mouseY = zrEvent.getY(param.event);
        }
        
        self.init = init;
        self.refresh = refresh;
        self.ondragstart = ondragstart;
        self.ondragend = ondragend;
        self.dispose = dispose;

        init(option, component);
    }


    function _map(output, input, mappedMin, mappedMax) {
        var min = input[0];
        var max = input[0];
        var l = input.length;
        for (var i = 1; i < l; i++) {
            var val = input[i];
            if (val < min) {
                min = val;
            }
            if (val > max) {
                max = val;
            }
        }
        var range = max - min;
        var mappedRange = mappedMax - mappedMin;
        for (var i = 0; i < l; i++) {
            if (range === 0) {
                output[i] = mappedMin;
            } else {
                var val = input[i];
                var percent = (val - min) / range;
                output[i] = mappedRange * percent + mappedMin;
            }
        }
    }

    function _normalize(output, input) {
        var l = input.length;
        var max = input[0];
        for (var i = 1; i < l; i++) {
            if (input[i] > max) {
                max = input[i];
            }
        }
        for (var i = 0; i < l; i++) {
            output[i] = input[i] / max;
        }
    }
    
    /*
    function _randomInCircle(x, y, radius) {
        var theta = Math.random() * Math.PI * 2;
        var r = radius * Math.random();
        return {
            x : Math.cos(theta) * r + x,
            y : Math.sin(theta) * r + y
        };
    }
    */
   
    function _randomInSquare(x, y, size) {
        return {
            x : (Math.random() - 0.5) * size + x,
            y : (Math.random() - 0.5) * size + y
        };
    }

    function _filter(array, callback){
        var len = array.length;
        var result = [];
        for(var i = 0; i < len; i++){
            if(callback(array[i], i)){
                result.push(array[i]);
            }
        }
        return result;
    }

    // 图表注册
    require('../chart').define('force', Force);

    return Force;
});
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：圆
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'circle',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，圆心横坐标
           y             : {number},  // 必须，圆心纵坐标
           r             : {number},  // 必须，圆半径
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'circle',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           r : 50,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/circle',['require','./base','../shape'],function(require) {
        function Circle() {
            this.type = 'circle';
        }

        Circle.prototype =  {
            /**
             * 创建圆形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                ctx.arc(style.x, style.y, style.r, 0, Math.PI * 2, true);
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - style.r - lineWidth / 2),
                    y : Math.round(style.y - style.r - lineWidth / 2),
                    width : style.r * 2 + lineWidth,
                    height : style.r * 2 + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Circle);
        
        var shape = require('../shape');
        shape.define('circle', new Circle());

        return Circle;
    }
);
/**
 * zrender
 *
 * author: loutongbing@baidu.com
 *
 * shape类：椭圆
 * Todo：excanvas bug ~ 连续scale保持?? IE8下不建议使用
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'ellipse',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，椭圆心横坐标
           y             : {number},  // 必须，椭圆心纵坐标
           a             : {number},  // 必须，椭圆横轴半径
           b             : {number},  // 必须，椭圆纵轴半径
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'ellipse',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           a : 100,
           b : 50,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/ellipse',['require','./base','../shape'],function(require) {
        function Ellipse() {
            this.type = 'ellipse';
        }

        Ellipse.prototype =  {
            /**
             * 创建圆形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                var r = (style.a > style.b) ? style.a : style.b;
                var ratioX = style.a / r; //横轴缩放比率
                var ratioY = style.b / r;
                ctx.scale(ratioX, ratioY);
                ctx.arc(
                    style.x / ratioX, style.y / ratioY, r, 0, Math.PI * 2, true
                );
                ctx.scale(1/ratioX, 1/ratioY);
                // excanvas bug~~
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - style.a - lineWidth / 2),
                    y : Math.round(style.y - style.b - lineWidth / 2),
                    width : style.a * 2 + lineWidth,
                    height : style.b * 2 + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Ellipse);
        
        var shape = require('../shape');
        shape.define('ellipse', new Ellipse());

        return Ellipse;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：直线
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'line',         // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           xStart        : {number},  // 必须，起点横坐标
           yStart        : {number},  // 必须，起点纵坐标
           xEnd          : {number},  // 必须，终点横坐标
           yEnd          : {number},  // 必须，终点纵坐标
           strokeColor   : {color},   // 默认为'#000'，线条颜色（轮廓），支持rgba
           lineType      : {string},  // 默认为solid，线条类型，solid | dashed | dotted
           lineWidth     : {number},  // 默认为1，线条宽度
           lineCap       : {string},  // 默认为butt，线帽样式。butt | round | square

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为end，附加文本位置。
                                      // inside | start | end
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#000' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'line',
       id     : '123456',
       zlevel : 1,
       style  : {
           xStart : 100,
           yStart : 100,
           xEnd : 200,
           yEnd : 200,
           strokeColor : '#eee',
           lineWidth : 20,
           text : 'Baidu'
       },
       myName : 'kener',  //可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/line',['require','./base','../shape'],function(require) {
        function Line() {
            this.type = 'line';
            this.brushTypeOnly = 'stroke';  //线条只能描边，填充后果自负
            this.textPosition = 'end';
        }

        Line.prototype =  {
            /**
             * 创建线条路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                if (!style.lineType || style.lineType == 'solid') {
                    //默认为实线
                    ctx.moveTo(style.xStart, style.yStart);
                    ctx.lineTo(style.xEnd, style.yEnd);
                }
                else if (style.lineType == 'dashed'
                        || style.lineType == 'dotted'
                ) {
                    //画虚线的方法  by loutongbing@baidu.com
                    var lineWidth = style.lineWidth || 1;
                    var dashPattern = [
                        lineWidth * (style.lineType == 'dashed' ? 6 : 1),
                        lineWidth * 4
                    ];
                    var fromX = style.xStart;
                    var toX = style.xEnd;
                    var fromY = style.yStart;
                    var toY = style.yEnd;
                    var dx = toX - fromX;
                    var dy = toY - fromY;
                    var angle = Math.atan2(dy, dx);
                    var x = fromX;
                    var y = fromY;
                    var idx = 0;
                    var draw = true;
                    var dashLength;
                    var nx;
                    var ny;

                    ctx.moveTo(fromX, fromY);
                    while (!((dx < 0 ? x <= toX : x >= toX)
                              && (dy < 0 ? y <= toY : y >= toY))
                    ) {
                        dashLength = dashPattern[idx++ % dashPattern.length];
                        nx = x + (Math.cos(angle) * dashLength);
                        x = dx < 0 ? Math.max(toX, nx) : Math.min(toX, nx);
                        ny = y + (Math.sin(angle) * dashLength);
                        y = dy < 0 ? Math.max(toY, ny) : Math.min(toY, ny);
                        if (draw) {
                            ctx.lineTo(x, y);
                        }
                        else {
                            ctx.moveTo(x, y);
                        }
                        draw = !draw;
                    }
                }
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth = style.lineWidth || 1;
                return {
                    x : Math.min(style.xStart, style.xEnd) - lineWidth,
                    y : Math.min(style.yStart, style.yEnd) - lineWidth,
                    width : Math.abs(style.xStart - style.xEnd)
                            + lineWidth,
                    height : Math.abs(style.yStart - style.yEnd)
                             + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Line);
        
        var shape = require('../shape');
        shape.define('line', new Line());

        return Line;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：多边形
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'polygon',      // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           pointList     : {Array},   // 必须，多边形各个顶角坐标
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'polygon',
       id     : '123456',
       zlevel : 1,
       style  : {
           pointList : [[10, 10], [300, 20], [298, 400], [50, 450]]
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/polygon',['require','./base','../shape'],function(require) {
        function Polygon() {
            this.type = 'polygon';
        }

        Polygon.prototype = {
            /**
             * 创建多边形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                var pointList = style.pointList;
                ctx.moveTo(pointList[0][0],pointList[0][1]);
                for (var i = 1, l = pointList.length; i < l; i++) {
                    ctx.lineTo(pointList[i][0],pointList[i][1]);
                }
                ctx.lineTo(pointList[0][0],pointList[0][1]);
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var minX =  Number.MAX_VALUE;
                var maxX =  Number.MIN_VALUE;
                var minY = Number.MAX_VALUE;
                var maxY = Number.MIN_VALUE;

                var pointList = style.pointList;
                for(var i = 0, l = pointList.length; i < l; i++) {
                    if (pointList[i][0] < minX) {
                        minX = pointList[i][0];
                    }
                    if (pointList[i][0] > maxX) {
                        maxX = pointList[i][0];
                    }
                    if (pointList[i][1] < minY) {
                        minY = pointList[i][1];
                    }
                    if (pointList[i][1] > maxY) {
                        maxY = pointList[i][1];
                    }
                }

                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(minX - lineWidth / 2),
                    y : Math.round(minY - lineWidth / 2),
                    width : maxX - minX + lineWidth,
                    height : maxY - minY + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Polygon);
        
        var shape = require('../shape');
        shape.define('polygon', new Polygon());

        return Polygon;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：折线
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'brokenLine',         // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           pointList     : {Array},   // 必须，各个顶角坐标
           strokeColor   : {color},   // 默认为'#000'，线条颜色（轮廓），支持rgba
           lineType      : {string},  // 默认为solid，线条类型，solid | dashed | dotted
           lineWidth     : {number},  // 默认为1，线条宽度
           lineCap       : {string},  // 默认为butt，线帽样式。butt | round | square
           lineJoin      : {string},  // 默认为miter，线段连接样式。miter | round | bevel
           miterLimit    : {number},  // 默认为10，最大斜接长度，仅当lineJoin为miter时生效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为end，附加文本位置。
                                      // start | end
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#000' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'brokenLine',
       id     : '123456',
       zlevel : 1,
       style  : {
           pointList : [[10, 10], [300, 20], [298, 400], [50, 450]],
           strokeColor : '#eee',
           lineWidth : 20,
           text : 'Baidu'
       },
       myName : 'kener',  //可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/brokenLine',['require','../shape','./base','../shape'],function(require) {
        function BrokenLine() {
            this.type = 'brokenLine';
            this.brushTypeOnly = 'stroke';  //线条只能描边，填充后果自负
            this.textPosition = 'end';
        }

        BrokenLine.prototype =  {
            /**
             * 创建多边形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                var pointList = style.pointList;
                if (pointList.length < 2) {
                    // 少于2个点就不画了~
                    return;
                }
                if (!style.lineType || style.lineType == 'solid') {
                    //默认为实线
                    ctx.moveTo(pointList[0][0],pointList[0][1]);
                    for (var i = 1, l = pointList.length; i < l; i++) {
                        ctx.lineTo(pointList[i][0],pointList[i][1]);
                    }
                }
                else if (style.lineType == 'dashed'
                        || style.lineType == 'dotted'
                ) {
                    //画虚线的方法  by loutongbing@baidu.com
                    var lineWidth = style.lineWidth || 1;
                    var dashPattern = [
                        lineWidth * (style.lineType == 'dashed' ? 6 : 1),
                        lineWidth * 4
                    ];
                    ctx.moveTo(pointList[0][0],pointList[0][1]);
                    for (var i = 1, l = pointList.length; i < l; i++) {
                        var fromX = pointList[i - 1][0];
                        var toX = pointList[i][0];
                        var fromY = pointList[i - 1][1];
                        var toY = pointList[i][1];
                        var dx = toX - fromX;
                        var dy = toY - fromY;
                        var angle = Math.atan2(dy, dx);
                        var x = fromX;
                        var y = fromY;
                        var idx = 0;
                        var draw = true;
                        var dashLength;
                        var nx;
                        var ny;

                        while (!((dx < 0 ? x <= toX : x >= toX)
                                && (dy < 0 ? y <= toY : y >= toY))
                        ) {
                            dashLength = dashPattern[
                                idx++ % dashPattern.length
                            ];
                            nx = x + (Math.cos(angle) * dashLength);
                            x = dx < 0 ? Math.max(toX, nx) : Math.min(toX, nx);
                            ny = y + (Math.sin(angle) * dashLength);
                            y = dy < 0 ? Math.max(toY, ny) : Math.min(toY, ny);
                            if (draw) {
                                ctx.lineTo(x, y);
                            }
                            else {
                                ctx.moveTo(x, y);
                            }
                            draw = !draw;
                        }
                    }
                }

                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var shape = require('../shape');
                return shape.get('polygon').getRect(style);
            }
        };

        var base = require('./base');
        base.derive(BrokenLine);
        
        var shape = require('../shape');
        shape.define('brokenLine', new BrokenLine());

        return BrokenLine;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com) , 
 *         strwind (@劲风FEI, yaofeifei@baidu.com)
 *
 * shape类：矩形
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'rectangle',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，左上角横坐标
           y             : {number},  // 必须，左上角纵坐标
           width         : {number},  // 必须，宽度
           height        : {number},  // 必须，高度
           radius        : {array},   // 默认为[0]，圆角 
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'rectangle',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           width : 150,
           height : 50,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/rectangle',['require','./base','../shape'],function(require) {
        function Rectangle() {
            this.type = 'rectangle';
        }

        Rectangle.prototype =  {
            /**
             * 绘制圆角矩形
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            _buildRadiusPath: function(ctx, style) {
                //左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
                //r缩写为1         相当于 [1, 1, 1, 1]
                //r缩写为[1]       相当于 [1, 1, 1, 1]
                //r缩写为[1, 2]    相当于 [1, 2, 1, 2]
                //r缩写为[1, 2, 3] 相当于 [1, 2, 3, 2]
                var x = style.x;
                var y = style.y;
                var width = style.width;
                var height = style.height;
                var r = style.radius;
                var r1; 
                var r2; 
                var r3; 
                var r4;
                  
                if(typeof r === 'number') {
                    r1 = r2 = r3 = r4 = r;
                }
                else if(r instanceof Array) {
                    if (r.length === 1) {
                        r1 = r2 = r3 = r4 = r[0];
                    }
                    else if(r.length === 2) {
                        r1 = r3 = r[0];
                        r2 = r4 = r[1];
                    }
                    else if(r.length === 3) {
                        r1 = r[0];
                        r2 = r4 = r[1];
                        r3 = r[2];
                    } else {
                        r1 = r[0];
                        r2 = r[1];
                        r3 = r[2];
                        r4 = r[3];
                    }
                } else {
                    r1 = r2 = r3 = r4 = 0;
                }
                ctx.moveTo(x + r1, y);
                ctx.lineTo(x + width - r2, y);
                r2 !== 0 && ctx.quadraticCurveTo(
                    x + width, y, x + width, y + r2
                );
                ctx.lineTo(x + width, y + height - r3);
                r3 !== 0 && ctx.quadraticCurveTo(
                    x + width, y + height, x + width - r3, y + height
                );
                ctx.lineTo(x + r4, y + height);
                r4 !== 0 && ctx.quadraticCurveTo(
                    x, y + height, x, y + height - r4
                );
                ctx.lineTo(x, y + r1);
                r1 !== 0 && ctx.quadraticCurveTo(x, y, x + r1, y);
            },
            
            /**
             * 创建矩形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                if(!style.radius) {
                    ctx.moveTo(style.x, style.y);
                    ctx.lineTo(style.x + style.width, style.y);
                    ctx.lineTo(style.x + style.width, style.y + style.height);
                    ctx.lineTo(style.x, style.y + style.height);
                    ctx.lineTo(style.x, style.y);
                    //ctx.rect(style.x, style.y, style.width, style.height);
                } else {
                    this._buildRadiusPath(ctx, style);
                }
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - lineWidth / 2),
                    y : Math.round(style.y - lineWidth / 2),
                    width : style.width + lineWidth,
                    height : style.height + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Rectangle);
        
        var shape = require('../shape');
        shape.define('rectangle', new Rectangle());

        return Rectangle;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：圆环
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'ring',         // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，圆心横坐标
           y             : {number},  // 必须，圆心纵坐标
           r0            : {number},  // 必须，内圆半径
           r             : {number},  // 必须，外圆半径
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为outside，附加文本位置。
                                      // outside | inside
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'ring',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           r : 50,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/ring',['require','../shape','./base','../shape'],function(require) {
        function Ring() {
            this.type = 'ring';
        }

        Ring.prototype = {
            /**
             * 创建圆环路径，依赖扇形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
//var temp = new Date();
                var shape = require('../shape');
//t1 += new Date() - temp;
//temp = new Date();
                shape.get('sector').buildPath(
                    ctx,
                    {
                        x : style.x,
                        y : style.y,
                        r0 : style.r0,
                        r : style.r,
                        startAngle : 0,
                        endAngle : 360
                    }
                );
//t2 += new Date() - temp;
                return;
            },

            /**
             * 画刷
             * @param ctx       画布句柄
             * @param e         形状实体
             * @param isHighlight   是否为高亮状态
             */
            brush : function(ctx, e, isHighlight) {
                var style = e.style || {};

                if (isHighlight) {
                    // 根据style扩展默认高亮样式
                    style = this.getHighlightStyle(
                        style, e.highlightStyle || {}
                    );
                }

                ctx.save();
                this.setContext(ctx, style);

                // 设置transform
                if (e.__needTransform) {
                    ctx.transform.apply(ctx,this.updateTransform(e));
                }

                ctx.beginPath();

                this.buildPath(ctx, style);

                ctx.closePath();

                style.brushType = style.brushType || 'fill';    // default

                if (style.brushType == 'fill' || style.brushType == 'both') {
                    ctx.fill();
                }

                if (style.brushType == 'stroke' || style.brushType == 'both') {
                    ctx.beginPath();
                    ctx.moveTo(style.r0 + style.x, style.y);
                    ctx.arc(style.x, style.y, style.r0, 0, Math.PI * 2, true);

                    ctx.moveTo(style.r + style.x, style.y);
                    ctx.arc(style.x, style.y, style.r, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.stroke();
                }

                if (style.text) {
                    this.drawText(ctx, style, e.style);
                }


                ctx.restore();

                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - style.r - lineWidth / 2),
                    y : Math.round(style.y - style.r - lineWidth / 2),
                    width : style.r * 2 + lineWidth,
                    height : style.r * 2 + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Ring);
        
        var shape = require('../shape');
        shape.define('ring', new Ring());

        return Ring;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：扇形
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'sector',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，圆心横坐标
           y             : {number},  // 必须，圆心纵坐标
           r0            : {number},  // 默认为0，内圆半径，指定后将出现内弧，同时扇边长度 = r - r0
           r             : {number},  // 必须，外圆半径
           startAngle    : {number},  // 必须，起始角度[0, 360)
           endAngle      : {number},  // 必须，结束角度(0, 360]
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为outside，附加文本位置。
                                      // outside | inside
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'sector',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           r : 50,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/sector',['require','../tool/math','../shape','./base','../shape'],function(require) {
        var math = require('../tool/math');

        function Sector() {
            this.type = 'sector';
        }

        Sector.prototype = {
            /**
             * 创建扇形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                var x = style.x;   // 圆心x
                var y = style.y;   // 圆心y
                var r0 = typeof style.r0 == 'undefined'     // 形内半径[0,r)
                         ? 0 : style.r0;
                var r = style.r;                            // 扇形外半径(0,r]
                var startAngle = style.startAngle;          // 起始角度[0,360)
                var endAngle = style.endAngle;              // 结束角度(0,360]
                var PI2 = Math.PI * 2;

                startAngle = math.degreeToRadian(startAngle);
                endAngle = math.degreeToRadian(endAngle);

                //sin&cos已经在tool.math中缓存了，放心大胆的重复调用
                ctx.moveTo(
                    math.cos(startAngle) * r0 + x,
                    y - math.sin(startAngle) * r0
                );

                ctx.lineTo(
                    math.cos(startAngle) * r + x,
                    y - math.sin(startAngle) * r
                );

                ctx.arc(x, y, r, PI2 - startAngle, PI2 - endAngle, true);

                ctx.lineTo(
                    math.cos(endAngle) * r0 + x,
                    y - math.sin(endAngle) * r0
                );

                if (r0 !== 0) {
                    ctx.arc(x, y, r0, PI2 - endAngle, PI2 - startAngle, false);
                }

                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var x = style.x;   // 圆心x
                var y = style.y;   // 圆心y
                var r0 = typeof style.r0 == 'undefined'     // 形内半径[0,r)
                         ? 0 : style.r0;
                var r = style.r;                            // 扇形外半径(0,r]
                var startAngle = style.startAngle;          // 起始角度[0,360)
                var endAngle = style.endAngle;              // 结束角度(0,360]
                var pointList = [];
                if (startAngle < 90 && endAngle > 90) {
                    pointList.push([
                        x, y - r
                    ]);
                }
                if (startAngle < 180 && endAngle > 180) {
                    pointList.push([
                        x - r, y
                    ]);
                }
                if (startAngle < 270 && endAngle > 270) {
                    pointList.push([
                        x, y + r
                    ]);
                }
                if (startAngle < 360 && endAngle > 360) {
                    pointList.push([
                        x + r, y
                    ]);
                }

                startAngle = math.degreeToRadian(startAngle);
                endAngle = math.degreeToRadian(endAngle);


                pointList.push([
                    math.cos(startAngle) * r0 + x,
                    y - math.sin(startAngle) * r0
                ]);

                pointList.push([
                    math.cos(startAngle) * r + x,
                    y - math.sin(startAngle) * r
                ]);

                pointList.push([
                    math.cos(endAngle) * r + x,
                    y - math.sin(endAngle) * r
                ]);

                pointList.push([
                    math.cos(endAngle) * r0 + x,
                    y - math.sin(endAngle) * r0
                ]);

                var shape = require('../shape');
                return shape.get('polygon').getRect({
                    brushType : style.brushType,
                    lineWidth : style.lineWidth,
                    pointList : pointList
                });
            }
        };

        var base = require('./base');
        base.derive(Sector);
        
        var shape = require('../shape');
        shape.define('sector', new Sector());

        return Sector;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：文字
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'text',         // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，横坐标
           y             : {number},  // 必须，纵坐标
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，线条颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 必须，文本内容
           textFont      : {string},  // 默认为null，文本文字样式，eg:'bold 18px verdana'
           textAlign     : {string},  // 默认为start，文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认为middle，文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           maxWidth      : {number}   // 默认为null，最大宽度
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'text',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           color : 'red',
           text : 'Baidu'
       },
       myName : 'kener',  //可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/text',['require','../tool/area','./base','../shape'],function(require) {
        function Text() {
            this.type = 'text';
        }

        Text.prototype =  {
            /**
             * 画刷，重载基类方法
             * @param {Context2D} ctx Canvas 2D上下文
             * @param e 图形形状实体
             * @param isHighlight 是否为高亮状态
             */
            brush : function(ctx, e, isHighlight) {
                var style = e.style || {};
                if (isHighlight) {
                    // 根据style扩展默认高亮样式
                    style = this.getHighlightStyle(
                        style, e.highlightStyle || {}
                    );
                }

                ctx.save();
                this.setContext(ctx, style);

                // 设置transform
                if (e.__needTransform) {
                    ctx.transform.apply(ctx,this.updateTransform(e));
                }

                if (style.textFont) {
                    ctx.font = style.textFont;
                }
                ctx.textAlign = style.textAlign || 'start';
                ctx.textBaseline = style.textBaseline || 'middle';

                if (style.maxWidth) {
                    switch (style.brushType) {
                        case 'fill':
                            ctx.fillText(
                                style.text,
                                style.x, style.y, style.maxWidth
                            );
                            break;
                        case 'stroke':
                            ctx.strokeText(
                                style.text,
                                style.x, style.y, style.maxWidth
                            );
                            break;
                        case 'both':
                            ctx.strokeText(
                                style.text,
                                style.x, style.y, style.maxWidth
                            );
                            ctx.fillText(
                                style.text,
                                style.x, style.y, style.maxWidth
                            );
                            break;
                        default:
                            ctx.fillText(
                                style.text,
                                style.x, style.y, style.maxWidth
                            );
                    }
                }
                else{
                    switch (style.brushType) {
                        case 'fill':
                            ctx.fillText(style.text, style.x, style.y);
                            break;
                        case 'stroke':
                            ctx.strokeText(style.text, style.x, style.y);
                            break;
                        case 'both':
                            ctx.strokeText(style.text, style.x, style.y);
                            ctx.fillText(style.text, style.x, style.y);
                            break;
                        default:
                            ctx.fillText(style.text, style.x, style.y);
                    }
                }

                ctx.restore();
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var area = require('../tool/area');

                var width =  area.getTextWidth(style.text, style.textFont);
                var height = area.getTextWidth('国', style.textFont); //比较粗暴

                var textX = style.x;                 //默认start == left
                if (style.textAlign == 'end' || style.textAlign == 'right') {
                    textX -= width;
                }
                else if (style.textAlign == 'center') {
                    textX -= (width / 2);
                }

                var textY = style.y - height / 2;    //默认middle
                if (style.textBaseline == 'top') {
                    textY += height / 2;
                }
                else if (style.textBaseline == 'bottom') {
                    textX -= height / 2;
                }

                return {
                    x : textX,
                    y : textY,
                    width : width,
                    height : height
                };
            }
        };

        var base = require('./base');
        base.derive(Text);
        
        var shape = require('../shape');
        shape.define('text', new Text());

        return Text;
    }
);

/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：心形
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'heart',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，心形内部尖端横坐标
           y             : {number},  // 必须，心形内部尖端纵坐标
           a             : {number},  // 必须，心形横宽（中轴线到水平边缘最宽处距离）
           b             : {number},  // 必须，心形纵高（内尖到外尖距离）
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为outside，附加文本位置。
                                      // outside | inside
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'heart',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           a : 50,
           b : 80,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/heart',['require','./base','../shape'],function(require) {
        function Heart() {
            this.type = 'heart';
        }

        Heart.prototype = {
            /**
             * 创建扇形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                ctx.moveTo(style.x, style.y);
                ctx.bezierCurveTo(
                    style.x + style.a / 2,
                    style.y - style.b * 2 / 3,
                    style.x + style.a * 2,
                    style.y + style.b / 3,
                    style.x,
                    style.y + style.b
                );
                ctx.bezierCurveTo(
                    style.x - style.a *  2,
                    style.y + style.b / 3,
                    style.x - style.a / 2,
                    style.y - style.b * 2 / 3,
                    style.x,
                    style.y
                );
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - style.a - lineWidth / 2),
                    y : Math.round(style.y - style.b / 4 - lineWidth / 2),
                    width : style.a * 2 + lineWidth,
                    height : style.b * 5 / 4 + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Heart);
        
        var shape = require('../shape');
        shape.define('heart', new Heart());

        return Heart;
    }
);
/**
 * zrender
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：水滴
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'heart',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，水滴中心横坐标
           y             : {number},  // 必须，水滴中心纵坐标
           a             : {number},  // 必须，水滴横宽（中心到水平边缘最宽处距离）
           b             : {number},  // 必须，水滴纵高（中心到尖端距离）
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为outside，附加文本位置。
                                      // outside | inside
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'droplet',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           a : 50,
           b : 80,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/droplet',['require','./base','../shape'],function(require) {
        function Droplet() {
            this.type = 'droplet';
        }

        Droplet.prototype = {
            /**
             * 创建扇形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                ctx.moveTo(style.x, style.y + style.a);
                ctx.bezierCurveTo(
                    style.x + style.a,
                    style.y + style.a,
                    style.x + style.a * 3 / 2,
                    style.y - style.a / 3,
                    style.x,
                    style.y - style.b
                );
                ctx.bezierCurveTo(
                    style.x - style.a * 3 / 2,
                    style.y - style.a / 3,
                    style.x - style.a,
                    style.y + style.a,
                    style.x,
                    style.y + style.a
                );
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - style.a - lineWidth / 2),
                    y : Math.round(style.y - style.b - lineWidth / 2),
                    width : style.a * 2 + lineWidth,
                    height : style.a + style.b + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Droplet);
        
        var shape = require('../shape');
        shape.define('droplet', new Droplet());

        return Droplet;
    }
);
/**
 * zrender
 *
 * author: CrossDo (chenhuaimu@baidu.com)
 *
 * shape类：路径
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'path',         // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           path          : {string},// 必须，路径。例如:M 0 0 L 0 10 L 10 10 Z (一个三角形)
                                    //M = moveto
                                    //L = lineto
                                    //H = horizontal lineto
                                    //V = vertical lineto
                                    //C = curveto
                                    //S = smooth curveto
                                    //Q = quadratic Belzier curve
                                    //T = smooth quadratic Belzier curveto
                                    //Z = closepath


           x             : {number},  // 必须，x轴坐标
           y             : {number},  // 必须，y轴坐标


           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }

 **/

define('zrender/shape/path',['require','./base','../shape'],function(require) {
    function Path() {
        this.type = 'path';
    }

    Path.prototype = {
        _parsePathData : function(data) {
            if (!data) {
                return [];
            }

            // command string
            var cs = data;

            // command chars
            var cc = [
                'm', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z',
                'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'
            ];
            cs = cs.replace(/  /g, ' ');
            cs = cs.replace(/ /g, ',');
            cs = cs.replace(/,,/g, ',');
            var n;
            // create pipes so that we can split the data
            for (n = 0; n < cc.length; n++) {
                cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
            }
            // create array
            var arr = cs.split('|');
            var ca = [];
            // init context point
            var cpx = 0;
            var cpy = 0;
            for (n = 1; n < arr.length; n++) {
                var str = arr[n];
                var c = str.charAt(0);
                str = str.slice(1);
                str = str.replace(new RegExp('e,-', 'g'), 'e-');

                var p = str.split(',');
                if (p.length > 0 && p[0] === '') {
                    p.shift();
                }

                for (var i = 0; i < p.length; i++) {
                    p[i] = parseFloat(p[i]);
                }
                while (p.length > 0) {
                    if (isNaN(p[0])) {
                        break;
                    }
                    var cmd = null;
                    var points = [];

                    var ctlPtx;
                    var ctlPty;
                    var prevCmd;

                    var rx;
                    var ry;
                    var psi;
                    var fa;
                    var fs;

                    var x1 = cpx;
                    var y1 = cpy;

                    // convert l, H, h, V, and v to L
                    switch (c) {
                    case 'l':
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'L':
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'm':
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'M';
                        points.push(cpx, cpy);
                        c = 'l';
                        break;
                    case 'M':
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'M';
                        points.push(cpx, cpy);
                        c = 'L';
                        break;

                    case 'h':
                        cpx += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'H':
                        cpx = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'v':
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'V':
                        cpy = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'C':
                        points.push(p.shift(), p.shift(), p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'c':
                        points.push(
                            cpx + p.shift(), cpy + p.shift(),
                            cpx + p.shift(), cpy + p.shift()
                        );
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'S':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 's':
                        ctlPtx = cpx, ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(
                            ctlPtx, ctlPty,
                            cpx + p.shift(), cpy + p.shift()
                        );
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'Q':
                        points.push(p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'q':
                        points.push(cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(cpx, cpy);
                        break;
                    case 'T':
                        ctlPtx = cpx, ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 't':
                        ctlPtx = cpx, ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 'A':
                        rx = p.shift();
                        ry = p.shift();
                        psi = p.shift();
                        fa = p.shift();
                        fs = p.shift();

                        x1 = cpx, y1 = cpy;
                        cpx = p.shift(), cpy = p.shift();
                        cmd = 'A';
                        points = this._convertPoint(
                            x1, y1, cpx, cpy, fa, fs, rx, ry, psi
                        );
                        break;
                    case 'a':
                        rx = p.shift();
                        ry = p.shift();
                        psi = p.shift();
                        fa = p.shift();
                        fs = p.shift();

                        x1 = cpx, y1 = cpy;
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'A';
                        points = this._convertPoint(
                            x1, y1, cpx, cpy, fa, fs, rx, ry, psi
                        );
                        break;

                    }

                    ca.push({
                        command : cmd || c,
                        points : points
                    });
                }

                if (c === 'z' || c === 'Z') {
                    ca.push({
                        command : 'z',
                        points : []
                    });
                }
            }

            return ca;

        },

        _convertPoint : function(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg) {
            var psi = psiDeg * (Math.PI / 180.0);
            var xp = Math.cos(psi) * (x1 - x2) / 2.0
                     + Math.sin(psi) * (y1 - y2) / 2.0;
            var yp = -1 * Math.sin(psi) * (x1 - x2) / 2.0
                     + Math.cos(psi) * (y1 - y2) / 2.0;

            var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);

            if (lambda > 1) {
                rx *= Math.sqrt(lambda);
                ry *= Math.sqrt(lambda);
            }

            var f = Math.sqrt((((rx * rx) * (ry * ry))
                    - ((rx * rx) * (yp * yp))
                    - ((ry * ry) * (xp * xp))) / ((rx * rx) * (yp * yp)
                    + (ry * ry) * (xp * xp))
                );

            if (fa === fs) {
                f *= -1;
            }
            if (isNaN(f)) {
                f = 0;
            }

            var cxp = f * rx * yp / ry;
            var cyp = f * -ry * xp / rx;

            var cx = (x1 + x2) / 2.0
                     + Math.cos(psi) * cxp
                     - Math.sin(psi) * cyp;
            var cy = (y1 + y2) / 2.0
                    + Math.sin(psi) * cxp
                    + Math.cos(psi) * cyp;

            var vMag = function(v) {
                return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
            };
            var vRatio = function(u, v) {
                return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
            };
            var vAngle = function(u, v) {
                return (u[0] * v[1] < u[1] * v[0] ? -1 : 1)
                        * Math.acos(vRatio(u, v));
            };
            var theta = vAngle([ 1, 0 ], [ (xp - cxp) / rx, (yp - cyp) / ry ]);
            var u = [ (xp - cxp) / rx, (yp - cyp) / ry ];
            var v = [ (-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry ];
            var dTheta = vAngle(u, v);

            if (vRatio(u, v) <= -1) {
                dTheta = Math.PI;
            }
            if (vRatio(u, v) >= 1) {
                dTheta = 0;
            }
            if (fs === 0 && dTheta > 0) {
                dTheta = dTheta - 2 * Math.PI;
            }
            if (fs === 1 && dTheta < 0) {
                dTheta = dTheta + 2 * Math.PI;
            }
            return [ cx, cy, rx, ry, theta, dTheta, psi, fs ];
        },

        /**
         * 创建路径
         * @param {Context2D} ctx Canvas 2D上下文
         * @param {Object} style 样式
         */
        buildPath : function(ctx, style) {
            var path = style.path;

            var pathArray = this._parsePathData(path);

            // 平移坐标
            var x = style.x || 0;
            var y = style.y || 0;

            var p;
            // 记录边界点，用于判断inside
            var pointList = style.pointList = [];
            var singlePointList = [];
            for (var i = 0, l = pathArray.length; i < l; i++) {
                if (pathArray[i].command.toUpperCase() == 'M') {
                    singlePointList.length > 0 
                    && pointList.push(singlePointList);
                    singlePointList = [];
                }
                p = pathArray[i].points;
                for (var j = 0, k = p.length; j < k; j += 2) {
                    singlePointList.push([p[j] + x, p[j+1] + y]);
                }
            }
            singlePointList.length > 0 && pointList.push(singlePointList);
            
            var c;
            for (var i = 0, l = pathArray.length; i < l; i++) {
                c = pathArray[i].command;
                p = pathArray[i].points;
                // 平移变换
                for (var j = 0, k = p.length; j < k; j++) {
                    if (j % 2 === 0) {
                        p[j] += x;
                    } else {
                        p[j] += y;
                    }
                }
                switch (c) {
                    case 'L':
                        ctx.lineTo(p[0], p[1]);
                        break;
                    case 'M':
                        ctx.moveTo(p[0], p[1]);
                        break;
                    case 'C':
                        ctx.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
                        break;
                    case 'Q':
                        ctx.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                        break;
                    case 'A':
                        var cx = p[0];
                        var cy = p[1];
                        var rx = p[2];
                        var ry = p[3];
                        var theta = p[4];
                        var dTheta = p[5];
                        var psi = p[6];
                        var fs = p[7];
                        var r = (rx > ry) ? rx : ry;
                        var scaleX = (rx > ry) ? 1 : rx / ry;
                        var scaleY = (rx > ry) ? ry / rx : 1;

                        ctx.translate(cx, cy);
                        ctx.rotate(psi);
                        ctx.scale(scaleX, scaleY);
                        ctx.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
                        ctx.scale(1 / scaleX, 1 / scaleY);
                        ctx.rotate(-psi);
                        ctx.translate(-cx, -cy);
                        break;
                    case 'z':
                        ctx.closePath();
                        break;
                }
            }

            return;
        },

        /**
         * 返回矩形区域，用于局部刷新和文字定位
         * @param {Object} style 样式
         */
        getRect : function(style) {
            var lineWidth;
            if (style.brushType == 'stroke' || style.brushType == 'fill') {
                lineWidth = style.lineWidth || 1;
            }
            else {
                lineWidth = 0;
            }

            var minX = Number.MAX_VALUE;
            var maxX = Number.MIN_VALUE;

            var minY = Number.MAX_VALUE;
            var maxY = Number.MIN_VALUE;

            // 平移坐标
            var x = style.x || 0;
            var y = style.y || 0;

            var pathArray = this._parsePathData(style.path);
            for (var i = 0; i < pathArray.length; i++) {
                var p = pathArray[i].points;

                for (var j = 0; j < p.length; j++) {
                    if (j % 2 === 0) {
                        if (p[j] + x < minX) {
                            minX = p[j] + x;
                        }
                        if (p[j] + x > maxX) {
                            maxX = p[j] + x;
                        }
                    } else {
                        if (p[j] + y < minY) {
                            minY = p[j] + y;
                        }
                        if (p[j] + y > maxY) {
                            maxY = p[j] + y;
                        }
                    }
                }
            }

            var rect;
            if (minX === Number.MAX_VALUE
                || maxX === Number.MIN_VALUE
                || minY === Number.MAX_VALUE
                || maxY === Number.MIN_VALUE
            ) {
                rect = {
                    x : 0,
                    y : 0,
                    width : 0,
                    height : 0
                };
            }
            else {
                rect = {
                    x : Math.round(minX - lineWidth / 2),
                    y : Math.round(minY - lineWidth / 2),
                    width : maxX - minX + lineWidth,
                    height : maxY - minY + lineWidth
                };
            }
            return rect;
        }
    };

    var base = require('./base');
    base.derive(Path);
    
    var shape = require('../shape');
    shape.define('path', new Path());

    return Path;
});
/**
 * zrender
 *
 * @author lang( shenyi01@baidu.com )
 *
 * shape类：图片
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'image',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，左上角横坐标
           y             : {number},  // 必须，左上角纵坐标
           width         : {number},  // 可选，宽度
           height        : {number},  // 可选，高度
           sx            : {number},  // 可选, 从图片中裁剪的x
           sy            : {number},  // 可选, 从图片中裁剪的y
           sWidth        : {number},  // 可选, 从图片中裁剪的宽度
           sHeight       : {number},  // 可选, 从图片中裁剪的高度
           image         : {string|Image} // 必须，图片url或者图片对象
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'image',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           width : 150,
           height : 50,
           image : 'tests.jpg',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/image',['require','./base','../shape'],function(require) {

        var _cache = {};
        var _needsRefresh = [];
        var _refreshTimeout;

        function ZImage() {
            this.type = 'image';
        }

        ZImage.prototype = {
            brush : function(ctx, e, isHighlight, refresh) {
                var style = e.style || {};

                if (isHighlight) {
                    // 根据style扩展默认高亮样式
                    style = this.getHighlightStyle(
                        style, e.highlightStyle || {}
                    );
                }

                var image = style.image;

                if (typeof(image) === 'string') {
                    var src = image;
                    if (_cache[src]) {
                        image = _cache[src];
                    }
                    else {
                        image = document.createElement('image');//new Image();
                        image.onload = function(){
                            image.onload = null;
                            clearTimeout( _refreshTimeout );
                            _needsRefresh.push( e );
                            // 防止因为缓存短时间内触发多次onload事件
                            _refreshTimeout = setTimeout(function(){
                                refresh( _needsRefresh );
                                // 清空needsRefresh
                                _needsRefresh = [];
                            }, 10);
                        };
                        _cache[ src ] = image;

                        image.src = src;
                    }
                }
                if (image) {
                    //图片已经加载完成
                    if (window.ActiveXObject) {
                        if (image.readyState != 'complete') {
                            return;
                        }
                    }
                    else {
                        if (!image.complete) {
                            return;
                        }
                    }

                    ctx.save();
                    this.setContext(ctx, style);

                    // 设置transform
                    if (e.__needTransform) {
                        ctx.transform.apply(ctx,this.updateTransform(e));
                    }

                    var width = style.width || image.width;
                    var height = style.height || image.height;
                    var x = style.x;
                    var y = style.y;
                    if (style.sWidth && style.sHeight) {
                        var sx = style.sx || 0;
                        var sy = style.sy || 0;
                        ctx.drawImage(
                            image,
                            sx, sy, style.sWidth, style.sHeight,
                            x, y, width, height
                        );
                    }
                    else if (style.sx && style.sy) {
                        var sx = style.sx;
                        var sy = style.sy;
                        var sWidth = width - sx;
                        var sHeight = height - sy;
                        ctx.drawImage(
                            image,
                            sx, sy, sWidth, sHeight,
                            x, y, width, height
                        );
                    }
                    else {
                        ctx.drawImage(image, x, y, width, height);
                    }
                    // 如果没设置宽和高的话自动根据图片宽高设置
                    style.width = width;
                    style.height = height;
                    e.style.width = width;
                    e.style.height = height;


                    if (style.text) {
                        this.drawText(ctx, style, e.style);
                    }

                    ctx.restore();
                }

                return;
            },

            /**
             * 创建路径，用于判断hover时调用isPointInPath~
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                ctx.rect(style.x, style.y, style.width, style.height);
                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                return {
                    x : style.x,
                    y : style.y,
                    width : style.width,
                    height : style.height
                };
            }
        };

        var base = require('./base');
        base.derive(ZImage);
        
        var shape = require('../shape');
        shape.define('image', new ZImage());

        return ZImage;
    }
);
/**
 * zrender
 *
 * @author Neil (杨骥, yangji01@baidu.com)
 *
 * shape类：贝塞尔曲线
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'beziercurve',         // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           xStart        : {number},  // 必须，起点横坐标
           yStart        : {number},  // 必须，起点纵坐标
           cpX1          : {number},  // 必须，第一个关联点横坐标
           cpY1          : {number},  // 必须，第一个关联点纵坐标
           cpX2          : {number},  // 可选，第二个关联点横坐标  缺省即为二次贝塞尔曲线
           cpY2          : {number},  // 可选，第二个关联点纵坐标
           xEnd          : {number},  // 必须，终点横坐标
           yEnd          : {number},  // 必须，终点纵坐标
           strokeColor   : {color},   // 默认为'#000'，线条颜色（轮廓），支持rgba

           lineWidth     : {number},  // 默认为1，线条宽度
           lineCap       : {string},  // 默认为butt，线帽样式。butt | round | square

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为end，附加文本位置。
                                      // inside | start | end
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#000' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'beziercurve',
       id     : '123456',
       zlevel : 1,
       style  : {
           xStart : 100,
           yStart : 100,
           xEnd : 200,
           yEnd : 200,
           strokeColor : '#eee',
           lineWidth : 20,
           text : 'Baidu'
       },
       myName : 'kener',  //可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/beziercurve',['require','./base','../shape'],function(require) {
        function Beziercurve() {
            this.type = 'beziercurve';
            this.brushTypeOnly = 'stroke';  //线条只能描边，填充后果自负
            this.textPosition = 'end';
        }

        Beziercurve.prototype =  {
            /**
             * 创建线条路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                ctx.moveTo(style.xStart, style.yStart);
                if (typeof style.cpX2 != 'undefined'
                    && typeof style.cpY2 != 'undefined'
                ) {
                    ctx.bezierCurveTo(
                        style.cpX1, style.cpY1,
                        style.cpX2, style.cpY2,
                        style.xEnd, style.yEnd
                    );
                }
                else {
                    ctx.quadraticCurveTo(
                        style.cpX1, style.cpY1,
                        style.xEnd, style.yEnd
                    );
                }

            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var _minX = Math.min(style.xStart, style.xEnd, style.cpX1);
                var _minY = Math.min(style.yStart, style.yEnd, style.cpY1);
                var _maxX = Math.max(style.xStart, style.xEnd, style.cpX1);
                var _maxY = Math.max(style.yStart, style.yEnd, style.cpY1);
                var _x2 = style.cpX2;
                var _y2 = style.cpY2;

                if (typeof _x2 != 'undefined'
                    && typeof _y2 != 'undefined'
                ) {
                    _minX = Math.min(_minX, _x2);
                    _minY = Math.min(_minY, _y2);
                    _maxX = Math.max(_maxX, _x2);
                    _maxY = Math.max(_maxY, _y2);
                }

                var lineWidth = style.lineWidth || 1;
                return {
                    x : _minX - lineWidth,
                    y : _minY - lineWidth,
                    width : _maxX - _minX + lineWidth,
                    height : _maxY - _minY + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Beziercurve);
        
        var shape = require('../shape');
        shape.define('beziercurve', new Beziercurve());

        return Beziercurve;
    }
);
/**
 * zrender
 *
 * @author sushuang (宿爽, sushuang@baidu.com)
 *
 * shape类：n角星（n>3）
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'star',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，n角星外接圆心横坐标
           y             : {number},  // 必须，n角星外接圆心纵坐标
           r             : {number},  // 必须，n角星外接圆半径
           r0            : {number},  // n角星内部顶点（凹点）的外接圆半径，
                                      // 如果不指定此参数，则自动计算：取相隔外部顶点连线的交点作内部顶点
           n             : {number},  // 必须，指明几角星
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效
           lineJoin      : {string},  // 默认为miter，线段连接样式。miter | round | bevel

           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为outside，附加文本位置。
                                      // outside | inside
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'star',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           r : 150,
           n : 5,
           color : '#eee'
       },
       myName : 'kener',   // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/star',['require','../tool/math','./base','../shape'],function(require) {

        var math = require('../tool/math');
        var sin = math.sin;
        var cos = math.cos;
        var PI = Math.PI;

        function Star() {
            this.type = 'heart';
        }

        Star.prototype = {
            /**
             * 创建n角星（n>3）路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                var n = style.n;
                if (!n || n < 2) { return; }

                var x = style.x;
                var y = style.y;
                var r = style.r;
                var r0 = style.r0;

                // 如果未指定内部顶点外接圆半径，则自动计算
                if (r0 == null) {
                    r0 = n > 4
                        // 相隔的外部顶点的连线的交点，
                        // 被取为内部交点，以此计算r0
                        ? r * cos(2 * PI / n) / cos(PI / n)
                        // 二三四角星的特殊处理
                        : r / 3;
                }

                var dStep = PI / n;
                var deg = -PI / 2;
                var xStart = x + r * cos(deg);
                var yStart = y + r * sin(deg);
                deg += dStep;

                // 记录边界点，用于判断inside
                var pointList = style.pointList = [];
                pointList.push([xStart, yStart]);
                for (var i = 0, end = n * 2 - 1, ri; i < end; i ++) {
                    ri = i % 2 === 0 ? r0 : r;
                    pointList.push([x + ri * cos(deg), y + ri * sin(deg)]);
                    deg += dStep;
                }
                pointList.push([xStart, yStart]);

                // 绘制
                ctx.moveTo(pointList[0][0], pointList[0][1]);
                for (var i = 0; i < pointList.length; i ++) {
                    ctx.lineTo(pointList[i][0], pointList[i][1]);
                }

                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - style.r - lineWidth / 2),
                    y : Math.round(style.y - style.r - lineWidth / 2),
                    width : style.r * 2 + lineWidth,
                    height : style.r * 2 + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Star);
        
        var shape = require('../shape');
        shape.define('star', new Star());

        return Star;
    }
);
/**
 * zrender
 *
 * @author sushuang (宿爽, sushuang@baidu.com)
 *
 * shape类：正n边形（n>=3）
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'isogon',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，正n边形外接圆心横坐标
           y             : {number},  // 必须，正n边形外接圆心纵坐标
           r             : {number},  // 必须，正n边形外接圆半径
           n             : {number},  // 必须，指明正几边形
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效
           lineJoin      : {string},  // 默认为miter，线段连接样式。miter | round | bevel

           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为outside，附加文本位置。
                                      // outside | inside
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'isogon',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 400,
           y : 100,
           r : 150,
           n : 7,
           color : '#eee'
       },
       myName : 'kener',   // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'zrender/shape/isogon',['require','../tool/math','./base','../shape'],function(require) {

        var math = require('../tool/math');
        var sin = math.sin;
        var cos = math.cos;
        var PI = Math.PI;

        function Isogon() {
            this.type = 'isogon';
        }

        Isogon.prototype = {
            /**
             * 创建n角星（n>=3）路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                var n = style.n;
                if (!n || n < 2) { return; }

                var x = style.x;
                var y = style.y;
                var r = style.r;

                var dStep = 2 * PI / n;
                var deg = -PI / 2;
                var xStart = x + r * cos(deg);
                var yStart = y + r * sin(deg);
                deg += dStep;

                // 记录边界点，用于判断insight
                var pointList = style.pointList = [];
                pointList.push([xStart, yStart]);
                for (var i = 0, end = n - 1; i < end; i ++) {
                    pointList.push([x + r * cos(deg), y + r * sin(deg)]);
                    deg += dStep;
                }
                pointList.push([xStart, yStart]);

                // 绘制
                ctx.moveTo(pointList[0][0], pointList[0][1]);
                for (var i = 0; i < pointList.length; i ++) {
                    ctx.lineTo(pointList[i][0], pointList[i][1]);
                }

                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                var lineWidth;
                if (style.brushType == 'stroke' || style.brushType == 'fill') {
                    lineWidth = style.lineWidth || 1;
                }
                else {
                    lineWidth = 0;
                }
                return {
                    x : Math.round(style.x - style.r - lineWidth / 2),
                    y : Math.round(style.y - style.r - lineWidth / 2),
                    width : style.r * 2 + lineWidth,
                    height : style.r * 2 + lineWidth
                };
            }
        };

        var base = require('./base');
        base.derive(Isogon);
        
        var shape = require('../shape');
        shape.define('isogon', new Isogon());

        return Isogon;
    }
);
/**
 * 缓动代码来自 https://github.com/sole/tween.js/blob/master/src/Tween.js
 * author: lang(shenyi01@baidu.com)
 */
define(
    'zrender/animation/easing',[],function() {
        var Easing = {
            // 线性
            Linear: function(k) {
                return k;
            },

            // 二次方的缓动（t^2）
            QuadraticIn: function(k) {
                return k * k;
            },
            QuadraticOut: function(k) {
                return k * (2 - k);
            },
            QuadraticInOut: function(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k;
                }
                return - 0.5 * (--k * (k - 2) - 1);
            },

            // 三次方的缓动（t^3）
            CubicIn: function(k) {
                return k * k * k;
            },
            CubicOut: function(k) {
                return --k * k * k + 1;
            },
            CubicInOut: function(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k;
                }
                return 0.5 * ((k -= 2) * k * k + 2);
            },

            // 四次方的缓动（t^4）
            QuarticIn: function(k) {
                return k * k * k * k;
            },
            QuarticOut: function(k) {
                return 1 - (--k * k * k * k);
            },
            QuarticInOut: function(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k * k;
                }
                return - 0.5 * ((k -= 2) * k * k * k - 2);
            },

            // 五次方的缓动（t^5）
            QuinticIn: function(k) {
                return k * k * k * k * k;
            },

            QuinticOut: function(k) {
                return --k * k * k * k * k + 1;
            },
            QuinticInOut: function(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k * k * k;
                }
                return 0.5 * ((k -= 2) * k * k * k * k + 2);
            },

            // 正弦曲线的缓动（sin(t)）
            SinusoidalIn: function(k) {
                return 1 - Math.cos(k * Math.PI / 2);
            },
            SinusoidalOut: function(k) {
                return Math.sin(k * Math.PI / 2);
            },
            SinusoidalInOut: function(k) {
                return 0.5 * (1 - Math.cos(Math.PI * k));
            },

            // 指数曲线的缓动（2^t）
            ExponentialIn: function(k) {
                return k === 0 ? 0 : Math.pow(1024, k - 1);
            },
            ExponentialOut: function(k) {
                return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
            },
            ExponentialInOut: function(k) {
                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }
                if ((k *= 2) < 1) {
                    return 0.5 * Math.pow(1024, k - 1);
                }
                return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
            },

            // 圆形曲线的缓动（sqrt(1-t^2)）
            CircularIn: function(k) {
                return 1 - Math.sqrt(1 - k * k);
            },
            CircularOut: function(k) {
                return Math.sqrt(1 - (--k * k));
            },
            CircularInOut: function(k) {
                if ((k *= 2) < 1) {
                    return - 0.5 * (Math.sqrt(1 - k * k) - 1);
                }
                return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
            },

            // 创建类似于弹簧在停止前来回振荡的动画
            ElasticIn: function(k) {
                var s, a = 0.1, p = 0.4;
                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }
                if (!a || a < 1) {
                    a = 1; s = p / 4;
                }else{
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }
                return - (a * Math.pow(2, 10 * (k -= 1)) *
                            Math.sin((k - s) * (2 * Math.PI) / p));
            },
            ElasticOut: function(k) {
                var s, a = 0.1, p = 0.4;
                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }
                if (!a || a < 1) {
                    a = 1; s = p / 4;
                }
                else{
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }
                return (a * Math.pow(2, - 10 * k) *
                        Math.sin((k - s) * (2 * Math.PI) / p) + 1);
            },
            ElasticInOut: function(k) {
                var s, a = 0.1, p = 0.4;
                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }
                if (!a || a < 1) {
                    a = 1; s = p / 4;
                }
                else{
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }
                if ((k *= 2) < 1) {
                    return - 0.5 * (a * Math.pow(2, 10 * (k -= 1))
                        * Math.sin((k - s) * (2 * Math.PI) / p));
                }
                return a * Math.pow(2, -10 * (k -= 1))
                        * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

            },

            // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
            BackIn: function(k) {
                var s = 1.70158;
                return k * k * ((s + 1) * k - s);
            },
            BackOut: function(k) {
                var s = 1.70158;
                return --k * k * ((s + 1) * k + s) + 1;
            },
            BackInOut: function(k) {
                var s = 1.70158 * 1.525;
                if ((k *= 2) < 1) {
                    return 0.5 * (k * k * ((s + 1) * k - s));
                }
                return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
            },

            // 创建弹跳效果
            BounceIn: function(k) {
                return 1 - Easing.BounceOut(1 - k);
            },
            BounceOut: function(k) {
                if (k < (1 / 2.75)) {
                    return 7.5625 * k * k;
                }
                else if (k < (2 / 2.75)) {
                    return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
                } else if (k < (2.5 / 2.75)) {
                    return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
                } else {
                    return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
                }
            },
            BounceInOut: function(k) {
                if (k < 0.5) {
                    return Easing.BounceIn(k * 2) * 0.5;
                }
                return Easing.BounceOut(k * 2 - 1) * 0.5 + 0.5;
            }
        };

        return Easing;
    }
);


/**
 * 动画主控制器
 * @config target 动画对象，可以是数组，如果是数组的话会批量分发onframe等事件
 * @config life(1000) 动画时长
 * @config delay(0) 动画延迟时间
 * @config loop(true)
 * @config gap(0) 循环的间隔时间
 * @config onframe
 * @config easing(optional)
 * @config ondestroy(optional)
 * @config onrestart(optional)
 */
define(
    'zrender/animation/controller',['require','./easing'],function(require) {

        var Easing = require('./easing');

        var Controller = function(options) {

            this._targetPool = options.target || {};
            if (this._targetPool.constructor != Array) {
                this._targetPool = [this._targetPool];
            }

            //生命周期
            this._life = options.life || 1000;
            //延时
            this._delay = options.delay || 0;
            //开始时间
            this._startTime = new Date().getTime() + this._delay;//单位毫秒

            //结束时间
            this._endTime = this._startTime + this._life*1000;

            //是否循环
            this.loop = typeof(options.loop) == 'undefined'
                        ? false : options.loop;

            this.gap = options.gap || 0;

            this.easing = options.easing || 'Linear';

            this.onframe = options.onframe || null;

            this.ondestroy = options.ondestroy || null;

            this.onrestart = options.onrestart || null;
        };

        Controller.prototype = {
            step : function(time) {
                var percent = (time - this._startTime) / this._life;

                //还没开始
                if (percent < 0) {
                    return;
                }

                percent = Math.min(percent, 1);

                var easingFunc = typeof(this.easing) == 'string'
                                 ? Easing[this.easing]
                                 : this.easing;
                var schedule;
                if (typeof easingFunc === 'function') {
                    schedule = easingFunc(percent);
                }else{
                    schedule = percent;
                }
                this.fire('frame', schedule);

                //结束
                if (percent == 1) {
                    if (this.loop) {
                        this.restart();
                        // 重新开始周期
                        // 抛出而不是直接调用事件直到 stage.update 后再统一调用这些事件
                        return 'restart';

                    }else{
                        // 动画完成将这个控制器标识为待删除
                        // 在Animation.update中进行批量删除
                        this._needsRemove = true;

                        return 'destroy';
                    }
                }else{
                    return null;
                }
            },
            restart : function() {
                this._startTime = new Date().getTime() + this.gap;
            },
            fire : function(eventType, arg) {
                for(var i = 0, len = this._targetPool.length; i < len; i++) {
                    if (this['on' + eventType]) {
                        this['on' + eventType](this._targetPool[i], arg);
                    }
                }
            }
        };
        Controller.prototype.constructor = Controller;

        return Controller;
    }
);
/**
 * 动画主类, 调度和管理所有动画控制器
 *
 * @author lang(shenyi01@baidu.com)
 *
 * @class : Animation
 * @config : stage(optional) 绘制类, 需要提供update接口
 * @config : fps(optional) 帧率, 是自动更新动画的时候需要提供
 * @config : onframe(optional)
 * @method : add
 * @method : remove
 * @method : update
 * @method : start
 * @method : stop
 */
define(
    'zrender/animation/animation',['require','./controller','../tool/util'],function(require) {
        var Controller = require('./controller');
        var util = require('../tool/util');

        // Polyfill of requestAnimationFrame
        var requrestAnimationFrame = window.requrestAnimationFrame
                                     || window.mozRequestAnimationFrame
                                     || window.webkitRequestAnimationFrame
                                     || function(callback) {
                                            window.setTimeout(
                                                callback, 1000 / 60
                                           );
                                        };

        var Animation = function(options) {

            options = options || {};

            this.stage = options.stage || {};

            this.onframe = options.onframe || function() {};

            // private properties
            this._controllerPool = [];

            this._running = false;
        };

        Animation.prototype = {
            add : function(controller) {
                this._controllerPool.push(controller);
            },
            remove : function(controller) {
                var idx = util.indexOf(this._controllerPool, controller);
                if (idx >= 0) {
                    this._controllerPool.splice(idx, 1);
                }
            },
            update : function() {
                var time = new Date().getTime();
                var cp = this._controllerPool;
                var len = cp.length;

                var deferredEvents = [];
                var deferredCtls = [];
                for (var i = 0; i < len; i++) {
                    var controller = cp[i];
                    var e = controller.step(time);
                    // 需要在stage.update之后调用的事件，例如destroy
                    if (e) {
                        deferredEvents.push(e);
                        deferredCtls.push(controller);
                    }
                }
                if (this.stage
                    && this.stage.update
                    && this._controllerPool.length
               ) {
                    this.stage.update();
                }

                // 删除动画完成的控制器
                var newArray = [];
                for (var i = 0; i < len; i++) {
                    if (!cp[i]._needsRemove) {
                        newArray.push(cp[i]);
                        cp[i]._needsRemove = false;
                    }
                }
                this._controllerPool = newArray;

                len = deferredEvents.length;
                for (var i = 0; i < len; i++) {
                    deferredCtls[i].fire(deferredEvents[i]);
                }

                this.onframe();

            },
            // 启用start函数之后每个1000/fps事件就会刷新
            // 也可以不使用animation的start函数
            // 手动每一帧去调用update函数更新状态
            start : function() {
                var self = this;

                this._running = true;

                function step() {
                    if (self._running) {
                        self.update();
                        requrestAnimationFrame(step);
                    }
                }

                requrestAnimationFrame(step);
            },
            stop : function() {
                this._running = false;
            },
            clear : function() {
                this._controllerPool = [];
            },
            animate : function(target, loop, getter, setter) {
                var deferred = new Deferred(target, loop, getter, setter);
                deferred.animation = this;
                return deferred;
            }
        };
        Animation.prototype.constructor = Animation;

        function _defaultGetter(target, key) {
            return target[key];
        }
        function _defaultSetter(target, key, value) {
            target[key] = value;
        }
        // 递归做插值
        // TODO 对象的插值
        function _interpolate(
            prevValue,
            nextValue,
            percent,
            target,
            propName,
            getter,
            setter
       ) {
             // 遍历数组做插值
            if (prevValue instanceof Array
                && nextValue instanceof Array
           ) {
                var minLen = Math.min(prevValue.length, nextValue.length);
                var largerArray;
                var maxLen;
                var result = [];
                if (minLen === prevValue.length) {
                    maxLen = nextValue.length;
                    largerArray = nextValue;
                }else{
                    maxLen = prevValue.length;
                    largerArray = prevValue.length;
                }
                for (var i = 0; i < minLen; i++) {
                    // target[propName] 作为新的target,
                    // i 作为新的propName递归进行插值
                    result.push(_interpolate(
                            prevValue[i],
                            nextValue[i],
                            percent,
                            getter(target, propName),
                            i,
                            getter,
                            setter
                   ));
                }
                // 赋值剩下不需要插值的数组项
                for (var i = minLen; i < maxLen; i++) {
                    result.push(largerArray[i]);
                }

                setter(target, propName, result);
            }
            else{
                prevValue = parseFloat(prevValue);
                nextValue = parseFloat(nextValue);
                if (!isNaN(prevValue) && !isNaN(nextValue)) {
                    var value = (nextValue-prevValue) * percent+prevValue;
                    setter(target, propName, value);
                    return value;
                }
            }
        }
        function Deferred(target, loop, getter, setter) {
            this._tracks = {};
            this._target = target;

            this._loop = loop || false;

            this._getter = getter || _defaultGetter;
            this._setter = setter || _defaultSetter;

            this._controllerCount = 0;

            this._delay = 0;

            this._doneList = [];

            this._onframeList = [];

            this._controllerList = [];
        }

        Deferred.prototype = {
            when : function(time /* ms */, props, easing) {
                for (var propName in props) {
                    if (! this._tracks[propName]) {
                        this._tracks[propName] = [];
                        // 初始状态
                        this._tracks[propName].push({
                            time : 0,
                            value : this._getter(this._target, propName)
                        });
                    }
                    this._tracks[propName].push({
                        time : time,
                        value : props[propName],
                        easing : easing
                    });
                }
                return this;
            },
            during : function(callback) {
                this._onframeList.push(callback);
                return this;
            },
            start : function() {
                var self = this;
                var delay;
                var track;
                var trackMaxTime;

                function createOnframe(now, next, propName) {
                    // 复制出新的数组，不然动画的时候改变数组的值也会影响到插值
                    var prevValue = clone(now.value);
                    var nextValue = clone(next.value);
                    return function(target, schedule) {
                        _interpolate(
                            prevValue,
                            nextValue,
                            schedule,
                            target,
                            propName,
                            self._getter,
                            self._setter
                       );
                        for (var i = 0; i < self._onframeList.length; i++) {
                            self._onframeList[i](target, schedule);
                        }
                    };
                }

                function ondestroy() {
                    self._controllerCount--;
                    if (self._controllerCount === 0) {
                        var len = self._doneList.length;
                        // 所有动画完成
                        for (var i = 0; i < len; i++) {
                            self._doneList[i].call(self);
                        }
                    }
                }

                for (var propName in this._tracks) {
                    delay = this._delay;
                    track = this._tracks[propName];
                    if (track.length) {
                        trackMaxTime = track[track.length-1].time;
                    }else{
                        continue;
                    }
                    for (var i = 0; i < track.length-1; i++) {
                        var now = track[i],
                            next = track[i+1];

                        var controller = new Controller({
                            target : self._target,
                            life : next.time - now.time,
                            delay : delay,
                            loop : self._loop,
                            gap : trackMaxTime - (next.time - now.time),
                            easing : next.easing,
                            onframe : createOnframe(now, next, propName),
                            ondestroy : ondestroy
                        });
                        this._controllerList.push(controller);

                        this._controllerCount++;
                        delay = next.time + this._delay;

                        self.animation.add(controller);
                    }
                }
                return this;
            },
            stop : function() {
                for (var i = 0; i < this._controllerList.length; i++) {
                    var controller = this._controllerList[i];
                    this.animation.remove(controller);
                }
            },
            delay : function(time) {
                this._delay = time;
                return this;
            },
            done : function(func) {
                this._doneList.push(func);
                return this;
            }
        };

        function clone(value) {
            if (value && value instanceof Array) {
                return Array.prototype.slice.call(value);
            }
            else {
                return value;
            }
        }

        return Animation;
    }
);

/**
 * zrender: loading特效
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * 扩展loading effect：
 * getBackgroundShape：获取背景图形
 * getTextShape：获取文字
 * define : 定义效果
 *
 * 内置效果
 * bar：进度条
 * whirling：旋转水滴
 * dynamicLine：动态线条
 * bubble：气泡
 */
define(
    'zrender/tool/loadingEffect',['require','./util','./color','./color','./color','./color','./color','./math'],function(require) {
        var util = require('./util');
        var self;
        var _defaultText = 'Loading...';
        var _defaultTextFont = 'normal 16px Arial';

        var _width;
        var _height;

        function define(name, fun) {
            self[name] = fun;
        }

        /**
         * 获取loading文字图形
         * @param {Object} textStyle 文字style，同shape/text.style
         */
        function getTextShape(textStyle) {
            return {
                shape : 'text',
                highlightStyle : util.merge(
                    {
                        x : _width / 2,
                        y : _height / 2,
                        text : _defaultText,
                        textAlign : 'center',
                        textBaseline : 'middle',
                        textFont : _defaultTextFont,
                        color: '#333',
                        brushType : 'fill'
                    },
                    textStyle,
                    {'overwrite': true, 'recursive': true}
                )
            };
        }

        /**
         * 获取loading背景图形
         * @param {color} color 背景颜色
         */
        function getBackgroundShape (color) {
            return {
                shape : 'rectangle',
                highlightStyle : {
                    x : 0,
                    y : 0,
                    width : _width,
                    height : _height,
                    brushType : 'fill',
                    color : color
                }
            };
        }

        // 调整值区间
        function _adjust(value, region) {
            if (value <= region[0]) {
                value = region[0];
            }
            else if (value >= region[1]) {
                value = region[1];
            }
            return value;
        }

        /**
         * 进度条
         * @param {Object} loadingOption
         * @param {Object} addShapeHandle
         * @param {Object} refreshHandle
         */
        function bar(loadingOption, addShapeHandle, refreshHandle) {
            var zrColor = require('./color');
            // 特效默认配置
            loadingOption = util.merge(
                loadingOption,
                {
                    textStyle : {
                        color : '#888'
                    },
                    backgroundColor : 'rgba(250, 250, 250, 0.8)',
                    effectOption : {
                        x : 0,
                        y : _height / 2 - 30,
                        width : _width,
                        height : 5,
                        brushType : 'fill',
                        timeInterval : 100
                    }
                },
                {'overwrite': false, 'recursive': true}
            );

            var textShape = getTextShape(loadingOption.textStyle);

            var background = getBackgroundShape(loadingOption.backgroundColor);

            var effectOption = loadingOption.effectOption;
            // 初始化动画元素
            var barShape = {
                shape : 'rectangle',
                highlightStyle : util.clone(effectOption)
            };
            barShape.highlightStyle.color =
                effectOption.color
                || zrColor.getLinearGradient(
                    effectOption.x,
                    effectOption.y,
                    effectOption.x + effectOption.width,
                    effectOption.y + effectOption.height,
                    [[0, '#ff6400'], [0.5, '#ffe100'], [1, '#b1ff00']]
                );

            if (typeof loadingOption.progress != 'undefined') {
                // 指定进度
                addShapeHandle(background);

                barShape.highlightStyle.width =
                    _adjust(loadingOption.progress, [0,1])
                    * loadingOption.effectOption.width;
                addShapeHandle(barShape);

                addShapeHandle(textShape);

                refreshHandle();
                return;
            }
            else {
                // 循环显示
                barShape.highlightStyle.width = 0;
                return setInterval(
                    function() {
                        addShapeHandle(background);

                        if (barShape.highlightStyle.width
                            < loadingOption.effectOption.width
                        ) {
                            barShape.highlightStyle.width += 8;
                        }
                        else {
                            barShape.highlightStyle.width = 0;
                        }
                        addShapeHandle(barShape);

                        addShapeHandle(textShape);
                        refreshHandle();
                    },
                    effectOption.timeInterval
                );
            }
        }

        /**
         * 旋转水滴
         * @param {Object} loadingOption
         * @param {Object} addShapeHandle
         * @param {Object} refreshHandle
         */
        function whirling(loadingOption, addShapeHandle, refreshHandle) {
            // 特效默认配置
            loadingOption.effectOption = util.merge(
                loadingOption.effectOption || {},
                {
                    x : _width / 2 - 80,
                    y : _height / 2,
                    r : 18,
                    colorIn : '#fff',
                    colorOut : '#555',
                    colorWhirl : '#6cf',
                    timeInterval : 50
                }
            );

            var effectOption = loadingOption.effectOption;
            loadingOption = util.merge(
                loadingOption,
                {
                    textStyle : {
                        color : '#888',
                        x : effectOption.x + effectOption.r + 10,
                        y : effectOption.y,
                        textAlign : 'start'
                    },
                    backgroundColor : 'rgba(250, 250, 250, 0.8)'
                },
                {'overwrite': false, 'recursive': true}
            );

            var textShape = getTextShape(loadingOption.textStyle);

            var background = getBackgroundShape(loadingOption.backgroundColor);

            // 初始化动画元素
            var droplet = {
                shape : 'droplet',
                highlightStyle : {
                    a : Math.round(effectOption.r / 2),
                    b : Math.round(effectOption.r - effectOption.r / 6),
                    brushType : 'fill',
                    color : effectOption.colorWhirl
                }
            };
            var circleIn = {
                shape : 'circle',
                highlightStyle : {
                    r : Math.round(effectOption.r / 6),
                    brushType : 'fill',
                    color : effectOption.colorIn
                }
            };
            var circleOut = {
                shape : 'ring',
                highlightStyle : {
                    r0 : Math.round(effectOption.r - effectOption.r / 3),
                    r : effectOption.r,
                    brushType : 'fill',
                    color : effectOption.colorOut
                }
            };

            var pos = [0, effectOption.x, effectOption.y];

            droplet.highlightStyle.x
                = circleIn.highlightStyle.x
                = circleOut.highlightStyle.x
                = pos[1];
            droplet.highlightStyle.y
                = circleIn.highlightStyle.y
                = circleOut.highlightStyle.y
                = pos[2];

            return setInterval(
                function() {
                    addShapeHandle(background);
                    addShapeHandle(circleOut);
                    pos[0] -= 0.3;
                    droplet.rotation = pos;
                    addShapeHandle(droplet);
                    addShapeHandle(circleIn);
                    addShapeHandle(textShape);
                    refreshHandle();
                },
                effectOption.timeInterval
            );
        }

        /**
         * 动态线
         * @param {Object} loadingOption
         * @param {Object} addShapeHandle
         * @param {Object} refreshHandle
         */
        function dynamicLine(loadingOption, addShapeHandle, refreshHandle) {
            var zrColor = require('./color');
            // 特效默认配置
            loadingOption = util.merge(
                loadingOption,
                {
                    textStyle : {
                        color : '#fff'
                    },
                    backgroundColor : 'rgba(0, 0, 0, 0.8)',
                    effectOption : {
                        n : 30,
                        lineWidth : 1,
                        color : 'random',
                        timeInterval : 100
                    }
                },
                {'overwrite': false, 'recursive': true}
            );

            var textShape = getTextShape(loadingOption.textStyle);

            var background = getBackgroundShape(loadingOption.backgroundColor);

            var effectOption = loadingOption.effectOption;
            var n = effectOption.n;
            var lineWidth = effectOption.lineWidth;

            var shapeList = [];
            var pos;
            var len;
            var xStart;
            var color;
            // 初始化动画元素
            for(var i = 0; i < n; i++) {
                xStart = -Math.ceil(Math.random() * 1000);
                len = Math.ceil(Math.random() * 400);
                pos = Math.ceil(Math.random() * _height);

                if (effectOption.color == 'random') {
                    color = zrColor.random();
                }
                else {
                    color = effectOption.color;
                }
                shapeList[i] = {
                    shape : 'line',
                    highlightStyle : {
                        xStart : xStart,
                        yStart : pos,
                        xEnd : xStart + len,
                        yEnd : pos,
                        strokeColor : color,
                        lineWidth : lineWidth
                    },
                    animationX : Math.ceil(Math.random() * 100),
                    len : len
                };
            }

            return setInterval(
                function() {
                    addShapeHandle(background);
                    var style;
                    for(var i = 0; i < n; i++) {
                        style = shapeList[i].highlightStyle ;

                        if (style.xStart >= _width){
                            shapeList[i].len = Math.ceil(Math.random() * 400);
                            shapeList[i].highlightStyle .xStart = -400;
                            shapeList[i].highlightStyle .xEnd =
                                -400 + shapeList[i].len;
                            shapeList[i].highlightStyle .yStart =
                                Math.ceil(Math.random() * _height);
                            shapeList[i].highlightStyle .yEnd =
                                shapeList[i].highlightStyle.yStart;
                        }
                        shapeList[i].highlightStyle.xStart +=
                            shapeList[i].animationX;
                        shapeList[i].highlightStyle.xEnd +=
                            shapeList[i].animationX;

                        addShapeHandle(shapeList[i]);
                    }

                    addShapeHandle(textShape);
                    refreshHandle();
                },
                effectOption.timeInterval
            );
        }

        /**
         * 泡泡
         * @param {Object} loadingOption
         * @param {Object} addShapeHandle
         * @param {Object} refreshHandle
         */
        function bubble(loadingOption, addShapeHandle, refreshHandle) {
            var zrColor = require('./color');
            // 特效默认配置
            loadingOption = util.merge(
                loadingOption,
                {
                    textStyle : {
                        color : '#888'
                    },
                    backgroundColor : 'rgba(250, 250, 250, 0.8)',
                    effectOption : {
                        n : 50,
                        lineWidth : 2,
                        brushType : 'stroke',
                        color : 'random',
                        timeInterval : 100
                    }
                },
                {'overwrite': false, 'recursive': true}
            );

            var textShape = getTextShape(loadingOption.textStyle);

            var background = getBackgroundShape(loadingOption.backgroundColor);

            var effectOption = loadingOption.effectOption;
            var n = effectOption.n;
            var brushType = effectOption.brushType;
            var lineWidth = effectOption.lineWidth;

            var shapeList = [];
            var color;
            // 初始化动画元素
            for(var i = 0; i < n; i++) {
                if (effectOption.color == 'random') {
                    color = zrColor.alpha(zrColor.random(), 0.3);
                }
                else {
                    color = effectOption.color;
                }
                shapeList[i] = {
                    shape : 'circle',
                    highlightStyle : {
                        x : Math.ceil(Math.random() * _width),
                        y : Math.ceil(Math.random() * _height),
                        r : Math.ceil(Math.random() * 40),
                        brushType : brushType,
                        color : color,
                        strokeColor : color,
                        lineWidth : lineWidth
                    },
                    animationY : Math.ceil(Math.random() * 20)
                };
            }

            return setInterval(
                function () {
                    addShapeHandle(background);
                    var style;
                    for(var i = 0; i < n; i++) {
                        style = shapeList[i].highlightStyle;

                        if (style.y - shapeList[i].animationY + style.r <= 0){
                            shapeList[i].highlightStyle.y = _height + style.r;
                            shapeList[i].highlightStyle.x = Math.ceil(
                                Math.random() * _width
                            );
                        }
                        shapeList[i].highlightStyle.y -=
                            shapeList[i].animationY;

                        addShapeHandle(shapeList[i]);
                    }

                    addShapeHandle(textShape);
                    refreshHandle();
                },
                effectOption.timeInterval
            );
        }

        /**
         * 旋转
         * @param {Object} loadingOption
         * @param {Object} addShapeHandle
         * @param {Object} refreshHandle
         */
        function spin(loadingOption, addShapeHandle, refreshHandle) {
            var zrColor = require('./color');
            // 特效默认配置
            loadingOption.effectOption = util.merge(
                loadingOption.effectOption || {},
                {
                    x : _width / 2 - 80,
                    y : _height / 2,
                    r0 : 9,
                    r : 15,
                    n : 18,
                    color : '#fff',
                    timeInterval : 100
                }
            );

            var effectOption = loadingOption.effectOption;
            loadingOption = util.merge(
                loadingOption,
                {
                    textStyle : {
                        color : '#fff',
                        x : effectOption.x + effectOption.r + 10,
                        y : effectOption.y,
                        textAlign : 'start'
                    },
                    backgroundColor : 'rgba(0, 0, 0, 0.8)'
                },
                {'overwrite': false, 'recursive': true}
            );

            var textShape = getTextShape(loadingOption.textStyle);

            var background = getBackgroundShape(loadingOption.backgroundColor);

            var n = effectOption.n;
            var x = effectOption.x;
            var y = effectOption.y;
            var r0 = effectOption.r0;
            var r = effectOption.r;
            var color = effectOption.color;
            // 初始化动画元素
            var shapeList = [];
            var preAngle = Math.round(180 / n);
            for(var i = 0; i < n; i++) {
                shapeList[i] = {
                    shape : 'sector',
                    highlightStyle  : {
                        x : x,
                        y : y,
                        r0 : r0,
                        r : r,
                        startAngle : preAngle * i * 2,
                        endAngle : preAngle * i * 2 + preAngle,
                        color : zrColor.alpha(color, (i + 1) / n),
                        brushType: 'fill'
                    }
                };
            }

            var pos = [0, x, y];

            return setInterval(
                function() {
                    addShapeHandle(background);
                    pos[0] -= 0.3;
                    for(var i = 0; i < n; i++) {
                        shapeList[i].rotation = pos;
                        addShapeHandle(shapeList[i]);
                    }

                    addShapeHandle(textShape);
                    refreshHandle();
                },
                effectOption.timeInterval
            );
        }


        /**
         * 圆环
         * @param {Object} loadingOption
         * @param {Object} addShapeHandle
         * @param {Object} refreshHandle
         */
        function ring(loadingOption, addShapeHandle, refreshHandle) {
            var zrColor = require('./color');
            var zrMath = require('./math');
            // 特效默认配置
            loadingOption = util.merge(
                loadingOption,
                {
                    textStyle : {
                        color : '#07a'
                    },
                    backgroundColor : 'rgba(250, 250, 250, 0.8)',
                    effectOption : {
                        x : _width / 2,
                        y : _height / 2,
                        r0 : 60,
                        r : 100,
                        color : '#bbdcff',
                        brushType: 'fill',
                        textPosition : 'inside',
                        textFont : 'normal 30px verdana',
                        textColor : 'rgba(30, 144, 255, 0.6)',
                        timeInterval : 100
                    }
                },
                {'overwrite': false, 'recursive': true}
            );

            var effectOption = loadingOption.effectOption;
            var textStyle = loadingOption.textStyle;
            textStyle.x = typeof textStyle.x != 'undefined'
                ? textStyle.x : effectOption.x;
            textStyle.y = typeof textStyle.y != 'undefined'
                ? textStyle.y
                : (effectOption.y + (effectOption.r0 + effectOption.r) / 2 - 5);
            var textShape = getTextShape(loadingOption.textStyle);

            var background = getBackgroundShape(loadingOption.backgroundColor);

            var x = effectOption.x;
            var y = effectOption.y;
            var r0 = effectOption.r0 + 6;
            var r = effectOption.r - 6;
            var color = effectOption.color;
            var darkColor = zrColor.lift(color, 0.1);

            var shapeRing = {
                shape : 'ring',
                highlightStyle : util.clone(effectOption)
            };
            // 初始化动画元素
            var shapeList = [];
            var clolrList = zrColor.getGradientColors(
                ['#ff6400', '#ffe100', '#97ff00'], 25
            );
            var preAngle = 15;
            var endAngle = 240;

            for(var i = 0; i < 16; i++) {
                shapeList.push({
                    shape : 'sector',
                    highlightStyle  : {
                        x : x,
                        y : y,
                        r0 : r0,
                        r : r,
                        startAngle : endAngle - preAngle,
                        endAngle : endAngle,
                        brushType: 'fill',
                        color : darkColor
                    },
                    _color : zrColor.getLinearGradient(
                        x + r0 * zrMath.cos(endAngle, true),
                        y - r0 * zrMath.sin(endAngle, true),
                        x + r0 * zrMath.cos(endAngle - preAngle, true),
                        y - r0 * zrMath.sin(endAngle - preAngle, true),
                        [
                            [0, clolrList[i * 2]],
                            [1, clolrList[i * 2 + 1]]
                        ]
                    )
                });
                endAngle -= preAngle;
            }
            endAngle = 360;
            for(var i = 0; i < 4; i++) {
                shapeList.push({
                    shape : 'sector',
                    highlightStyle  : {
                        x : x,
                        y : y,
                        r0 : r0,
                        r : r,
                        startAngle : endAngle - preAngle,
                        endAngle : endAngle,
                        brushType: 'fill',
                        color : darkColor
                    },
                    _color : zrColor.getLinearGradient(
                        x + r0 * zrMath.cos(endAngle, true),
                        y - r0 * zrMath.sin(endAngle, true),
                        x + r0 * zrMath.cos(endAngle - preAngle, true),
                        y - r0 * zrMath.sin(endAngle - preAngle, true),
                        [
                            [0, clolrList[i * 2 + 32]],
                            [1, clolrList[i * 2 + 33]]
                        ]
                    )
                });
                endAngle -= preAngle;
            }

            var n = 0;
            if (typeof loadingOption.progress != 'undefined') {
                // 指定进度
                addShapeHandle(background);

                n = _adjust(loadingOption.progress, [0,1]).toFixed(2) * 100 / 5;
                shapeRing.highlightStyle.text = n * 5 + '%';
                addShapeHandle(shapeRing);

                for(var i = 0; i < 20; i++) {
                    shapeList[i].highlightStyle.color = i < n
                        ? shapeList[i]._color : darkColor;
                    addShapeHandle(shapeList[i]);
                }

                addShapeHandle(textShape);

                refreshHandle();
                return;
            }
            else {
                // 循环显示
                return setInterval(
                    function() {
                        addShapeHandle(background);

                        n += n >= 20 ? -20 : 1;

                        //shapeRing.highlightStyle.text = n * 5 + '%';
                        addShapeHandle(shapeRing);

                        for(var i = 0; i < 20; i++) {
                            shapeList[i].highlightStyle.color = i < n
                                ? shapeList[i]._color : darkColor;
                            addShapeHandle(shapeList[i]);
                        }

                        addShapeHandle(textShape);
                        refreshHandle();
                    },
                    effectOption.timeInterval
                );
            }
        }

        function start(loadingOption, addShapeHandle, refreshHandle) {
            var loadingEffect = self.ring;   // 默认特效
            if (typeof loadingOption.effect == 'function') {
                // 自定义特效
                loadingEffect = loadingOption.effect;
            }
            else if (typeof self[loadingOption.effect] == 'function'){
                // 指定特效
                loadingEffect = self[loadingOption.effect];
            }

            _width = loadingOption.canvasSize.width;
            _height = loadingOption.canvasSize.height;

            return loadingEffect(
                loadingOption, addShapeHandle, refreshHandle
            );
        }

        function stop(loadingTimer) {
            clearInterval(loadingTimer);
        }

        self = {
            // 这三个方法用于扩展loading effect
            getBackgroundShape : getBackgroundShape,
            getTextShape : getTextShape,
            define : define,
            // 内置特效
            bar : bar,
            whirling : whirling,
            dynamicLine : dynamicLine,
            bubble : bubble,
            spin : spin,
            ring : ring,
            // 方法
            start : start,
            stop : stop
        };

        return self;
    }
);
/*!
 * ZRender, a lightweight canvas library with a MVC architecture, data-driven 
 * and provides an event model like DOM.
 *  
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 * 
 * Redistribution and use of this software in source and binary forms, with or 
 * without modification, are permitted provided that the following conditions 
 * are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice, 
 * this list of conditions and the following disclaimer in the documentation 
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of Baidu Inc. nor the names of its contributors may be used
 * to endorse or promote products derived from this software without specific 
 * prior written permission of Baidu Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * zrender: core核心类
 *
 * @desc zrender是一个轻量级的Canvas类库，MVC封装，数据驱动，提供类Dom事件模型。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define(
    'zrender/zrender',['require','./lib/excanvas','./shape','./shape/circle','./shape/ellipse','./shape/line','./shape/polygon','./shape/brokenLine','./shape/rectangle','./shape/ring','./shape/sector','./shape/text','./shape/heart','./shape/droplet','./shape/path','./shape/image','./shape/beziercurve','./shape/star','./shape/isogon','./animation/animation','./tool/util','./tool/util','./config','./tool/loadingEffect','./tool/loadingEffect','./config','./tool/event'],function(require) {
        /*
         * HTML5 Canvas for Internet Explorer!
         * Modern browsers like Firefox, Safari, Chrome and Opera support
         * the HTML5 canvas tag to allow 2D command-based drawing.
         * ExplorerCanvas brings the same functionality to Internet Explorer.
         * To use, web developers only need to include a single script tag
         * in their existing web pages.
         *
         * https://code.google.com/p/explorercanvas/
         * http://explorercanvas.googlecode.com/svn/trunk/excanvas.js
         */
        // 核心代码会生成一个全局变量 G_vmlCanvasManager，模块改造后借用于快速判断canvas支持
        require('./lib/excanvas');

        var self = {};
        var zrender = self;     // 提供MVC内部反向使用静态方法；

        var _idx = 0;           //ZRender instance's id
        var _instances = {};    //ZRender实例map索引

        /**
         * zrender初始化
         * 不让外部直接new ZRender实例，为啥？
         * 不为啥，提供全局可控同时减少全局污染和降低命名冲突的风险！
         *
         * @param {HTMLElement} dom dom对象，不帮你做document.getElementById了
         * @param {Object=} params 个性化参数，如自定义shape集合，带进来就好
         *
         * @return {ZRender} ZRender实例
         */
        self.init = function(dom, params) {
            var zi = new ZRender(++_idx + '', dom, params || {});
            _instances[_idx] = zi;
            return zi;
        };

        /**
         * zrender实例销毁，记在_instances里的索引也会删除了
         * 管生就得管死，可以通过zrender.dispose(zi)销毁指定ZRender实例
         * 当然也可以直接zi.dispose()自己销毁
         *
         * @param {ZRender=} zi ZRender对象，不传则销毁全部
         */
        self.dispose = function(zi) {
            if (zi) {
                zi.dispose();
            }
            else {
                for (var z in _instances) {
                    _instances[z].dispose();
                }
                _instances = {};
            }
            return self;
        };

        /**
         * 获取zrender实例
         *
         * @param {string} id ZRender对象索引
         */
        self.getInstance = function(id) {
            return _instances[id];
        };

        /**
         * 删除zrender实例，ZRender实例dispose时会调用，
         * 删除后getInstance则返回undefined
         * ps: 仅是删除，删除的实例不代表已经dispose了~~
         *     这是一个摆脱全局zrender.dispose()自动销毁的后门，
         *     take care of yourself~
         *
         * @param {string} id ZRender对象索引
         */
        self.delInstance = function(id) {
            if (_instances[id]) {
                //只是对垃圾回收上的友好照顾，不写也大不了~
                _instances[id] = null;
                delete _instances[id];
            }
            return self;
        };

        // 是否异常捕获
        self.catchBrushException = false;

        /**
         * debug日志选项：catchBrushException为true下有效
         * 0 : 不生成debug数据，发布用
         * 1 : 异常抛出，调试用
         * 2 : 控制台输出，调试用
         */
        self.debugMode = 0;
        self.log = function() {
            if (self.debugMode === 0) {
                return;
            }
            else if (self.debugMode == 1) {
                for (var k in arguments) {
                    throw new Error(arguments[k]);
                }
            }
            else if (self.debugMode > 1) {
                for (var k in arguments) {
                    console.log(arguments[k]);
                }
            }

            return self;
        };

        /**
         * ZRender接口类，对外可用的所有接口都在这里！！
         * storage（M）、painter（V）、handler（C）为内部私有类，外部接口不可见
         * 非get接口统一返回self支持链式调用~
         *
         * @param {string} id 唯一标识
         * @param {HTMLElement} dom dom对象，不帮你做document.getElementById
         * @param {Object=} params 个性化参数，如自定义shape集合，带进来就好
         *
         * @return {ZRender} ZRender实例
         */
        function ZRender(id, dom, params) {
            var self = this;
            var shape = require('./shape');
            // 内置图形注册
            require('./shape/circle');
            require('./shape/ellipse');
            require('./shape/line');
            require('./shape/polygon');
            require('./shape/brokenLine');
            require('./shape/rectangle');
            require('./shape/ring');
            require('./shape/sector');
            require('./shape/text');
            require('./shape/heart');
            require('./shape/droplet');
            require('./shape/path');
            require('./shape/image');
            require('./shape/beziercurve');
            require('./shape/star');
            require('./shape/isogon');
            
            var shapeLibrary;

            if (typeof params.shape == 'undefined') {
                //默认图形库
                shapeLibrary = shape;
            }
            else {
                //自定义图形库，私有化，实例独占
                shapeLibrary = {};
                for (var s in params.shape) {
                    shapeLibrary[s] = params.shape[s];
                }
                shapeLibrary.get = function(name) {
                    return shapeLibrary[name] || shape.get(name);
                };
            }

            var storage = new Storage(shapeLibrary);
            var painter = new Painter(dom, storage, shapeLibrary);
            var handler = new Handler(dom, storage, painter, shapeLibrary);

            // 动画控制
            var Animation = require('./animation/animation');
            var animatingShapes = [];
            var animation = new Animation({
                stage : {
                    update : function(){
                        self.update(animatingShapes);
                    }
                }
            });
            animation.start();

            /**
             * 获取实例唯一标识
             */
            self.getId = function() {
                return id;
            };

            /**
             * 添加图形形状
             * @param {Object} shape 形状对象，可用属性全集，详见各shape
             */
            self.addShape = function(shape) {
                storage.add(shape);
                return self;
            };

            /**
             * 删除图形形状
             * @param {string} shapeId 形状对象唯一标识
             */
            self.delShape = function(shapeId) {
                storage.del(shapeId);
                return self;
            };

            /**
             * 修改图形形状
             * @param {string} shapeId 形状对象唯一标识
             * @param {Object} shape 形状对象
             */
            self.modShape = function(shapeId, shape) {
                storage.mod(shapeId, shape);
                return self;
            };

            /**
             * 添加额外高亮层显示，仅提供添加方法，每次刷新后高亮层图形均被清空
             * @param {Object} shape 形状对象
             */
            self.addHoverShape = function(shape) {
                storage.addHover(shape);
                return self;
            };

            /**
             * 渲染
             * @param {Function} callback  渲染结束后回调函数
             * todo:增加缓动函数
             */
            self.render = function(callback) {
                painter.render(callback);
                return self;
            };

            /**
             * 视图更新
             * @param {Function} callback  视图更新后回调函数
             */
            self.refresh = function(callback) {
                painter.refresh(callback);
                return self;
            };

            /**
             * 视图更新
             * @param {Array} shapeList 需要更新的图形元素列表
             * @param {Function} callback  视图更新后回调函数
             */
            self.update = function(shapeList, callback) {
                painter.update(shapeList, callback);
                return self;
            };

            self.resize = function() {
                painter.resize();
                return self;
            };

            /**
             * 动画
             * @param {string} shapeId 形状对象唯一标识
             * @param {string} path 需要添加动画的属性获取路径，可以通过a.b.c来获取深层的属性
             * @param {boolean} loop 动画是否循环
             * @return {Object} 动画的Deferred对象
             * Example:
             * zr.animate( circleId, 'style', false)
             *   .when(1000, { x: 10} )
             *   .done( function(){ console.log('Animation done')})
             *   .start()
             */
            self.animate = function(shapeId, path, loop) {
                var util = require('./tool/util');
                var shape = storage.get(shapeId);
                if (shape) {
                    var target;
                    if (path) {
                        var pathSplitted = path.split('.');
                        var prop = shape;
                        for (var i = 0, l = pathSplitted.length; i < l; i++) {
                            if (!prop) {
                                continue;
                            }
                            prop = prop[pathSplitted[i]];
                        }
                        if (prop) {
                            target = prop;
                        }
                    }
                    else {
                        target = shape;
                    }
                    if (!target) {
                        zrender.log(
                            'Property "'
                            + path
                            + '" is not existed in shape '
                            + shapeId
                        );
                        return;
                    }

                    if( typeof(shape.__aniCount) === 'undefined'){
                        // 正在进行的动画记数
                        shape.__aniCount = 0;
                    }
                    if( shape.__aniCount === 0 ){
                        animatingShapes.push(shape);
                    }
                    shape.__aniCount ++;

                    return animation.animate(target, loop)
                        .done(function() {
                            shape.__aniCount --;
                            if( shape.__aniCount === 0){
                                // 从animatingShapes里移除
                                var idx = util.indexOf(animatingShapes, shape);
                                animatingShapes.splice(idx, 1);
                            }
                        });
                }
                else {
                    zrender.log('Shape "'+ shapeId + '" not existed');
                }
            };

            /**
             * loading显示
             * @param  {Object} loadingOption 参数
             * {
             *     effect,
             *     //loading话术
             *     text:'',
             *     // 水平安放位置，默认为 'center'，可指定x坐标
             *     x:'center' || 'left' || 'right' || {number},
             *     // 垂直安放位置，默认为'top'，可指定y坐标
             *     y:'top' || 'bottom' || {number},
             *
             *     textStyle:{
             *         textFont: 'normal 20px Arial' || {textFont}, //文本字体
             *         color: {color}
             *     }
             * }
             */
            self.showLoading = function(loadingOption) {
                painter.showLoading(loadingOption);
                return self;
            };

            /**
             * loading结束
             */
            self.hideLoading = function() {
                painter.hideLoading();
                return self;
            };

            /**
             * 生成形状唯一ID
             * @param {string} [idPrefix] id前缀
             * @return {string} 不重复ID
             */
            self.newShapeId = function(idPrefix) {
                return storage.newShapeId(idPrefix);
            };

            /**
             * 获取视图宽度
             */
            self.getWidth = function() {
                return painter.getWidth();
            };

            /**
             * 获取视图高度
             */
            self.getHeight = function() {
                return painter.getHeight();
            };

            self.toDataURL = function(type, args) {
                return painter.toDataURL(type, args);
            };
            /**
             * 事件绑定
             * @param {string} eventName 事件名称
             * @param {Function} eventHandler 响应函数
             */
            self.on = function(eventName, eventHandler) {
                handler.on(eventName, eventHandler);
                return self;
            };

            /**
             * 事件解绑定，参数为空则解绑所有自定义事件
             * @param {string} eventName 事件名称
             * @param {Function} eventHandler 响应函数
             */
            self.un = function(eventName, eventHandler) {
                handler.un(eventName, eventHandler);
                return self;
            };

            /**
             * 清除当前ZRender下所有类图的数据和显示，clear后MVC和已绑定事件均还存在在，ZRender可用
             */
            self.clear = function() {
                storage.del();
                painter.clear();
                return self;
            };

            /**
             * 释放当前ZR实例（删除包括dom，数据、显示和事件绑定），dispose后ZR不可用
             */
            self.dispose = function() {
                animation.stop();
                animation = null;
                animatingShapes = null;

                self.clear();
                self = null;

                storage.dispose();
                storage = null;

                painter.dispose();
                painter = null;

                handler.dispose();
                handler = null;

                //释放后告诉全局删除对自己的索引，没想到啥好方法
                zrender.delInstance(id);

                return;
            };
        }

        /**
         * 内容仓库 (M)
         * @param {Object} shape 图形库
         */
        function Storage(shape) {
            var util = require('./tool/util');
            var self = this;

            var _idBase = 0;            //图形数据id自增基础

            //所有常规形状，id索引的map
            var _elements = {};

            //所有形状的z轴方向排列，提高遍历性能，zElements[0]的形状在zElements[1]形状下方
            var _zElements = [];

            //高亮层形状，不稳定，动态增删，数组位置也是z轴方向，靠前显示在下方
            var _hoverElements = [];

            var _maxZlevel = 0;         //最大zlevel
            var _changedZlevel = {};    //有数据改变的zlevel

            /**
             * 快速判断标志~
             * e.__silent 是否需要hover判断
             * e.__needTransform 是否需要进行transform
             * e.style.__rect 区域矩阵缓存，修改后清空，重新计算一次
             */
            function _mark(e) {
                if (e.hoverable || e.onclick || e.draggable
                    || e.onmousemove || e.onmouseover || e.onmouseout
                    || e.onmousedown || e.onmouseup
                    || e.ondragenter || e.ondragover || e.ondragleave
                    || e.ondrop
                ) {
                    e.__silent = false;
                }
                else {
                    e.__silent = true;
                }

                if (Math.abs(e.rotation[0]) > 0.0001
                    || Math.abs(e.position[0]) > 0.0001
                    || Math.abs(e.position[1]) > 0.0001
                    || Math.abs(e.scale[0] - 1) > 0.0001
                    || Math.abs(e.scale[1] - 1) > 0.0001
                ) {
                    e.__needTransform = true;
                }
                else {
                    e.__needTransform = false;
                }

                e.style = e.style || {};
                e.style.__rect = null;
            }

            /**
             * 唯一标识id生成
             * @param {string=} idHead 标识前缀
             */
            function newShapeId(idHead) {
                return (idHead || '') + (++_idBase);
            }

            /**
             * 添加
             * @param {Object} params 参数
             */
            function add(params) {
                //默认&必须的参数
                var e = {
                    'shape': 'circle',                      // 形状
                    'id': params.id || self.newShapeId(),   // 唯一标识
                    'zlevel': 0,                            // z轴位置
                    'draggable': false,                     // draggable可拖拽
                    'clickable': false,                     // clickable可点击响应
                    'hoverable': true,                      // hoverable可悬浮响应
                    'position': [0, 0],
                    'rotation' : [0, 0, 0],
                    'scale' : [1, 1, 0, 0]
                };
                util.merge(
                    e,
                    params,
                    {
                        'overwrite': true,
                        'recursive': true
                    }
                );
                _mark(e);
                _elements[e.id] = e;
                _zElements[e.zlevel] = _zElements[e.zlevel] || [];
                _zElements[e.zlevel].push(e);

                _maxZlevel = Math.max(_maxZlevel,e.zlevel);
                _changedZlevel[e.zlevel] = true;

                return self;
            }

            /**
             * 根据指定的shapeId获取相应的shape属性
             * @param {string=} idx 唯一标识
             */
            function get( shapeId ){
                return _elements[ shapeId ];
            }

            /**
             * 删除，shapeId不指定则全清空
             * @param {string=} idx 唯一标识
             */
            function del(shapeId) {
                if (typeof shapeId != 'undefined') {
                    if (_elements[shapeId]) {
                        _changedZlevel[_elements[shapeId].zlevel] = true;
                        var oldList = _zElements[_elements[shapeId].zlevel];
                        var newList = [];
                        for (var i = 0, l = oldList.length; i < l; i++){
                            if (oldList[i].id != shapeId) {
                                newList.push(oldList[i]);
                            }
                        }
                        _zElements[_elements[shapeId].zlevel] = newList;
                        delete _elements[shapeId];
                    }
                }
                else{
                    //不指定shapeId清空
                    _elements = {};
                    _zElements = [];
                    _hoverElements = [];
                    _maxZlevel = 0;         //最大zlevel
                    _changedZlevel = {      //有数据改变的zlevel
                        all : true
                    };
                }

                return self;
            }

            /**
             * 修改
             * @param {string} idx 唯一标识
             * @param {Object} params]参数
             */
            function mod(shapeId, params) {
                var e = _elements[shapeId];
                if (e) {
                    _changedZlevel[e.zlevel] = true;
                    util.merge(
                        e,
                        params,
                        {
                            'overwrite': true,
                            'recursive': true
                        }
                    );
                    _mark(e);
                    _changedZlevel[e.zlevel] = true;
                    _maxZlevel = Math.max(_maxZlevel,e.zlevel);
                }

                return self;
            }

            /**
             * 常规形状位置漂移，形状自身定义漂移函数
             * @param {string} idx 形状唯一标识
             *
             */
            function drift(shapeId, dx, dy) {
                var e = _elements[shapeId];
                e.__needTransform = true;
                if (!e.ondrift //ondrift
                    //有onbrush并且调用执行返回false或undefined则继续
                    || (e.ondrift && !e.ondrift(e, dx, dy))
                ) {
                    if (zrender.catchBrushException) {
                        try {
                            shape.get(e.shape).drift(e, dx, dy);
                        }
                        catch(error) {
                            zrender.log(error, 'drift error of ' + e.shape, e);
                        }
                    }
                    else {
                        shape.get(e.shape).drift(e, dx, dy);
                    }
                }

                _changedZlevel[e.zlevel] = true;

                return self;
            }

            /**
             * 添加高亮层数据
             * @param {Object} params 参数
             */
            function addHover(params) {
                if ((params.rotation && Math.abs(params.rotation[0]) > 0.0001)
                    || (params.position
                        && (Math.abs(params.position[0]) > 0.0001
                            || Math.abs(params.position[1]) > 0.0001))
                    || (params.scale
                        && (Math.abs(params.scale[0] - 1) > 0.0001
                        || Math.abs(params.scale[1] - 1) > 0.0001))
                ) {
                    params.__needTransform = true;
                }
                else {
                    params.__needTransform = false;
                }

                _hoverElements.push(params);
                return self;
            }

            /**
             * 删除高亮层数据
             */
            function delHover() {
                _hoverElements = [];
                return self;
            }

            function hasHoverShape() {
                return _hoverElements.length > 0;
            }

            /**
             * 遍历迭代器
             * @param {Function} fun 迭代回调函数，return true终止迭代
             * @param {Object=} option 迭代参数，缺省为仅降序遍历常规形状
             *     hover : true 是否迭代高亮层数据
             *     normal : 'down' | 'up' | 'free' 是否迭代常规数据，迭代时是否指定及z轴顺序
             */
            function iterShape(fun, option) {
                if (!option) {
                    option = {
                        hover: false,
                        normal: 'down'
                    };
                }
                if (option.hover) {
                    //高亮层数据遍历
                    for (var i = 0, l = _hoverElements.length; i < l; i++) {
                        if (fun(_hoverElements[i])) {
                            return self;
                        }
                    }
                }

                var zlist;
                var len;
                if (typeof option.normal != 'undefined') {
                    //z轴遍历: 'down' | 'up' | 'free'
                    switch (option.normal) {
                        case 'down':
                            //降序遍历，高层优先
                            for (var l = _zElements.length - 1; l >= 0; l--) {
                                zlist = _zElements[l];
                                if (zlist) {
                                    len = zlist.length;
                                    while (len--) {
                                        if (fun(zlist[len])) {
                                            return self;
                                        }
                                    }
                                }
                            }
                            break;
                        case 'up':
                            //升序遍历，底层优先
                            for (var i = 0, l = _zElements.length; i < l; i++) {
                                zlist = _zElements[i];
                                if (zlist) {
                                    len = zlist.length;
                                    for (var k = 0; k < len; k++) {
                                        if (fun(zlist[k])) {
                                            return self;
                                        }
                                    }
                                }
                            }
                            break;
                        // case 'free':
                        default:
                            //无序遍历
                            for (var i in _elements) {
                                if (fun(_elements[i])) {
                                    return self;
                                }
                            }
                            break;
                    }
                }

                return self;
            }

            function getMaxZlevel() {
                return _maxZlevel;
            }

            function getChangedZlevel() {
                return _changedZlevel;
            }

            function clearChangedZlevel() {
                _changedZlevel = {};
                return self;
            }

            function setChangedZlevle(level){
                _changedZlevel[level] = true;
                return self;
            }

            /**
             * 释放
             */
            function dispose() {
                _elements = null;
                _zElements = null;
                _hoverElements = null;
                self = null;

                return;
            }

            self.newShapeId = newShapeId;
            self.add = add;
            self.get = get;
            self.del = del;
            self.addHover = addHover;
            self.delHover = delHover;
            self.hasHoverShape = hasHoverShape;
            self.mod = mod;
            self.drift = drift;
            self.iterShape = iterShape;
            self.getMaxZlevel = getMaxZlevel;
            self.getChangedZlevel = getChangedZlevel;
            self.clearChangedZlevel = clearChangedZlevel;
            self.setChangedZlevle = setChangedZlevle;
            self.dispose = dispose;
        }

        /**
         * 绘图类 (V)
         * @param {HTMLElement} root 绘图区域
         * @param {storage} storage Storage实例
         * @param {Object} shape 图形库
         */
        function Painter(root, storage, shape) {
            var config = require('./config');
            var self = this;

            var _domList = {};              //canvas dom元素
            var _ctxList = {};              //canvas 2D context对象，与domList对应

            var _maxZlevel = 0;             //最大zlevel，缓存记录
            var _loadingTimer;

            var _domRoot = document.createElement('div');
            // 避免页面选中的尴尬
            _domRoot.onselectstart = function() {
                return false;
            };

            //宽，缓存记录
            var _width;
            //高，缓存记录
            var _height;

            //retina 屏幕优化
            var _devicePixelRatio = window.devicePixelRatio || 1;

            function _getWidth() {
                var stl = root.currentStyle
                          || document.defaultView.getComputedStyle(root);

                return root.clientWidth
                       - stl.paddingLeft.replace(/\D/g,'')   // 请原谅我这比较粗暴
                       - stl.paddingRight.replace(/\D/g,'');
            }

            function _getHeight(){
                var stl = root.currentStyle
                          || document.defaultView.getComputedStyle(root);

                return root.clientHeight
                       - stl.paddingTop.replace(/\D/g,'')    // 请原谅我这比较粗暴
                       - stl.paddingBottom.replace(/\D/g,'');
            }

            function _init() {
                _domRoot.innerHTML = '';
                root.innerHTML = '';

                _width = _getWidth();
                _height = _getHeight();

                //没append呢，原谅我这样写，清晰~
                _domRoot.style.position = 'relative';
                _domRoot.style.overflow = 'hidden';
                _domRoot.style.width = _width + 'px';
                _domRoot.style.height = _height + 'px';

                root.appendChild(_domRoot);

                _domList = {};
                _ctxList = {};

                _maxZlevel = storage.getMaxZlevel();

                //创建各层canvas
                //背景
                _domList['bg'] = _createDom('bg','div');
                _domRoot.appendChild(_domList['bg']);

                //实体
                for (var i = 0; i <= _maxZlevel; i++) {
                    _domList[i] = _createDom(i,'canvas');
                    _domRoot.appendChild(_domList[i]);
                    if (G_vmlCanvasManager) {
                        G_vmlCanvasManager.initElement(_domList[i]);
                    }
                    _ctxList[i] = _domList[i].getContext('2d');
                    _devicePixelRatio != 1 
                    && _ctxList[i].scale(_devicePixelRatio, _devicePixelRatio);
                }

                //高亮
                _domList['hover'] = _createDom('hover','canvas');
                _domList['hover'].id = '_zrender_hover_';
                _domRoot.appendChild(_domList['hover']);
                if (G_vmlCanvasManager) {
                    G_vmlCanvasManager.initElement(_domList['hover']);
                }
                _ctxList['hover'] = _domList['hover'].getContext('2d');
                _devicePixelRatio != 1 
                && _ctxList['hover'].scale(
                       _devicePixelRatio, _devicePixelRatio
                   );
            }

            /**
             * 检查_maxZlevel是否变大，如是则同步创建需要的Canvas
             */
            function _syncMaxZlevelCanvase(){
                var curMaxZlevel = storage.getMaxZlevel();
                if (_maxZlevel < curMaxZlevel) {
                    //实体
                    for (var i = _maxZlevel + 1; i <= curMaxZlevel; i++) {
                        _domList[i] = _createDom(i,'canvas');
                        _domRoot.insertBefore(_domList[i], _domList['hover']);
                        if (G_vmlCanvasManager) {
                            G_vmlCanvasManager.initElement(_domList[i]);
                        }
                        _ctxList[i] = _domList[i].getContext('2d');
                        _devicePixelRatio != 1 
                        && _ctxList[i].scale(
                               _devicePixelRatio, _devicePixelRatio
                           );
                    }
                    _maxZlevel = curMaxZlevel;
                }
            }

            /**
             * 创建dom
             * @param {string} id dom id 待用
             * @param {string} type : dom type， such as canvas, div etc.
             */
            function _createDom(id, type) {
                var newDom = document.createElement(type);

                //没append呢，请原谅我这样写，清晰~
                newDom.style.position = 'absolute';
                newDom.style.width = _width + 'px';
                newDom.style.height = _height + 'px';
                newDom.setAttribute('width', _width * _devicePixelRatio);
                newDom.setAttribute('height', _height * _devicePixelRatio);
                //id不作为索引用，避免可能造成的重名，定义为私有属性
                newDom.setAttribute('data-id', id);
                return newDom;
            }

            /**
             * 刷画图形
             * @param {Object} changedZlevel 需要更新的zlevel索引
             */
            function _brush(changedZlevel) {
                return function(e) {
                    if ((changedZlevel.all || changedZlevel[e.zlevel])
                        && !e.invisible
                    ) {
                        var ctx = _ctxList[e.zlevel];
                        if (ctx) {
                            if (!e.onbrush //没有onbrush
                                //有onbrush并且调用执行返回false或undefined则继续粉刷
                                || (e.onbrush && !e.onbrush(ctx, e, false))
                            ) {
                                if (zrender.catchBrushException) {
                                    try {
                                        shape.get(e.shape).brush(
                                            ctx, e, false, update
                                        );
                                    }
                                    catch(error) {
                                        zrender.log(
                                            error,
                                            'brush error of ' + e.shape,
                                            e
                                        );
                                    }
                                }
                                else {
                                    shape.get(e.shape).brush(
                                        ctx, e, false, update
                                    );
                                }
                            }
                        }
                        else {
                            zrender.log(
                                'can not find the specific zlevel canvas!'
                            );
                        }
                    }
                };
            }

            /**
             * 鼠标悬浮刷画
             */
            function _brushHover(e) {
                var ctx = _ctxList['hover'];
                if (!e.onbrush //没有onbrush
                    //有onbrush并且调用执行返回false或undefined则继续粉刷
                    || (e.onbrush && !e.onbrush(ctx, e, true))
                ) {
                    // Retina 优化
                    if (zrender.catchBrushException) {
                        try {
                            shape.get(e.shape).brush(ctx, e, true, update);
                        }
                        catch(error) {
                            zrender.log(
                                error, 'hoverBrush error of ' + e.shape, e
                            );
                        }
                    }
                    else {
                        shape.get(e.shape).brush(ctx, e, true, update);
                    }
                }
            }

            /**
             * 首次绘图，创建各种dom和context
             * @param {Function=} callback 绘画结束后的回调函数
             */
            function render(callback) {
                if (isLoading()) {
                    hideLoading();
                }
                //检查_maxZlevel是否变大，如是则同步创建需要的Canvas
                _syncMaxZlevelCanvase();

                //升序遍历，shape上的zlevel指定绘画图层的z轴层叠
                storage.iterShape(
                    _brush({ all : true }),
                    { normal: 'up' }
                );

                //update到最新则清空标志位
                storage.clearChangedZlevel();

                if (typeof callback == 'function') {
                    callback();
                }

                return self;
            }

            /**
             * 刷新
             * @param {Function=} callback 刷新结束后的回调函数
             */
            function refresh(callback) {
                //检查_maxZlevel是否变大，如是则同步创建需要的Canvas
                _syncMaxZlevelCanvase();

                //仅更新有修改的canvas
                var changedZlevel = storage.getChangedZlevel();
                //擦除有修改的canvas
                if (changedZlevel.all){
                    clear();
                }
                else {
                    for (var k in changedZlevel) {
                        if (_ctxList[k]) {
                            _ctxList[k].clearRect(
                                0, 0, 
                                _width * _devicePixelRatio, 
                                _height * _devicePixelRatio
                            );
                        }
                    }
                }
                //重绘内容，升序遍历，shape上的zlevel指定绘画图层的z轴层叠
                storage.iterShape(
                    _brush(changedZlevel),
                    { normal: 'up'}
                );

                //update到最新则清空标志位
                storage.clearChangedZlevel();

                if (typeof callback == 'function') {
                    callback();
                }

                return self;
            }


            /**
             * 视图更新
             * @param {Array} shapeList 需要更新的图形元素列表
             * @param {Function} callback  视图更新后回调函数
             */
            function update(shapeList, callback) {
                var shape;
                for (var i = 0, l = shapeList.length; i < l; i++) {
                    shape = shapeList[i];
                    storage.mod(shape.id, shape);
                }
                refresh(callback);
                return self;
            }

            /**
             * 清除hover层外所有内容
             */
            function clear() {
                for (var k in _ctxList) {
                    if (k == 'hover') {
                        continue;
                    }
                    _ctxList[k].clearRect(
                        0, 0, 
                        _width * _devicePixelRatio, 
                        _height * _devicePixelRatio
                    );
                }
                return self;
            }

            /**
             * 刷新hover层
             */
            function refreshHover() {
                clearHover();

                storage.iterShape(_brushHover, { hover: true });

                storage.delHover();

                return self;
            }

            /**
             * 清除hover层所有内容
             */
            function clearHover() {
                _ctxList
                && _ctxList['hover']
                && _ctxList['hover'].clearRect(
                    0, 0, 
                    _width * _devicePixelRatio, 
                    _height * _devicePixelRatio
                );

                return self;
            }

            /**
             * 显示loading
             * @param {Object} loadingOption 选项，内容见下
             * @param {color} -.backgroundColor 背景颜色
             * @param {Object} -.textStyle 文字样式，同shape/text.style
             * @param {number=} -.progress 进度参数，部分特效有用
             * @param {Object=} -.effectOption 特效参数，部分特效有用
             * @param {string | function} -.effect 特效依赖tool/loadingEffect，
             *                                     可传入自定义特效function
             */
            function showLoading(loadingOption) {
                var effect = require('./tool/loadingEffect');
                effect.stop(_loadingTimer);

                loadingOption = loadingOption || {};
                loadingOption.effect = loadingOption.effect
                                       || config.loadingEffect;
                loadingOption.canvasSize = {
                    width : _width,
                    height : _height
                };

                _loadingTimer = effect.start(
                    loadingOption,
                    storage.addHover,
                    refreshHover
                );
                self.loading = true;

                return self;
            }

            /**
             * loading结束
             * 乱来的，待重写
             */
            function hideLoading() {
                var effect = require('./tool/loadingEffect');
                effect.stop(_loadingTimer);
                clearHover();
                self.loading = false;
                return self;
            }

            /**
             * loading结束判断
             */
            function isLoading() {
                return self.loading;
            }

            /**
             * 获取绘图区域宽度
             */
            function getWidth() {
                return _width;
            }

            /**
             * 获取绘图区域高度
             */
            function getHeight() {
                return _height;
            }

            /**
             * 区域大小变化后重绘
             */
            function resize() {
                var width;
                var height;
                var dom;

                _domRoot.style.display = 'none';

                width = _getWidth();
                height = _getHeight();

                _domRoot.style.display = '';

                //优化没有实际改变的resize
                if (_width != width || height != _height){
                    _width = width;
                    _height = height;

                    _domRoot.style.width = _width + 'px';
                    _domRoot.style.height = _height + 'px';

                    for (var i in _domList) {
                        dom = _domList[i];
                        dom.setAttribute('width', _width);
                        dom.setAttribute('height', _height);
                        dom.style.width = _width + 'px';
                        dom.style.height = _height + 'px';
                    }

                    storage.setChangedZlevle('all');
                    refresh();
                }

                return self;
            }

            /**
             * 释放
             */
            function dispose() {
                if (isLoading()) {
                    hideLoading();
                }
                root.innerHTML = '';

                root = null;
                storage = null;
                shape = null;

                _domRoot = null;
                _domList = null;
                _ctxList = null;

                self = null;

                return;
            }

            function getDomHover() {
                return _domList['hover'];
            }

            function toDataURL(type, args) {
                if (G_vmlCanvasManager) {
                    return null;
                }
                var imageDom = _createDom('image','canvas');
                _domList['bg'].appendChild(imageDom);
                var ctx = imageDom.getContext('2d');
                _devicePixelRatio != 1 
                && ctx.scale(_devicePixelRatio, _devicePixelRatio);
                
                ctx.fillStyle = '#fff';
                ctx.rect(
                    0, 0, 
                    _width * _devicePixelRatio,
                    _height * _devicePixelRatio
                );
                ctx.fill();
                //升序遍历，shape上的zlevel指定绘画图层的z轴层叠
                storage.iterShape(
                    function (e) {
                        if (!e.invisible) {
                            if (!e.onbrush //没有onbrush
                                //有onbrush并且调用执行返回false或undefined则继续粉刷
                                || (e.onbrush && !e.onbrush(ctx, e, false))
                            ) {
                                if (zrender.catchBrushException) {
                                    try {
                                        shape.get(e.shape).brush(
                                            ctx, e, false, update
                                        );
                                    }
                                    catch(error) {
                                        zrender.log(
                                            error,
                                            'brush error of ' + e.shape,
                                            e
                                        );
                                    }
                                }
                                else {
                                    shape.get(e.shape).brush(
                                        ctx, e, false, update
                                    );
                                }
                            }
                        }
                    },
                    { normal: 'up' }
                );
                var image = imageDom.toDataURL(type, args); 
                ctx = null;
                _domList['bg'].removeChild(imageDom);
                return image;
            }
            
            self.render = render;
            self.refresh = refresh;
            self.update = update;
            self.clear = clear;
            self.refreshHover = refreshHover;
            self.clearHover = clearHover;
            self.showLoading = showLoading;
            self.hideLoading = hideLoading;
            self.isLoading = isLoading;
            self.getWidth = getWidth;
            self.getHeight = getHeight;
            self.resize = resize;
            self.dispose = dispose;
            self.getDomHover = getDomHover;
            self.toDataURL = toDataURL;
            _init();
        }

        /**
         * 控制类 (C)
         * @param {HTMLElement} root 绘图区域
         * @param {storage} storage Storage实例
         * @param {painter} painter Painter实例
         * @param {Object} shape 图形库
         *
         * 分发事件支持详见config.EVENT
         */
        function Handler(root, storage, painter, shape) {
            var config = require('./config');
            //添加事件分发器特性
            var eventTool = require('./tool/event');
            eventTool.Dispatcher.call(this);

            var self = this;

            //常用函数加速
            var getX = eventTool.getX;
            var getY = eventTool.getY;

            //各种事件标识的私有变量
            var _event;                         //原生dom事件
            var _hasfound = false;              //是否找到hover图形元素
            var _lastHover = null;              //最后一个hover图形元素
            var _mouseDownTarget = null;
            var _draggingTarget = null;         //当前被拖拽的图形元素
            var _isMouseDown = false;
            var _isDragging = false;
            var _lastTouchMoment;

            var _lastX = 0;
            var _lastY = 0;
            var _mouseX = 0;
            var _mouseY = 0;


            var _domHover = painter.getDomHover();

            /**
             * 初始化，事件绑定，支持的所有事件都由如下原生事件计算得来
             */
            function _init() {
                if (window.addEventListener) {
                    window.addEventListener('resize', _resizeHandler);

                    root.addEventListener('click', _clickHandler);
                    root.addEventListener('mousewheel', _mouseWheelHandler);
                    root.addEventListener('DOMMouseScroll', _mouseWheelHandler);
                    root.addEventListener('mousemove', _mouseMoveHandler);
                    root.addEventListener('mouseout', _mouseOutHandler);
                    root.addEventListener('mousedown', _mouseDownHandler);
                    root.addEventListener('mouseup', _mouseUpHandler);

                    // mobile支持
                    root.addEventListener('touchstart', _touchStartHandler);
                    root.addEventListener('touchmove', _touchMoveHandler);
                    root.addEventListener('touchend', _touchEndHandler);
                }
                else {
                    window.attachEvent('onresize', _resizeHandler);

                    root.attachEvent('onclick', _clickHandler);
                    root.attachEvent('onmousewheel', _mouseWheelHandler);
                    root.attachEvent('onmousemove', _mouseMoveHandler);
                    root.attachEvent('onmouseout', _mouseOutHandler);
                    root.attachEvent('onmousedown', _mouseDownHandler);
                    root.attachEvent('onmouseup', _mouseUpHandler);
                }
            }

            /**
             * 窗口大小改变响应函数
             * @param {event} event dom事件对象
             */
            function _resizeHandler(event) {
                _event = event || window.event;
                _lastHover = null;
                _isMouseDown = false;
                //分发config.EVENT.RESIZE事件，global
                self.dispatch(config.EVENT.RESIZE, _event);
            }

            /**
             * 点击事件
             * @param {event} event dom事件对象
             */
            function _clickHandler(event) {
                _event = _zrenderEventFixed(event);
                //分发config.EVENT.CLICK事件
                if (!_lastHover) {
                    _dispatchAgency(_lastHover, config.EVENT.CLICK);
                }
                else if (_lastHover && _lastHover.clickable) {
                    _dispatchAgency(_lastHover, config.EVENT.CLICK);
                }
                _mouseMoveHandler(_event);
            }

            /**
             * 鼠标滚轮响应函数
             * @param {event} event dom事件对象
             */
            function _mouseWheelHandler(event) {
                _event = _zrenderEventFixed(event);
                //分发config.EVENT.MOUSEWHEEL事件
                _dispatchAgency(_lastHover, config.EVENT.MOUSEWHEEL);
                _mouseMoveHandler(_event);
            }

            /**
             * 鼠标（手指）移动响应函数
             * @param {event} event dom事件对象
             */
            function _mouseMoveHandler(event) {
                if (painter.isLoading()) {
                    return;
                }
                _event = _zrenderEventFixed(event);
                _lastX = _mouseX;
                _lastY = _mouseY;
                _mouseX = getX(_event);
                _mouseY = getY(_event);

                // 可能出现config.EVENT.DRAGSTART事件
                // 避免手抖点击误认为拖拽
                //if (_mouseX - _lastX > 1 || _mouseY - _lastY > 1) {
                    _dragStartHandler();
                //}

                _hasfound = false;
                storage.iterShape(_findHover, { normal: 'down'});

                //找到的在迭代函数里做了处理，没找到得在迭代完后处理
                if (!_hasfound) {
                    //过滤首次拖拽产生的mouseout和dragLeave
                    if (!_draggingTarget
                        || (_lastHover && _lastHover.id != _draggingTarget.id)
                    ) {
                        //可能出现config.EVENT.MOUSEOUT事件
                        _outShapeHandler();

                        //可能出现config.EVENT.DRAGLEAVE事件
                        _dragLeaveHandler();
                    }

                    _lastHover = null;
                    storage.delHover();
                    painter.clearHover();
                }
                //如果存在拖拽中元素，被拖拽的图形元素最后addHover
                if (_draggingTarget) {
                    storage.drift(
                        _draggingTarget.id,
                        _mouseX - _lastX,
                        _mouseY - _lastY
                    );
                    storage.addHover(_draggingTarget);
                }

                //分发config.EVENT.MOUSEMOVE事件
                _dispatchAgency(_lastHover, config.EVENT.MOUSEMOVE);

                if (_draggingTarget || _hasfound || storage.hasHoverShape()) {
                    painter.refreshHover();
                }

                if (_draggingTarget || (_hasfound && _lastHover.draggable)) {
                    root.style.cursor = 'move';
                }
                else if (_hasfound && _lastHover.clickable) {
                    root.style.cursor = 'pointer';
                }
                else {
                    root.style.cursor = 'default';
                }
            }

            /**
             * 鼠标（手指）离开响应函数
             * @param {event} event dom事件对象
             */
            function _mouseOutHandler(event) {
                _event = _zrenderEventFixed(event);

                var element = _event.toElement || _event.relatedTarget;
                if (element != root) {
                    while (element && element.nodeType != 9) {
                        if (element == root) {
                            // 忽略包含在root中的dom引起的mouseOut
                            _mouseMoveHandler(event);
                            return;
                        }
                        element = element.parentNode;
                    }
                }
                _event.zrenderX = _lastX;
                _event.zrenderY = _lastY;
                root.style.cursor = 'default';
                _isMouseDown = false;

                _outShapeHandler();
                _dropHandler();
                _dragEndHandler();
                if (!painter.isLoading()) {
                    painter.refreshHover();
                }
            }

            /**
             * 鼠标在某个图形元素上移动
             */
            function _overShapeHandler() {
                //分发config.EVENT.MOUSEOVER事件
                _dispatchAgency(_lastHover, config.EVENT.MOUSEOVER);
            }

            /**
             * 鼠标离开某个图形元素
             */
            function _outShapeHandler() {
                //分发config.EVENT.MOUSEOUT事件
                _dispatchAgency(_lastHover, config.EVENT.MOUSEOUT);
            }

            /**
             * 鼠标（手指）按下响应函数
             * @param {event} event dom事件对象
             */
            function _mouseDownHandler(event) {
                _event = _zrenderEventFixed(event);
                _isMouseDown = true;
                //分发config.EVENT.MOUSEDOWN事件
                _mouseDownTarget = _lastHover;
                _dispatchAgency(_lastHover, config.EVENT.MOUSEDOWN);
            }

            /**
             * 鼠标（手指）抬起响应函数
             * @param {event} event dom事件对象
             */
            function _mouseUpHandler(event) {
                _event = _zrenderEventFixed(event);
                root.style.cursor = 'default';
                _isMouseDown = false;
                _mouseDownTarget = null;

                //分发config.EVENT.MOUSEUP事件
                _dispatchAgency(_lastHover, config.EVENT.MOUSEUP);
                _dropHandler();
                _dragEndHandler();
            }

            /**
             * Touch开始响应函数
             * @param {event} event dom事件对象
             */
            function _touchStartHandler(event) {
                eventTool.stop(event);// 阻止浏览器默认事件，重要
                _event = _zrenderEventFixed(event, true);
                _lastTouchMoment = new Date();
                _mouseDownHandler(_event);
            }

            /**
             * Touch移动响应函数
             * @param {event} event dom事件对象
             */
            function _touchMoveHandler(event) {
                eventTool.stop(event);// 阻止浏览器默认事件，重要
                _event = _zrenderEventFixed(event, true);
                _mouseMoveHandler(_event);
            }

            /**
             * Touch结束响应函数
             * @param {event} event dom事件对象
             */
            function _touchEndHandler(event) {
                eventTool.stop(event);// 阻止浏览器默认事件，重要
                _event = _zrenderEventFixed(event, true);
                _mouseUpHandler(_event);
                painter.clearHover();

                if (new Date() - _lastTouchMoment
                    < config.EVENT.touchClickDelay
                ) {
                    _lastHover = null;
                    _mouseX = _event.zrenderX;
                    _mouseY = _event.zrenderY;
                    // touch有指尖错觉，四向尝试，让touch上的点击更好触发事件
                    storage.iterShape(_findHover, { normal: 'down'});
                    if (!_lastHover) {
                        _mouseX += 10;
                        storage.iterShape(_findHover, { normal: 'down'});
                    }
                    if (!_lastHover) {
                        _mouseX -= 20;
                        storage.iterShape(_findHover, { normal: 'down'});
                    }
                    if (!_lastHover) {
                        _mouseX += 10;
                        _mouseY += 10;
                        storage.iterShape(_findHover, { normal: 'down'});
                    }
                    if (!_lastHover) {
                        _mouseY -= 20;
                        storage.iterShape(_findHover, { normal: 'down'});
                    }
                    if (_lastHover) {
                        _event.zrenderX = _mouseX;
                        _event.zrenderY = _mouseY;
                    }
                    _clickHandler(_event);
                }
            }

            /**
             * 拖拽开始
             */
            function _dragStartHandler() {
                if (_isMouseDown
                    && _lastHover
                    && _lastHover.draggable
                    && !_draggingTarget
                    && _mouseDownTarget == _lastHover
                ) {
                    _draggingTarget = _lastHover;
                    _isDragging = true;

                    _draggingTarget.invisible = true;
                    storage.mod(_draggingTarget.id,_draggingTarget);

                    //分发config.EVENT.DRAGSTART事件
                    _dispatchAgency(
                        _draggingTarget,
                        config.EVENT.DRAGSTART
                    );
                    painter.refresh();
                }
            }

            /**
             * 拖拽进入目标元素
             */
            function _dragEnterHandler() {
                if (_draggingTarget) {
                    //分发config.EVENT.DRAGENTER事件
                    _dispatchAgency(
                        _lastHover,
                        config.EVENT.DRAGENTER,
                        _draggingTarget
                    );
                }
            }

            /**
             * 拖拽在目标元素上移动
             */
            function _dragOverHandler() {
                if (_draggingTarget) {
                    //分发config.EVENT.DRAGOVER事件
                    _dispatchAgency(
                        _lastHover,
                        config.EVENT.DRAGOVER,
                        _draggingTarget
                    );
                }
            }

            /**
             * 拖拽离开目标元素
             */
            function _dragLeaveHandler() {
                if (_draggingTarget) {
                    //分发config.EVENT.DRAGLEAVE事件
                    _dispatchAgency(
                        _lastHover,
                        config.EVENT.DRAGLEAVE,
                        _draggingTarget
                    );
                }
            }

            /**
             * 拖拽在目标元素上完成
             */
            function _dropHandler() {
                if (_draggingTarget) {
                    _draggingTarget.invisible = false;
                    storage.mod(_draggingTarget.id,_draggingTarget);
                    painter.refresh();
                    //分发config.EVENT.DROP事件
                    _dispatchAgency(
                        _lastHover,
                        config.EVENT.DROP,
                        _draggingTarget
                    );
                }
            }

            /**
             * 拖拽结束
             */
            function _dragEndHandler() {
                if (_draggingTarget) {
                    //分发config.EVENT.DRAGEND事件
                    _dispatchAgency(
                        _draggingTarget,
                        config.EVENT.DRAGEND
                    );
                    _lastHover = null;
                }
                _isDragging = false;
                _draggingTarget = null;
            }

            /**
             * 事件分发代理
             * @param {Object} targetShape 目标图形元素
             * @param {string} eventName 事件名称
             * @param {Object=} draggedShape 拖拽事件特有，当前被拖拽图形元素
             */
            function _dispatchAgency(targetShape, eventName, draggedShape) {
                var eventHandler = 'on' + eventName;
                var eventPacket = {
                    type : eventName,
                    event : _event,
                    target : targetShape
                };

                if (draggedShape) {
                    eventPacket.dragged = draggedShape;
                }

                if (targetShape) {
                    //“不存在shape级事件”或“存在shape级事件但事件回调返回非true”
                    if (!targetShape[eventHandler]
                        || !targetShape[eventHandler](eventPacket)
                    ) {
                        self.dispatch(
                            eventName,
                            _event,
                            eventPacket
                        );
                    }
                }
                else if (!draggedShape) {
                    //无hover目标，无拖拽对象，原生事件分发
                    self.dispatch(eventName, _event);
                }
            }

            /**
             * 迭代函数，查找hover到的图形元素并即时做些事件分发
             * @param {Object} e 图形元素
             */
            function _findHover(e) {
                if (_draggingTarget && _draggingTarget.id == e.id) {
                    //迭代到当前拖拽的图形上
                    return false;
                }

                //打酱油的路过，啥都不响应的shape~
                if (e.__silent) {
                    return false;
                }

                var shapeInstance = shape.get(e.shape);
                if (shapeInstance.isCover(e, _mouseX, _mouseY)) {
                    if (e.hoverable) {
                        storage.addHover(e);
                    }

                    if (_lastHover != e) {
                        _outShapeHandler();

                        //可能出现config.EVENT.DRAGLEAVE事件
                        _dragLeaveHandler();

                        _lastHover = e;

                        //可能出现config.EVENT.DRAGENTER事件
                        _dragEnterHandler();
                    }
                    _overShapeHandler();

                    //可能出现config.EVENT.DRAGOVER
                    _dragOverHandler();

                    _hasfound = true;

                    return true;    //找到则中断迭代查找
                }

                return false;
            }

            // 如果存在第三方嵌入的一些dom触发的事件，或touch事件，需要转换一下事件坐标
            function _zrenderEventFixed(event, isTouch) {
                if (!isTouch) {
                    _event = event || window.event;
                    // 进入对象优先~
                    var target = _event.toElement
                              || _event.relatedTarget
                              || _event.srcElement
                              || _event.target;
                    if (target && target != _domHover) {
                        _event.zrenderX = (typeof _event.offsetX != 'undefined'
                                          ? _event.offsetX
                                          : _event.layerX)
                                          + target.offsetLeft;
                        _event.zrenderY = (typeof _event.offsetY != 'undefined'
                                          ? _event.offsetY
                                          : _event.layerY)
                                          + target.offsetTop;
                    }
                }
                else {
                    _event = event;
                    var touch = _event.type != 'touchend'
                                ? _event.targetTouches[0]
                                : _event.changedTouches[0];
                    if (touch) {
                        // touch事件坐标是全屏的~
                        _event.zrenderX = touch.clientX - root.offsetLeft
                                          + document.body.scrollLeft;
                        _event.zrenderY = touch.clientY - root.offsetTop
                                          + document.body.scrollTop;
                    }
                }

                return _event;
            }

            /**
             * 自定义事件绑定
             * @param {string} eventName 事件名称，resize，hover，drag，etc~
             * @param {Function} handler 响应函数
             */
            function on(eventName, handler) {
                self.bind(eventName, handler);

                return self;
            }

            /**
             * 自定义事件解绑
             * @param {string} event 事件名称，resize，hover，drag，etc~
             * @param {Function} handler 响应函数
             */
            function un(eventName, handler) {
                self.unbind(eventName, handler);
                return self;
            }

            /**
             * 比较不可控，先不开放了~
             * 触发原生dom事件，用于自定义元素在顶层截获事件后触发zrender行为
             * @param {string} event 事件名称，resize，hover，drag，etc~
             * @param {event=} event event dom事件对象
            function trigger(eventName, event) {
                switch (eventName) {
                    case config.EVENT.RESIZE :
                        _resizeHandler(event);
                        break;
                    case config.EVENT.CLICK :
                        _clickHandler(event);
                        break;
                    case config.EVENT.MOUSEWHEEL :
                        _mouseWheelHandler(event);
                        break;
                    case config.EVENT.MOUSEMOVE :
                        _mouseMoveHandler(event);
                        break;
                    case config.EVENT.MOUSEDOWN :
                        _mouseDownHandler(event);
                        break;
                    case config.EVENT.MOUSEUP :
                        _mouseUpHandleru(event);
                        break;
                }
            }
             */

            /**
             * 释放
             */
            function dispose() {
                if (window.removeEventListener) {
                    window.removeEventListener('resize', _resizeHandler);

                    root.removeEventListener('click', _clickHandler);
                    root.removeEventListener('mousewheel', _mouseWheelHandler);
                    root.removeEventListener(
                        'DOMMouseScroll', _mouseWheelHandler
                    );
                    root.removeEventListener('mousemove', _mouseMoveHandler);
                    root.removeEventListener('mouseout', _mouseOutHandler);
                    root.removeEventListener('mousedown', _mouseDownHandler);
                    root.removeEventListener('mouseup', _mouseUpHandler);

                    // mobile支持
                    root.removeEventListener('touchstart', _touchStartHandler);
                    root.removeEventListener('touchmove', _touchMoveHandler);
                    root.removeEventListener('touchend', _touchEndHandler);
                }
                else {
                    window.detachEvent('onresize', _resizeHandler);

                    root.detachEvent('onclick', _clickHandler);
                    root.detachEvent('onmousewheel', _mouseWheelHandler);
                    root.detachEvent('onmousemove', _mouseMoveHandler);
                    root.detachEvent('onmouseout', _mouseOutHandler);
                    root.detachEvent('onmousedown', _mouseDownHandler);
                    root.detachEvent('onmouseup', _mouseUpHandler);
                }

                root = null;
                _domHover = null;
                storage = null;
                painter  = null;
                shape = null;

                un();

                self = null;

                return;
            }

            self.on = on;
            self.un = un;
            // self.trigger = trigger;
            self.dispose = dispose;

            _init();
        }

        return self;
    }
);
define('zrender', ['zrender/zrender'], function (main) { return main; });

/**
 * echarts扩展zrender shape
 *
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * shape类：icon
 * 可配图形属性：
   {
       // 基础属性
       shape  : 'icon',       // 必须，shape类标识，需要显式指定
       id     : {string},       // 必须，图形唯一标识，可通过zrender实例方法newShapeId生成
       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
       invisible : {boolean},   // 默认为false，是否可见

       // 样式属性，默认状态样式样式属性
       style  : {
           x             : {number},  // 必须，左上角横坐标
           y             : {number},  // 必须，左上角纵坐标
           width         : {number},  // 必须，宽度
           height        : {number},  // 必须，高度
           iconType      : {string},  // 必须，icon类型
           brushType     : {string},  // 默认为fill，绘画方式
                                      // fill(填充) | stroke(描边) | both(填充+描边)
           color         : {color},   // 默认为'#000'，填充颜色，支持rgba
           strokeColor   : {color},   // 默认为'#000'，描边颜色（轮廓），支持rgba
           lineWidth     : {number},  // 默认为1，线条宽度，描边下有效

           opacity       : {number},  // 默认为1，透明度设置，如果color为rgba，则最终透明度效果叠加
           shadowBlur    : {number},  // 默认为0，阴影模糊度，大于0有效
           shadowColor   : {color},   // 默认为'#000'，阴影色彩，支持rgba
           shadowOffsetX : {number},  // 默认为0，阴影横向偏移，正值往右，负值往左
           shadowOffsetY : {number},  // 默认为0，阴影纵向偏移，正值往下，负值往上

           text          : {string},  // 默认为null，附加文本
           textFont      : {string},  // 默认为null，附加文本样式，eg:'bold 18px verdana'
           textPosition  : {string},  // 默认为top，附加文本位置。
                                      // inside | left | right | top | bottom
           textAlign     : {string},  // 默认根据textPosition自动设置，附加文本水平对齐。
                                      // start | end | left | right | center
           textBaseline  : {string},  // 默认根据textPosition自动设置，附加文本垂直对齐。
                                      // top | bottom | middle |
                                      // alphabetic | hanging | ideographic
           textColor     : {color},   // 默认根据textPosition自动设置，默认策略如下，附加文本颜色
                                      // 'inside' ? '#fff' : color
       },

       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
       highlightStyle : {
           // 同style
       }

       // 交互属性，详见shape.Base

       // 事件属性，详见shape.Base
   }
         例子：
   {
       shape  : 'icon',
       id     : '123456',
       zlevel : 1,
       style  : {
           x : 200,
           y : 100,
           width : 150,
           height : 50,
           color : '#eee',
           text : 'Baidu'
       },
       myName : 'kener',  // 可自带任何有效自定义属性

       clickable : true,
       onClick : function(eventPacket) {
           alert(eventPacket.target.myName);
       }
   }
 */
define(
    'echarts/util/shape/icon',['require','zrender/tool/matrix','zrender/shape','zrender/shape/base','zrender/shape'],function(require) {
        var matrix = require('zrender/tool/matrix');
        
        function Icon() {
            this.type = 'icon';
            this._iconLibrary = {
                mark : _iconMark,
                markUndo : _iconMarkUndo,
                markClear : _iconMarkClear,
                dataZoom : _iconDataZoom,
                dataZoomReset : _iconDataZoomReset,
                restore : _iconRestore,
                lineChart : _iconLineChart,
                barChart : _iconBarChart,
                dataView : _iconDataView,
                saveAsImage : _iconSave,
                
                cross : _iconCross,
                circle : _iconCircle,
                rectangle : _iconRectangle,
                triangle : _iconTriangle,
                diamond : _iconDiamond,
                star : _iconStar
            };
        }

        function _iconMark(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;
            ctx.moveTo(style.x,                 style.y + style.height);
            ctx.lineTo(style.x + 5 * dx,        style.y + 14 * dy);
            ctx.lineTo(style.x + style.width,   style.y + 3 * dy);
            ctx.lineTo(style.x + 13 * dx,       style.y);
            ctx.lineTo(style.x + 2 * dx,        style.y + 11 * dy);
            ctx.lineTo(style.x,                 style.y + style.height);

            ctx.moveTo(style.x + 6 * dx,        style.y + 10 * dy);
            ctx.lineTo(style.x + 14 * dx,       style.y + 2 * dy);

            ctx.moveTo(style.x + 10 * dx,       style.y + 13 * dy);
            ctx.lineTo(style.x + style.width,   style.y + 13 * dy);

            ctx.moveTo(style.x + 13 * dx,       style.y + 10 * dy);
            ctx.lineTo(style.x + 13 * dx,       style.y + style.height);
        }

        function _iconMarkUndo(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;
            ctx.moveTo(style.x,                 style.y + style.height);
            ctx.lineTo(style.x + 5 * dx,        style.y + 14 * dy);
            ctx.lineTo(style.x + style.width,   style.y + 3 * dy);
            ctx.lineTo(style.x + 13 * dx,       style.y);
            ctx.lineTo(style.x + 2 * dx,        style.y + 11 * dy);
            ctx.lineTo(style.x,                 style.y + style.height);

            ctx.moveTo(style.x + 6 * dx,        style.y + 10 * dy);
            ctx.lineTo(style.x + 14 * dx,       style.y + 2 * dy);

            ctx.moveTo(style.x + 10 * dx,       style.y + 13 * dy);
            ctx.lineTo(style.x + style.width,   style.y + 13 * dy);
        }

        function _iconMarkClear(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;

            ctx.moveTo(style.x + 4 * dx,        style.y + 15 * dy);
            ctx.lineTo(style.x + 9 * dx,        style.y + 13 * dy);
            ctx.lineTo(style.x + 14 * dx,       style.y + 8 * dy);
            ctx.lineTo(style.x + 11 * dx,       style.y + 5 * dy);
            ctx.lineTo(style.x + 6 * dx,        style.y + 10 * dy);
            ctx.lineTo(style.x + 4 * dx,        style.y + 15 * dy);

            ctx.moveTo(style.x + 5 * dx,        style.y);
            ctx.lineTo(style.x + 11 * dx,        style.y);
            ctx.moveTo(style.x + 5 * dx,        style.y + dy);
            ctx.lineTo(style.x + 11 * dx,        style.y + dy);
            ctx.moveTo(style.x,        style.y + 2 * dy);
            ctx.lineTo(style.x + style.width,        style.y + 2 * dy);

            ctx.moveTo(style.x,        style.y + 5 * dy);
            ctx.lineTo(style.x + 3 * dx,        style.y + style.height);
            ctx.lineTo(style.x + 13 * dx,        style.y + style.height);
            ctx.lineTo(style.x + style.width,        style.y + 5 * dy);
        }

        function _iconDataZoom(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;

            ctx.moveTo(style.x,             style.y + 3 * dy);
            ctx.lineTo(style.x + 6 * dx,    style.y + 3 * dy);
            
            ctx.moveTo(style.x + 3 * dx,    style.y);
            ctx.lineTo(style.x + 3 * dx,    style.y + 6 * dy);

            ctx.moveTo(style.x + 3 * dx,      style.y + 8 * dy);
            ctx.lineTo(style.x + 3 * dx,      style.y + style.height);
            ctx.lineTo(style.x + style.width, style.y + style.height);
            ctx.lineTo(style.x + style.width, style.y + 3 * dy);
            ctx.lineTo(style.x + 8 * dx,      style.y + 3 * dy);
            
            ctx.moveTo(style.x, style.y); // 避免closePath
            ctx.lineTo(style.x, style.y); // 避免closePath
        }
        
        function _iconDataZoomReset(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;

            ctx.moveTo(style.x + 6 * dx,      style.y);
            ctx.lineTo(style.x + 2 * dx,          style.y + 3 * dy);
            ctx.lineTo(style.x + 6 * dx,          style.y + 6 * dy);
            
            ctx.moveTo(style.x + 2 * dx,          style.y + 3 * dy);
            ctx.lineTo(style.x + 14 * dx,     style.y + 3 * dy);
            ctx.lineTo(style.x + 14 * dx,     style.y + 11 * dy);
            
            ctx.moveTo(style.x + 2 * dx,          style.y + 5 * dy);
            ctx.lineTo(style.x + 2 * dx,          style.y + 13 * dy);
            ctx.lineTo(style.x + 14 * dx,     style.y + 13 * dy);
            
            ctx.moveTo(style.x + 10 * dx,     style.y + 10 * dy);
            ctx.lineTo(style.x + 14 * dx,     style.y + 13 * dy);
            ctx.lineTo(style.x + 10 * dx,     style.y + style.height);
            
            ctx.moveTo(style.x, style.y); // 避免closePath
            ctx.lineTo(style.x, style.y); // 避免closePath
        }
        
        function _iconRestore(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;
            var r = style.width / 2;

            ctx.arc(style.x + r, style.y + r, r - dx, 0, Math.PI * 2 / 3);
            ctx.moveTo(style.x + 3 * dx,        style.y + style.height);
            ctx.lineTo(style.x + 0 * dx,        style.y + 12 * dy);
            ctx.lineTo(style.x + 5 * dx,        style.y + 11 * dy);

            ctx.moveTo(style.x, style.y + 8 * dy);
            ctx.arc(style.x + r, style.y + r, r - dx, Math.PI, Math.PI * 5 / 3);
            ctx.moveTo(style.x + 13 * dx,       style.y);
            ctx.lineTo(style.x + style.width,   style.y + 4 * dy);
            ctx.lineTo(style.x + 11 * dx,       style.y + 5 * dy);
            
            ctx.moveTo(style.x, style.y); // 避免closePath
            ctx.lineTo(style.x, style.y); // 避免closePath
        }

        function _iconLineChart(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;

            ctx.moveTo(style.x, style.y);
            ctx.lineTo(style.x, style.y + style.height);
            ctx.lineTo(style.x + style.width, style.y + style.height);

            ctx.moveTo(style.x + 2 * dx,    style.y + 14 * dy);
            ctx.lineTo(style.x + 7 * dx,    style.y + 6 * dy);
            ctx.lineTo(style.x + 11 * dx,   style.y + 11 * dy);
            ctx.lineTo(style.x + 15 * dx,   style.y + 2 * dy);
            
            ctx.moveTo(style.x, style.y); // 避免closePath
            ctx.lineTo(style.x, style.y); // 避免closePath
        }

        function _iconBarChart(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;

            ctx.moveTo(style.x, style.y);
            ctx.lineTo(style.x, style.y + style.height);
            ctx.lineTo(style.x + style.width, style.y + style.height);

            ctx.moveTo(style.x + 3 * dx,        style.y + 14 * dy);
            ctx.lineTo(style.x + 3 * dx,        style.y + 6 * dy);
            ctx.lineTo(style.x + 4 * dx,        style.y + 6 * dy);
            ctx.lineTo(style.x + 4 * dx,        style.y + 14 * dy);
            ctx.moveTo(style.x + 7 * dx,        style.y + 14 * dy);
            ctx.lineTo(style.x + 7 * dx,        style.y + 2 * dy);
            ctx.lineTo(style.x + 8 * dx,        style.y + 2 * dy);
            ctx.lineTo(style.x + 8 * dx,        style.y + 14 * dy);
            ctx.moveTo(style.x + 11 * dx,       style.y + 14 * dy);
            ctx.lineTo(style.x + 11 * dx,       style.y + 9 * dy);
            ctx.lineTo(style.x + 12 * dx,       style.y + 9 * dy);
            ctx.lineTo(style.x + 12 * dx,       style.y + 14 * dy);
        }

        function _iconDataView(ctx, style) {
            var dx = style.width / 16;

            ctx.moveTo(style.x + dx, style.y);
            ctx.lineTo(style.x + dx, style.y + style.height);
            ctx.lineTo(style.x + 15 * dx, style.y + style.height);
            ctx.lineTo(style.x + 15 * dx, style.y);
            ctx.lineTo(style.x + dx, style.y);

            ctx.moveTo(style.x + 3 * dx, style.y + 3 * dx);
            ctx.lineTo(style.x + 13 * dx, style.y + 3 * dx);

            ctx.moveTo(style.x + 3 * dx, style.y + 6 * dx);
            ctx.lineTo(style.x + 13 * dx, style.y + 6 * dx);

            ctx.moveTo(style.x + 3 * dx, style.y + 9 * dx);
            ctx.lineTo(style.x + 13 * dx, style.y + 9 * dx);

            ctx.moveTo(style.x + 3 * dx, style.y + 12 * dx);
            ctx.lineTo(style.x + 9 * dx, style.y + 12 * dx);
        }
        
        function _iconSave(ctx, style) {
            var dx = style.width / 16;
            var dy = style.height / 16;

            ctx.moveTo(style.x, style.y);
            ctx.lineTo(style.x, style.y + style.height);
            ctx.lineTo(style.x + style.width, style.y + style.height);
            ctx.lineTo(style.x + style.width, style.y);
            ctx.lineTo(style.x, style.y);

            ctx.moveTo(style.x + 4 * dx,    style.y);
            ctx.lineTo(style.x + 4 * dx,    style.y + 8 * dy);
            ctx.lineTo(style.x + 12 * dx,   style.y + 8 * dy);
            ctx.lineTo(style.x + 12 * dx,   style.y);
            
            ctx.moveTo(style.x + 6 * dx,    style.y + 11 * dy);
            ctx.lineTo(style.x + 6 * dx,    style.y + 13 * dy);
            ctx.lineTo(style.x + 10 * dx,   style.y + 13 * dy);
            ctx.lineTo(style.x + 10 * dx,   style.y + 11 * dy);
            ctx.lineTo(style.x + 6 * dx,    style.y + 11 * dy);
            
            ctx.moveTo(style.x, style.y); // 避免closePath
            ctx.lineTo(style.x, style.y); // 避免closePath
        }
        
        function _iconCross(ctx, style) {
            var x = style.x;
            var y = style.y;
            var width = style.width;
            var height = style.height;
            ctx.moveTo(x, y + height / 2);
            ctx.lineTo(x + width, y + height / 2);
            
            ctx.moveTo(x + width / 2, y);
            ctx.lineTo(x + width / 2, y + height);
        }
        
        function _iconCircle(ctx, style) {
            var width = style.width / 2;
            var height = style.height / 2;
            ctx.arc(
                style.x + width, 
                style.y + height, 
                Math.min(width, height),
                0, 
                Math.PI * 2
            );
        }
        
        function _iconRectangle(ctx, style) {
            ctx.rect(style.x, style.y, style.width, style.height);
        }
        
        function _iconTriangle(ctx, style) {
            var width = style.width / 2;
            var height = style.height / 2;
            var x = style.x + width;
            var y = style.y + height;
            var symbolSize = Math.min(width, height);
            ctx.moveTo(x, y - symbolSize);
            ctx.lineTo(x + symbolSize, y + symbolSize);
            ctx.lineTo(x - symbolSize, y + symbolSize);
            ctx.lineTo(x, y - symbolSize);
        }
        
        function _iconDiamond(ctx, style) {
            var width = style.width / 2;
            var height = style.height / 2;
            var x = style.x + width;
            var y = style.y + height;
            var symbolSize = Math.min(width, height);
            ctx.moveTo(x, y - symbolSize);
            ctx.lineTo(x + symbolSize, y);
            ctx.lineTo(x, y + symbolSize);
            ctx.lineTo(x - symbolSize, y);
            ctx.lineTo(x, y - symbolSize);
        }
        
        function _iconStar(ctx, style) {
            var width = style.width / 2;
            var height = style.height / 2;
            var star = require('zrender/shape').get('star');
            star.buildPath(ctx, {
                x : style.x + width,
                y : style.y + height,
                r : Math.min(width, height),
                n : style.n || 5
            });
        }

        Icon.prototype =  {
            /**
             * 创建矩形路径
             * @param {Context2D} ctx Canvas 2D上下文
             * @param {Object} style 样式
             */
            buildPath : function(ctx, style) {
                if (this._iconLibrary[style.iconType]) {
                    this._iconLibrary[style.iconType](ctx, style);
                }
                else {
                    ctx.moveTo(style.x, style.y);
                    ctx.lineTo(style.x + style.width, style.y);
                    ctx.lineTo(style.x + style.width, style.y + style.height);
                    ctx.lineTo(style.x, style.y + style.height);
                    ctx.lineTo(style.x, style.y);
                }

                return;
            },

            /**
             * 返回矩形区域，用于局部刷新和文字定位
             * @param {Object} style
             */
            getRect : function(style) {
                return {
                    x : Math.round(style.x),
                    y : Math.round(style.y),
                    width : style.width,
                    height : style.height
                };
            },

            isCover : function(e, x, y) {
                //对鼠标的坐标也做相同的变换
                if(e.__needTransform && e._transform){
                    var inverseMatrix = [];
                    matrix.invert(inverseMatrix, e._transform);

                    var originPos = [x, y];
                    matrix.mulVector(originPos, inverseMatrix, [x, y, 1]);

                    if (x == originPos[0] && y == originPos[1]) {
                        // 避免外部修改导致的__needTransform不准确
                        if (Math.abs(e.rotation[0]) > 0.0001
                            || Math.abs(e.position[0]) > 0.0001
                            || Math.abs(e.position[1]) > 0.0001
                            || Math.abs(e.scale[0] - 1) > 0.0001
                            || Math.abs(e.scale[1] - 1) > 0.0001
                        ) {
                            e.__needTransform = true;
                        } else {
                            e.__needTransform = false;
                        }
                    }

                    x = originPos[0];
                    y = originPos[1];
                }

                // 快速预判并保留判断矩形
                var rect;
                if (e.style.__rect) {
                    rect = e.style.__rect;
                }
                else {
                    rect = this.getRect(e.style);
                    rect = [
                        rect.x,
                        rect.x + rect.width,
                        rect.y,
                        rect.y + rect.height
                    ];
                    e.style.__rect = rect;
                }
                if (x >= rect[0]
                    && x <= rect[1]
                    && y >= rect[2]
                    && y <= rect[3]
                ) {
                    // 矩形内
                    return true;
                }
                else {
                    return false;
                }
            },

            define : function(iconType, pathMethod) {
                this._iconLibrary[iconType] = pathMethod;
            },

            get : function(iconType) {
                return this._iconLibrary[iconType];
            }
        };

        require('zrender/shape/base').derive(Icon);
        require('zrender/shape').define('icon', new Icon());
            
        return Icon;
    }
);
/**
 * echarts组件：孤岛数据
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/chart/island',['require','../component/base','./calculableBase','../config','../util/ecData','zrender/tool/event','zrender/tool/color','../chart'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 图表选项
     */
    function Island(messageCenter, zr) {
        // 基类装饰
        var ComponentBase = require('../component/base');
        ComponentBase.call(this, zr);
        // 可计算特性装饰
        var CalculableBase = require('./calculableBase');
        CalculableBase.call(this, zr);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var zrEvent = require('zrender/tool/event');

        var self = this;
        self.type = ecConfig.CHART_TYPE_ISLAND;
        var option;

        var _zlevelBase = self.getZlevelBase();
        var _nameConnector;
        var _valueConnector;
        var _zrHeight = zr.getHeight();
        var _zrWidth = zr.getWidth();

        /**
         * 孤岛合并
         *
         * @param {string} tarShapeIndex 目标索引
         * @param {Object} srcShape 源目标，合入目标后删除
         */
        function _combine(tarShape, srcShape) {
            var zrColor = require('zrender/tool/color');
            var value = ecData.get(tarShape, 'value')
                        + ecData.get(srcShape, 'value');
            var name = ecData.get(tarShape, 'name')
                       + _nameConnector
                       + ecData.get(srcShape, 'name');

            tarShape.style.text = name + _valueConnector + value;

            ecData.set(tarShape, 'value', value);
            ecData.set(tarShape, 'name', name);
            tarShape.style.r = option.island.r;
            tarShape.style.color = zrColor.mix(
                tarShape.style.color,
                srcShape.style.color
            );
        }

        function render(newOption) {
            newOption.island = self.reformOption(newOption.island);
            option = newOption;

            _nameConnector = option.nameConnector;
            _valueConnector = option.valueConnector;

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                zr.addShape(self.shapeList[i]);
            }
        }
        
        function getOption() {
            return option;
        }

        function resize() {
            var newWidth = zr.getWidth();
            var newHieght = zr.getHeight();
            var xScale = newWidth / (_zrWidth || newWidth);
            var yScale = newHieght / (_zrHeight || newHieght);
            if (xScale == 1 && yScale == 1) {
                return;
            }
            _zrWidth = newWidth;
            _zrHeight = newHieght;
            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                zr.modShape(
                    self.shapeList[i].id,
                    {
                        style: {
                            x: Math.round(self.shapeList[i].style.x * xScale),
                            y: Math.round(self.shapeList[i].style.y * yScale)
                        }
                    }
                );
            }
        }

        function add(shape) {
            var name = ecData.get(shape, 'name');
            var value = ecData.get(shape, 'value');
            var seriesName = typeof ecData.get(shape, 'series') != 'undefined'
                             ? ecData.get(shape, 'series').name
                             : '';
            var font = self.getFont(option.island.textStyle);
            var islandShape = {
                shape : 'circle',
                id : zr.newShapeId(self.type),
                zlevel : _zlevelBase,
                style : {
                    x : shape.style.x,
                    y : shape.style.y,
                    r : option.island.r,
                    color : shape.style.color || shape.style.strokeColor,
                    text : name + _valueConnector + value,
                    textFont : font
                },
                draggable : true,
                hoverable : true,
                onmousewheel : self.shapeHandler.onmousewheel,
                _type : 'island'
            };
            if (islandShape.style.color == '#fff') {
                islandShape.style.color = shape.style.strokeColor;
            }
            self.setCalculable(islandShape);
            ecData.pack(
                islandShape,
                {name:seriesName}, -1,
                value, -1,
                name
            );
            self.shapeList.push(islandShape);
            zr.addShape(islandShape);
        }

        function del(shape) {
            zr.delShape(shape.id);
            var newShapeList = [];
            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                if (self.shapeList[i].id != shape.id) {
                    newShapeList.push(self.shapeList[i]);
                }
            }
            self.shapeList = newShapeList;
        }

        /**
         * 数据项被拖拽进来， 重载基类方法
         */
        function ondrop(param, status) {
            if (!self.isDrop || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }
            // 拖拽产生孤岛数据合并
            var target = param.target;      // 拖拽安放目标
            var dragged = param.dragged;    // 当前被拖拽的图形对象

            _combine(target, dragged);
            zr.modShape(target.id, target);

            status.dragIn = true;

            // 处理完拖拽事件后复位
            self.isDrop = false;

            return;
        }

        /**
         * 数据项被拖拽出去， 重载基类方法
         */
        function ondragend(param, status) {
            var target = param.target;      // 拖拽安放目标
            if (!self.isDragend) {
                // 拖拽的不是孤岛数据，如果没有图表接受孤岛数据，需要新增孤岛数据
                if (!status.dragIn) {
                    target.style.x = zrEvent.getX(param.event);
                    target.style.y = zrEvent.getY(param.event);
                    add(target);
                    status.needRefresh = true;
                }
            }
            else {
                // 拖拽的是孤岛数据，如果有图表接受了孤岛数据，需要删除孤岛数据
                if (status.dragIn) {
                    del(target);
                    status.needRefresh = true;
                }
            }

            // 处理完拖拽事件后复位
            self.isDragend = false;

            return;
        }

        /**
         * 滚轮改变孤岛数据值
         */
        self.shapeHandler.onmousewheel = function(param) {
            var shape = param.target;

            var event = param.event;
            var delta = zrEvent.getDelta(event);
            delta = delta > 0 ? (-1) : 1;
            shape.style.r -= delta;
            shape.style.r = shape.style.r < 5 ? 5 : shape.style.r;

            var value = ecData.get(shape, 'value');
            var dvalue = value * option.island.calculateStep;
            if (dvalue > 1) {
                value = Math.round(value - dvalue * delta);
            }
            else {
                value = (value - dvalue * delta).toFixed(2) - 0;
            }

            var name = ecData.get(shape, 'name');
            shape.style.text = name + ':' + value;

            ecData.set(shape, 'value', value);
            ecData.set(shape, 'name', name);

            zr.modShape(shape.id, shape);
            zr.refresh();
            zrEvent.stop(event);
        };

        self.render = render;
        self.resize = resize;
        self.getOption = getOption;
        self.add = add;
        self.del = del;
        self.ondrop = ondrop;
        self.ondragend = ondragend;
    }

    // 图表注册
    require('../chart').define('island', Island);
    
    return Island;
});
/**
 * echart组件库
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component',[],function(/*require*/) {    //component
    var self = {};

    var _componentLibrary = {};     //echart组件库

    /**
     * 定义图形实现
     * @param {Object} name
     * @param {Object} clazz 图形实现
     */
    self.define = function(name, clazz) {
        _componentLibrary[name] = clazz;
        return self;
    };

    /**
     * 获取图形实现
     * @param {Object} name
     */
    self.get = function(name) {
        return _componentLibrary[name];
    };

    return self;
});
/**
 * echarts组件：图表标题
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/title',['require','./base','../config','zrender/tool/area','zrender/tool/util','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 图表参数
     */
    function Title(messageCenter, zr, option) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');
        var zrArea = require('zrender/tool/area');
        var zrUtil = require('zrender/tool/util');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_TITLE;

        var titleOption;                       // 标题选项，共享数据源
        var _zlevelBase = self.getZlevelBase();

        var _itemGroupLocation = {};    // 标题元素组的位置参数，通过计算所得x, y, width, height

        function _buildShape() {
            _itemGroupLocation = _getItemGroupLocation();

            _buildBackground();
            _buildItem();

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        /**
         * 构建所有标题元素
         */
        function _buildItem() {
            var text = titleOption.text;
            var subtext = titleOption.subtext;
            var font = self.getFont(titleOption.textStyle);
            var subfont = self.getFont(titleOption.subtextStyle);
            
            var x = _itemGroupLocation.x;
            var y = _itemGroupLocation.y;
            var width = _itemGroupLocation.width;
            var height = _itemGroupLocation.height;
            
            var textShape = {
                shape : 'text',
                zlevel : _zlevelBase,
                style : {
                    y : y,
                    color : titleOption.textStyle.color,
                    text: text,
                    textFont: font,
                    textBaseline: 'top'
                },
                hoverable: false
            };
            
            var subtextShape = {
                shape : 'text',
                zlevel : _zlevelBase,
                style : {
                    y : y + height,
                    color : titleOption.subtextStyle.color,
                    text: subtext,
                    textFont: subfont,
                    textBaseline: 'bottom'
                },
                hoverable: false
            };

            

            switch (titleOption.x) {
                case 'center' :
                    textShape.style.x = subtextShape.style.x = x + width / 2;
                    textShape.style.textAlign = subtextShape.style.textAlign 
                                              = 'center';
                    break;
                case 'left' :
                    textShape.style.x = subtextShape.style.x = x;
                    textShape.style.textAlign = subtextShape.style.textAlign 
                                              = 'left';
                    break;
                case 'right' :
                    textShape.style.x = subtextShape.style.x = x + width;
                    textShape.style.textAlign = subtextShape.style.textAlign 
                                              = 'right';
                    break;
                default :
                    x = titleOption.x - 0;
                    x = isNaN(x) ? 0 : x;
                    textShape.style.x = subtextShape.style.x = x;
                    break;
            }
            
            if (titleOption.textAlign) {
                textShape.style.textAlign = subtextShape.style.textAlign 
                                          = titleOption.textAlign;
            }

            self.shapeList.push(textShape);
            subtext !== '' && self.shapeList.push(subtextShape);
        }

        function _buildBackground() {
            var pTop = titleOption.padding[0];
            var pRight = titleOption.padding[1];
            var pBottom = titleOption.padding[2];
            var pLeft = titleOption.padding[3];

            self.shapeList.push({
                shape : 'rectangle',
                zlevel : _zlevelBase,
                hoverable :false,
                style : {
                    x : _itemGroupLocation.x - pLeft,
                    y : _itemGroupLocation.y - pTop,
                    width : _itemGroupLocation.width + pLeft + pRight,
                    height : _itemGroupLocation.height + pTop + pBottom,
                    brushType : titleOption.borderWidth === 0
                                ? 'fill' : 'both',
                    color : titleOption.backgroundColor,
                    strokeColor : titleOption.borderColor,
                    lineWidth : titleOption.borderWidth
                }
            });
        }

        /**
         * 根据选项计算标题实体的位置坐标
         */
        function _getItemGroupLocation() {
            var text = titleOption.text;
            var subtext = titleOption.subtext;
            var font = self.getFont(titleOption.textStyle);
            var subfont = self.getFont(titleOption.subtextStyle);
            
            var totalWidth = Math.max(
                    zrArea.getTextWidth(text, font),
                    zrArea.getTextWidth(subtext, subfont)
                );
            var totalHeight = zrArea.getTextWidth('国', font)
                              + (subtext === ''
                                 ? 0
                                 : (titleOption.itemGap
                                    + zrArea.getTextWidth('国', subfont))
                                );

            var x;
            var zrWidth = zr.getWidth();
            switch (titleOption.x) {
                case 'center' :
                    x = Math.floor((zrWidth - totalWidth) / 2);
                    break;
                case 'left' :
                    x = titleOption.padding[3] + titleOption.borderWidth;
                    break;
                case 'right' :
                    x = zrWidth
                        - totalWidth
                        - titleOption.padding[1]
                        - titleOption.borderWidth;
                    break;
                default :
                    x = titleOption.x - 0;
                    x = isNaN(x) ? 0 : x;
                    break;
            }

            var y;
            var zrHeight = zr.getHeight();
            switch (titleOption.y) {
                case 'top' :
                    y = titleOption.padding[0] + titleOption.borderWidth;
                    break;
                case 'bottom' :
                    y = zrHeight
                        - totalHeight
                        - titleOption.padding[2]
                        - titleOption.borderWidth;
                    break;
                case 'center' :
                    y = Math.floor((zrHeight - totalHeight) / 2);
                    break;
                default :
                    y = titleOption.y - 0;
                    y = isNaN(y) ? 0 : y;
                    break;
            }

            return {
                x : x,
                y : y,
                width : totalWidth,
                height : totalHeight
            };
        }

        function init(newOption) {
            option = newOption;

            option.title = self.reformOption(option.title);
            // 补全padding属性
            option.title.padding = self.reformCssArray(
                option.title.padding
            );

            titleOption = option.title;
            titleOption.textStyle = zrUtil.merge(
                titleOption.textStyle,
                ecConfig.textStyle,
                {
                    'overwrite': false,
                    'recursive': false
                }
            );
            titleOption.subtextStyle = zrUtil.merge(
                titleOption.subtextStyle,
                ecConfig.textStyle,
                {
                    'overwrite': false,
                    'recursive': false
                }
            );

            self.clear();
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            init(option);
        }

        self.init = init;
        self.refresh = refresh;

        init(option);
    }
    
    require('../component').define('title', Title);
    
    return Title;
});



/**
 * echarts组件： 类目轴
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/categoryAxis',['require','./base','../config','zrender/tool/util','zrender/tool/area','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 类目轴参数
     * @param {Grid} grid 网格对象
     */
    function CategoryAxis(messageCenter, zr, option, component) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');

        var zrUtil = require('zrender/tool/util');
        var zrArea = require('zrender/tool/area');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_AXIS_CATEGORY;

        var grid = component.grid;

        var _zlevelBase = self.getZlevelBase();
        var _interval;                              // 标签显示的挑选间隔
        var _labelData;

        function _reformLabel() {
            var data = zrUtil.clone(option.data);
            var axisFormatter = option.axisLabel.formatter;
            var formatter;
            for (var i = 0, l = data.length; i < l; i++) {
                formatter = data[i].formatter || axisFormatter;
                if (formatter) {
                    if (typeof formatter == 'function') {
                        if (typeof data[i].value != 'undefined') {
                            data[i].value = formatter(data[i].value);
                        }
                        else {
                            data[i] = formatter(data[i]);
                        }
                    }
                    else if (typeof formatter == 'string') {
                        if (typeof data[i].value != 'undefined') {
                            data[i].value = formatter.replace(
                                '{value}',data[i].value
                            );
                        }
                        else {
                            data[i] = formatter.replace('{value}',data[i]);
                        }
                    }
                }
            }
            return data;
        }

        /**
         * 计算标签显示挑选间隔
         */
        function _getInterval() {
            var interval   = option.axisLabel.interval;
            if (interval == 'auto') {
                // 麻烦的自适应计算
                var fontSize = option.axisLabel.textStyle.fontSize;
                var font = self.getFont(option.axisLabel.textStyle);
                var data = option.data;
                var dataLength = option.data.length;

                if (option.position == 'bottom' || option.position == 'top') {
                    // 横向
                    if (dataLength > 3) {
                        var gap = getCoord(data[1]) -  getCoord(data[0]);
                        var isEnough = false;
                        var labelSpace;
                        var labelSize;
                        interval = 0;
                        while (!isEnough && interval < dataLength) {
                            interval++;
                            isEnough = true;
                            labelSpace = gap * interval - 10; // 标签左右至少间隔为5px
                            for (var i = 0; i < dataLength; i += interval) {
                                if (option.axisLabel.rotate !== 0) {
                                    // 有旋转
                                    labelSize = fontSize;
                                }
                                else if (data[i].textStyle) {
                                    labelSize = zrArea.getTextWidth(
                                        _labelData[i].value || _labelData[i],
                                        self.getFont(
                                            zrUtil.merge(
                                                data[i].textStyle,
                                                option.axisLabel.textStyle,
                                                {
                                                    'overwrite': false,
                                                    'recursive': true
                                                }
                                           )
                                        )
                                    );
                                }
                                else {
                                    labelSize = zrArea.getTextWidth(
                                        _labelData[i].value || _labelData[i],
                                        font
                                    );
                                }

                                if (labelSpace < labelSize) {
                                    // 放不下，中断循环让interval++
                                    isEnough = false;
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        // 少于3个则全部显示
                        interval = 1;
                    }
                }
                else {
                    // 纵向
                    if (dataLength > 3) {
                        var gap = getCoord(data[0]) - getCoord(data[1]);
                        interval = 1;
                        // 标签上下至少间隔为3px
                        while ((gap * interval - 6) < fontSize
                                && interval < dataLength
                        ) {
                            interval++;
                        }
                    }
                    else {
                        // 少于3个则全部显示
                        interval = 1;
                    }
                }
            }
            else {
                // 用户自定义间隔
                interval += 1;
            }

            return interval;
        }

        function _buildShape() {
            _labelData = _reformLabel();
            _interval = _getInterval();
            option.splitArea.show && _buildSplitArea();
            option.splitLine.show && _buildSplitLine();
            option.axisLine.show && _buildAxisLine();
            option.axisTick.show && _buildAxisTick();
            option.axisLabel.show && _buildAxisLabel();

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        // 轴线
        function _buildAxisLine() {
            var axShape = {
                shape : 'line',
                zlevel: _zlevelBase + 1,
                hoverable: false
            };
            switch (option.position) {
                case 'left':
                    axShape.style = {
                        xStart : grid.getX(),
                        yStart : grid.getY(),
                        xEnd : grid.getX(),
                        yEnd : grid.getYend()
                    };
                    break;
                case 'right':
                    axShape.style = {
                        xStart : grid.getXend(),
                        yStart : grid.getY(),
                        xEnd : grid.getXend(),
                        yEnd : grid.getYend()
                    };
                    break;
                case 'bottom':
                    axShape.style = {
                        xStart : grid.getX(),
                        yStart : grid.getYend(),
                        xEnd : grid.getXend(),
                        yEnd : grid.getYend()
                    };
                    break;
                case 'top':
                    axShape.style = {
                        xStart : grid.getX(),
                        yStart : grid.getY(),
                        xEnd : grid.getXend(),
                        yEnd : grid.getY()
                    };
                    break;
            }

            axShape.style.strokeColor = option.axisLine.lineStyle.color;
            axShape.style.lineWidth = option.axisLine.lineStyle.width;
            axShape.style.lineType = option.axisLine.lineStyle.type;

            self.shapeList.push(axShape);
        }

        // 小标记
        function _buildAxisTick() {
            var axShape;
            var data       = option.data;
            var dataLength = option.data.length;
            var length     = option.axisTick.length;
            var color      = option.axisTick.lineStyle.color;
            var lineWidth  = option.axisTick.lineStyle.width;

            if (option.position == 'bottom' || option.position == 'top') {
                // 横向
                var yPosition = option.position == 'bottom'
                                ? grid.getYend()
                                : (grid.getY() - length);
                for (var i = 0; i < dataLength; i++) {
                    axShape = {
                        shape : 'line',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            xStart : getCoord(data[i].value || data[i]),
                            yStart : yPosition,
                            xEnd : getCoord(data[i].value || data[i]),
                            yEnd : yPosition + length,
                            strokeColor : color,
                            lineWidth : lineWidth
                        }
                    };
                    self.shapeList.push(axShape);
                }
            }
            else {
                // 纵向
                var xPosition = option.position == 'left'
                                ? (grid.getX() - length)
                                : grid.getXend();
                for (var i = 0; i < dataLength; i++) {
                    axShape = {
                        shape : 'line',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            xStart : xPosition,
                            yStart : getCoord(data[i].value || data[i]),
                            xEnd : xPosition + length,
                            yEnd : getCoord(data[i].value || data[i]),
                            strokeColor : color,
                            lineWidth : lineWidth
                        }
                    };
                    self.shapeList.push(axShape);
                }
            }
        }

        // 坐标轴文本
        function _buildAxisLabel() {
            var axShape;
            var data       = option.data;
            var dataLength = option.data.length;
            var rotate     = option.axisLabel.rotate;
            var margin     = option.axisLabel.margin;
            var textStyle  = option.axisLabel.textStyle;
            var dataTextStyle;

            if (option.position == 'bottom' || option.position == 'top') {
                // 横向
                var yPosition;
                var baseLine;
                if (option.position == 'bottom') {
                    yPosition = grid.getYend() + margin;
                    baseLine = 'top';
                }
                else {
                    yPosition = grid.getY() - margin;
                    baseLine = 'bottom';
                }

                for (var i = 0; i < dataLength; i += _interval) {
                    dataTextStyle = zrUtil.merge(
                        data[i].textStyle || {},
                        textStyle,
                        {'overwrite': false}
                    );
                    axShape = {
                        shape : 'text',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            x : getCoord(data[i].value || data[i]),
                            y : yPosition,
                            color : dataTextStyle.color,
                            text : _labelData[i].value || _labelData[i],
                            textFont : self.getFont(dataTextStyle),
                            textAlign : 'center',
                            textBaseline : baseLine
                        }
                    };
                    if (rotate) {
                        axShape.style.textAlign = rotate > 0
                                                  ? (option.position == 'bottom'
                                                    ? 'right' : 'left')
                                                  : (option.position == 'bottom'
                                                    ? 'left' : 'right');
                        axShape.rotation = [
                            rotate * Math.PI / 180,
                            axShape.style.x,
                            axShape.style.y
                        ];
                    }
                    self.shapeList.push(axShape);
                }
            }
            else {
                // 纵向
                var xPosition;
                var align;
                if (option.position == 'left') {
                    xPosition = grid.getX() - margin;
                    align = 'right';
                }
                else {
                    xPosition = grid.getXend() + margin;
                    align = 'left';
                }

                for (var i = 0; i < dataLength; i += _interval) {
                    dataTextStyle = zrUtil.merge(
                        data[i].textStyle || {},
                        textStyle,
                        {'overwrite': false}
                    );
                    axShape = {
                        shape : 'text',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            x : xPosition,
                            y : getCoord(data[i].value || data[i]),
                            color : dataTextStyle.color,
                            text : _labelData[i].value || _labelData[i],
                            textFont : self.getFont(dataTextStyle),
                            textAlign : align,
                            textBaseline : 'middle'
                        }
                    };
                    if (rotate) {
                        axShape.rotation = [
                            rotate * Math.PI / 180,
                            axShape.style.x,
                            axShape.style.y
                        ];
                    }
                    self.shapeList.push(axShape);
                }
            }
        }

        function _buildSplitLine() {
            var axShape;
            var data       = option.data;
            var dataLength = option.data.length;

            if (option.position == 'bottom' || option.position == 'top') {
                // 横向
                var sy = grid.getY();
                var ey = grid.getYend();
                var x;

                for (var i = 0; i < dataLength; i += _interval) {
                    x = getCoord(data[i].value || data[i]);
                    axShape = {
                        shape : 'line',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            xStart : x,
                            yStart : sy,
                            xEnd : x,
                            yEnd : ey,
                            strokeColor : option.splitLine.lineStyle.color,
                            lineType : option.splitLine.lineStyle.type,
                            lineWidth : option.splitLine.lineStyle.width
                        }
                    };
                    self.shapeList.push(axShape);
                }

            }
            else {
                // 纵向
                var sx = grid.getX();
                var ex = grid.getXend();
                var y;

                for (var i = 0; i < dataLength; i += _interval) {
                    y = getCoord(data[i].value || data[i]);
                    axShape = {
                        shape : 'line',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            xStart : sx,
                            yStart : y,
                            xEnd : ex,
                            yEnd : y,
                            strokeColor : option.splitLine.lineStyle.color,
                            linetype : option.splitLine.lineStyle.type,
                            lineWidth : option.splitLine.lineStyle.width
                        }
                    };
                    self.shapeList.push(axShape);
                }
            }
        }

        function _buildSplitArea() {
            var axShape;
            var color = option.splitArea.areaStyle.color;
            color = color instanceof Array ? color : [color];
            var colorLength = color.length;
            var data        = option.data;
            var dataLength  = option.data.length;

            if (option.position == 'bottom' || option.position == 'top') {
                // 横向
                var y = grid.getY();
                var height = grid.getHeight();
                var lastX = grid.getX();
                var curX;

                for (var i = 0; i <= dataLength; i++) {
                    curX = i < dataLength
                           ? getCoord(data[i].value || data[i])
                           : grid.getXend();
                    axShape = {
                        shape : 'rectangle',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            x : lastX,
                            y : y,
                            width : curX - lastX,
                            height : height,
                            color : color[i % colorLength]
                            // type : option.splitArea.areaStyle.type,
                        }
                    };
                    self.shapeList.push(axShape);
                    lastX = curX;
                }
            }
            else {
                // 纵向
                var x = grid.getX();
                var width = grid.getWidth();
                var lastYend = grid.getYend();
                var curY;

                for (var i = 0; i <= dataLength; i++) {
                    curY = i < dataLength
                           ? getCoord(data[i].value || data[i])
                           : grid.getY();
                    axShape = {
                        shape : 'rectangle',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            x : x,
                            y : curY,
                            width : width,
                            height : lastYend - curY,
                            color : color[i % colorLength]
                            // type : option.splitArea.areaStyle.type
                        }
                    };
                    self.shapeList.push(axShape);
                    lastYend = curY;
                }
            }
        }

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newOption
         * @param {Object} newGrid
         */
        function init(newOption, newGrid) {
            if (newOption.data.length < 1) {
                return;
            }

            option = self.reformOption(newOption);
            // 通用字体设置
            option.axisLabel.textStyle = zrUtil.merge(
                option.axisLabel.textStyle || {},
                ecConfig.textStyle,
                {
                    'overwrite' : false,
                    'recursive' : true
                }
            );
            option.axisLabel.textStyle = zrUtil.merge(
                option.axisLabel.textStyle || {},
                ecConfig.textStyle,
                {
                    'overwrite' : false,
                    'recursive' : true
                }
            );
            grid = newGrid;

            self.clear();
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            self.clear();
            _buildShape();
        }

        /**
         * 返回间隔
         */
        function getGap() {
            var dataLength = option.data.length;
            var total = (option.position == 'bottom'
                        || option.position == 'top')
                        ? grid.getWidth()
                        : grid.getHeight();
            if (option.boundaryGap) {               // 留空
                return total / (dataLength + 1);
            }
            else {                                  // 顶头
                return total / (dataLength > 1 ? (dataLength - 1) : 1);
            }
        }

        // 根据值换算位置
        function getCoord(value) {
            var data = option.data;
            var dataLength = data.length;
            var gap = getGap();
            var position = option.boundaryGap ? gap : 0;

            // Math.floor可能引起一些偏差，但性能会更好
            for (var i = 0; i < dataLength; i++) {
                if (data[i] == value
                    || (data[i].value && data[i].value == value)
                ) {
                    if (option.position == 'bottom'
                        || option.position == 'top'
                    ) {
                        // 横向
                        position = grid.getX() + position;
                    }
                    else {
                        // 纵向
                        position = grid.getYend() - position;
                    }
                    return (i === 0 || i == dataLength - 1)
                           ? position
                           : Math.floor(position);
                }
                position += gap;
            }
        }

        // 根据类目轴数据索引换算位置
        function getCoordByIndex(dataIndex) {
            if (dataIndex < 0) {
                if (option.position == 'bottom' || option.position == 'top') {
                    return grid.getX();
                }
                else {
                    return grid.getYend();
                }
            }
            else if (dataIndex >= option.data.length) {
                if (option.position == 'bottom' || option.position == 'top') {
                    return grid.getXend();
                }
                else {
                    return grid.getY();
                }
            }
            else {
                return getCoord(option.data[dataIndex]);
            }
        }

        // 根据类目轴数据索引换算类目轴名称
        function getNameByIndex(dataIndex) {
            return option.data[dataIndex];
        }

        /**
         * 根据类目轴数据索引返回是否为主轴线
         * @param {number} dataIndex 类目轴数据索引
         * @return {boolean} 是否为主轴
         */
        function isMainAxis(dataIndex) {
            return dataIndex % _interval === 0;
        }

        function getPosition() {
            return option.position;
        }

        self.init = init;
        self.refresh = refresh;
        self.getGap = getGap;
        self.getCoord = getCoord;
        self.getCoordByIndex = getCoordByIndex;
        self.getNameByIndex = getNameByIndex;
        self.isMainAxis = isMainAxis;
        self.getPosition = getPosition;

        init(option, grid);
    }

    require('../component').define('categoryAxis', CategoryAxis);
    
    return CategoryAxis;
});
/**
 * echarts组件： 数值轴
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/valueAxis',['require','./base','../config','zrender/tool/util','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 类目轴参数
     * @param {Grid} grid 网格对象
     * @param {Array} series 数据对象
     */
    function ValueAxis(messageCenter, zr, option, component, series) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');

        var zrUtil = require('zrender/tool/util');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_AXIS_VALUE;

        var grid = component.grid;

        var _zlevelBase = self.getZlevelBase();
        var _min;
        var _max;
        var _hasData;
        var _valueList;
        var _valueLabel;

        function _buildShape() {
            _hasData = false;
            _calculateValue();
            if (!_hasData) {
                return;
            }
            option.splitArea.show && _buildSplitArea();
            option.splitLine.show && _buildSplitLine();
            option.axisLine.show && _buildAxisLine();
            option.axisTick.show && _buildAxisTick();
            option.axisLabel.show && _buildAxisLabel();

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        // 轴线
        function _buildAxisLine() {
            var axShape = {
                shape : 'line',
                zlevel : _zlevelBase + 1,
                hoverable : false
            };
            switch (option.position) {
                case 'left' :
                    axShape.style = {
                        xStart : grid.getX(),
                        yStart : grid.getYend(),
                        xEnd : grid.getX(),
                        yEnd : grid.getY()
                    };
                    break;
                case 'right' :
                    axShape.style = {
                        xStart : grid.getXend(),
                        yStart : grid.getYend(),
                        xEnd : grid.getXend(),
                        yEnd : grid.getY()
                    };
                    break;
                case 'bottom' :
                    axShape.style = {
                        xStart : grid.getX(),
                        yStart : grid.getYend(),
                        xEnd : grid.getXend(),
                        yEnd : grid.getYend()
                    };
                    break;
                case 'top' :
                    axShape.style = {
                        xStart : grid.getX(),
                        yStart : grid.getY(),
                        xEnd : grid.getXend(),
                        yEnd : grid.getY()
                    };
                    break;
            }
            if (option.name !== '') {
                axShape.style.text = option.name;
                axShape.style.textPosition = option.nameLocation;
            }
            axShape.style.strokeColor = option.axisLine.lineStyle.color;
            axShape.style.lineWidth = option.axisLine.lineStyle.width;
            axShape.style.lineType = option.axisLine.lineStyle.type;

            self.shapeList.push(axShape);
        }

        // 小标记
        function _buildAxisTick() {
            var axShape;
            var data       = _valueList;
            var dataLength = _valueList.length;
            var length     = option.axisTick.length;
            var color      = option.axisTick.lineStyle.color;
            var lineWidth  = option.axisTick.lineStyle.width;

            if (option.position == 'bottom' || option.position == 'top') {
                // 横向
                var yPosition = option.position == 'bottom'
                                ? grid.getYend()
                                : (grid.getY() - length);
                for (var i = 0; i < dataLength; i++) {
                    axShape = {
                        shape : 'line',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            xStart : getCoord(data[i]),
                            yStart : yPosition,
                            xEnd : getCoord(data[i]),
                            yEnd : yPosition + length,
                            strokeColor : color,
                            lineWidth : lineWidth
                        }
                    };
                    self.shapeList.push(axShape);
                }
            }
            else {
                // 纵向
                var xPosition = option.position == 'left'
                                ? (grid.getX() - length)
                                : grid.getXend();
                for (var i = 0; i < dataLength; i++) {
                    axShape = {
                        shape : 'line',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            xStart : xPosition,
                            yStart : getCoord(data[i]),
                            xEnd : xPosition + length,
                            yEnd : getCoord(data[i]),
                            strokeColor : color,
                            lineWidth : lineWidth
                        }
                    };
                    self.shapeList.push(axShape);
                }
            }
        }

        // 坐标轴文本
        function _buildAxisLabel() {
            var axShape;
            var data       = _valueList;
            var dataLength = _valueList.length;
            var rotate     = option.axisLabel.rotate;
            var margin     = option.axisLabel.margin;
            var textStyle  = option.axisLabel.textStyle;

            if (option.position == 'bottom' || option.position == 'top') {
                // 横向
                var yPosition;
                var baseLine;
                if (option.position == 'bottom') {
                    yPosition = grid.getYend() + margin;
                    baseLine = 'top';
                }
                else {
                    yPosition = grid.getY() - margin;
                    baseLine = 'bottom';
                }

                for (var i = 0; i < dataLength; i++) {
                    axShape = {
                        shape : 'text',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            x : getCoord(data[i]),
                            y : yPosition,
                            color : textStyle.color,
                            text : _valueLabel[i],
                            textFont : self.getFont(textStyle),
                            textAlign : (i === 0 && option.name !== '')
                                        ? 'left'
                                        : (i == (dataLength - 1) 
                                           && option.name !== '')
                                          ? 'right'
                                          : 'center',
                            textBaseline : baseLine
                        }
                    };
                    if (rotate) {
                        axShape.style.textAlign = rotate > 0
                                                  ? (option.position == 'bottom'
                                                    ? 'right' : 'left')
                                                  : (option.position == 'bottom'
                                                    ? 'left' : 'right');
                        axShape.rotation = [
                            rotate * Math.PI / 180,
                            axShape.style.x,
                            axShape.style.y
                        ];
                    }
                    self.shapeList.push(axShape);
                }
            }
            else {
                // 纵向
                var xPosition;
                var align;
                if (option.position == 'left') {
                    xPosition = grid.getX() - margin;
                    align = 'right';
                }
                else {
                    xPosition = grid.getXend() + margin;
                    align = 'left';
                }

                for (var i = 0; i < dataLength; i++) {
                    axShape = {
                        shape : 'text',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            x : xPosition,
                            y : getCoord(data[i]),
                            color : textStyle.color,
                            text : _valueLabel[i],
                            textFont : self.getFont(textStyle),
                            textAlign : align,
                            textBaseline : (i === 0 && option.name !== '')
                                           ? 'bottom'
                                           : (i == (dataLength - 1) 
                                              && option.name !== '')
                                             ? 'top'
                                             : 'middle'
                        }
                    };
                    
                    if (rotate) {
                        axShape.rotation = [
                            rotate * Math.PI / 180,
                            axShape.style.x,
                            axShape.style.y
                        ];
                    }
                    self.shapeList.push(axShape);
                }
            }
        }

        function _buildSplitLine() {
            var axShape;
            var data       = _valueList;
            var dataLength = _valueList.length;

            if (option.position == 'bottom' || option.position == 'top') {
                // 横向
                var sy = grid.getY();
                var ey = grid.getYend();
                var x;

                for (var i = 0; i < dataLength; i++) {
                    x = getCoord(data[i]);
                    axShape = {
                        shape : 'line',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            xStart : x,
                            yStart : sy,
                            xEnd : x,
                            yEnd : ey,
                            strokeColor : option.splitLine.lineStyle.color,
                            lineType : option.splitLine.lineStyle.type,
                            lineWidth : option.splitLine.lineStyle.width
                        }
                    };
                    self.shapeList.push(axShape);
                }

            }
            else {
                // 纵向
                var sx = grid.getX();
                var ex = grid.getXend();
                var y;

                for (var i = 0; i < dataLength; i++) {
                    y = getCoord(data[i]);
                    axShape = {
                        shape : 'line',
                        zlevel : _zlevelBase,
                        hoverable : false,
                        style : {
                            xStart : sx,
                            yStart : y,
                            xEnd : ex,
                            yEnd : y,
                            strokeColor : option.splitLine.lineStyle.color,
                            lineType : option.splitLine.lineStyle.type,
                            lineWidth : option.splitLine.lineStyle.width
                        }
                    };
                    self.shapeList.push(axShape);
                }
            }
        }

        function _buildSplitArea() {
            var axShape;
            var color = option.splitArea.areaStyle.color;

            if (!(color instanceof Array)) {
                // 非数组一律认为是单一颜色的字符串，单一颜色则用一个背景，颜色错误不负责啊！！！
                axShape = {
                    shape : 'rectangle',
                    zlevel : _zlevelBase,
                    hoverable : false,
                    style : {
                        x : grid.getX(),
                        y : grid.getY(),
                        width : grid.getWidth(),
                        height : grid.getHeight(),
                        color : color
                        // type : option.splitArea.areaStyle.type,
                    }
                };
                self.shapeList.push(axShape);
            }
            else {
                // 多颜色
                var colorLength = color.length;
                var data        = _valueList;
                var dataLength  = _valueList.length;

                if (option.position == 'bottom' || option.position == 'top') {
                    // 横向
                    var y = grid.getY();
                    var height = grid.getHeight();
                    var lastX = grid.getX();
                    var curX;

                    for (var i = 0; i <= dataLength; i++) {
                        curX = i < dataLength
                               ? getCoord(data[i])
                               : grid.getXend();
                        axShape = {
                            shape : 'rectangle',
                            zlevel : _zlevelBase,
                            hoverable : false,
                            style : {
                                x : lastX,
                                y : y,
                                width : curX - lastX,
                                height : height,
                                color : color[i % colorLength]
                                // type : option.splitArea.areaStyle.type,
                            }
                        };
                        self.shapeList.push(axShape);
                        lastX = curX;
                    }
                }
                else {
                    // 纵向
                    var x = grid.getX();
                    var width = grid.getWidth();
                    var lastYend = grid.getYend();
                    var curY;

                    for (var i = 0; i <= dataLength; i++) {
                        curY = i < dataLength
                               ? getCoord(data[i])
                               : grid.getY();
                        axShape = {
                            shape : 'rectangle',
                            zlevel : _zlevelBase,
                            hoverable : false,
                            style : {
                                x : x,
                                y : curY,
                                width : width,
                                height : lastYend - curY,
                                color : color[i % colorLength]
                                // type : option.splitArea.areaStyle.type
                            }
                        };
                        self.shapeList.push(axShape);
                        lastYend = curY;
                    }
                }
            }
        }

        /**
         * 极值计算
         */
        function _calculateValue() {
            if (isNaN(option.min) || isNaN(option.max)) {
                // 有一个没指定都得算
                // 数据整形
                var oriData;            // 原始数据
                var data = {};          // 整形后数据抽取
                var value;
                var xIdx;
                var yIdx;
                var legend = component.legend;
                for (var i = 0, l = series.length; i < l; i++) {
                    if (series[i].type != ecConfig.CHART_TYPE_LINE
                        && series[i].type != ecConfig.CHART_TYPE_BAR
                        && series[i].type != ecConfig.CHART_TYPE_SCATTER
                        && series[i].type != ecConfig.CHART_TYPE_K
                    ) {
                        // 非坐标轴支持的不算极值
                        continue;
                    }
                    // 请允许我写开，跟上面一个不是一样东西
                    if (legend && !legend.isSelected(series[i].name)){
                        continue;
                    }

                    // 不指定默认为第一轴线
                    xIdx = series[i].xAxisIndex || 0;
                    yIdx = series[i].yAxisIndex || 0;
                    if ((option.xAxisIndex != xIdx)
                        && (option.yAxisIndex != yIdx)
                    ) {
                        // 不是自己的数据不计算极值
                        continue;
                    }

                    if (!series[i].stack) {
                        var key = series[i].name || '';
                        data[key] = [];
                        oriData = series[i].data;
                        for (var j = 0, k = oriData.length; j < k; j++) {
                            value = typeof oriData[j].value != 'undefined'
                                    ? oriData[j].value
                                    : oriData[j];
                            if (series[i].type == ecConfig.CHART_TYPE_SCATTER) {
                                if (option.xAxisIndex != -1) {
                                    data[key].push(value[0]);
                                }
                                if (option.yAxisIndex != -1) {
                                    data[key].push(value[1]);
                                }
                            }
                            else if (series[i].type == ecConfig.CHART_TYPE_K) {
                                data[key].push(value[0]);
                                data[key].push(value[1]);
                                data[key].push(value[2]);
                                data[key].push(value[3]);
                            }
                            else {
                                data[key].push(value);
                            }
                        }
                    }
                    else {
                        // 堆叠数据，需要区分正负向堆叠
                        var keyP = '__Magic_Key_Positive__' + series[i].stack;
                        var keyN = '__Magic_Key_Negative__' + series[i].stack;
                        data[keyP] = data[keyP] || [];
                        data[keyN] = data[keyN] || [];
                        oriData = series[i].data;
                        for (var j = 0, k = oriData.length; j < k; j++) {
                            value = typeof oriData[j].value != 'undefined'
                                    ? oriData[j].value
                                    : oriData[j];
                            if (value == '-') {
                                continue;
                            }
                            value = value - 0;
                            if (value >= 0) {
                                if (typeof data[keyP][j] != 'undefined') {
                                    data[keyP][j] += value;
                                }
                                else {
                                    data[keyP][j] = value;
                                }
                            }
                            else {
                                if (typeof data[keyN][j] != 'undefined') {
                                    data[keyN][j] += value;
                                }
                                else {
                                    data[keyN][j] = value;
                                }
                            }
                        }
                    }
                }
                // 找极值
                for (var i in data){
                    oriData = data[i];
                    for (var j = 0, k = oriData.length; j < k; j++) {
                        if (!isNaN(oriData[j])){
                            _hasData = true;
                            _min = oriData[j];
                            _max = oriData[j];
                            break;
                        }
                    }
                    if (_hasData) {
                        break;
                    }
                }
                for (var i in data){
                    oriData = data[i];
                    for (var j = 0, k = oriData.length; j < k; j++) {
                        if (!isNaN(oriData[j])){
                            _min = Math.min(_min, oriData[j]);
                            _max = Math.max(_max, oriData[j]);
                        }
                    }
                }
            }
            else {
                _hasData = true;
            }
            //console.log(_min,_max,'vvvvv111111')
            _min = isNaN(option.min)
                   ? (_min - Math.abs(_min * option.boundaryGap[0]))
                   : option.min;    // 指定min忽略boundaryGay[0]

            _max = isNaN(option.max)
                   ? (_max + Math.abs(_max * option.boundaryGap[1]))
                   : option.max;    // 指定max忽略boundaryGay[1]
            //console.log(_min,_max,'vvvvv')
            _reformValue(option.scale);
        }

        /**
         * 找到原始数据的极值后根据选项整形最终 _min / _max / _valueList
         * 如果你不知道这个“整形”的用义，请不要试图去理解和修改这个方法！找我也没用，我相信我已经记不起来！
         * 如果你有更简洁的数学推导欢迎重写，后果自负~
         * 一旦你不得不遇到了需要修改或重写的厄运，希望下面的脚手架能帮助你
         * ps:其实我是想说别搞砸了！升级后至少得保证这些case通过！！
         *
         * by linzhifeng@baidu.com 2013-1-8
         * --------
             _valueList = [];
             option = {splitNumber:5,power:100,precision:0};
             _min = 1; _max = 123; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : 0 150 [0, 30, 60, 90, 120, 150]',
                        (_min == 0 && _max == 150) ? 'success' : 'failed');

             _min = 10; _max = 1923; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : 0 2000 [0, 400, 800, 1200, 1600, 2000]',
                        (_min == 0 && _max == 2000) ? 'success' : 'failed');

             _min = 10; _max = 78; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : 0 100 [0, 20, 40, 60, 80, 100]',
                        (_min == 0 && _max == 100) ? 'success' : 'failed');

             _min = -31; _max = -3; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : -35 0 [-35, -28, -21, -14, -7, 0]',
                        (_min == -35 && _max == 0) ? 'success' : 'failed');

             _min = -51; _max = 203; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : -60 240 [-60, 0, 60, 120, 180, 240]',
                        (_min == -60 && _max == 240) ? 'success' : 'failed');

             _min = -251; _max = 23; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : -280 70 [-280, -210, -140, -70, 0, 70]',
                        (_min == -280 && _max == 70) ? 'success' : 'failed');

             option.precision = 2;
             _min = 0.23; _max = 0.78; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : 0.00 1.00'
                 + '["0.00", "0.20", "0.40", "0.60", "0.80", "1.00"]',
                (_min == 0.00 && _max == 1.00) ? 'success' : 'failed');

             _min = -12.23; _max = -0.78; console.log(_min, _max);
             _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : -15.00 0.00'
                 + '["-15.00", "-12.00", "-9.00", "-6.00", "-3.00", "0.00"]',
                (_min == -15.00 && _max == 0.00) ? 'success' : 'failed');

             _min = -0.23; _max = 0.78; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : -0.30 1.20'
                 + '["-0.30", "0.00", "0.30", "0.60", "0.90", "1.20"]',
                (_min == -0.30 && _max == 1.20) ? 'success' : 'failed');

             _min = -1.23; _max = 0.78; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : -1.50 1.00'
                 + '["-1.50", "-1.00", "-0.50", "0.00", "0.50", "1.00"]',
                (_min == -1.50 && _max == 1.00) ? 'success' : 'failed');

             option.precision = 1;
             _min = -2.3; _max = 0.5; console.log(_min, _max); _reformValue();
             console.log('result is :', _min, _max, _valueList);
             console.log('should be : -2.4 0.6'
                 + '["-2.4", "-1.8", "-1.2", "-0.6", "0.0", "0.6"]',
                (_min == -2.4 && _max == 0.6) ? 'success' : 'failed');
         * --------
         */
        function _reformValue(scale) {
            var splitNumber = option.splitNumber;
            var precision = option.precision;
            var splitGap;
            var power;
            if (precision === 0) {    // 整数
                 power = option.power;
            }
            else {                          // 小数
                // 放大倍数后复用整数逻辑，最后再缩小回去
                power = Math.pow(10, precision);
                _min *= power;
                _max *= power;
                power = option.power;
            }
            // console.log(_min,_max)
            var total;
            if (_min >= 0 && _max >= 0) {
                // 双正
                if (!scale) {
                    _min = 0;
                }
                // power自动降级
                while ((_max / power < splitNumber) && power != 1) {
                    power = power / 10;
                }
                total = _max - _min;
                // 粗算
                splitGap = Math.ceil((total / splitNumber) / power) * power;
                if (scale) {
                    if (precision === 0) {    // 整数
                        _min = Math.floor(_min / splitGap) * splitGap;
                    }
                    // 修正
                    if (_min + splitGap * splitNumber < _max) {
                        splitGap = 
                            Math.ceil(((_max - _min) / splitNumber) / power)
                            * power;
                    }
                }
                
                _max = _min + splitGap * splitNumber;
            }
            else if (_min <= 0 && _max <= 0) {
                // 双负
                if (!scale) {
                    _max = 0;
                }
                power = -power;
                // power自动降级
                while ((_min / power < splitNumber) && power != -1) {
                    power = power / 10;
                }
                total = _min - _max;
                splitGap = -Math.ceil((total / splitNumber) / power) * power;
                if (scale) {
                    if (precision === 0) {    // 整数
                        _max = Math.ceil(_max / splitGap) * splitGap;
                    }
                    // 修正
                    if (_max - splitGap * splitNumber > _min) {
                        splitGap = 
                            Math.ceil(((_min - _max) / splitNumber) / power)
                            * power;
                    }
                }
                
                _min = -splitGap * splitNumber + _max;
            }
            else {
                // 一正一负，确保0被选中
                total = _max - _min;
                // power自动降级
                while ((total / power < splitNumber) && power != 1) {
                    power = power/10;
                }
                // 正数部分的分隔数
                var partSplitNumber = Math.round(_max / total * splitNumber);
                // 修正数据范围极度偏正向，留给负数一个
                partSplitNumber -= (partSplitNumber == splitNumber ? 1 : 0);
                // 修正数据范围极度偏负向，留给正数一个
                partSplitNumber += partSplitNumber === 0 ? 1 : 0;
                splitGap = (Math.ceil(Math.max(
                                          _max / partSplitNumber,
                                          _min / (partSplitNumber - splitNumber)
                                      )
                           / power))
                           * power;

                _max = splitGap * partSplitNumber;
                _min = splitGap * (partSplitNumber - splitNumber);
            }
            //console.log(_min,_max,'vvvvvrrrrrr')
            _valueList = [];
            for (var i = 0; i <= splitNumber; i++) {
                _valueList.push(_min + splitGap * i);
            }

            if (precision !== 0) {    // 小数
                 // 放大倍数后复用整数逻辑，最后再缩小回去
                power = Math.pow(10, precision);
                _min = (_min / power).toFixed(precision) - 0;
                _max = (_max / power).toFixed(precision) - 0;
                for (var i = 0; i <= splitNumber; i++) {
                    _valueList[i] = (_valueList[i] / power).toFixed(precision);
                }
            }
            
            _reformLabelData();
        }

        function _reformLabelData() {
            _valueLabel = [];
            var formatter = option.axisLabel.formatter;
            if (formatter) {
                for (var i = 0, l = _valueList.length; i < l; i++) {
                    if (typeof formatter == 'function') {
                        _valueLabel.push(formatter(_valueList[i]));
                    }
                    else if (typeof formatter == 'string') {
                        _valueLabel.push(
                            formatter.replace('{value}',_valueList[i])
                        );
                    }
                }
            }
            else {
                _valueLabel = _valueList;
            }

        }
        
        function getExtremum() {
            _calculateValue();
            return {
                min: _min,
                max: _max
            };
        }

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newOption
         * @param {Object} newGrid
         */
        function init(newOption, newGrid, newSeries) {
            if (!newSeries || newSeries.length === 0) {
                return;
            }
            option = self.reformOption(newOption);
            // 通用字体设置
            option.axisLabel.textStyle = zrUtil.merge(
                option.axisLabel.textStyle || {},
                ecConfig.textStyle,
                {
                    'overwrite' : false,
                    'recursive' : true
                }
            );
            option.axisLabel.textStyle = zrUtil.merge(
                option.axisLabel.textStyle || {},
                ecConfig.textStyle,
                {
                    'overwrite' : false,
                    'recursive' : true
                }
            );
            grid = newGrid;
            series = newSeries;

            self.clear();
            if (zr) {   // 数值轴的另外一个功能只是用来计算极值
                _buildShape();
            }
        }

        /**
         * 刷新
         */
        function refresh() {
            self.clear();
            _buildShape();
        }

        // 根据值换算位置
        function getCoord(value) {
            value = value < _min ? _min : value;
            value = value > _max ? _max : value;

            var valueRange = _max - _min;
            var total;
            var result;
            if (option.position == 'left' || option.position == 'right') {
                // 纵向
                total = grid.getHeight();
                result = grid.getYend() - (value - _min) / valueRange * total;
            }
            else {
                // 横向
                total = grid.getWidth();
                result = (value - _min) / valueRange * total + grid.getX();
            }

            // Math.floor可能引起一些偏差，但性能会更好
            return (value == _min || value == _max)
                   ? result
                   : Math.floor(result);
        }

        function getPosition() {
            return option.position;
        }

        self.init = init;
        self.refresh = refresh;
        self.getExtremum = getExtremum;
        self.getCoord = getCoord;
        self.getPosition = getPosition;

        init(option, grid, series);
    }

    require('../component').define('valueAxis', ValueAxis);
    
    return ValueAxis;
});


/**
 * echarts组件类： 坐标轴
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 * 直角坐标系中坐标轴数组，数组中每一项代表一条横轴（纵轴）坐标轴。
 * 标准（1.0）中规定最多同时存在2条横轴和2条纵轴
 *    单条横轴时可指定安放于grid的底部（默认）或顶部，2条同时存在时则默认第一条安放于底部，第二天安放于顶部
 *    单条纵轴时可指定安放于grid的左侧（默认）或右侧，2条同时存在时则默认第一条安放于左侧，第二天安放于右侧。
 * 坐标轴有两种类型，类目型和数值型（区别详见axis）：
 *    横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
 *    纵轴通常为数值型，但条形图时则纵轴为类目型。
 *
 */
define('echarts/component/axis',['require','./base','../config','./categoryAxis','./valueAxis','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 图表选项
     *     @param {string=} option.xAxis.type 坐标轴类型，横轴默认为类目型'category'
     *     @param {string=} option.yAxis.type 坐标轴类型，纵轴默认为类目型'value'
     * @param {Object} component 组件
     * @param {string} axisType 横走or纵轴
     */
    function Axis(messageCenter, zr, option, component, axisType) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_AXIS;

        var _axisList = [];

        /**
         * 参数修正&默认值赋值，重载基类方法
         * @param {Object} opt 参数
         */
        function reformOption(opt) {
            // 不写或传了个空数值默认为数值轴
            if (!opt
                || (opt instanceof Array && opt.length === 0)
            ) {
                opt = [{
                    type : ecConfig.COMPONENT_TYPE_AXIS_VALUE
                }];
            }
            else if (!(opt instanceof Array)){
                opt = [opt];
            }

            // 最多两条，其他参数忽略
            if (opt.length > 2) {
                opt = [opt[0],opt[1]];
            }


            if (axisType == 'xAxis') {
                // 横轴位置默认配置
                if (!opt[0].position            // 没配置或配置错
                    || (opt[0].position != 'bottom'
                        && opt[0].position != 'top')
                ) {
                    opt[0].position = 'bottom';
                }
                if (opt.length > 1) {
                    opt[1].position = opt[0].position == 'bottom'
                                      ? 'top' : 'bottom';
                }

                for (var i = 0, l = opt.length; i < l; i++) {
                    // 坐标轴类型，横轴默认为类目型'category'
                    opt[i].type = opt[i].type || 'category';
                    // 标识轴类型&索引
                    opt[i].xAxisIndex = i;
                    opt[i].yAxisIndex = -1;
                }
            }
            else {
                // 纵轴位置默认配置
                if (!opt[0].position            // 没配置或配置错
                    || (opt[0].position != 'left'
                        && opt[0].position != 'right')
                ) {
                    opt[0].position = 'left';
                }

                if (opt.length > 1) {
                    opt[1].position = opt[0].position == 'left'
                                      ? 'right' : 'left';
                }

                for (var i = 0, l = opt.length; i < l; i++) {
                    // 坐标轴类型，纵轴默认为数值型'value'
                    opt[i].type = opt[i].type || 'value';
                    // 标识轴类型&索引
                    opt[i].xAxisIndex = -1;
                    opt[i].yAxisIndex = i;
                }
            }

            return opt;
        }

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newOption
         * @param {Object} newCompoent
         */
        function init(newOption, newCompoent, newAxisType) {
            component = newCompoent;
            axisType = newAxisType;

            self.clear();

            var axisOption;
            if (axisType == 'xAxis') {
                option.xAxis =self.reformOption(newOption.xAxis);
                axisOption = option.xAxis;
            }
            else {
                option.yAxis = reformOption(newOption.yAxis);
                axisOption = option.yAxis;
            }

            var CategoryAxis = require('./categoryAxis');
            var ValueAxis = require('./valueAxis');
            for (var i = 0, l = axisOption.length; i < l; i++) {
                _axisList.push(
                    axisOption[i].type == 'category'
                    ? new CategoryAxis(
                          messageCenter, zr,
                          axisOption[i], component
                      )
                    : new ValueAxis(
                          messageCenter, zr,
                          axisOption[i], component,
                          option.series
                      )
                );
            }
        }

        /**
         * 刷新
         */
        function refresh() {
            for (var i = 0, l = _axisList.length; i < l; i++) {
                _axisList[i].refresh && _axisList[i].refresh();
            }
        }

        /**
         * 根据值换算位置
         * @param {number} idx 坐标轴索引0~1
         */
        function getAxis(idx) {
            return _axisList[idx];
        }

        /**
         * 清除坐标轴子对象，实例仍可用，重载基类方法
         */
        function clear() {
            for (var i = 0, l = _axisList.length; i < l; i++) {
                _axisList[i].dispose && _axisList[i].dispose();
            }
            _axisList = [];
        }

        // 重载基类方法
        self.clear = clear;
        self.reformOption = reformOption;

        self.init = init;
        self.refresh = refresh;
        self.getAxis = getAxis;

        init(option, component, axisType);
    }

    require('../component').define('axis', Axis);
     
    return Axis;
});
/**
 * echarts组件： 网格
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/grid',['require','./base','../config','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 图表选项
     *      @param {number=} option.grid.x 直角坐标系内绘图网格起始横坐标，数值单位px
     *      @param {number=} option.grid.y 直角坐标系内绘图网格起始纵坐标，数值单位px
     *      @param {number=} option.grid.width 直角坐标系内绘图网格宽度，数值单位px
     *      @param {number=} option.grid.height 直角坐标系内绘图网格高度，数值单位px
     */
    function Grid(messageCenter, zr, option) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_GRID;

        var _zlevelBase = self.getZlevelBase();

        var _x;
        var _y;
        var _width;
        var _height;

        /**
         * 构造函数默认执行的初始化方法，也用于创建实例后动态修改
         * @param {Object} newZr
         * @param {Object} newOption
         */
        function init(newOption) {
            option = newOption;

            option.grid = self.reformOption(option.grid);

            var gridOption = option.grid;
            _x = gridOption.x;
            _y = gridOption.y;

            if (typeof gridOption.width == 'undefined') {
                _width = zr.getWidth() - (_x * 2);
            }
            else {
                _width = gridOption.width;
            }

            if (typeof gridOption.height == 'undefined') {
                _height = zr.getHeight() - (_y * 2);
            }
            else {
                _height = gridOption.height;
            }

            self.shapeList.push({
                shape : 'rectangle',
                id : zr.newShapeId('grid'),
                zlevel : _zlevelBase,
                hoverable : false,
                style : {
                    x : _x,
                    y : _y,
                    width : _width,
                    height : _height,
                    brushType : 'both',
                    color : gridOption.backgroundColor,
                    strokeColor: gridOption.borderColor,
                    lineWidth : gridOption.borderWidth
                    // type : option.splitArea.areaStyle.type,
                }
            });
            zr.addShape(self.shapeList[0]);
        }

        function getX() {
            return _x;
        }

        function getY() {
            return _y;
        }

        function getWidth() {
            return _width;
        }

        function getHeight() {
            return _height;
        }

        function getXend() {
            return _x + _width;
        }

        function getYend() {
            return _y + _height;
        }

        function getArea() {
            return {
                x : _x,
                y : _y,
                width : _width,
                height : _height
            };
        }

        function refresh() {
            self.clear();
            init(option);
        }

        self.init = init;
        self.getX = getX;
        self.getY = getY;
        self.getWidth = getWidth;
        self.getHeight = getHeight;
        self.getXend = getXend;
        self.getYend = getYend;
        self.getArea = getArea;
        self.refresh = refresh;

        init(option);
    }

    require('../component').define('grid', Grid);
    
    return Grid;
});
/**
 * echarts组件：数据区域缩放
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/dataZoom',['require','./base','../config','../component','zrender/tool/util','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 图表参数
     * @param {Object} component 组件
     */
    function DataZoom(messageCenter, zr, option, component) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_DATAZOOM;

        var _zlevelBase = self.getZlevelBase();

        var zoomOption;

        var _fillerSize = 30;       // 填充大小
        var _handleSize = 10;       // 手柄大小
        var _location;              // 位置参数，通过计算所得x, y, width, height
        var _zoom;                  // 缩放参数
        var _fillerShae;
        var _startShape;
        var _endShape;

        var _syncTicket;

        var _originalData;

        function _buildShape() {
            _buildBackground();
            _buildDataBackground();
            _buildFiller();
            _bulidHandle();

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }

            _syncData();
        }

        /**
         * 根据选项计算实体的位置坐标
         */
        function _getLocation() {
            var x;
            var y;
            var width;
            var height;
            var grid = component.grid;

            // 不指定则根据grid适配
            if (zoomOption.orient == 'horizontal') {
                // 水平布局
                width = zoomOption.width || grid.getWidth();
                height = zoomOption.height || _fillerSize;
                x = typeof zoomOption.x != 'undefined'
                    ? zoomOption.x : grid.getX();
                y = typeof zoomOption.y != 'undefined'
                    ? zoomOption.y : (zr.getHeight() - height);
            }
            else {
                // 垂直布局
                width = zoomOption.width || _fillerSize;
                height = zoomOption.height || grid.getHeight();
                x = typeof zoomOption.x != 'undefined'
                    ? zoomOption.x : 0;
                y = typeof zoomOption.y != 'undefined'
                    ? zoomOption.y : grid.getY();
            }

            return {
                x : x,
                y : y,
                width : width,
                height : height
            };
        }

        /**
         * 计算缩放参数
         * 修正单坐标轴只传对象为数组。
         */
        function _getZoom() {
            var series = option.series;
            var xAxis = option.xAxis;
            if (xAxis && !(xAxis instanceof Array)) {
                xAxis = [xAxis];
                option.xAxis = xAxis;
            }
            var yAxis = option.yAxis;
            if (yAxis && !(yAxis instanceof Array)) {
                yAxis = [yAxis];
                option.yAxis = yAxis;
            }

            var zoomSeriesIndex = [];
            var xAxisIndex;
            var yAxisIndex;

            var zOptIdx = zoomOption.xAxisIndex;
            if (xAxis && typeof zOptIdx == 'undefined') {
                xAxisIndex = [];
                for (var i = 0, l = xAxis.length; i < l; i++) {
                    // 横纵默认为类目轴
                    if (xAxis[i].type == 'category'
                        || typeof xAxis[i].type == 'undefined'
                    ) {
                        xAxisIndex.push(i);
                    }
                }
            }
            else {
                if (zOptIdx instanceof Array) {
                    xAxisIndex = zOptIdx;
                }
                else if (typeof zOptIdx != 'undefined') {
                    xAxisIndex = [zOptIdx];
                }
                else {
                    xAxisIndex = [];
                }
            }

            zOptIdx = zoomOption.yAxisIndex;
            if (yAxis && typeof zOptIdx == 'undefined') {
                yAxisIndex = [];
                for (var i = 0, l = yAxis.length; i < l; i++) {
                    if (yAxis[i].type == 'category') {
                        yAxisIndex.push(i);
                    }
                }
            }
            else {
                if (zOptIdx instanceof Array) {
                    yAxisIndex = zOptIdx;
                }
                else if (typeof zOptIdx != 'undefined') {
                    yAxisIndex = [zOptIdx];
                }
                else {
                    yAxisIndex = [];
                }
            }

            // 找到缩放控制的所有series
            for (var i = 0, l = series.length; i < l; i++) {
                if (series[i].type != ecConfig.CHART_TYPE_LINE
                    && series[i].type != ecConfig.CHART_TYPE_BAR
                    && series[i].type != ecConfig.CHART_TYPE_SCATTER
                    && series[i].type != ecConfig.CHART_TYPE_K
                ) {
                    continue;
                }
                for (var j = 0, k = xAxisIndex.length; j < k; j++) {
                    if (xAxisIndex[j] == (series[i].xAxisIndex || 0)) {
                        zoomSeriesIndex.push(i);
                        break;
                    }
                }
                for (var j = 0, k = yAxisIndex.length; j < k; j++) {
                    if (yAxisIndex[j] == (series[i].yAxisIndex || 0)) {
                        zoomSeriesIndex.push(i);
                        break;
                    }
                }
                // 不指定接管坐标轴，则散点图被纳入接管范围
                if (series[i].type == ecConfig.CHART_TYPE_SCATTER
                    && typeof zoomOption.xAxisIndex == 'undefined'
                    && typeof zoomOption.yAxisIndex == 'undefined'
                ) {
                    zoomSeriesIndex.push(i);
                }
            }

            var start = typeof zoomOption.start != 'undefined'
                        && zoomOption.start >= 0
                        && zoomOption.start <= 100
                        ? zoomOption.start : 0;
            var end = typeof zoomOption.end != 'undefined'
                      && zoomOption.end >= 0
                      && zoomOption.end <= 100
                      ? zoomOption.end : 100;
            if (start > end) {
                // 大小颠倒自动翻转
                start = start + end;
                end = start - end;
                start = start - end;
            }
            var size = Math.round(
                           (end - start) / 100
                           * (zoomOption.orient == 'horizontal'
                             ? _location.width : _location.height)
                       );
            return {
                start : start,
                end : end,
                start2 : 0,
                end2 : 100,
                size : size,
                xAxisIndex : xAxisIndex,
                yAxisIndex : yAxisIndex,
                seriesIndex : zoomSeriesIndex
            };
        }

        function _backupData() {
            _originalData = {
                xAxis : {},
                yAxis : {},
                series : {}
            };
            var xAxis = option.xAxis;
            var xAxisIndex = _zoom.xAxisIndex;
            for (var i = 0, l = xAxisIndex.length; i < l; i++) {
                _originalData.xAxis[xAxisIndex[i]] = xAxis[xAxisIndex[i]].data;
            }

            var yAxis = option.yAxis;
            var yAxisIndex = _zoom.yAxisIndex;
            for (var i = 0, l = yAxisIndex.length; i < l; i++) {
                _originalData.yAxis[yAxisIndex[i]] = yAxis[yAxisIndex[i]].data;
            }

            var series = option.series;
            var seriesIndex = _zoom.seriesIndex;
            var serie;
            for (var i = 0, l = seriesIndex.length; i < l; i++) {
                serie = series[seriesIndex[i]];
                _originalData.series[seriesIndex[i]] = serie.data;
                if (serie.type == ecConfig.CHART_TYPE_SCATTER) {
                    _calculScatterMap(seriesIndex[i]);
                }
            }
        }
        
        function _calculScatterMap(seriesIndex) {
            _zoom.scatterMap = _zoom.scatterMap || {};
            _zoom.scatterMap[seriesIndex] = _zoom.scatterMap[seriesIndex] || {};
            var componentLibrary = require('../component');
            var zrUtil = require('zrender/tool/util');
            // x轴极值
            var Axis = componentLibrary.get('axis');
            var axisOption = zrUtil.clone(option.xAxis);
            if (axisOption instanceof Array) {
                axisOption[0].type = 'value';
                axisOption[1] && (axisOption[1].type = 'value');
            }
            else {
                axisOption.type = 'value';
            }
            var vAxis = new Axis(
                null,   // messageCenter
                false,  // zr
                {
                    xAxis: axisOption,
                    series : option.series
                }, 
                component,
                'xAxis'
            );
            var axisIndex = option.series[seriesIndex].xAxisIndex || 0;
            _zoom.scatterMap[seriesIndex].x = 
                vAxis.getAxis(axisIndex).getExtremum();
            vAxis.dispose();
            
            // y轴极值
            axisOption = zrUtil.clone(option.yAxis);
            if (axisOption instanceof Array) {
                axisOption[0].type = 'value';
                axisOption[1] && (axisOption[1].type = 'value');
            }
            else {
                axisOption.type = 'value';
            }
            vAxis = new Axis(
                null,   // messageCenter
                false,  // zr
                {
                    yAxis: axisOption,
                    series : option.series
                }, 
                component,
                'yAxis'
            );
            axisIndex = option.series[seriesIndex].yAxisIndex || 0;
            _zoom.scatterMap[seriesIndex].y = 
                vAxis.getAxis(axisIndex).getExtremum();
            vAxis.dispose();
            // console.log(_zoom.scatterMap);
        }

        function _buildBackground() {
            self.shapeList.push({
                shape : 'rectangle',
                zlevel : _zlevelBase,
                hoverable :false,
                style : {
                    x : _location.x,
                    y : _location.y,
                    width : _location.width,
                    height : _location.height,
                    color : zoomOption.backgroundColor
                }
            });
        }

        function _buildDataBackground() {
            self.shapeList.push({
                shape : 'rectangle',
                zlevel : _zlevelBase,
                hoverable :false,
                style : {
                    x : _location.x,
                    y : _location.y,
                    width : _location.width,
                    height : _location.height,
                    color : zoomOption.backgroundColor
                }
            });

            var maxLength = 0;
            var xAxis = option.xAxis;
            var xAxisIndex = _zoom.xAxisIndex;
            for (var i = 0, l = xAxisIndex.length; i < l; i++) {
                maxLength = Math.max(
                    maxLength, xAxis[xAxisIndex[i]].data.length
                );
            }
            var yAxis = option.yAxis;
            var yAxisIndex = _zoom.yAxisIndex;
            for (var i = 0, l = yAxisIndex.length; i < l; i++) {
                maxLength = Math.max(
                    maxLength, yAxis[yAxisIndex[i]].data.length
                );
            }

            var data = option.series[_zoom.seriesIndex[0]].data;
            var maxValue = Number.MIN_VALUE;
            var minValue = Number.MAX_VALUE;
            var value;
            for (var i = 0, l = data.length; i < l; i++) {
                value = typeof data[i] != 'undefined'
                        ? (typeof data[i].value != 'undefined'
                          ? data[i].value : data[i])
                        : 0;
                if (option.series[_zoom.seriesIndex[0]].type 
                    == ecConfig.CHART_TYPE_K
                ) {
                    value = value[1];   // 收盘价
                }
                if (isNaN(value)) {
                    value = 0;
                }
                maxValue = Math.max(maxValue, value);
                minValue = Math.min(minValue, value);
            }

            var pointList = [];
            var x = _location.width / maxLength;
            var y = _location.height / maxLength;
            for (var i = 0, l = maxLength; i < l; i++) {
                value = typeof data[i] != 'undefined'
                        ? (typeof data[i].value != 'undefined'
                          ? data[i].value : data[i])
                        : 0;
                if (option.series[_zoom.seriesIndex[0]].type 
                    == ecConfig.CHART_TYPE_K
                ) {
                    value = value[1];   // 收盘价
                }
                if (isNaN(value)) {
                    value = 0;
                }
                if (zoomOption.orient == 'horizontal') {
                    pointList.push([
                        _location.x + x * i,
                        _location.y + _location.height - 5 - Math.round(
                            (value - minValue)
                            / (maxValue - minValue)
                            * (_location.height - 10)
                        )
                    ]);
                }
                else {
                    pointList.push([
                        _location.x + 5 + Math.round(
                            (value - minValue)
                            / (maxValue - minValue)
                            * (_location.width - 10)
                        ),
                        _location.y + y * i
                    ]);
                }
            }
            if (zoomOption.orient == 'horizontal') {
                 pointList.push([
                    _location.x + _location.width,
                    _location.y + _location.height
                ]);
                pointList.push([
                    _location.x, _location.y + _location.height
                ]);
            }
            else {
                pointList.push([
                    _location.x, _location.y + _location.height
                ]);
                pointList.push([
                    _location.x, _location.y
                ]);
            }

            self.shapeList.push({
                shape : 'polygon',
                zlevel : _zlevelBase,
                style : {
                    pointList : pointList,
                    color : zoomOption.dataBackgroundColor
                },
                hoverable : false
            });
        }

        /**
         * 构建填充物
         */
        function _buildFiller() {
            _fillerShae = {
                shape : 'rectangle',
                zlevel : _zlevelBase,
                draggable : true,
                ondrift : _ondrift,
                ondragend : _ondragend,
                _type : 'filler'
            };

            if (zoomOption.orient == 'horizontal') {
                // 横向
                _fillerShae.style = {
                    x : _location.x
                        + Math.round(_zoom.start / 100 * _location.width)
                        + _handleSize,
                    y : _location.y + 3,
                    width : _zoom.size - _handleSize * 2,
                    height : _location.height - 6,
                    color : zoomOption.fillerColor,
                    text : ':::',
                    textPosition : 'inside'
                };
            }
            else {
                _fillerShae.style ={
                    x : _location.x + 3,
                    y : _location.y
                        + Math.round(_zoom.start / 100 * _location.height)
                        + _handleSize,
                    width :  _location.width - 6,
                    height : _zoom.size - _handleSize * 2,
                    color : zoomOption.fillerColor,
                    text : '=',
                    textPosition : 'inside'
                };
            }

            self.shapeList.push(_fillerShae);
        }

        /**
         * 构建拖拽手柄
         */
        function _bulidHandle() {
            _startShape = {
                shape : 'rectangle',
                zlevel : _zlevelBase
            };
            _endShape = {
                shape : 'rectangle',
                zlevel : _zlevelBase
            };

            if (!zoomOption.zoomLock) {
                _startShape.draggable = true;
                _startShape.ondrift = _ondrift;
                _startShape.ondragend = _ondragend;
                _endShape.draggable = true;
                _endShape.ondrift = _ondrift;
                _endShape.ondragend = _ondragend;
            }

            if (zoomOption.orient == 'horizontal') {
                // 头
                _startShape.style = {
                    x : _fillerShae.style.x - _handleSize,
                    y : _location.y,
                    width : _handleSize,
                    height : _location.height,
                    color : zoomOption.handleColor,
                    text : '|',
                    textPosition : 'inside'
                };
                // 尾
                _endShape.style = {
                    x : _fillerShae.style.x + _fillerShae.style.width,
                    y : _location.y,
                    width : _handleSize,
                    height : _location.height,
                    color : zoomOption.handleColor,
                    text : '|',
                    textPosition : 'inside'
                };
            }
            else {
                // 头
                _startShape.style = {
                    x : _location.x,
                    y : _fillerShae.style.y - _handleSize,
                    width : _location.width,
                    height : _handleSize,
                    color : zoomOption.handleColor,
                    text : '—',
                    textPosition : 'inside'
                };
                // 尾
                _endShape.style = {
                    x : _location.x,
                    y : _fillerShae.style.y + _fillerShae.style.height,
                    width : _location.width,
                    height : _handleSize,
                    color : zoomOption.handleColor,
                    text : '—',
                    textPosition : 'inside'
                };
            }

            self.shapeList.push(_startShape);
            self.shapeList.push(_endShape);
        }

        /**
         * 拖拽范围控制
         */
        function _ondrift(e, dx, dy) {
            var detailSize = e._type == 'filler' ? _handleSize : 0;
            if (zoomOption.orient == 'horizontal') {
                if (e.style.x + dx - detailSize <= _location.x) {
                    e.style.x = _location.x + detailSize;
                }
                else if (e.style.x + dx + e.style.width + detailSize
                         >= _location.x + _location.width
                ) {
                    e.style.x = _location.x + _location.width
                                - e.style.width - detailSize;
                }
                else {
                    e.style.x += dx;
                }
            }
            else {
                if (e.style.y + dy - detailSize <= _location.y) {
                    e.style.y = _location.y + detailSize;
                }
                else if (e.style.y + dy + e.style.height + detailSize
                         >= _location.y + _location.height
                ) {
                    e.style.y = _location.y + _location.height
                                - e.style.height - detailSize;
                }
                else {
                    e.style.y += dy;
                }
            }

            if (e._type == 'filler') {
                _syncHandleShape();
            }
            else {
                _syncFillerShape();
            }

            if (zoomOption.realtime) {
                _syncData();
            }
            else {
                clearTimeout(_syncTicket);
                _syncTicket = setTimeout(_syncData, 200);
            }

            return true;
        }

        function _syncHandleShape() {
            if (zoomOption.orient == 'horizontal') {
                _startShape.style.x = _fillerShae.style.x - _handleSize;
                _endShape.style.x = _fillerShae.style.x
                                    + _fillerShae.style.width;
                _zoom.start = Math.floor(
                    (_startShape.style.x - _location.x)
                    / _location.width * 100
                );
                _zoom.end = Math.ceil(
                    (_endShape.style.x + _handleSize - _location.x)
                    / _location.width * 100
                );
            }
            else {
                _startShape.style.y = _fillerShae.style.y - _handleSize;
                _endShape.style.y = _fillerShae.style.y
                                    + _fillerShae.style.height;
                _zoom.start = Math.floor(
                    (_startShape.style.y - _location.y)
                    / _location.height * 100
                );
                _zoom.end = Math.ceil(
                    (_endShape.style.y + _handleSize - _location.y)
                    / _location.height * 100
                );
            }

            zr.modShape(_startShape.id, _startShape);
            zr.modShape(_endShape.id, _endShape);
            zr.refresh();
        }

        function _syncFillerShape() {
            var a;
            var b;
            if (zoomOption.orient == 'horizontal') {
                a = _startShape.style.x;
                b = _endShape.style.x;
                _fillerShae.style.x = Math.min(a, b) + _handleSize;
                _fillerShae.style.width = Math.abs(a - b) - _handleSize;
                _zoom.start = Math.floor(
                    (Math.min(a, b) - _location.x)
                    / _location.width * 100
                );
                _zoom.end = Math.ceil(
                    (Math.max(a, b) + _handleSize - _location.x)
                    / _location.width * 100
                );
            }
            else {
                a = _startShape.style.y;
                b = _endShape.style.y;
                _fillerShae.style.y = Math.min(a, b) + _handleSize;
                _fillerShae.style.height = Math.abs(a - b) - _handleSize;
                _zoom.start = Math.floor(
                    (Math.min(a, b) - _location.y)
                    / _location.height * 100
                );
                _zoom.end = Math.ceil(
                    (Math.max(a, b) + _handleSize - _location.y)
                    / _location.height * 100
                );
            }

            zr.modShape(_fillerShae.id, _fillerShae);
            zr.refresh();
        }
        
        function _syncShape() {
            if (!zoomOption.show) {
                // 没有伸缩控件
                return;
            }
            if (zoomOption.orient == 'horizontal') {
                _startShape.style.x = _location.x 
                                      + _zoom.start / 100 * _location.width;
                _endShape.style.x = _location.x 
                                    + _zoom.end / 100 * _location.width
                                    - _handleSize;
                    
                _fillerShae.style.x = _startShape.style.x + _handleSize;
                _fillerShae.style.width = _endShape.style.x 
                                          - _startShape.style.x
                                          - _handleSize;
            }
            else {
                _startShape.style.y = _location.y 
                                      + _zoom.start / 100 * _location.height;
                _endShape.style.y = _location.y 
                                    + _zoom.end / 100 * _location.height
                                    - _handleSize;
                    
                _fillerShae.style.y = _startShape.style.y + _handleSize;
                _fillerShae.style.height = _endShape.style.y 
                                          - _startShape.style.y
                                          - _handleSize;
            }
            
            zr.modShape(_startShape.id, _startShape);
            zr.modShape(_endShape.id, _endShape);
            zr.modShape(_fillerShae.id, _fillerShae);
            zr.refresh();
        }

        function  _syncData(dispatchNow) {
            var target;
            var start;
            var end;
            var length;
            var data;
            for (var key in _originalData) {
                target = _originalData[key];
                for (var idx in target) {
                    data = target[idx];
                    length = data.length;
                    start = Math.floor(_zoom.start / 100 * length);
                    end = Math.ceil(_zoom.end / 100 * length);
                    if (option[key][idx].type != ecConfig.CHART_TYPE_SCATTER) {
                        option[key][idx].data = data.slice(start, end);
                    }
                    else {
                        // 散点图特殊处理
                        option[key][idx].data = _synScatterData(idx, data);
                    }
                }
            }

            if (zoomOption.realtime || dispatchNow) {
                messageCenter.dispatch(
                    ecConfig.EVENT.DATA_ZOOM,
                    null,
                    {zoom: _zoom}
                );
            }

            zoomOption.start = _zoom.start;
            zoomOption.end = _zoom.end;
        }
        
        function _synScatterData(seriesIndex, data) {
            var newData = [];
            var scale = _zoom.scatterMap[seriesIndex];
            var total;
            var xStart;
            var xEnd;
            var yStart;
            var yEnd;
            
            if (zoomOption.orient == 'horizontal') {
                total = scale.x.max - scale.x.min;
                xStart = _zoom.start / 100 * total + scale.x.min;
                xEnd = _zoom.end / 100 * total + scale.x.min;
                
                total = scale.y.max - scale.y.min;
                yStart = _zoom.start2 / 100 * total + scale.y.min;
                yEnd = _zoom.end2 / 100 * total + scale.y.min;
            }
            else {
                total = scale.x.max - scale.x.min;
                xStart = _zoom.start2 / 100 * total + scale.x.min;
                xEnd = _zoom.end2 / 100 * total + scale.x.min;
                
                total = scale.y.max - scale.y.min;
                yStart = _zoom.start / 100 * total + scale.y.min;
                yEnd = _zoom.end / 100 * total + scale.y.min;
            }
            
            // console.log(xStart,xEnd,yStart,yEnd);
            for (var i = 0, l = data.length; i < l; i++) {
                if (data[i][0] >= xStart 
                    && data[i][0] <= xEnd
                    && data[i][1] >= yStart
                    && data[i][1] <= yEnd
                ) {
                    newData.push(data[i]);
                }
            }
            
            return newData;
        }

        function _ondragend() {
            self.isDragend = true;
        }

        /**
         * 数据项被拖拽出去
         */
        function ondragend(param, status) {
            if (!self.isDragend || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }

             _syncData();

            // 别status = {}赋值啊！！
            status.dragOut = true;
            status.dragIn = true;
            if (!zoomOption.realtime) {
                messageCenter.dispatch(
                    ecConfig.EVENT.DATA_ZOOM,
                    null,
                    {zoom: _zoom}
                );
            }
            status.needRefresh = false; // 会有消息触发fresh，不用再刷一遍
            // 处理完拖拽事件后复位
            self.isDragend = false;

            return;
        }

        function ondataZoom(param, status) {
            status.needRefresh = true;
            return;
        }
        
        function absoluteZoom(param) {
            zoomOption.start = _zoom.start = param.start;
            zoomOption.end = _zoom.end = param.end;
            zoomOption.start2 = _zoom.start2 = param.start2;
            zoomOption.end2 = _zoom.end2 = param.end2;
            //console.log(rect,gridArea,_zoom,total)
            _syncShape();
            _syncData(true);
            return;
        }
        
        function rectZoom(param) {
            if (!param) {
                // 重置拖拽
                zoomOption.start = 
                zoomOption.start2 = 
                _zoom.start = 
                _zoom.start2 = 0;
                    
                zoomOption.end =
                zoomOption.end2 = 
                _zoom.end = 
                _zoom.end2 = 100;
                
                _syncShape();
                _syncData(true);
                return _zoom;
            }
            var gridArea = component.grid.getArea();
            var rect = {
                x : param.x,
                y : param.y,
                width : param.width,
                height : param.height
            };
            // 修正方向框选
            if (rect.width < 0) {
                rect.x += rect.width;
                rect.width = -rect.width;
            }
            if (rect.height < 0) {
                rect.y += rect.height;
                rect.height = -rect.height;
            }
            // console.log(rect,_zoom);
            
            // 剔除无效缩放
            if (rect.x > gridArea.x + gridArea.width
                || rect.y > gridArea.y + gridArea.height
            ) {
                return false; // 无效缩放
            }
            
            // 修正框选超出
            if (rect.x < gridArea.x) {
                rect.x = gridArea.x;
            }
            if (rect.x + rect.width > gridArea.x + gridArea.width) {
                rect.width = gridArea.x + gridArea.width - rect.x;
            }
            if (rect.y + rect.height > gridArea.y + gridArea.height) {
                rect.height = gridArea.y + gridArea.height - rect.y;
            }
            
            var total;
            var sdx = (rect.x - gridArea.x) / gridArea.width;
            var edx = 1- (rect.x + rect.width - gridArea.x) / gridArea.width;
            var sdy = 1- (rect.y + rect.height - gridArea.y) / gridArea.height;
            var edy = (rect.y - gridArea.y) / gridArea.height;
            //console.log('this',sdy,edy,_zoom.start,_zoom.end)
            if (zoomOption.orient == 'horizontal') {
                total = _zoom.end - _zoom.start;
                _zoom.start += total * sdx;
                _zoom.end -= total * edx;
                
                total = _zoom.end2 - _zoom.start2;
                _zoom.start2 += total * sdy;
                _zoom.end2 -= total * edy;
            }
            else {
                total = _zoom.end - _zoom.start;
                _zoom.start += total * sdy;
                _zoom.end -= total * edy;
                
                total = _zoom.end2 - _zoom.start2;
                _zoom.start2 += total * sdx;
                _zoom.end2 -= total * edx;
            }
            //console.log(_zoom.start,_zoom.end,_zoom.start2,_zoom.end2)
            zoomOption.start = _zoom.start;
            zoomOption.end = _zoom.end;
            zoomOption.start2 = _zoom.start2;
            zoomOption.end2 = _zoom.end2;
            //console.log(rect,gridArea,_zoom,total)
            _syncShape();
            _syncData(true);
            return _zoom;
        }
        
        function syncBackupData(curOption, optionBackup) {
            var start;
            var target = _originalData['series'];
            var curSeries = curOption.series;
            var curData;
            for (var i = 0, l = curSeries.length; i < l; i++) {
                curData = curSeries[i].data;
                if (target[i]) {
                    // dataZoom接管的
                    start = Math.floor(_zoom.start / 100 * target[i].length);
                }
                else {
                    // 非dataZoom接管
                    start = 0;
                }
                for (var j = 0, k = curData.length; j < k; j++) {
                    if (typeof optionBackup.series[i].data[j + start].value 
                        != 'undefined'
                    ) {
                        optionBackup.series[i].data[j + start].value 
                            = curData[j].value;
                        if (target[i]) {
                            // 同步内部备份
                            target[i][j + start].value 
                                = curData[j].value;
                        }
                    }
                    else {
                        optionBackup.series[i].data[j + start] = curData[j];
                        if (target[i]) {
                            // 同步内部备份
                            target[i][j + start] 
                                = curData[j];
                        }
                    }
                }
            }
        }

        function init(newOption) {
            option = newOption;

            option.dataZoom = self.reformOption(option.dataZoom);

            zoomOption = option.dataZoom;

            self.clear();
            
            // 自己show 或者 toolbox启用且dataZoom有效
            if (option.dataZoom.show
                || (
                    self.deepQuery([option], 'toolbox.show')
                    && self.deepQuery([option], 'toolbox.feature.dataZoom')
                )
            ) {
                _location = _getLocation();
                _zoom =  _getZoom();
                _backupData();
            }
            
            if (option.dataZoom.show) {
                _buildShape();
            }
        }
        
        self.init = init;
        self.syncBackupData = syncBackupData;
        self.absoluteZoom = absoluteZoom;
        self.rectZoom = rectZoom;
        self.ondragend = ondragend;
        self.ondataZoom = ondataZoom;

        init(option);
    }

    require('../component').define('dataZoom', DataZoom);
    
    return DataZoom;
});
/**
 * echarts组件：图例
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/legend',['require','./base','../config','zrender/tool/area','zrender/shape','zrender/shape','zrender/shape','zrender/shape','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 图表参数
     * @param {Object=} selected 用于状态保持
     */
    function Legend(messageCenter, zr, option, selected) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');
        var zrArea = require('zrender/tool/area');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_LEGEND;

        var legendOption;                       // 图例选项，共享数据源
        var _zlevelBase = self.getZlevelBase();

        var _itemGroupLocation = {};    // 图例元素组的位置参数，通过计算所得x, y, width, height

        var _colorIndex = 0;
        var _colorMap = {};
        var _selectedMap = {};

        var icon = require('zrender/shape').get('icon');
        for (var k in legendIcon) {
            icon.define('legendicon' + k, legendIcon[k]);
            //console.log('legendicon' + k, legendIcon[k])
        }

        function _buildShape() {
            _itemGroupLocation = _getItemGroupLocation();

            _buildBackground();
            _buildItem();

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        /**
         * 构建所有图例元素
         */
        function _buildItem() {
            var data = legendOption.data;
            var dataLength = data.length;
            var itemName;
            var itemType;
            var itemShape;
            var textShape;
            var font = self.getFont(legendOption.textStyle);

            var zrWidth = zr.getWidth();
            var lastX = _itemGroupLocation.x;
            var lastY = _itemGroupLocation.y;
            var itemWidth = legendOption.itemWidth;
            var itemHeight = legendOption.itemHeight;
            var itemGap = legendOption.itemGap;
            var color;

            if (legendOption.orient == 'vertical'
                && legendOption.x == 'right'
            ) {
                lastX = _itemGroupLocation.x
                        + _itemGroupLocation.width
                        - itemWidth;
            }

            for (var i = 0; i < dataLength; i++) {
                itemName = data[i];
                itemType = _getSeriesByName(itemName);
                if (itemType) {
                    itemType = itemType.type;
                } else {
                    itemType = 'bar';
                }
                color = getColor(itemName);

                if (legendOption.orient == 'horizontal') {
                    if (zrWidth - lastX < 200   // 最后200px做分行预判
                        && (itemWidth + 5
                         + zrArea.getTextWidth(itemName, font)
                         + (i < dataLength - 1 ? itemGap : 0))
                        >= zrWidth - lastX
                    ) {
                        lastX = 0;
                        lastY += itemHeight + itemGap;
                    }
                }

                // 图形
                itemShape = _getItemShapeByType(
                    lastX, lastY,
                    itemWidth, itemHeight,
                    (_selectedMap[itemName] ? color : '#ccc'),
                    itemType
                );
                itemShape._name = itemName;
                if (legendOption.selectedMode) {
                    itemShape.onclick = _legendSelected;
                }
                self.shapeList.push(itemShape);

                // 文字
                textShape = {
                    shape : 'text',
                    zlevel : _zlevelBase,
                    style : {
                        x : lastX + itemWidth + 5,
                        y : lastY,
                        color : _selectedMap[itemName]
                                ? legendOption.textStyle.color
                                : '#ccc',
                        text: itemName,
                        textFont: font,
                        textBaseline: 'top'
                    },
                    hoverable : legendOption.selectedMode,
                    clickable : legendOption.selectedMode
                };

                if (legendOption.orient == 'vertical'
                    && legendOption.x == 'right'
                ) {
                    textShape.style.x -= (itemWidth + 10);
                    textShape.style.textAlign = 'right';
                }

                textShape._name = itemName;
                if (legendOption.selectedMode) {
                    textShape.onclick = _legendSelected;
                }
                self.shapeList.push(textShape);

                if (legendOption.orient == 'horizontal') {
                    lastX += itemWidth + 5
                             + zrArea.getTextWidth(itemName, font)
                             + itemGap;
                }
                else {
                    lastY += itemHeight + itemGap;
                }
            }
        }

        function _buildBackground() {
            var pTop = legendOption.padding[0];
            var pRight = legendOption.padding[1];
            var pBottom = legendOption.padding[2];
            var pLeft = legendOption.padding[3];

            self.shapeList.push({
                shape : 'rectangle',
                zlevel : _zlevelBase,
                hoverable :false,
                style : {
                    x : _itemGroupLocation.x - pLeft,
                    y : _itemGroupLocation.y - pTop,
                    width : _itemGroupLocation.width + pLeft + pRight,
                    height : _itemGroupLocation.height + pTop + pBottom,
                    brushType : legendOption.borderWidth === 0
                                ? 'fill' : 'both',
                    color : legendOption.backgroundColor,
                    strokeColor : legendOption.borderColor,
                    lineWidth : legendOption.borderWidth
                }
            });
        }

        /**
         * 根据选项计算图例实体的位置坐标
         */
        function _getItemGroupLocation() {
            var data = legendOption.data;
            var dataLength = data.length;
            var itemGap = legendOption.itemGap;
            var itemWidth = legendOption.itemWidth + 5; // 5px是图形和文字的间隔，不可配
            var itemHeight = legendOption.itemHeight;
            var font = self.getFont(legendOption.textStyle);
            var totalWidth = 0;
            var totalHeight = 0;

            if (legendOption.orient == 'horizontal') {
                // 水平布局，计算总宽度
                for (var i = 0; i < dataLength; i++) {
                    totalWidth += itemWidth
                                  + zrArea.getTextWidth(
                                        data[i],
                                        font
                                    )
                                  + itemGap;
                }
                totalWidth -= itemGap;      // 减去最后一个的itemGap
                totalHeight = itemHeight;
            }
            else {
                // 垂直布局，计算总高度
                totalHeight = (itemHeight + itemGap) * dataLength;
                totalHeight -= itemGap;     // 减去最后一个的itemGap;
                var maxWidth = 0;
                for (var i = 0; i < dataLength; i++) {
                    maxWidth = Math.max(
                        maxWidth,
                        zrArea.getTextWidth(
                            data[i],
                            font
                        )
                    );
                }
                totalWidth = itemWidth + maxWidth;
            }

            var x;
            var zrWidth = zr.getWidth();
            switch (legendOption.x) {
                case 'center' :
                    x = Math.floor((zrWidth - totalWidth) / 2);
                    break;
                case 'left' :
                    x = legendOption.padding[3] + legendOption.borderWidth;
                    break;
                case 'right' :
                    x = zrWidth
                        - totalWidth
                        - legendOption.padding[1]
                        - legendOption.borderWidth;
                    break;
                default :
                    x = legendOption.x - 0;
                    x = isNaN(x) ? 0 : x;
                    break;
            }

            var y;
            var zrHeight = zr.getHeight();
            switch (legendOption.y) {
                case 'top' :
                    y = legendOption.padding[0] + legendOption.borderWidth;
                    break;
                case 'bottom' :
                    y = zrHeight
                        - totalHeight
                        - legendOption.padding[2]
                        - legendOption.borderWidth;
                    break;
                case 'center' :
                    y = Math.floor((zrHeight - totalHeight) / 2);
                    break;
                default :
                    y = legendOption.y - 0;
                    y = isNaN(y) ? 0 : y;
                    break;
            }

            // 水平布局的横向超长自动分行，纵布局超长不考虑
            if (legendOption.orient == 'horizontal' && totalWidth > zrWidth) {
                totalWidth = zrWidth;
                if (x < 0) {
                    x = 0;
                }
                totalHeight += totalHeight + 10;
            }


            return {
                x : x,
                y : y,
                width : totalWidth,
                height : totalHeight
            };
        }

        /**
         * 根据名称返回series数据
         */
        function _getSeriesByName(name) {
            var series = option.series;
            var hasFind;
            var data;
            for (var i = 0, l = series.length; i < l; i++) {
                if (series[i].name == name) {
                    // 系列名称优先
                    return series[i];
                }

                if (series[i].type == ecConfig.CHART_TYPE_PIE) {
                    // 饼图得查找里面的数据名字
                    hasFind = false;
                    data = series[i].data;
                    for (var j = 0, k = data.length; j < k; j++) {
                        if (data[j].name == name) {
                            hasFind = true;
                            break;
                        }
                    }
                    if (hasFind) {
                        return series[i];
                    }
                }
                else if (series[i].type == ecConfig.CHART_TYPE_FORCE) {
                    // 力导布局查找categories配置
                    hasFind = false;
                    data = series[i].categories;
                    for (var j = 0, k = data.length; j < k; j++) {
                        if (data[j].name == name) {
                            data = data[j];
                            data.type = ecConfig.CHART_TYPE_FORCE;
                            hasFind = true;
                            break;
                        }
                    }
                    if (hasFind) {
                        return data;
                    }
                }
            }
            return;
        }

        function _getItemShapeByType(x, y, width, height, color, itemType) {
            var itemShape = {
                shape : 'icon',
                zlevel : _zlevelBase,
                style : {
                    iconType : 'legendicon' + itemType,
                    x : x,
                    y : y,
                    width : width,
                    height : height,
                    color : color,
                    strokeColor : color,
                    lineWidth : 3
                },
                hoverable : legendOption.selectedMode,
                clickable : legendOption.selectedMode
            };
            // 特殊设置
            switch (itemType) {
                case 'line' :
                    itemShape.style.brushType = 'stroke';
                    break;
                case 'k' :
                    itemShape.style.brushType = 'both';
                    itemShape.style.color = self.deepQuery(
                        [ecConfig], 'k.itemStyle.normal.color'
                    ) || '#fff';
                    itemShape.style.strokeColor = color != '#ccc' 
                        ? self.deepQuery(
                              [ecConfig], 'k.itemStyle.normal.lineStyle.color'
                          ) || '#ff3200'
                        : color;
            }
            return itemShape;
        }

        function _legendSelected(param) {
            var itemName = param.target._name;
            _selectedMap[itemName] = !_selectedMap[itemName];
            messageCenter.dispatch(
                ecConfig.EVENT.LEGEND_SELECTED,
                param.event,
                {selected : _selectedMap}
            );
        }

        function init(newOption) {
            if (!self.deepQuery([newOption], 'legend.data')) {
                return;
            }

            option = newOption;

            option.legend = self.reformOption(option.legend);
            // 补全padding属性
            option.legend.padding = self.reformCssArray(
                option.legend.padding
            );

            legendOption = option.legend;

            self.clear();

            _selectedMap = {};

            var data = legendOption.data || [];
            var itemName;
            var serie;
            var color;
            for (var i = 0, dataLength = data.length; i < dataLength; i++) {
                itemName = data[i];
                serie = _getSeriesByName(itemName);
                if (!serie) {
                    _selectedMap[itemName] = false;
                } 
                else {
                    color = self.deepQuery(
                        [serie], 'itemStyle.normal.color'
                    );
                    if (color) {
                        setColor(itemName, color);
                    }
                    _selectedMap[itemName] = true;
                }
            }
            if (selected) {
                for (var k in selected) {
                    _selectedMap[k] = selected[k];
                }
            }
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            legendOption = option.legend;
            self.clear();
            _buildShape();
        }

        function setColor(legendName, color) {
            _colorMap[legendName] = color;
        }

        function getColor(legendName) {
            if (!_colorMap[legendName]) {
                _colorMap[legendName] = zr.getColor(_colorIndex++);
            }
            return _colorMap[legendName];
        }
        
        function hasColor(legendName) {
            return _colorMap[legendName] ? _colorMap[legendName] : false;
        }

        function add(name, color){
            legendOption.data.push(name);
            setColor(name,color);
            _selectedMap[name] = true;
        }

        function del(name){
            var data = legendOption.data;
            var finalData = [];
            var found = false;
            for (var i = 0, dataLength = data.length; i < dataLength; i++) {
                if (found || data[i] != name) {
                    finalData.push(data[i]);
                }
                else {
                    found = true;
                    continue;
                }
            }
            legendOption.data = finalData;
        }
        
        /**
         * 特殊图形元素回调设置
         * @param {Object} name
         * @param {Object} itemShape
         */
        function getItemShape(name) {
            var shape;
            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                shape = self.shapeList[i];
                if (shape._name == name && shape.shape != 'text') {
                    return shape;
                }
            }
        }
        
        /**
         * 特殊图形元素回调设置
         * @param {Object} name
         * @param {Object} itemShape
         */
        function setItemShape(name, itemShape) {
            var shape;
            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                shape = self.shapeList[i];
                if (shape._name == name && shape.shape != 'text') {
                    if (!_selectedMap[name]) {
                        itemShape.style.color = '#ccc';
                        itemShape.style.strokeColor = '#ccc';
                    }
                    zr.modShape(shape.id, itemShape);
                }
            }
        }

        function isSelected(itemName) {
            if (typeof _selectedMap[itemName] != 'undefined') {
                return _selectedMap[itemName];
            }
            else {
                // 没在legend里定义的都为true啊~
                return true;
            }
        }

        self.init = init;
        self.refresh = refresh;
        self.setColor = setColor;
        self.getColor = getColor;
        self.hasColor = hasColor;
        self.add = add;
        self.del = del;
        self.getItemShape = getItemShape;
        self.setItemShape = setItemShape;
        self.isSelected = isSelected;

        init(option);
    }
    
    var legendIcon = {
        line : function (ctx, style) {
            var dy = style.height / 2;
            ctx.moveTo(style.x,     style.y + dy);
            ctx.lineTo(style.x + style.width,style.y + dy);
        },
        pie : function (ctx, style) {
            var x = style.x;
            var y = style.y;
            var width = style.width;
            var height = style.height;
            var sector = require('zrender/shape').get('sector');
            sector.buildPath(ctx, {
                x : x + width / 2,
                y : y + height + 2,
                r : height + 2,
                r0 : 6,
                startAngle : 45,
                endAngle : 135
            });
        },
        k : function (ctx, style) {
            var x = style.x;
            var y = style.y;
            var width = style.width;
            var height = style.height;
            var candle = require('zrender/shape').get('candle');
            candle.buildPath(ctx, {
                x : x + width / 2,
                y : [y + 1, y + 1, y + height - 6, y + height],
                width : width - 6
            });
        },
        bar : function (ctx, style) {
            ctx.rect(style.x, style.y + 1, style.width, style.height - 2);
        },
        force : function(ctx, style) {
            require('zrender/shape').get('icon').get('circle')(ctx, style);
        }
    };
    
    require('../component').define('legend', Legend);
    
    return Legend;
});



/**
 * echarts组件：值域
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/dataRange',['require','./base','../config','zrender/tool/area','zrender/tool/color','zrender/tool/color','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 图表参数
     * @param {Object=} selected 用于状态保持
     */
    function DataRange(messageCenter, zr, option) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');
        var zrArea = require('zrender/tool/area');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_DATARANGE;

        var dataRangeOption;                       // 值域选项，共享数据源
        var _zlevelBase = self.getZlevelBase();

        var _itemGroupLocation = {};    // 值域元素组的位置参数，通过计算所得x, y, width, height
        var _calculableLocation;        // 可计算元素的位置缓存
        
        var _startShape;
        var _startMask;
        var _endShape;
        var _endMask;
        var _fillerShae;
        var _range;
        var _syncTicket;

        var _textGap = 10; // 非值文字间隔
        var _gap;
        var _colorList;
        var _valueTextList;

        var _selectedMap = {};

        function _buildShape() {
            _itemGroupLocation = _getItemGroupLocation();
//            console.log(_itemGroupLocation);
            _buildBackground();
            if (dataRangeOption.splitNumber <= 0 
                || dataRangeOption.calculable
            ) {
                _buildGradient();
            }
            else {
                _buildItem();
            }

            for (var i = 0, l = self.shapeList.length; i < l; i++) {
                self.shapeList[i].id = zr.newShapeId(self.type);
                zr.addShape(self.shapeList[i]);
            }
        }

        /**
         * 构建图例型的值域元素
         */
        function _buildItem() {
            var data = _valueTextList;
            var dataLength = data.length;
            var itemName;
            var itemShape;
            var textShape;
            var font = self.getFont(dataRangeOption.textStyle);

            var lastX = _itemGroupLocation.x;
            var lastY = _itemGroupLocation.y;
            var itemWidth = dataRangeOption.itemWidth;
            var itemHeight = dataRangeOption.itemHeight;
            var itemGap = dataRangeOption.itemGap;
            var textHeight = zrArea.getTextWidth('国', font);
            var color;

            if (dataRangeOption.orient == 'vertical'
                && dataRangeOption.x == 'right'
            ) {
                lastX = _itemGroupLocation.x
                        + _itemGroupLocation.width
                        - itemWidth;
            }
            var needValueText = true;
            if (dataRangeOption.text) {
                needValueText = false;
                // 第一个文字
                if (dataRangeOption.text[0]) {
                    textShape = _getTextShape(
                        lastX, lastY, dataRangeOption.text[0]
                    );
                    if (dataRangeOption.orient == 'horizontal') {
                        lastX += zrArea.getTextWidth(
                                     dataRangeOption.text[0],
                                     font
                                 )
                                 + _textGap;
                    }
                    else {
                        lastY += textHeight + _textGap;
                    }
                    self.shapeList.push(textShape);
                }
            }

            for (var i = 0; i < dataLength; i++) {
                itemName = data[i];
                color = getColor((dataLength - i) * _gap + dataRangeOption.min);
                // 图形
                itemShape = _getItemShape(
                    lastX, lastY,
                    itemWidth, itemHeight,
                    (_selectedMap[i] ? color : '#ccc')
                );
                itemShape._idx = i;
                itemShape.onclick = _dataRangeSelected;
                self.shapeList.push(itemShape);
                
                if (needValueText) {
                    // 文字
                    textShape = {
                        shape : 'text',
                        zlevel : _zlevelBase,
                        style : {
                            x : lastX + itemWidth + 5,
                            y : lastY,
                            color : _selectedMap[i]
                                    ? dataRangeOption.textStyle.color
                                    : '#ccc',
                            text: data[i],
                            textFont: font,
                            textBaseline: 'top'
                        },
                        clickable : true
                    };
                    if (dataRangeOption.orient == 'vertical'
                        && dataRangeOption.x == 'right'
                    ) {
                        textShape.style.x -= (itemWidth + 10);
                        textShape.style.textAlign = 'right';
                    }
                    textShape._idx = i;
                    textShape.onclick = _dataRangeSelected;
                    self.shapeList.push(textShape);
                }

                if (dataRangeOption.orient == 'horizontal') {
                    lastX += itemWidth 
                             + (needValueText ? 5 : 0)
                             + (needValueText 
                               ? zrArea.getTextWidth(itemName, font)
                               : 0)
                             + itemGap;
                }
                else {
                    lastY += itemHeight + itemGap;
                }
            }
            
            if (!needValueText && dataRangeOption.text[1]) {
                if (dataRangeOption.orient == 'horizontal') {
                    lastX = lastX - itemGap + _textGap;
                }
                else {
                    lastY = lastY - itemGap + _textGap;
                }
                // 最后一个文字
                textShape = _getTextShape(
                    lastX, lastY, dataRangeOption.text[1]
                );

                self.shapeList.push(textShape);
            }
        }
 
        /**
         * 构建渐变型的值域元素 
         */
        function _buildGradient() {
            var itemShape;
            var textShape;
            var font = self.getFont(dataRangeOption.textStyle);

            var lastX = _itemGroupLocation.x;
            var lastY = _itemGroupLocation.y;
            var itemWidth = dataRangeOption.itemWidth;
            var itemHeight = dataRangeOption.itemHeight;
            var textHeight = zrArea.getTextWidth('国', font);

            
            var needValueText = true;
            if (dataRangeOption.text) {
                needValueText = false;
                // 第一个文字
                if (dataRangeOption.text[0]) {
                    textShape = _getTextShape(
                        lastX, lastY, dataRangeOption.text[0]
                    );
                    if (dataRangeOption.orient == 'horizontal') {
                        lastX += zrArea.getTextWidth(
                                     dataRangeOption.text[0],
                                     font
                                 )
                                 + _textGap;
                    }
                    else {
                        lastY += textHeight + _textGap;
                    }
                    self.shapeList.push(textShape);
                } 
            }
            
            var zrColor = require('zrender/tool/color');
            var per = 1 / (dataRangeOption.color.length - 1);
            var colorList = [];
            for (var i = 0, l = dataRangeOption.color.length; i < l; i++) {
                colorList.push([i * per, dataRangeOption.color[i]]);
            }
            if (dataRangeOption.orient == 'horizontal') {
                itemShape = {
                    shape : 'rectangle',
                    zlevel : _zlevelBase,
                    style : {
                        x : lastX,
                        y : lastY,
                        width : itemWidth * 10,
                        height : itemHeight,
                        color : zrColor.getLinearGradient(
                            lastX, lastY, lastX + itemWidth * 10, lastY,
                            colorList
                        )
                    },
                    hoverable : false
                };
                lastX += itemWidth * 10 + _textGap;
            }
            else {
                itemShape = {
                    shape : 'rectangle',
                    zlevel : _zlevelBase,
                    style : {
                        x : lastX,
                        y : lastY,
                        width : itemWidth,
                        height : itemHeight * 10,
                        color : zrColor.getLinearGradient(
                            lastX, lastY, lastX, lastY + itemHeight * 10,
                            colorList
                        )
                    },
                    hoverable : false
                };
                lastY += itemHeight * 10 + _textGap;
            }
            self.shapeList.push(itemShape);
            if (dataRangeOption.calculable) {
                _calculableLocation = itemShape.style;
                _buildFiller();
                _bulidMask();
                _bulidHandle();
            }
            
            if (!needValueText && dataRangeOption.text[1]) {
                // 最后一个文字
                textShape = _getTextShape(
                    lastX, lastY, dataRangeOption.text[1]
                );

                self.shapeList.push(textShape);
            }
        }
        
        /**
         * 构建填充物
         */
        function _buildFiller() {
            _fillerShae = {
                shape : 'rectangle',
                zlevel : _zlevelBase + 1,
                style : {
                    x : _calculableLocation.x,
                    y : _calculableLocation.y,
                    width : _calculableLocation.width,
                    height : _calculableLocation.height,
                    color : 'rgba(255,255,255,0.2)'
                },
                draggable : true,
                ondrift : _ondrift,
                ondragend : _ondragend,
                _type : 'filler'
            };

            self.shapeList.push(_fillerShae);
        }
        
        /**
         * 构建拖拽手柄
         */
        function _bulidHandle() {
            var x = _calculableLocation.x;
            var y = _calculableLocation.y;
            var width = _calculableLocation.width;
            var height = _calculableLocation.height;
            
            var font = self.getFont(dataRangeOption.textStyle);
            var textHieght = zrArea.getTextWidth('国', font) + 2;
            var textWidth = Math.max(
                    zrArea.getTextWidth(
                        dataRangeOption.precision === 0
                        ? dataRangeOption.max
                        : dataRangeOption.max.toFixed(
                            dataRangeOption.precision
                          ),
                        font),
                    zrArea.getTextWidth(
                        dataRangeOption.precision === 0
                        ? dataRangeOption.min
                        : dataRangeOption.min.toFixed(
                            dataRangeOption.precision
                          ), 
                        font
                    )
                ) + 2;
                            
            var pointListStart;
            var textXStart;
            var textYStart;
            var pointListEnd;
            var textXEnd;
            var textYEnd;
            if (dataRangeOption.orient == 'horizontal') {
                // 水平
                if (dataRangeOption.y != 'bottom') {
                    // 手柄统统在下方
                    pointListStart = [
                        [x, y],
                        [x, y + height + textHieght / 2 * 3],
                        [x - textWidth, y + height + textHieght / 2 * 3],
                        [x - textWidth, y + height + textHieght / 2],
                        [x - textHieght / 2, y + height + textHieght / 2],
                        [x - 1, y + height],
                        [x - 1, y]
                        
                    ];
                    textXStart = x - textWidth / 2;
                    textYStart = y + height + textHieght;
                    
                    pointListEnd = [
                        [x + width, y],
                        [x + width, y + height + textHieght / 2 * 3],
                        [x + width + textWidth, y + height + textHieght/2*3],
                        [x + width + textWidth, y + height + textHieght / 2],
                        [x + width + textHieght / 2, y + height + textHieght/2],
                        [x + width + 1, y + height],
                        [x + width + 1, y]
                    ];
                    textXEnd = x + width + textWidth / 2;
                    textYEnd = textYStart;
                }
                else {
                    // 手柄在上方
                    pointListStart = [
                        [x, y + height],
                        [x, y - textHieght / 2 * 3],
                        [x - textWidth, y - textHieght / 2 * 3],
                        [x - textWidth, y - textHieght / 2],
                        [x - textHieght / 2, y - textHieght / 2],
                        [x - 1, y],
                        [x - 1, y + height]
                        
                    ];
                    textXStart = x - textWidth / 2;
                    textYStart = y - textHieght;
                    
                    pointListEnd = [
                        [x + width, y + height],
                        [x + width, y - textHieght / 2 * 3],
                        [x + width + textWidth, y - textHieght / 2 * 3],
                        [x + width + textWidth, y - textHieght / 2],
                        [x  + width + textHieght / 2, y - textHieght / 2],
                        [x + width + 1, y],
                        [x + width + 1, y + height]
                    ];
                    textXEnd = x + width + textWidth / 2;
                    textYEnd = textYStart;
                }
            }
            else {
                textWidth += textHieght;
                // 垂直
                if (dataRangeOption.x != 'right') {
                    // 手柄统统在右侧
                    pointListStart = [
                        [x, y],
                        [x + width + textWidth, y],
                        [x + width + textWidth, y - textHieght],
                        [x + width + textHieght, y - textHieght],
                        [x + width, y - 1],
                        [x, y - 1]
                    ];
                    textXStart = x + width + textWidth / 2 + textHieght / 2;
                    textYStart = y - textHieght / 2;
                    
                    pointListEnd = [
                        [x, y + height],
                        [x + width + textWidth, y + height],
                        [x + width + textWidth, y + textHieght + height],
                        [x + width + textHieght, y + textHieght + height],
                        [x + width, y + 1 + height],
                        [x, y + height + 1]
                    ];
                    textXEnd = textXStart;
                    textYEnd = y  + height + textHieght / 2;
                }
                else {
                    // 手柄在左侧
                    pointListStart = [
                        [x + width, y],
                        [x - textWidth, y],
                        [x - textWidth, y - textHieght],
                        [x - textHieght, y - textHieght],
                        [x, y - 1],
                        [x + width, y - 1]
                    ];
                    textXStart = x - textWidth / 2 - textHieght / 2;
                    textYStart = y - textHieght / 2;
                    
                    pointListEnd = [
                        [x + width, y + height],
                        [x - textWidth, y + height],
                        [x - textWidth, y + textHieght + height],
                        [x - textHieght, y + textHieght + height],
                        [x, y + 1 + height],
                        [x + width, y + height + 1]
                    ];
                    textXEnd = textXStart;
                    textYEnd = y  + height + textHieght / 2;
                }
            }
            
            _startShape = {
                shape : 'polygon',
                zlevel : _zlevelBase + 1,
                style : {
                    pointList : pointListStart,
                    text : dataRangeOption.max + '',
                    textX : textXStart,
                    textY : textYStart,
                    textPosition : 'specific',
                    textAlign : 'center',
                    textBaseline : 'middle ',
                    textColor: dataRangeOption.textStyle.color,
                    color : getColor(dataRangeOption.max),
                    width : 0,                 // for ondrif计算统一
                    height : 0,
                    x : pointListStart[0][0],
                    y : pointListStart[0][1],
                    _x : pointListStart[0][0],   // 拖拽区域控制缓存
                    _y : pointListStart[0][1]
                },
                draggable : true,
                ondrift : _ondrift,
                ondragend : _ondragend
            };
            
            _endShape = {
                shape : 'polygon',
                zlevel : _zlevelBase + 1,
                style : {
                    pointList : pointListEnd,
                    text : dataRangeOption.min + '',
                    textX : textXEnd,
                    textY : textYEnd,
                    textPosition : 'specific',
                    textAlign : 'center',
                    textBaseline : 'middle ',
                    textColor: dataRangeOption.textStyle.color,
                    color : getColor(dataRangeOption.min),
                    width : 0,                 // for ondrif计算统一
                    height : 0,
                    x : pointListEnd[0][0],
                    y : pointListEnd[0][1],
                    _x : pointListEnd[0][0],   // 拖拽区域控制缓存
                    _y : pointListEnd[0][1]
                },
                draggable : true,
                ondrift : _ondrift,
                ondragend : _ondragend
            };
            self.shapeList.push(_startShape);
            self.shapeList.push(_endShape);
        }
        
        function _bulidMask() {
            var x = _calculableLocation.x;
            var y = _calculableLocation.y;
            var width = _calculableLocation.width;
            var height = _calculableLocation.height;
            _startMask = {
                shape : 'rectangle',
                zlevel : _zlevelBase + 1,
                style : {
                    x : x,
                    y : y,
                    width : dataRangeOption.orient == 'horizontal'
                            ? 0 : width,
                    height : dataRangeOption.orient == 'horizontal'
                             ? height : 0,
                    color : '#ccc'
                },
                hoverable:false
            };
            _endMask = {
                shape : 'rectangle',
                zlevel : _zlevelBase + 1,
                style : {
                    x : dataRangeOption.orient == 'horizontal'
                        ? x + width : x,
                    y : dataRangeOption.orient == 'horizontal'
                        ? y : y + height,
                    width : dataRangeOption.orient == 'horizontal'
                            ? 0 : width,
                    height : dataRangeOption.orient == 'horizontal'
                             ? height : 0,
                    color : '#ccc'
                },
                hoverable:false
            };
            self.shapeList.push(_startMask);
            self.shapeList.push(_endMask);
        }
        
        function _buildBackground() {
            var pTop = dataRangeOption.padding[0];
            var pRight = dataRangeOption.padding[1];
            var pBottom = dataRangeOption.padding[2];
            var pLeft = dataRangeOption.padding[3];

            self.shapeList.push({
                shape : 'rectangle',
                zlevel : _zlevelBase,
                hoverable :false,
                style : {
                    x : _itemGroupLocation.x - pLeft,
                    y : _itemGroupLocation.y - pTop,
                    width : _itemGroupLocation.width + pLeft + pRight,
                    height : _itemGroupLocation.height + pTop + pBottom,
                    brushType : dataRangeOption.borderWidth === 0
                                ? 'fill' : 'both',
                    color : dataRangeOption.backgroundColor,
                    strokeColor : dataRangeOption.borderColor,
                    lineWidth : dataRangeOption.borderWidth
                }
            });
        }

        /**
         * 根据选项计算值域实体的位置坐标
         */
        function _getItemGroupLocation() {
            var data = _valueTextList;
            var dataLength = data.length;
            var itemGap = dataRangeOption.itemGap;
            var itemWidth = dataRangeOption.itemWidth;
            var itemHeight = dataRangeOption.itemHeight;
            var totalWidth = 0;
            var totalHeight = 0;
            var font = self.getFont(dataRangeOption.textStyle);
            var textHeight = zrArea.getTextWidth('国', font);

            if (dataRangeOption.orient == 'horizontal') {
                // 水平布局，计算总宽度
                if (dataRangeOption.text 
                    || dataRangeOption.splitNumber <= 0
                    || dataRangeOption.calculable
                ) {
                    // 指定文字或线性渐变
                    totalWidth = 
                        ((dataRangeOption.splitNumber <= 0
                          || dataRangeOption.calculable)
                          ? (itemWidth * 10 + itemGap)
                          : dataLength * (itemWidth + itemGap))
                        + (dataRangeOption.text 
                           && typeof dataRangeOption.text[0] != 'undefined'
                           ? (zrArea.getTextWidth(
                                  dataRangeOption.text[0],
                                  font
                              ) + _textGap)
                           : 0)
                        + (dataRangeOption.text
                           && typeof dataRangeOption.text[1] != 'undefined'
                           ? (zrArea.getTextWidth(
                                  dataRangeOption.text[1],
                                  font
                              ) + _textGap)
                           : 0);
                }
                else {
                    // 值标签
                    itemWidth += 5;
                    for (var i = 0; i < dataLength; i++) {
                        totalWidth += itemWidth
                                      + zrArea.getTextWidth(
                                            data[i],
                                            font
                                        )
                                      + itemGap;
                    }
                }
                totalWidth -= itemGap;      // 减去最后一个的itemGap
                totalHeight = Math.max(textHeight, itemHeight);
            }
            else {
                // 垂直布局，计算总高度
                var maxWidth;
                if (dataRangeOption.text
                    || dataRangeOption.splitNumber <= 0
                    || dataRangeOption.calculable
                ) {
                    // 指定文字或线性渐变
                    totalHeight =
                        ((dataRangeOption.splitNumber <= 0
                          || dataRangeOption.calculable)
                          ? (itemHeight * 10 + itemGap)
                          : dataLength * (itemHeight + itemGap))
                        + (dataRangeOption.text
                           && typeof dataRangeOption.text[0] != 'undefined'
                            ? (_textGap + textHeight)
                            : 0)
                        + (dataRangeOption.text
                           && typeof dataRangeOption.text[1] != 'undefined'
                            ? (_textGap + textHeight)
                            : 0);
                       
                    maxWidth = Math.max(
                        zrArea.getTextWidth(
                            (dataRangeOption.text && dataRangeOption.text[0])
                            || '',
                            font
                        ),
                        zrArea.getTextWidth(
                            (dataRangeOption.text && dataRangeOption.text[1])
                            || '',
                            font
                        )
                    );
                    totalWidth = Math.max(itemWidth, maxWidth);
                }
                else {
                    totalHeight = (itemHeight + itemGap) * dataLength;
                    // 值标签
                    itemWidth += 5;
                    maxWidth = 0;
                    for (var i = 0; i < dataLength; i++) {
                        maxWidth = Math.max(
                            maxWidth,
                            zrArea.getTextWidth(
                                data[i],
                                font
                            )
                        );
                    }
                    totalWidth = itemWidth + maxWidth;
                }
                totalHeight -= itemGap;     // 减去最后一个的itemGap;
            }

            var x;
            var zrWidth = zr.getWidth();
            switch (dataRangeOption.x) {
                case 'center' :
                    x = Math.floor((zrWidth - totalWidth) / 2);
                    break;
                case 'left' :
                    x = dataRangeOption.padding[3] 
                        + dataRangeOption.borderWidth;
                    break;
                case 'right' :
                    x = zrWidth
                        - totalWidth
                        - dataRangeOption.padding[1]
                        - dataRangeOption.borderWidth;
                    break;
                default :
                    x = dataRangeOption.x - 0;
                    x = isNaN(x) ? 0 : x;
                    break;
            }

            var y;
            var zrHeight = zr.getHeight();
            switch (dataRangeOption.y) {
                case 'top' :
                    y = dataRangeOption.padding[0] 
                        + dataRangeOption.borderWidth;
                    break;
                case 'bottom' :
                    y = zrHeight
                        - totalHeight
                        - dataRangeOption.padding[2]
                        - dataRangeOption.borderWidth;
                    break;
                case 'center' :
                    y = Math.floor((zrHeight - totalHeight) / 2);
                    break;
                default :
                    y = dataRangeOption.y - 0;
                    y = isNaN(y) ? 0 : y;
                    break;
            }
            
            if (dataRangeOption.calculable) {
                // 留出手柄控件
                var handlerWidth = Math.max(
                    zrArea.getTextWidth(dataRangeOption.max, font),
                    zrArea.getTextWidth(dataRangeOption.min, font)
                );
                if (dataRangeOption.orient == 'horizontal') {
                    if (x < handlerWidth) {
                        x = handlerWidth + 5;
                    }
                    if (x + totalWidth + handlerWidth > zrWidth) {
                        x -= handlerWidth + 5;
                    }
                }
                else {
                    if (y < textHeight) {
                        y = textHeight + 5;
                    }
                    if (y + totalHeight + textHeight > zrHeight) {
                        y -= textHeight + 5;
                    }
                }
            }

            return {
                x : x,
                y : y,
                width : totalWidth,
                height : totalHeight
            };
        }

        // 指定文本
        function _getTextShape(x, y, text) {
            return {
                shape : 'text',
                zlevel : _zlevelBase,
                style : {
                    x : (dataRangeOption.orient == 'horizontal'
                        ? x
                        : _itemGroupLocation.x 
                          + _itemGroupLocation.width / 2 
                        ),
                    y : (dataRangeOption.orient == 'horizontal'
                        ? _itemGroupLocation.y 
                          + _itemGroupLocation.height / 2
                        : y
                        ),
                    color : dataRangeOption.textStyle.color,
                    text: text,
                    textFont: self.getFont(dataRangeOption.textStyle),
                    textBaseline: (dataRangeOption.orient == 'horizontal'
                                   ? 'middle' : 'top'),
                    textAlign: (dataRangeOption.orient == 'horizontal'
                               ? 'left' : 'center')
                }
            };
        }

        // 色尺legend item shape
        function _getItemShape(x, y, width, height, color) {
            return {
                shape : 'rectangle',
                zlevel : _zlevelBase,
                style : {
                    x : x,
                    y : y + 1,
                    width : width,
                    height : height - 2,
                    color : color
                },
                clickable : true
            };
        }

        /**
         * 拖拽范围控制
         */
        function _ondrift(e, dx, dy) {
            var x = _calculableLocation.x;
            var y = _calculableLocation.y;
            var width = _calculableLocation.width;
            var height = _calculableLocation.height;
            
            if (dataRangeOption.orient == 'horizontal') {
                if (e.style.x + dx <= x) {
                    e.style.x = x;
                }
                else if (e.style.x + dx + e.style.width >= x + width) {
                    e.style.x = x + width - e.style.width;
                }
                else {
                    e.style.x += dx;
                }
            }
            else {
                if (e.style.y + dy <= y) {
                    e.style.y = y;
                }
                else if (e.style.y + dy + e.style.height >= y + height) {
                    e.style.y = y + height - e.style.height;
                }
                else {
                    e.style.y += dy;
                }
            }

            if (e._type == 'filler') {
                _syncHandleShape();
            }
            else {
                //e.position = [e.style.x - e.style._x, e.style.y - e.style._y];
                _syncFillerShape(e);
            }
            
            if (dataRangeOption.realtime) {
                _syncData();
            }
            else {
                clearTimeout(_syncTicket);
                _syncTicket = setTimeout(_syncData, 200);
            }

            return true;
        }
        
        function _ondragend() {
            self.isDragend = true;
        }

        /**
         * 数据项被拖拽出去
         */
        function ondragend(param, status) {
            if (!self.isDragend || !param.target) {
                // 没有在当前实例上发生拖拽行为则直接返回
                return;
            }

             _syncData();

            // 别status = {}赋值啊！！
            status.dragOut = true;
            status.dragIn = true;
            
            if (!dataRangeOption.realtime) {
                messageCenter.dispatch(ecConfig.EVENT.DATA_RANGE);
            }
            
            status.needRefresh = false; // 会有消息触发fresh，不用再刷一遍
            // 处理完拖拽事件后复位
            self.isDragend = false;

            return;
        }
        
        
        function _syncHandleShape() {
            var x = _calculableLocation.x;
            var y = _calculableLocation.y;
            var width = _calculableLocation.width;
            var height = _calculableLocation.height;
            
            if (dataRangeOption.orient == 'horizontal') {
                _startShape.style.x = _fillerShae.style.x;
                _startMask.style.width = _startShape.style.x - x;
                
                _endShape.style.x = _fillerShae.style.x
                                    + _fillerShae.style.width;
                _endMask.style.x = _endShape.style.x;
                _endMask.style.width = x + width - _endShape.style.x;
                
                _range.start = Math.ceil(
                    100 - (_startShape.style.x - x) / width * 100
                );
                _range.end = Math.floor(
                    100 - (_endShape.style.x - x) / width * 100
                );
            }
            else {
                _startShape.style.y = _fillerShae.style.y;
                _startMask.style.height = _startShape.style.y - y;
                
                _endShape.style.y = _fillerShae.style.y
                                    + _fillerShae.style.height;
                _endMask.style.y = _endShape.style.y;
                _endMask.style.height = y + height - _endShape.style.y;
                
                _range.start = Math.ceil(
                    100 - (_startShape.style.y - y) / height * 100
                );
                _range.end = Math.floor(
                    100 - (_endShape.style.y - y) / height * 100
                );
            }
            
            _syncShape(false);
        }

        function _syncFillerShape(e) {
            var x = _calculableLocation.x;
            var y = _calculableLocation.y;
            var width = _calculableLocation.width;
            var height = _calculableLocation.height;
            
            var a;
            var b;
            if (dataRangeOption.orient == 'horizontal') {
                a = _startShape.style.x;
                b = _endShape.style.x;
                if (e.id == _startShape.id && a >= b) {
                    // _startShape触发
                    b = a;
                    _endShape.style.x = a;
                }
                else if (e.id == _endShape.id && a >= b) {
                    // _endShape触发
                    a = b;
                    _startShape.style.x = a;
                }
                _fillerShae.style.x = a;
                _fillerShae.style.width = b - a;
                _startMask.style.width = a - x;
                _endMask.style.x = b;
                _endMask.style.width = x + width - b;
                
                _range.start = Math.ceil(100 - (a - x) / width * 100);
                _range.end = Math.floor(100 - (b - x) / width * 100);
            }
            else {
                a = _startShape.style.y;
                b = _endShape.style.y;
                if (e.id == _startShape.id && a >= b) {
                    // _startShape触发
                    b = a;
                    _endShape.style.y = a;
                }
                else if (e.id == _endShape.id && a >= b) {
                    // _endShape触发
                    a = b;
                    _startShape.style.y = a;
                }
                _fillerShae.style.y = a;
                _fillerShae.style.height = b - a;
                _startMask.style.height = a - y;
                _endMask.style.y = b;
                _endMask.style.height = y + height - b;
                
                _range.start = Math.ceil(100 - (a - y) / height * 100);
                _range.end = Math.floor(100 - (b - y) / height * 100);
            }
            
            _syncShape(true);
        }
        
        function _syncShape(needFiller) {
            _startShape.position = [
                _startShape.style.x - _startShape.style._x,
                _startShape.style.y - _startShape.style._y
            ];
            
            if (dataRangeOption.precision === 0) {
                _startShape.style.text = Math.round(
                    _gap * _range.start + dataRangeOption.min
                ) + '';
            } else {
                _startShape.style.text =(
                    _gap * _range.start + dataRangeOption.min
                ).toFixed(dataRangeOption.precision);
            }
            _startShape.style.color = getColor(
                _gap * _range.start + dataRangeOption.min
            );
            
            zr.modShape(_startShape.id, _startShape);
            
            _endShape.position = [
                _endShape.style.x - _endShape.style._x,
                _endShape.style.y - _endShape.style._y
            ];
            
            if (dataRangeOption.precision === 0) {
                _endShape.style.text = Math.round(
                    _gap * _range.end + dataRangeOption.min
                ) + '';
            } else {
                _endShape.style.text = (
                    _gap * _range.end + dataRangeOption.min
                ).toFixed(dataRangeOption.precision);
            }
            _endShape.style.color = getColor(
                _gap * _range.end + dataRangeOption.min
            );
            zr.modShape(_endShape.id, _endShape);

            zr.modShape(_startMask.id, _startMask);
            zr.modShape(_endMask.id, _endMask);
            
            needFiller && zr.modShape(_fillerShae.id, _fillerShae);
             
            zr.refresh();
        }

        function _syncData() {
            if (dataRangeOption.realtime) {
                messageCenter.dispatch(ecConfig.EVENT.DATA_RANGE);
            }
        }


        function _dataRangeSelected(param) {
            var idx = param.target._idx;
            _selectedMap[idx] = !_selectedMap[idx];
            messageCenter.dispatch(ecConfig.EVENT.REFRESH);
        }

        function init(newOption) {
            if (typeof self.deepQuery([newOption], 'dataRange.min') 
                == 'undefined'
                || typeof self.deepQuery([newOption], 'dataRange.max') 
                == 'undefined'
            ) {
                return;
            }

            option = newOption;

            option.dataRange = self.reformOption(option.dataRange);
            // 补全padding属性
            option.dataRange.padding = self.reformCssArray(
                option.dataRange.padding
            );

            dataRangeOption = option.dataRange;

            self.clear();

            _selectedMap = {};

            var zrColor = require('zrender/tool/color');
            var splitNumber = dataRangeOption.splitNumber <= 0 
                              || dataRangeOption.calculable
                              ? 100
                              : dataRangeOption.splitNumber;
            _colorList = zrColor.getGradientColors(
                dataRangeOption.color,
                (splitNumber - dataRangeOption.color.length)
                / (dataRangeOption.color.length - 1) + 1
            );
            _colorList = _colorList.slice(0, splitNumber);
            //console.log(_colorList.length)
            
            if (dataRangeOption.precision === 0) {
                _gap = Math.round(
                    (dataRangeOption.max - dataRangeOption.min)
                    / splitNumber
                ) || 1;
            } else {
                _gap = (dataRangeOption.max - dataRangeOption.min)
                        / splitNumber;
                _gap = _gap.toFixed(dataRangeOption.precision) - 0;
            }
            
            _valueTextList = [];
            for (var i = 0; i < splitNumber; i++) {
                _selectedMap[i] = true;
                _valueTextList.unshift(
                    (i * _gap + dataRangeOption.min).toFixed(
                        dataRangeOption.precision
                    )
                    + ' - ' 
                    + ((i + 1) * _gap + dataRangeOption.min).toFixed(
                        dataRangeOption.precision
                    )
                );
            }
            
            _range = {
                start: 100,
                end: 0
            };
            // console.log(_valueTextList,_gap);
            // console.log(_colorList);
            
            _buildShape();
        }

        /**
         * 刷新
         */
        function refresh() {
            dataRangeOption = option.dataRange;
            _range = {
                start: 100,
                end: 0
            };
            self.clear();
            _buildShape();
        }

        function getColor(value) {
            if (isNaN(value)) {
                return null;
            }
            
            if (value < dataRangeOption.min) {
                value = dataRangeOption.min;
            }
            else if (value > dataRangeOption.max) {
                value = dataRangeOption.max;
            }
            
            if (dataRangeOption.calculable) {
                if (value > _gap * _range.start + dataRangeOption.min
                    || value < _gap * _range.end + dataRangeOption.min) {
                     return null;
                }
            }
            
            var idx = _colorList.length - Math.round(
                (value - dataRangeOption.min) 
                / (dataRangeOption.max - dataRangeOption.min)
                * _colorList.length
            );
            if (idx == _colorList.length) {
                idx--;
            }
            //console.log(value, idx,_colorList[idx])
            if (_selectedMap[idx]) {
                return _colorList[idx];
            }
            else {
                return null;
            }
        }

        self.init = init;
        self.refresh = refresh;
        self.getColor = getColor;
        self.ondragend = ondragend;
        
        init(option);
    }

    require('../component').define('dataRange', DataRange);

    return DataRange;
});



/**
 * echarts组件：提示框
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/tooltip',['require','./base','../config','../util/ecData','zrender/config','zrender/shape','zrender/tool/event','zrender/tool/area','zrender/tool/color','zrender/tool/util','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 提示框参数
     * @param {HtmlElement} dom 目标对象
     */
    function Tooltip(messageCenter, zr, option, dom) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');
        var ecData = require('../util/ecData');

        var zrConfig = require('zrender/config');
        var zrShape = require('zrender/shape');
        var zrEvent = require('zrender/tool/event');
        var zrArea = require('zrender/tool/area');
        var zrColor = require('zrender/tool/color');
        var zrUtil = require('zrender/tool/util');

        var rectangle = zrShape.get('rectangle');
        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_TOOLTIP;

        var _zlevelBase = self.getZlevelBase();

        var component = {};                     // 组件索引
        var grid;
        var xAxis;
        var yAxis;

        // tooltip dom & css
        var _tDom = document.createElement('div');
        // 通用样式
        var _gCssText = 'position:absolute;'
                        + 'display:block;'
                        + 'transition:left 1s,top 1s;'
                        + '-moz-transition:left 1s,top 1s;'
                        + '-webkit-transition:left 1s,top 1s;'
                        + '-o-transition:left 1s,top 1s;'
                        + 'border-style:solid;'
                        + 'white-space:nowrap;';
        // 默认样式
        var _defaultCssText;                    // css样式缓存

        var _needAxisTrigger;                   // 坐标轴触发
        var _hidingTicket;
        var _hideDelay = 100;                   // 隐藏延迟
        var _showingTicket;
        var _showDelay = 30;                    // 显示延迟
        var _curTarget;
        var _event;

        var _curTicket;                         // 异步回调标识，用来区分多个请求

        // 缓存一些高宽数据
        var _zrHeight = zr.getHeight();
        var _zrWidth = zr.getWidth();

        var _axisLineShape = {
            shape : 'line',
            id : zr.newShapeId('tooltip'),
            zlevel: _zlevelBase,
            invisible : true,
            hoverable: false,
            style : {
                // lineWidth : 2,
                // strokeColor : ecConfig.categoryAxis.axisLine.lineStyle.color
            }
        };
        var _axisShadowShape = {
            shape : 'line',
            id : zr.newShapeId('tooltip'),
            zlevel: 1,                      // grid上，chart下
            invisible : true,
            hoverable: false,
            style : {
                // lineWidth : 10,
                // strokeColor : ecConfig.categoryAxis.axisLine.lineStyle.color
            }
        };
        zr.addShape(_axisLineShape);
        zr.addShape(_axisShadowShape);

        /**
         * 根据配置设置dom样式
         */
        function _style(opt) {
            if (!opt) {
                return '';
            }
            cssText = [];

            if (opt.backgroundColor) {
                // for sb ie~
                cssText.push(
                    'background-Color:' + zrColor.toHex(
                        opt.backgroundColor
                    )
                );
                cssText.push('filter:alpha(opacity=70)');
                cssText.push('background-Color:' + opt.backgroundColor);
            }

            if (typeof opt.borderWidth != 'undefined') {
                cssText.push('border-width:' + opt.borderWidth + 'px');
            }

            if (typeof opt.borderColor != 'undefined') {
                cssText.push('border-color:' + opt.borderColor);
            }

            if (typeof opt.borderRadius != 'undefined') {
                cssText.push(
                    'border-radius:' + opt.borderRadius + 'px'
                );
                cssText.push(
                    '-moz-border-radius:' + opt.borderRadius + 'px'
                );
                cssText.push(
                    '-webkit-border-radius:' + opt.borderRadius + 'px'
                );
                cssText.push(
                    '-o-border-radius:' + opt.borderRadius + 'px'
                );
            }

            var textStyle = opt.textStyle;
            if (textStyle) {
                textStyle.color && cssText.push('color:' + textStyle.color);
                textStyle.decoration && cssText.push(
                    'text-decoration:' + textStyle.decoration
                );
                textStyle.align && cssText.push(
                    'text-align:' + textStyle.align
                );
                textStyle.fontFamily && cssText.push(
                    'font-family:' + textStyle.fontFamily
                );
                textStyle.fontSize && cssText.push(
                    'font-size:' + textStyle.fontSize + 'px'
                );
                textStyle.fontSize && cssText.push(
                    'line-height:' + Math.round(textStyle.fontSize*3/2) + 'px'
                );
                textStyle.fontStyle && cssText.push(
                    'font-style:' + textStyle.fontStyle
                );
                textStyle.fontWeight && cssText.push(
                    'font-weight:' + textStyle.fontWeight
                );
            }


            var padding = opt.padding;
            if (typeof padding != 'undefined') {
                padding = self.reformCssArray(padding);
                cssText.push(
                    'padding:' + padding[0] + 'px '
                               + padding[1] + 'px '
                               + padding[2] + 'px '
                               + padding[3] + 'px'
                );
            }

            cssText = cssText.join(';') + ';';

            return cssText;
        }

        function _hide() {
            if (_tDom) {
                _tDom.style.display = 'none';
            }
            var needRefresh = false;
            if (!_axisLineShape.invisible) {
                _axisLineShape.invisible = true;
                zr.modShape(_axisLineShape.id, _axisLineShape);
                needRefresh = true;
            }
            if (!_axisShadowShape.invisible) {
                _axisShadowShape.invisible = true;
                zr.modShape(_axisShadowShape.id, _axisShadowShape);
                needRefresh = true;
            }
            needRefresh && zr.refresh(); 
        }

        function _show(x, y, specialCssText) {
            var domHeight = _tDom.offsetHeight;
            var domWidth = _tDom.offsetWidth;
            if (x + domWidth > _zrWidth) {
                x = _zrWidth - domWidth;
            }
            if (y + domHeight > _zrHeight) {
                y = _zrHeight - domHeight;
            }
            if (y < 20) {
                y = 0;
            }
            _tDom.style.cssText = _gCssText
                                  + _defaultCssText
                                  + (specialCssText ? specialCssText : '')
                                  + 'left:' + x + 'px;top:' + y + 'px;';
            if (_zrWidth - x < 100 || _zrHeight - y < 100) {
                // 太靠边的做一次refixed
                setTimeout(_refixed, 20);
            }
        }
        
        function _refixed() {
            if (_tDom) {
                var cssText = '';
                var domHeight = _tDom.offsetHeight;
                var domWidth = _tDom.offsetWidth;
                if (_tDom.offsetLeft + domWidth > _zrWidth) {
                    cssText += 'left:' + (_zrWidth - domWidth) + 'px;';
                }
                if (_tDom.offsetTop + domHeight > _zrHeight) {
                    cssText += 'top:' + (_zrHeight - domHeight) + 'px;';
                }
                if (cssText !== '') {
                    _tDom.style.cssText += cssText;
                }
            }
        }

        function _tryShow() {
            var needShow;
            var trigger;
            if (!_curTarget) {
                // 坐标轴事件
                _findAxisTrigger();
            }
            else {
                // 数据项事件
                if (_curTarget._type == 'island'
                    && self.deepQuery([option], 'tooltip.show')
                ) {
                    _showItemTrigger();
                    return;
                }
                var serie = ecData.get(_curTarget, 'series');
                var data = ecData.get(_curTarget, 'data');
                needShow = self.deepQuery(
                    [data, serie, option],
                    'tooltip.show'
                );
                if (typeof serie == 'undefined'
                    || typeof data == 'undefined'
                    || needShow === false
                ) {
                    // 不响应tooltip的数据对象延时隐藏
                    clearTimeout(_hidingTicket);
                    clearTimeout(_showingTicket);
                    _hidingTicket = setTimeout(_hide, _hideDelay);
                }
                else {
                    trigger = self.deepQuery(
                        [data, serie, option],
                        'tooltip.trigger'
                    );
                    trigger == 'axis'
                               ? _showAxisTrigger(
                                     serie.xAxisIndex, serie.yAxisIndex,
                                     ecData.get(_curTarget, 'dataIndex')
                                 )
                               : _showItemTrigger();
                }
            }
        }

        function _findAxisTrigger() {
            var series = option.series;
            var xAxisIndex;
            var yAxisIndex;
            if (!xAxis || !yAxis) {
                _hidingTicket = setTimeout(_hide, _hideDelay);
                return;
            }
            for (var i = 0, l = series.length; i < l; i++) {
                // 找到第一个axis触发tooltip的系列
                if (self.deepQuery(
                        [series[i], option], 'tooltip.trigger'
                    ) == 'axis'
                ) {
                    xAxisIndex = series[i].xAxisIndex || 0;
                    yAxisIndex = series[i].yAxisIndex || 0;
                    if (xAxis.getAxis(xAxisIndex)
                        && xAxis.getAxis(xAxisIndex).type
                           == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
                    ) {
                        // 横轴为类目轴
                        _showAxisTrigger(xAxisIndex, yAxisIndex,
                            _getNearestDataIndex('x', xAxis.getAxis(xAxisIndex))
                        );
                        return;
                    } else if (yAxis.getAxis(yAxisIndex)
                               && yAxis.getAxis(yAxisIndex).type
                                  == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
                    ) {
                        // 纵轴为类目轴
                        _showAxisTrigger(xAxisIndex, yAxisIndex,
                            _getNearestDataIndex('y', yAxis.getAxis(yAxisIndex))
                        );
                        return;
                    }
                }
            }
        }
        /**
         * 根据坐标轴事件带的属性获取最近的axisDataIndex
         */
        function _getNearestDataIndex(direction, categoryAxis) {
            var dataIndex = -1;
            var x = zrEvent.getX(_event);
            var y = zrEvent.getY(_event);
            if (direction == 'x') {
                // 横轴为类目轴
                var left;
                var right;
                var xEnd = grid.getXend();
                var curCoord = categoryAxis.getCoordByIndex(dataIndex);
                while (curCoord < xEnd) {
                    if (curCoord <= x) {
                        left = curCoord;
                    }
                    if (curCoord >= x) {
                        break;
                    }
                    curCoord = categoryAxis.getCoordByIndex(++dataIndex);
                    right = curCoord;
                }
                if (x - left < right - x) {
                    dataIndex -= 1;
                }
                else {
                    // 离右边近，看是否为最后一个
                    if (typeof categoryAxis.getNameByIndex(dataIndex)
                        == 'undefined'
                    ) {
                        dataIndex = -1;
                    }
                }
                return dataIndex;
            }
            else {
                // 纵轴为类目轴
                var top;
                var bottom;
                var yStart = grid.getY();
                var curCoord = categoryAxis.getCoordByIndex(dataIndex);
                while (curCoord > yStart) {
                    if (curCoord >= y) {
                        bottom = curCoord;
                    }
                    if (curCoord <= y) {
                        break;
                    }
                    curCoord = categoryAxis.getCoordByIndex(++dataIndex);
                    top = curCoord;
                }

                if (y - top > bottom - y) {
                    dataIndex -= 1;
                }
                else {
                    // 离上方边近，看是否为最后一个
                    if (typeof categoryAxis.getNameByIndex(dataIndex)
                        == 'undefined'
                    ) {
                        dataIndex = -1;
                    }
                }
                return dataIndex;
            }
            return -1;
        }

        function _showAxisTrigger(xAxisIndex, yAxisIndex, dataIndex) {
            if (typeof xAxis == 'undefined'
                || typeof yAxis == 'undefined'
                || typeof xAxisIndex == 'undefined'
                || typeof yAxisIndex == 'undefined'
                || dataIndex < 0
            ) {
                // 不响应tooltip的数据对象延时隐藏
                clearTimeout(_hidingTicket);
                clearTimeout(_showingTicket);
                _hidingTicket = setTimeout(_hide, _hideDelay);
                return;
            }
            var series = option.series;
            var seriesArray = [];
            var categoryAxis;
            var x;
            var y;

            var formatter;
            var specialCssText = '';
            if (self.deepQuery([option], 'tooltip.trigger') == 'axis') {
                if (self.deepQuery([option], 'tooltip.show') === false) {
                    return;
                }
                formatter = self.deepQuery([option],'tooltip.formatter');
            }

            if (xAxisIndex != -1
                && xAxis.getAxis(xAxisIndex).type
                   == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
            ) {
                // 横轴为类目轴，找到所有用这条横轴并且axis触发的系列数据
                categoryAxis = xAxis.getAxis(xAxisIndex);
                for (var i = 0, l = series.length; i < l; i++) {
                    if (series[i].xAxisIndex == xAxisIndex
                        && self.deepQuery(
                               [series[i], option], 'tooltip.trigger'
                           ) == 'axis'
                    ) {
                        formatter = self.deepQuery(
                            [series[i]],
                            'tooltip.formatter'
                        ) || formatter;
                        specialCssText += _style(self.deepQuery(
                                              [series[i]], 'tooltip'
                                          ));
                        seriesArray.push(series[i]);
                    }
                }
                y = zrEvent.getY(_event) + 10;
                x = categoryAxis.getCoordByIndex(dataIndex);
                _styleAxisPointer(
                    seriesArray,
                    x, grid.getY(), 
                    x, grid.getYend(),
                    categoryAxis.getGap()
                );
                x += 10;
            }
            else if (yAxisIndex != -1
                     && yAxis.getAxis(yAxisIndex).type
                        == ecConfig.COMPONENT_TYPE_AXIS_CATEGORY
            ) {
                // 纵轴为类目轴，找到所有用这条纵轴并且axis触发的系列数据
                categoryAxis = yAxis.getAxis(yAxisIndex);
                for (var i = 0, l = series.length; i < l; i++) {
                    if (series[i].yAxisIndex == yAxisIndex
                        && self.deepQuery(
                               [series[i], option], 'tooltip.trigger'
                           ) == 'axis'
                    ) {
                        formatter = self.deepQuery(
                            [series[i]],
                            'tooltip.formatter'
                        ) || formatter;
                        specialCssText += _style(self.deepQuery(
                                              [series[i]], 'tooltip'
                                          ));
                        seriesArray.push(series[i]);
                    }
                }
                x = zrEvent.getX(_event) + 10;
                y = categoryAxis.getCoordByIndex(dataIndex);
                _styleAxisPointer(
                    seriesArray,
                    grid.getX(), y, 
                    grid.getXend(), y,
                    categoryAxis.getGap()
                );
                y += 10;
            }

            if (seriesArray.length > 0) {
                var data;
                if (typeof formatter == 'function') {
                    var params = [];
                    for (var i = 0, l = seriesArray.length; i < l; i++) {
                        data = seriesArray[i].data[dataIndex];
                        data = typeof data != 'undefined'
                               ? (typeof data.value != 'undefined'
                                   ? data.value
                                   : data)
                               : '-';
                               
                        params.push([
                            seriesArray[i].name,
                            categoryAxis.getNameByIndex(dataIndex),
                            data
                        ]);
                    }
                    _curTicket = 'axis:' + dataIndex;
                    _tDom.innerHTML = formatter(
                        params, _curTicket, _setContent
                    );
                }
                else if (typeof formatter == 'string') {
                    formatter = formatter.replace('{a}','{a0}')
                                         .replace('{b}','{b0}')
                                         .replace('{c}','{c0}');
                    for (var i = 0, l = seriesArray.length; i < l; i++) {
                        formatter = formatter.replace(
                            '{a' + i + '}',
                            seriesArray[i].name
                        );
                        formatter = formatter.replace(
                            '{b' + i + '}',
                            categoryAxis.getNameByIndex(dataIndex)
                        );
                        data = seriesArray[i].data[dataIndex];
                        data = typeof data != 'undefined'
                               ? (typeof data.value != 'undefined'
                                   ? data.value
                                   : data)
                               : '-';
                        formatter = formatter.replace(
                            '{c' + i + '}',
                            data
                        );
                    }
                    _tDom.innerHTML = formatter;
                }
                else {
                    formatter = categoryAxis.getNameByIndex(dataIndex);
                    for (var i = 0, l = seriesArray.length; i < l; i++) {
                        formatter += '<br/>' + seriesArray[i].name + ' : ';
                        data = seriesArray[i].data[dataIndex];
                        data = data = typeof data != 'undefined'
                               ? (typeof data.value != 'undefined'
                                   ? data.value
                                   : data)
                               : '-';
                        formatter += data;
                    }
                    _tDom.innerHTML = formatter;
                }

                if (!self.hasAppend) {
                    _tDom.style.left = _zrWidth / 2 + 'px';
                    _tDom.style.top = _zrHeight / 2 + 'px';
                    dom.firstChild.appendChild(_tDom);
                    self.hasAppend = true;
                }
                _show(x, y, specialCssText);
            }
        }
        
        function _showItemTrigger() {
            var serie = ecData.get(_curTarget, 'series');
            var data = ecData.get(_curTarget, 'data');
            var name = ecData.get(_curTarget, 'name');
            var value = ecData.get(_curTarget, 'value');
            var speical = ecData.get(_curTarget, 'special');

            // 从低优先级往上找到trigger为item的formatter和样式
            var formatter;
            var specialCssText = '';
            if (_curTarget._type != 'island') {
                // 全局
                if (self.deepQuery([option], 'tooltip.trigger') == 'item'
                ) {
                    formatter = self.deepQuery(
                                    [option], 'tooltip.formatter'
                                ) || formatter;
                }
                // 系列
                if (self.deepQuery([serie],  'tooltip.trigger') == 'item'
                ) {
                    formatter = self.deepQuery(
                                    [serie], 'tooltip.formatter'
                                ) || formatter;
                    specialCssText += _style(self.deepQuery(
                                          [serie], 'tooltip'
                                      ));
                }
                // 数据项
                formatter = self.deepQuery(
                                [data], 'tooltip.formatter'
                            ) || formatter;
                specialCssText += _style(self.deepQuery([data], 'tooltip'));
            } else {
                formatter = self.deepQuery(
                    [data, serie, option],
                    'tooltip.islandFormatter'
                );
            }

            if (typeof formatter == 'function') {
                _curTicket = serie.name
                             + ':'
                             + ecData.get(_curTarget, 'dataIndex');
                _tDom.innerHTML = formatter(
                    [
                        serie.name,
                        name,
                        value,
                        speical
                    ],
                    _curTicket,
                    _setContent
                );
            }
            else if (typeof formatter == 'string') {
                formatter = formatter.replace('{a}','{a0}')
                                     .replace('{b}','{b0}')
                                     .replace('{c}','{c0}')
                                     .replace('{d}','{d0}');
                formatter = formatter.replace('{a0}', serie.name)
                                     .replace('{b0}', name)
                                     .replace('{c0}', value);

                if (typeof speical != 'undefined') {
                    formatter = formatter.replace('{d0}', speical);
                }

                _tDom.innerHTML = formatter;
            }
            else {
                if (serie.type != ecConfig.CHART_TYPE_SCATTER) {
                    _tDom.innerHTML = serie.name + '<br/>' +
                                      name + ' : ' + value +
                                      (typeof speical == 'undefined'
                                      ? ''
                                      : (' (' + speical + ')'));
                }
                else {
                    _tDom.innerHTML = serie.name + '<br/>' +
                                      (name === '' ? '' : (name + ' : ')) 
                                      + value +
                                      (typeof speical == 'undefined'
                                      ? ''
                                      : (' (' + speical + ')'));
                }
            }

            if (!self.hasAppend) {
                _tDom.style.left = _zrWidth / 2 + 'px';
                _tDom.style.top = _zrHeight / 2 + 'px';
                dom.firstChild.appendChild(_tDom);
                self.hasAppend = true;
            }

            _show(
                zrEvent.getX(_event) + 20,
                zrEvent.getY(_event) - 20,
                specialCssText
            );

            if (!_axisLineShape.invisible) {
                _axisLineShape.invisible = true;
                zr.modShape(_axisLineShape.id, _axisLineShape);
                zr.refresh();
            }
        }

        /**
         * 设置坐标轴指示器样式 
         */
        function _styleAxisPointer(
            seriesArray, xStart, yStart, xEnd, yEnd, gap
        ) {
            if (seriesArray.length > 0) {
                var queryTarget;
                var curType;
                var axisPointer = option.tooltip.axisPointer;
                var pointType = axisPointer.type;
                var lineColor = axisPointer.lineStyle.color;
                var lineWidth = axisPointer.lineStyle.width;
                var lineType = axisPointer.lineStyle.type;
                var areaSize = axisPointer.areaStyle.size;
                var areaColor = axisPointer.areaStyle.color;
                
                for (var i = 0, l = seriesArray.length; i < l; i++) {
                    if (self.deepQuery(
                           [seriesArray[i], option], 'tooltip.trigger'
                       ) == 'axis'
                    ) {
                        queryTarget = [seriesArray[i]];
                        curType = self.deepQuery(
                            queryTarget,
                            'tooltip.axisPointer.type'
                        );
                        pointType = curType || pointType; 
                        if (curType == 'line') {
                            lineColor = self.deepQuery(
                                queryTarget,
                                'tooltip.axisPointer.lineStyle.color'
                            ) || lineColor;
                            lineWidth = self.deepQuery(
                                queryTarget,
                                'tooltip.axisPointer.lineStyle.width'
                            ) || lineWidth;
                            lineType = self.deepQuery(
                                queryTarget,
                                'tooltip.axisPointer.lineStyle.type'
                            ) || lineType;
                        }
                        else if (curType == 'shadow') {
                            areaSize = self.deepQuery(
                                queryTarget,
                                'tooltip.axisPointer.areaStyle.size'
                            ) || areaSize;
                            areaColor = self.deepQuery(
                                queryTarget,
                                'tooltip.axisPointer.areaStyle.color'
                            ) || areaColor;
                        }
                    }
                }
                
                if (pointType == 'line') {
                    _axisLineShape.style = {
                        xStart : xStart,
                        yStart : yStart,
                        xEnd : xEnd,
                        yEnd : yEnd,
                        strokeColor : lineColor,
                        lineWidth : lineWidth,
                        lineType : lineType
                    };
                    _axisLineShape.invisible = false;
                    zr.modShape(_axisLineShape.id, _axisLineShape);
                }
                else if (pointType == 'shadow') {
                    if (typeof areaSize == 'undefined' 
                        || areaSize == 'auto'
                        || isNaN(areaSize)
                    ) {
                        lineWidth = gap;
                    }
                    else {
                        lineWidth = areaSize;
                    }
                    if (xStart == xEnd) {
                        // 纵向
                        if (Math.abs(grid.getX() - xStart) < 2) {
                            // 最左边
                            lineWidth /= 2;
                            xStart = xEnd = xEnd + lineWidth / 2;
                        }
                        else if (Math.abs(grid.getXend() - xStart) < 2) {
                            // 最右边
                            lineWidth /= 2;
                            xStart = xEnd = xEnd - lineWidth / 2;
                        }
                    }
                    else if (yStart == yEnd) {
                        // 横向
                        if (Math.abs(grid.getY() - yStart) < 2) {
                            // 最上边
                            lineWidth /= 2;
                            yStart = yEnd = yEnd + lineWidth / 2;
                        }
                        else if (Math.abs(grid.getYend() - yStart) < 2) {
                            // 最右边
                            lineWidth /= 2;
                            yStart = yEnd = yEnd - lineWidth / 2;
                        }
                    }
                    _axisShadowShape.style = {
                        xStart : xStart,
                        yStart : yStart,
                        xEnd : xEnd,
                        yEnd : yEnd,
                        strokeColor : areaColor,
                        lineWidth : lineWidth
                    };
                    _axisShadowShape.invisible = false;
                    zr.modShape(_axisShadowShape.id, _axisShadowShape);
                }
                zr.refresh();
            }
        }

        /**
         * zrender事件响应：鼠标移动
         */
        function _onmousemove(param) {
            clearTimeout(_hidingTicket);
            clearTimeout(_showingTicket);
            var target = param.target;
            if (!target && grid) {
                // 判断是否落到直角系里，axis触发的tooltip
                if (_needAxisTrigger
                    && zrArea.isInside(
                           rectangle,
                           grid.getArea(),
                           zrEvent.getX(param.event),
                           zrEvent.getY(param.event)
                       )
                ) {
                    _curTarget = false;
                    _event = param.event;
                    _event._target = _event.target || _event.toElement;
                    _event.zrenderX = zrEvent.getX(_event);
                    _event.zrenderY = zrEvent.getY(_event);
                    _showingTicket = setTimeout(_tryShow, _showDelay);
                }
                else {
                    _hidingTicket = setTimeout(_hide, _hideDelay);
                }
            }
            else {
                _curTarget = target;
                _event = param.event;
                _event._target = _event.target || _event.toElement;
                _event.zrenderX = zrEvent.getX(_event);
                _event.zrenderY = zrEvent.getY(_event);
                _showingTicket = setTimeout(_tryShow, _showDelay);
            }
        }

        /**
         * 异步回调填充内容
         */
        function _setContent(ticket, content) {
            if (ticket == _curTicket) {
                _tDom.innerHTML = content;
            }
            var cssText = '';
            var domHeight = _tDom.offsetHeight;
            var domWidth = _tDom.offsetWidth;

            if (_tDom.offsetLeft + domWidth > _zrWidth) {
                cssText += 'left:' + (_zrWidth - domWidth) + 'px;';
            }
            if (_tDom.offsetTop + domHeight > _zrHeight) {
                cssText += 'top:' + (_zrHeight - domHeight) + 'px;';
            }
            if (cssText !== '') {
                _tDom.style.cssText += cssText;
            }
            
            if (_zrWidth - _tDom.offsetLeft < 100 
                || _zrHeight - _tDom.offsetTop < 100
            ) {
                // 太靠边的做一次refixed
                setTimeout(_refixed, 20);
            }
        }

        function setComponent(newComponent) {
            component = newComponent;
            grid = component.grid;
            xAxis = component.xAxis;
            yAxis = component.yAxis;
        }

        function init(newOption, newDom) {
            option = newOption;
            dom = newDom;

            option.tooltip = self.reformOption(option.tooltip);
            option.tooltip.textStyle = zrUtil.merge(
                option.tooltip.textStyle,
                ecConfig.textStyle,
                {
                    'overwrite': false,
                    'recursive': true
                }
            );
            // 补全padding属性
            option.tooltip.padding = self.reformCssArray(
                option.tooltip.padding
            );

            _needAxisTrigger = false;
            if (option.tooltip.trigger == 'axis') {
                _needAxisTrigger = true;
            }

            var series = option.series;
            for (var i = 0, l = series.length; i < l; i++) {
                if (self.deepQuery([series[i]], 'tooltip.trigger')
                    == 'axis'
                ) {
                    _needAxisTrigger = true;
                    break;
                }
            }

            _defaultCssText = _style(option.tooltip);
            _tDom.style.position = 'absolute';  // 不是多余的，别删！
            self.hasAppend = false;
        }

        /**
         * zrender事件响应：窗口大小改变
         */
        function resize() {
            _zrHeight = zr.getHeight();
            _zrWidth = zr.getWidth();
        }

        /**
         * 释放后实例不可用，重载基类方法
         */
        function dispose() {
            clearTimeout(_hidingTicket);
            clearTimeout(_showingTicket);
            zr.un(zrConfig.EVENT.MOUSEMOVE, _onmousemove);

            if (self.hasAppend) {
                dom.firstChild.removeChild(_tDom);
            }
            _tDom = null;

            // self.clear();
            self.shapeList = null;
            self = null;
        }

        zr.on(zrConfig.EVENT.MOUSEMOVE, _onmousemove);

        // 重载基类方法
        self.dispose = dispose;

        self.init = init;
        self.resize = resize;
        self.setComponent = setComponent;
        init(option, dom);
    }

    require('../component').define('tooltip', Tooltip);

    return Tooltip;
});
/**
 * echarts组件：工具箱
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/toolbox',['require','./base','../config','zrender/config','zrender/tool/event','../component','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {HtmlElement} dom 目标对象
     */
    function Toolbox(messageCenter, zr, dom) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');
        var zrConfig = require('zrender/config');
        var zrEvent = require('zrender/tool/event');

        var option;
        var component;
        
        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_TOOLBOX;

        var _zlevelBase = self.getZlevelBase();
        var _magicType;
        var _magicMap;
        var _iconList;
        var _iconShapeMap = {};
        var _itemGroupLocation;
        var _enableColor = 'red';
        var _disableColor = '#ccc';
        var _markColor;
        var _markStart;
        var _marking;
        var _markShape;
        
        var _zoomStart;
        var _zooming;
        var _zoomShape;
        var _zoomQueue;

        var _dataView;

        function _buildShape() {
            _iconList = [];
            var feature = option.toolbox.feature;
            for (var key in feature){
                if (feature[key]) {
                    switch (key) {
                        case 'mark' :
                            _iconList.push('mark');
                            _iconList.push('markUndo');
                            _iconList.push('markClear');
                            break;
                        case 'magicType' :
                            for (var i = 0, l = feature[key].length; i < l; i++
                            ) {
                                _iconList.push(feature[key][i] + 'Chart');
                            }
                            break;
                        case 'dataZoom' :
                            _iconList.push('dataZoom');
                            _iconList.push('dataZoomReset');
                            break;
                        case 'saveAsImage' :
                            if (!G_vmlCanvasManager) {
                                _iconList.push('saveAsImage');
                            }
                            break;
                        default :
                            _iconList.push(key);
                            break;
                    }
                }
            }
            if (_iconList.length > 0) {
                _itemGroupLocation = _getItemGroupLocation();

                _buildBackground();
                _buildItem();

                for (var i = 0, l = self.shapeList.length; i < l; i++) {
                    self.shapeList[i].id = zr.newShapeId(self.type);
                    zr.addShape(self.shapeList[i]);
                }
                if (_iconShapeMap['mark']) {
                    _iconDisable(_iconShapeMap['markUndo']);
                    _iconDisable(_iconShapeMap['markClear']);
                }
                if (_iconShapeMap['dataZoomReset'] && _zoomQueue.length === 0) {
                    _iconDisable(_iconShapeMap['dataZoomReset']);
                }
            }
        }

        /**
         * 构建所有图例元素
         */
        function _buildItem() {
            var toolboxOption = option.toolbox;
            var iconLength = _iconList.length;
            var lastX = _itemGroupLocation.x;
            var lastY = _itemGroupLocation.y;
            var itemSize = toolboxOption.itemSize;
            var itemGap = toolboxOption.itemGap;
            var itemShape;

            var color = toolboxOption.color instanceof Array
                        ? toolboxOption.color : [toolboxOption.color];
            /*
            var textPosition;
            if (toolboxOption.orient == 'horizontal') {
                textPosition = toolboxOption.y != 'bottom'
                               ? 'bottom' : 'top';
            }
            else {
                textPosition = toolboxOption.x != 'left'
                               ? 'left' : 'right';
            }
            */
           _iconShapeMap = {};

            for (var i = 0; i < iconLength; i++) {
                // 图形
                itemShape = {
                    shape : 'icon',
                    zlevel : _zlevelBase,
                    style : {
                        x : lastX,
                        y : lastY,
                        width : itemSize,
                        height : itemSize,
                        iconType : _iconList[i],
                        strokeColor : color[i % color.length],
                        shadowColor: '#ccc',
                        shadowBlur : 2,
                        shadowOffsetX : 2,
                        shadowOffsetY : 2,
                        brushType: 'stroke'
                    },
                    highlightStyle : {
                        lineWidth : 2,
                        shadowBlur: 5,
                        strokeColor : color[i % color.length]
                    },
                    hoverable : true,
                    clickable : true
                };

                switch(_iconList[i]) {
                    case 'mark':
                        itemShape.onclick = _onMark;
                        _markColor = itemShape.style.strokeColor;
                        break;
                    case 'markUndo':
                        itemShape.onclick = _onMarkUndo;
                        break;
                    case 'markClear':
                        itemShape.onclick = _onMarkClear;
                        break;
                    case 'dataZoom':
                        itemShape.onclick = _onDataZoom;
                        break;
                    case 'dataZoomReset':
                        itemShape.onclick = _onDataZoomReset;
                        break;
                    case 'dataView' :
                        if (!_dataView) {
                            var componentLibrary = require('../component');
                            var DataView = componentLibrary.get('dataView');
                            _dataView = new DataView(
                                messageCenter, zr, option, dom
                            );
                        }
                        itemShape.onclick = _onDataView;
                        break;
                    case 'restore':
                        itemShape.onclick = _onRestore;
                        break;
                    case 'saveAsImage':
                        itemShape.onclick = _onSaveAsImage;
                        break;
                    default:
                        if (_iconList[i].match('Chart')) {
                            itemShape._name = _iconList[i].replace('Chart', '');
                            if (itemShape._name == _magicType) {
                                itemShape.style.strokeColor = _enableColor;
                            }
                            itemShape.onclick = _onMagicType;
                        }
                        break;
                }

                self.shapeList.push(itemShape);
                _iconShapeMap[_iconList[i]] = itemShape;

                if (toolboxOption.orient == 'horizontal') {
                    lastX += itemSize + itemGap;
                }
                else {
                    lastY += itemSize + itemGap;
                }
            }
        }

        function _buildBackground() {
            var toolboxOption = option.toolbox;
            var pTop = toolboxOption.padding[0];
            var pRight = toolboxOption.padding[1];
            var pBottom = toolboxOption.padding[2];
            var pLeft = toolboxOption.padding[3];

            self.shapeList.push({
                shape : 'rectangle',
                zlevel : _zlevelBase,
                hoverable :false,
                style : {
                    x : _itemGroupLocation.x - pLeft,
                    y : _itemGroupLocation.y - pTop,
                    width : _itemGroupLocation.width + pLeft + pRight,
                    height : _itemGroupLocation.height + pTop + pBottom,
                    brushType : toolboxOption.borderWidth === 0
                                ? 'fill' : 'both',
                    color : toolboxOption.backgroundColor,
                    strokeColor : toolboxOption.borderColor,
                    lineWidth : toolboxOption.borderWidth
                }
            });
        }

        /**
         * 根据选项计算图例实体的位置坐标
         */
        function _getItemGroupLocation() {
            var toolboxOption = option.toolbox;
            var iconLength = _iconList.length;
            var itemGap = toolboxOption.itemGap;
            var itemSize = toolboxOption.itemSize;
            var totalWidth = 0;
            var totalHeight = 0;

            if (toolboxOption.orient == 'horizontal') {
                // 水平布局，计算总宽度，别忘减去最后一个的itemGap
                totalWidth = (itemSize + itemGap) * iconLength - itemGap;
                totalHeight = itemSize;
            }
            else {
                // 垂直布局，计算总高度
                totalHeight = (itemSize + itemGap) * iconLength - itemGap;
                totalWidth = itemSize;
            }

            var x;
            var zrWidth = zr.getWidth();
            switch (toolboxOption.x) {
                case 'center' :
                    x = Math.floor((zrWidth - totalWidth) / 2);
                    break;
                case 'left' :
                    x = toolboxOption.padding[3] + toolboxOption.borderWidth;
                    break;
                case 'right' :
                    x = zrWidth
                        - totalWidth
                        - toolboxOption.padding[1]
                        - toolboxOption.borderWidth;
                    break;
                default :
                    x = toolboxOption.x - 0;
                    x = isNaN(x) ? 0 : x;
                    break;
            }

            var y;
            var zrHeight = zr.getHeight();
            switch (toolboxOption.y) {
                case 'top' :
                    y = toolboxOption.padding[0] + toolboxOption.borderWidth;
                    break;
                case 'bottom' :
                    y = zrHeight
                        - totalHeight
                        - toolboxOption.padding[2]
                        - toolboxOption.borderWidth;
                    break;
                case 'center' :
                    y = Math.floor((zrHeight - totalHeight) / 2);
                    break;
                default :
                    y = toolboxOption.y - 0;
                    y = isNaN(y) ? 0 : y;
                    break;
            }

            return {
                x : x,
                y : y,
                width : totalWidth,
                height : totalHeight
            };
        }

        function _onMark(param) {
            var target = param.target;
            if (_marking || _markStart) {
                // 取消
                _resetMark();
                zr.refresh();
            }
            else {
                // 启用Mark
                _resetZoom();   // mark与dataZoom互斥
                
                zr.modShape(target.id, {style: {strokeColor: _enableColor}});
                zr.refresh();
                _markStart = true;
                setTimeout(function(){
                    zr
                    && zr.on(zrConfig.EVENT.CLICK, _onclick)
                    && zr.on(zrConfig.EVENT.MOUSEMOVE, _onmousemove);
                }, 10);
            }
            return true; // 阻塞全局事件
        }
        
        function _onDataZoom(param) {
            var target = param.target;
            if (_zooming || _zoomStart) {
                // 取消
                _resetZoom();
                zr.refresh();
            }
            else {
                // 启用Zoom
                _resetMark();   // mark与dataZoom互斥
                
                zr.modShape(target.id, {style: {strokeColor: _enableColor}});
                zr.refresh();
                _zoomStart = true;
                setTimeout(function(){
                    zr
                    && zr.on(zrConfig.EVENT.MOUSEDOWN, _onmousedown)
                    && zr.on(zrConfig.EVENT.MOUSEUP, _onmouseup)
                    && zr.on(zrConfig.EVENT.MOUSEMOVE, _onmousemove);
                }, 10);
            }
            return true; // 阻塞全局事件
        }

        function _onmousemove(param) {
            if (_marking) {
                _markShape.style.xEnd = zrEvent.getX(param.event);
                _markShape.style.yEnd = zrEvent.getY(param.event);
                zr.addHoverShape(_markShape);
            }
            if (_zooming) {
                _zoomShape.style.width = 
                    zrEvent.getX(param.event) - _zoomShape.style.x;
                _zoomShape.style.height = 
                    zrEvent.getY(param.event) - _zoomShape.style.y;
                zr.addHoverShape(_zoomShape);
            }
        }

        function _onmousedown(param) {
            if (param.target) {
                return;
            }
            _zooming = true;
            var x = zrEvent.getX(param.event);
            var y = zrEvent.getY(param.event);
            var zoomOption = option.dataZoom || {};
            _zoomShape = {
                shape : 'rectangle',
                id : zr.newShapeId('zoom'),
                zlevel : _zlevelBase,
                style : {
                    x : x,
                    y : y,
                    width : 1,
                    height : 1,
                    brushType: 'both'
                },
                highlightStyle : {
                    lineWidth : 2,
                    color: zoomOption.fillerColor 
                           || ecConfig.dataZoom.fillerColor,
                    strokeColor : zoomOption.handleColor 
                                  || ecConfig.dataZoom.handleColor,
                    brushType: 'both'
                }
            };
            zr.addHoverShape(_zoomShape);
            return true; // 阻塞全局事件
        }
        
        function _onmouseup(/*param*/) {
            if (!_zoomShape 
                || Math.abs(_zoomShape.style.width) < 10 
                || Math.abs(_zoomShape.style.height) < 10
            ) {
                _zooming = false;
                return true;
            }
            if (_zooming && component.dataZoom) {
                _zooming = false;
                
                var zoom = component.dataZoom.rectZoom(_zoomShape.style);
                if (zoom) {
                    _zoomQueue.push({
                        start : zoom.start,
                        end : zoom.end,
                        start2 : zoom.start2,
                        end2 : zoom.end2
                    });
                    _iconEnable(_iconShapeMap['dataZoomReset']);
                    zr.refresh();
                }
            }
            return true; // 阻塞全局事件
        }
        
        function _onclick(param) {
            if (_marking) {
                _marking = false;
                self.shapeList.push(_markShape);
                _iconEnable(_iconShapeMap['markUndo']);
                _iconEnable(_iconShapeMap['markClear']);
                zr.addShape(_markShape);
                zr.refresh();
            } else if (_markStart) {
                _marking = true;
                var x = zrEvent.getX(param.event);
                var y = zrEvent.getY(param.event);
                _markShape = {
                    shape : 'line',
                    id : zr.newShapeId('mark'),
                    zlevel : _zlevelBase,
                    style : {
                        xStart : x,
                        yStart : y,
                        xEnd : x,
                        yEnd : y,
                        lineWidth : self.deepQuery(
                                        [option],
                                        'toolbox.feature.mark.lineStyle.width'
                                    ) || 2,
                        strokeColor : self.deepQuery(
                                          [option],
                                          'toolbox.feature.mark.lineStyle.color'
                                      ) || _markColor,
                        lineType : self.deepQuery(
                                       [option],
                                       'toolbox.feature.mark.lineStyle.type'
                                   ) || 'dashed'
                    }
                };
                zr.addHoverShape(_markShape);
            }
        }

        function _onMarkUndo() {
            if (_marking) {
                _marking = false;
            } else {
                var len = self.shapeList.length - 1;    // 有一个是背景shape
                if (_iconList.length == len - 1) {
                    _iconDisable(_iconShapeMap['markUndo']);
                    _iconDisable(_iconShapeMap['markClear']);
                }
                if (_iconList.length < len) {
                    var target = self.shapeList[self.shapeList.length - 1];
                    zr.delShape(target.id);
                    zr.refresh();
                    self.shapeList.pop();
                }
            }
            return true;
        }

        function _onMarkClear() {
            if (_marking) {
                _marking = false;
            }
            // 有一个是背景shape
            var len = self.shapeList.length - _iconList.length - 1;
            var hasClear = false;
            while(len--) {
                zr.delShape(self.shapeList.pop().id);
                hasClear = true;
            }
            if (hasClear) {
                _iconDisable(_iconShapeMap['markUndo']);
                _iconDisable(_iconShapeMap['markClear']);
                zr.refresh();
            }
            return true;
        }
        
        function _onDataZoomReset() {
            if (_zooming) {
                _zooming = false;
            }
            _zoomQueue.pop();
            //console.log(_zoomQueue)
            if (_zoomQueue.length > 0) {
                component.dataZoom.absoluteZoom(
                    _zoomQueue[_zoomQueue.length - 1]
                );
            }
            else {
                component.dataZoom.rectZoom();
                _iconDisable(_iconShapeMap['dataZoomReset']);
                zr.refresh();
            }
            
            return true;
        }

        function _resetMark() {
            _marking = false;
            if (_markStart) {
                _markStart = false;
                if (_iconShapeMap['mark']) {
                    // 还原图标为未生效状态
                    zr.modShape(
                        _iconShapeMap['mark'].id,
                        {
                            style: {
                                strokeColor: _iconShapeMap['mark']
                                                 .highlightStyle
                                                 .strokeColor
                            }
                         }
                    );
                }
                
                zr.un(zrConfig.EVENT.CLICK, _onclick);
                zr.un(zrConfig.EVENT.MOUSEMOVE, _onmousemove);
            }
        }
        
        function _resetZoom() {
            _zooming = false;
            if (_zoomStart) {
                _zoomStart = false;
                if (_iconShapeMap['dataZoom']) {
                    // 还原图标为未生效状态
                    zr.modShape(
                        _iconShapeMap['dataZoom'].id,
                        {
                            style: {
                                strokeColor: _iconShapeMap['dataZoom']
                                                 .highlightStyle
                                                 .strokeColor
                            }
                         }
                    );
                }
                
                zr.un(zrConfig.EVENT.MOUSEDOWN, _onmousedown);
                zr.un(zrConfig.EVENT.MOUSEUP, _onmouseup);
                zr.un(zrConfig.EVENT.MOUSEMOVE, _onmousemove);
            }
        }

        function _iconDisable(target) {
            zr.modShape(target.id, {
                hoverable : false,
                clickable : false,
                style : {
                    strokeColor : _disableColor
                }
            });
        }

        function _iconEnable(target) {
            zr.modShape(target.id, {
                hoverable : true,
                clickable : true,
                style : {
                    strokeColor : target.highlightStyle.strokeColor
                }
            });
        }

        function _onDataView() {
            _dataView.show(option);
            return true;
        }

        function _onRestore(){
            _resetMark();
            _resetZoom();
            messageCenter.dispatch(ecConfig.EVENT.RESTORE);
            return true;
        }
        
        function _onSaveAsImage() {
            var saveOption = option.toolbox.feature.saveAsImage;
            var imgType = saveOption.type || 'png';
            if (imgType != 'png' && imgType != 'jpeg') {
                imgType = 'png';
            }
            var image = zr.toDataURL('image/' + imgType); 
            var downloadDiv = document.createElement('div');
            downloadDiv.id = '__echarts_download_wrap__';
            downloadDiv.style.cssText = 'position:fixed;'
                + 'z-index:99999;'
                + 'display:block;'
                + 'top:0;left:0;'
                + 'background-color:rgba(33,33,33,0.5);'
                + 'text-align:center;'
                + 'width:100%;'
                + 'height:100%;'
                + 'line-height:' 
                + document.documentElement.clientHeight + 'px;';
                
            downloadDiv.onclick = _close;
            var downloadLink = document.createElement('a');
            //downloadLink.onclick = _saveImageForIE;
            downloadLink.href = image;
            downloadLink.setAttribute(
                'download',
                (saveOption.name 
                 ? saveOption.name 
                 : (option.title && (option.title.text || option.title.subtext))
                   ? (option.title.text || option.title.subtext)
                   : 'ECharts')
                + '.' + imgType 
            );
            downloadLink.innerHTML = '<img src="' + image 
                + '" title="'
                + (!!(window.attachEvent 
                     && navigator.userAgent.indexOf('Opera') === -1)
                  ? '右键->图片另存为'
                  : (saveOption.lang ? saveOption.lang : '点击保存'))
                + '"/>';
            
            downloadDiv.appendChild(downloadLink);
            document.body.appendChild(downloadDiv);
            downloadLink = null;
            downloadDiv = null;
            
            function _close() {
                var d = document.getElementById('__echarts_download_wrap__');
                d.onclick = null;
                d.innerHTML = '';
                document.body.removeChild(d);
                d = null;
            }
            /*
            function _saveImageForIE() {
                window.win = window.open(image);
                win.document.execCommand("SaveAs");
                win.close()
            }
            */
            return;
        }

        function _onMagicType(param) {
            _resetMark();
            var itemName = param.target._name;
            if (itemName == _magicType) {
                // 取消
                _magicType = false;
            }
            else {
                // 启用
                _magicType = itemName;
            }
            messageCenter.dispatch(
                ecConfig.EVENT.MAGIC_TYPE_CHANGED,
                param.event,
                {magicType : _magicType}
            );
            return true;
        }

        function reset(newOption) {
            if (newOption.toolbox
                && newOption.toolbox.show
                && newOption.toolbox.feature.magicType
                && newOption.toolbox.feature.magicType.length > 0
            ) {
                var magicType = newOption.toolbox.feature.magicType;
                var len = magicType.length;
                _magicMap = {};     // 标识可控类型
                while (len--) {
                    _magicMap[magicType[len]] = true;
                }

                len = newOption.series.length;
                var oriType;        // 备份还原可控类型
                var axis;
                while (len--) {
                    oriType = newOption.series[len].type;
                    if (_magicMap[oriType]) {
                        axis = newOption.xAxis instanceof Array
                               ? newOption.xAxis[
                                     newOption.series[len].xAxisIndex || 0
                                 ]
                               : newOption.xAxis;
                        if (axis && axis.type == 'category') {
                            axis.__boundaryGap =
                                typeof axis.boundaryGap != 'undefined'
                                ? axis.boundaryGap : true;
                        }
                        axis = newOption.yAxis instanceof Array
                               ? newOption.yAxis[
                                     newOption.series[len].yAxisIndex || 0
                                 ]
                               : newOption.yAxis;
                        if (axis && axis.type == 'category') {
                            axis.__boundaryGap =
                                typeof axis.boundaryGap != 'undefined'
                                ? axis.boundaryGap : true;
                        }
                        newOption.series[len].__type = oriType;
                    }
                }
            }
            _magicType = false;
            
            var zoomOption = newOption.dataZoom;
            if (zoomOption && zoomOption.show) {
                var start = typeof zoomOption.start != 'undefined'
                            && zoomOption.start >= 0
                            && zoomOption.start <= 100
                            ? zoomOption.start : 0;
                var end = typeof zoomOption.end != 'undefined'
                          && zoomOption.end >= 0
                          && zoomOption.end <= 100
                          ? zoomOption.end : 100;
                if (start > end) {
                    // 大小颠倒自动翻转
                    start = start + end;
                    end = start - end;
                    start = start - end;
                }
                _zoomQueue = [{
                    start : start,
                    end : end,
                    start2 : 0,
                    end2 : 100
                }];
            }
            else {
                _zoomQueue = [];
            }
        }

        function getMagicOption(){
            if (_magicType) {
                // 启动
                for (var i = 0, l = option.series.length; i < l; i++) {
                    if (_magicMap[option.series[i].type]) {
                        option.series[i].type = _magicType;
                    }
                }
                var boundaryGap = _magicType == ecConfig.CHART_TYPE_LINE
                                  ? false : true;
                var len;
                if (option.xAxis instanceof Array) {
                    len = option.xAxis.length;
                    while (len--) {
                        // 横纵默认为类目
                        if ((option.xAxis[len].type || 'category')
                             == 'category'
                         ) {
                            option.xAxis[len].boundaryGap = boundaryGap;
                        }
                    }
                }
                else {
                    if (option.xAxis
                        && (option.xAxis.type || 'category') == 'category'
                    ) {
                        option.xAxis.boundaryGap = boundaryGap;
                    }
                }

                if (option.yAxis instanceof Array) {
                    len = option.yAxis.length;
                    while (len--) {
                        if ((option.yAxis[len].type) == 'category') {
                            option.yAxis[len].boundaryGap = boundaryGap;
                        }
                    }
                }
                else {
                    if (option.yAxis && option.yAxis.type == 'category') {
                        option.yAxis.boundaryGap = boundaryGap;
                    }
                }
            }
            else {
                // 还原
                var axis;
                for (var i = 0, l = option.series.length; i < l; i++) {
                    if (_magicMap[option.series[i].type]) {
                        option.series[i].type = option.series[i].__type;
                        if (option.xAxis instanceof Array) {
                            axis = option.xAxis[
                                       option.series[i].xAxisIndex || 0
                                   ];
                            if (axis.type == 'category') {
                                axis.boundaryGap = axis.__boundaryGap;
                            }
                        }
                        else {
                            axis = option.xAxis;
                            if (axis && axis.type == 'category') {
                                axis.boundaryGap = axis.__boundaryGap;
                            }
                        }

                        if (option.yAxis instanceof Array) {
                            axis = option.yAxis[
                                       option.series[i].yAxisIndex || 0
                                   ];
                            if (axis.type == 'category') {
                                axis.boundaryGap = axis.__boundaryGap;
                            }
                        }
                        else {
                            axis = option.yAxis;
                            if (axis && axis.type == 'category') {
                                axis.boundaryGap = axis.__boundaryGap;
                            }
                        }
                    }
                }
            }

            return option;
        }

        function render(newOption, newComponent){
            _resetMark();
            _resetZoom();
            newOption.toolbox = self.reformOption(newOption.toolbox);
            // 补全padding属性
            newOption.toolbox.padding = self.reformCssArray(
                newOption.toolbox.padding
            );
            option = newOption;
            component = newComponent;

            self.shapeList = [];

            if (newOption.toolbox.show) {
                _buildShape();
            }

            hideDataView();
        }

        function resize() {
            _resetMark();
            self.clear();
            if (option.toolbox.show) {
               _buildShape();
           }
           if (_dataView) {
               _dataView.resize();
           }
        }

        function hideDataView() {
            if (_dataView) {
                _dataView.hide();
            }
        }

        /**
         * 释放后实例不可用
         */
        function dispose() {
            if (_dataView) {
                _dataView.dispose();
            }

            self.clear();
            self.shapeList = null;
            self = null;
        }

        // 重载基类方法
        self.dispose = dispose;

        self.render = render;
        self.resize = resize;
        self.hideDataView = hideDataView;
        self.getMagicOption = getMagicOption;
        self.reset = reset;
    }

    require('../component').define('toolbox', Toolbox);
    
    return Toolbox;
});

/**
 * echarts组件：提示框
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/component/dataView',['require','./base','../config','../component'],function (require) {
    /**
     * 构造函数
     * @param {Object} messageCenter echart消息中心
     * @param {ZRender} zr zrender实例
     * @param {Object} option 提示框参数
     * @param {HtmlElement} dom 目标对象
     */
    function DataView(messageCenter, zr, option, dom) {
        var Base = require('./base');
        Base.call(this, zr);

        var ecConfig = require('../config');

        var self = this;
        self.type = ecConfig.COMPONENT_TYPE_DATAVIEW;

        var _lang = ['Data View', 'close', 'refresh'];

        // dataview dom & css
        var _tDom = document.createElement('div');
        var _textArea = document.createElement('textArea');
        var _buttonRefresh = document.createElement('button');
        var _buttonClose = document.createElement('button');
        var _hasShow = false;

        // 通用样式
        var _gCssText = 'position:absolute;'
                        + 'display:block;'
                        + 'overflow:hidden;'
                        + 'transition:height 0.8s,background-color 1s;;'
                        + '-moz-transition:height 0.8s,background-color 1s;'
                        + '-webkit-transition:height 0.8s,background-color 1s;'
                        + '-o-transition:height 0.8s,background-color 1s;'
                        + 'z-index:1;'
                        + 'left:0;'
                        + 'top:0;';
        var _sizeCssText;
        var _cssName = 'echarts-dataview';

        // 缓存一些高宽数据
        var _zrHeight = zr.getHeight();
        var _zrWidth = zr.getWidth();

        function hide() {
            _sizeCssText = 'width:' + _zrWidth + 'px;'
                           + 'height:' + 0 + 'px;'
                           + 'background-color:#f0ffff;';
            _tDom.style.cssText = _gCssText + _sizeCssText;
            // 这是个很恶心的事情
            dom.onselectstart = function() {
                return false;
            };
        }

        function show(newOption) {
            _hasShow = true;
            var lang = self.deepQuery([option],'toolbox.feature.dataView.lang')
                       || _lang;

            option = newOption;


            _tDom.innerHTML = '<p style="padding:8px 0;margin:0 0 10px 0;'
                              + 'border-bottom:1px solid #eee">'
                              + (lang[0] || _lang[0])
                              + '</p>';

            _textArea.style.cssText =
                'display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;'
                + 'width:' + (_zrWidth - 15) + 'px;'
                + 'height:' + (_zrHeight - 100) + 'px;';
            var customContent = self.deepQuery(
                [option], 'toolbox.feature.dataView.optionToContent'
            );
            if (typeof customContent != 'function') {
                _textArea.value = _optionToContent();
            }
            else {
                _textArea.value = customContent(option);
            }
            _tDom.appendChild(_textArea);

            _buttonClose.style.cssText = 'float:right;padding:1px 6px;';
            _buttonClose.innerHTML = lang[1] || _lang[1];
            _buttonClose.onclick = hide;
            _tDom.appendChild(_buttonClose);

            if (self.deepQuery([option], 'toolbox.feature.dataView.readOnly')
                === false
            ) {
                _buttonRefresh.style.cssText =
                    'float:right;margin-right:10px;padding:1px 6px;';
                _buttonRefresh.innerHTML = lang[2] || _lang[2];
                _buttonRefresh.onclick = _save;
                _tDom.appendChild(_buttonRefresh);
                _textArea.readOnly = false;
                _textArea.style.cursor = 'default';
            }
            else {
                _textArea.readOnly = true;
                _textArea.style.cursor = 'text';
            }

            _sizeCssText = 'width:' + _zrWidth + 'px;'
                           + 'height:' + _zrHeight + 'px;'
                           + 'background-color:#fff;';
            _tDom.style.cssText = _gCssText + _sizeCssText;

            // 这是个很恶心的事情
            dom.onselectstart = function() {
                return true;
            };
        }

        function _optionToContent() {
            var i;
            var j;
            var k;
            var len;
            var data;
            var valueList;
            var axisList = [];
            var content = '';
            if (option.xAxis) {
                if (option.xAxis instanceof Array) {
                    axisList = option.xAxis;
                } else {
                    axisList = [option.xAxis];
                }
                for (i = 0, len = axisList.length; i < len; i++) {
                    // 横纵默认为类目
                    if ((axisList[i].type || 'category') == 'category') {
                        valueList = [];
                        for (j = 0, k = axisList[i].data.length; j < k; j++) {
                            data = axisList[i].data[j];
                            valueList.push(
                                typeof data.value != 'undefined'
                                ? data.value : data
                            );
                        }
                        content += valueList.join(', ') + '\n\n';
                    }
                }
            }

            if (option.yAxis) {
                if (option.yAxis instanceof Array) {
                    axisList = option.yAxis;
                } else {
                    axisList = [option.yAxis];
                }
                for (i = 0, len = axisList.length; i < len; i++) {
                    if (axisList[i].type  == 'category') {
                        valueList = [];
                        for (j = 0, k = axisList[i].data.length; j < k; j++) {
                            data = axisList[i].data[j];
                            valueList.push(
                                typeof data.value != 'undefined'
                                ? data.value : data
                            );
                        }
                        content += valueList.join(', ') + '\n\n';
                    }
                }
            }

            var series = option.series;
            var itemName;
            for (i = 0, len = series.length; i < len; i++) {
                valueList = [];
                for (j = 0, k = series[i].data.length; j < k; j++) {
                    data = series[i].data[j];
                    if (series[i].type == ecConfig.CHART_TYPE_PIE
                        || series[i].type == ecConfig.CHART_TYPE_MAP
                    ) {
                        itemName = (data.name || '-') + ':';
                    }
                    else {
                        itemName = '';
                    }
                    
                    if (series[i].type == ecConfig.CHART_TYPE_SCATTER) {
                        data = typeof data.value != 'undefined' 
                               ? data.value
                               : data;
                        data = data.join(', ');
                    }
                    valueList.push(
                        itemName
                        + (typeof data.value != 'undefined' ? data.value : data)
                    );
                }
                content += (series[i].name || '-') + ' : \n';
                content += valueList.join(
                    series[i].type == ecConfig.CHART_TYPE_SCATTER ? '\n': ', '
                );
                content += '\n\n';
            }

            return content;
        }

        function _save() {
            var text = _textArea.value;
            var customContent = self.deepQuery(
                [option], 'toolbox.feature.dataView.contentToOption'
            );
            if (typeof customContent != 'function') {
                text = text.split('\n');
                var content = [];
                for (var i = 0, l = text.length; i < l; i++) {
                    text[i] = _trim(text[i]);
                    if (text[i] !== '') {
                        content.push(text[i]);
                    }
                }
                _contentToOption(content);
            }
            else {
                customContent(text, option);
            }

            hide();

            setTimeout(
                function(){
                    messageCenter && messageCenter.dispatch(
                        ecConfig.EVENT.DATA_VIEW_CHANGED,
                        null,
                        {option : option}
                    );
                },
                !G_vmlCanvasManager ? 800 : 100
            );
        }

        function _contentToOption(content) {
            var i;
            var j;
            var k;
            var len;
            var data;
            var axisList = [];

            var contentIdx = 0;
            var contentValueList;
            var value;

            if (option.xAxis) {
                if (option.xAxis instanceof Array) {
                    axisList = option.xAxis;
                } else {
                    axisList = [option.xAxis];
                }
                for (i = 0, len = axisList.length; i < len; i++) {
                    // 横纵默认为类目
                    if ((axisList[i].type || 'category') == 'category'
                    ) {
                        contentValueList = content[contentIdx].split(',');
                        for (j = 0, k = axisList[i].data.length; j < k; j++) {
                            value = _trim(contentValueList[j] || '');
                            data = axisList[i].data[j];
                            if (typeof axisList[i].data[j].value != 'undefined'
                            ) {
                                axisList[i].data[j].value = value;
                            }
                            else {
                                axisList[i].data[j] = value;
                            }
                        }
                        contentIdx++;
                    }
                }
            }

            if (option.yAxis) {
                if (option.yAxis instanceof Array) {
                    axisList = option.yAxis;
                } else {
                    axisList = [option.yAxis];
                }
                for (i = 0, len = axisList.length; i < len; i++) {
                    if (axisList[i].type  == 'category') {
                        contentValueList = content[contentIdx].split(',');
                        for (j = 0, k = axisList[i].data.length; j < k; j++) {
                            value = _trim(contentValueList[j] || '');
                            data = axisList[i].data[j];
                            if (typeof axisList[i].data[j].value != 'undefined'
                            ) {
                                axisList[i].data[j].value = value;
                            }
                            else {
                                axisList[i].data[j] = value;
                            }
                        }
                        contentIdx++;
                    }
                }
            }

            var series = option.series;
            for (i = 0, len = series.length; i < len; i++) {
                contentIdx++;
                if (series[i].type == ecConfig.CHART_TYPE_SCATTER) {
                    for (var j = 0, k = series[i].data.length; j < k; j++) {
                        contentValueList = content[contentIdx];
                        value = contentValueList.replace(' ','').split(',');
                        if (typeof series[i].data[j].value != 'undefined'
                        ) {
                            series[i].data[j].value = value;
                        }
                        else {
                            series[i].data[j] = value;
                        }
                        contentIdx++;
                    }
                }
                else {
                    contentValueList = content[contentIdx].split(',');
                    for (var j = 0, k = series[i].data.length; j < k; j++) {
                        value = (contentValueList[j] || '').replace(/.*:/,'');
                        value = _trim(value);
                        value = (value != '-' && value !== '')
                                ? (value - 0)
                                : '-';
                        if (typeof series[i].data[j].value != 'undefined'
                        ) {
                            series[i].data[j].value = value;
                        }
                        else {
                            series[i].data[j] = value;
                        }
                    }
                    contentIdx++;
                }
            }
        }

        function _trim(str){
            var trimer = new RegExp(
                '(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g'
            );
            return str.replace(trimer, '');
        }

        // 阻塞zrender事件
        function _stop(e){
            e = e || window.event;
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            else {
                e.cancelBubble = true;
            }
        }

        function _init() {
            _tDom.className = _cssName;
            hide();
            dom.firstChild.appendChild(_tDom);

            if (window.addEventListener) {
                _tDom.addEventListener('click', _stop);
                _tDom.addEventListener('mousewheel', _stop);
                _tDom.addEventListener('mousemove', _stop);
                _tDom.addEventListener('mousedown', _stop);
                _tDom.addEventListener('mouseup', _stop);

                // mobile支持
                _tDom.addEventListener('touchstart', _stop);
                _tDom.addEventListener('touchmove', _stop);
                _tDom.addEventListener('touchend', _stop);
            }
            else {
                _tDom.attachEvent('onclick', _stop);
                _tDom.attachEvent('onmousewheel', _stop);
                _tDom.attachEvent('onmousemove', _stop);
                _tDom.attachEvent('onmousedown', _stop);
                _tDom.attachEvent('onmouseup', _stop);
            }
        }

        /**
         * zrender事件响应：窗口大小改变
         */
        function resize() {
            _zrHeight = zr.getHeight();
            _zrWidth = zr.getWidth();
            if (_tDom.offsetHeight > 10) {
                _sizeCssText = 'width:' + _zrWidth + 'px;'
                               + 'height:' + _zrHeight + 'px;'
                               + 'background-color:#fff;';
                _tDom.style.cssText = _gCssText + _sizeCssText;
                _textArea.style.cssText = 'display:block;margin:0 0 8px 0;'
                                        + 'padding:4px 6px;overflow:auto;'
                                        + 'width:' + (_zrWidth - 15) + 'px;'
                                        + 'height:' + (_zrHeight - 100) + 'px;';
            }
        }

        /**
         * 释放后实例不可用，重载基类方法
         */
        function dispose() {
            if (window.removeEventListener) {
                _tDom.removeEventListener('click', _stop);
                _tDom.removeEventListener('mousewheel', _stop);
                _tDom.removeEventListener('mousemove', _stop);
                _tDom.removeEventListener('mousedown', _stop);
                _tDom.removeEventListener('mouseup', _stop);

                // mobile支持
                _tDom.removeEventListener('touchstart', _stop);
                _tDom.removeEventListener('touchmove', _stop);
                _tDom.removeEventListener('touchend', _stop);
            }
            else {
                _tDom.detachEvent('onclick', _stop);
                _tDom.detachEvent('onmousewheel', _stop);
                _tDom.detachEvent('onmousemove', _stop);
                _tDom.detachEvent('onmousedown', _stop);
                _tDom.detachEvent('onmouseup', _stop);
            }

            _buttonRefresh.onclick = null;
            _buttonClose.onclick = null;

            if (_hasShow) {
                _tDom.removeChild(_textArea);
                _tDom.removeChild(_buttonRefresh);
                _tDom.removeChild(_buttonClose);
            }

            _textArea = null;
            _buttonRefresh = null;
            _buttonClose = null;

            dom.firstChild.removeChild(_tDom);
            _tDom = null;
            self = null;
        }


        // 重载基类方法
        self.dispose = dispose;

        self.resize = resize;
        self.show = show;
        self.hide = hide;

        _init();
    }

    require('../component').define('dataView', DataView);
    
    return DataView;
});
/*!
 * ECharts, a javascript interactive chart library.
 *  
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 * 
 * Redistribution and use of this software in source and binary forms, with or 
 * without modification, are permitted provided that the following conditions 
 * are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice, 
 * this list of conditions and the following disclaimer in the documentation 
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of Baidu Inc. nor the names of its contributors may be used
 * to endorse or promote products derived from this software without specific 
 * prior written permission of Baidu Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * echarts
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author Kener (@Kener-林峰, linzhifeng@baidu.com)
 *
 */
define('echarts/echarts',['require','./chart/line','./chart/bar','./chart/scatter','./chart/k','./chart/pie','./chart/map','./chart/force','./config','zrender','zrender/tool/util','zrender/tool/event','zrender/config','./util/shape/icon','./chart','./chart/island','./component','./component/title','./component/axis','./component/categoryAxis','./component/valueAxis','./component/grid','./component/dataZoom','./component/legend','./component/dataRange','./component/tooltip','./component/toolbox','./component/dataView','./util/ecData','./chart','./component','zrender/tool/util','zrender/tool/util','zrender/tool/color','zrender/tool/util'],function(require) {
    // for build require
    require('./chart/line');
    require('./chart/bar');
    require('./chart/scatter');
    require('./chart/k');
    require('./chart/pie');
    require('./chart/map');
    require('./chart/force');
    
    var self = {};
    /**
     * 入口方法 
     */
    self.init = function(dom, libOption) {
        libOption = libOption || {type : 'canvas'};
        if (libOption.type == 'canvas') {
            return new Echarts(dom);
        }
        else if (libOption.type == 'flash') {
            alert('未配置');
        }
    };

    /**
     * 基于zrender实现Echarts接口层
     * @param {HtmlElement} dom 必要
     * @param {Object} option 可选参数，同setOption
     */
    function Echarts(dom, option) {
        var ecConfig = require('./config');

        var self = this;
        var _zr;
        var _option;
        var _optionBackup;          // for各种change和zoom
        var _optionRestore;         // for restore;
        var _chartList;             // 图表实例
        var _messageCenter;         // Echarts层的消息中心，做zrender原始事件转换

        var _status = {         // 用于图表间通信
            dragIn : false,
            dragOut : false,
            needRefresh : false
        };

        var _selectedMap;
        var _island;
        var _toolbox;

        // 初始化::构造函数
        _init();
        function _init() {
            var zrender = require('zrender');
            _zr = zrender.init(dom);

            var zrUtil = require('zrender/tool/util');
            _option = zrUtil.clone(option || {});

            _chartList = [];            // 图表实例

            _messageCenter = {};        // Echarts层的消息中心，做zrender原始事件转换
            // 添加消息中心的事件分发器特性
            var zrEvent = require('zrender/tool/event');
            zrEvent.Dispatcher.call(_messageCenter);
            _messageCenter.bind(
                ecConfig.EVENT.LEGEND_SELECTED, _onlegendSelected
            );
            _messageCenter.bind(
                ecConfig.EVENT.DATA_ZOOM, _ondataZoom
            );
            _messageCenter.bind(
                ecConfig.EVENT.DATA_RANGE, _ondataRange
            );
            _messageCenter.bind(
                ecConfig.EVENT.MAGIC_TYPE_CHANGED, _onmagicTypeChanged
            );
            _messageCenter.bind(
                ecConfig.EVENT.DATA_VIEW_CHANGED, _ondataViewChanged
            );
            _messageCenter.bind(
                ecConfig.EVENT.RESTORE, _onrestore
            );
            _messageCenter.bind(
                ecConfig.EVENT.REFRESH, _onrefresh
            );

            var zrConfig = require('zrender/config');
            _zr.on(zrConfig.EVENT.CLICK, _onclick);
            _zr.on(zrConfig.EVENT.MOUSEOVER, _onhover);
            _zr.on(zrConfig.EVENT.MOUSEWHEEL, _onmousewheel);
            _zr.on(zrConfig.EVENT.DRAGSTART, _ondragstart);
            _zr.on(zrConfig.EVENT.DRAGEND, _ondragend);
            _zr.on(zrConfig.EVENT.DRAGENTER, _ondragenter);
            _zr.on(zrConfig.EVENT.DRAGOVER, _ondragover);
            _zr.on(zrConfig.EVENT.DRAGLEAVE, _ondragleave);
            _zr.on(zrConfig.EVENT.DROP, _ondrop);

            // 动态扩展zrender shape：icon
            require('./util/shape/icon');

            // 内置图表注册
            var chartLibrary = require('./chart');
            require('./chart/island');
            // 孤岛
            var Island = chartLibrary.get('island');
            _island = new Island(_messageCenter, _zr);
            
            // 内置组件注册
            var componentLibrary = require('./component');
            require('./component/title');
            require('./component/axis');
            require('./component/categoryAxis');
            require('./component/valueAxis');
            require('./component/grid');
            require('./component/dataZoom');
            require('./component/legend');
            require('./component/dataRange');
            require('./component/tooltip');
            require('./component/toolbox');
            require('./component/dataView');
            // 工具箱
            var Toolbox = componentLibrary.get('toolbox');
            _toolbox = new Toolbox(_messageCenter, _zr, dom);
        }

        /**
         * 点击事件，响应zrender事件，包装后分发到Echarts层
         */
        function _onclick(param) {
            var len = _chartList.length;
            while (len--) {
                if (_chartList[len].onclick) {
                    _chartList[len].onclick(param);
                }
            }
            if (param.target) {
                var ecData = _eventPackage(param.target);
                if (ecData && typeof ecData.seriesIndex != 'undefined') {
                    _messageCenter.dispatch(
                        ecConfig.EVENT.CLICK,
                        param.event,
                        ecData
                    );
                }
            }
        }

         /**
         * 悬浮事件，响应zrender事件，包装后分发到Echarts层
         */
        function _onhover(param) {
            if (param.target) {
                var ecData = _eventPackage(param.target);
                if (ecData && typeof ecData.seriesIndex != 'undefined') {
                    _messageCenter.dispatch(
                        ecConfig.EVENT.HOVER,
                        param.event,
                        ecData
                    );
                }
            }
        }

        /**
         * 滚轮回调，孤岛可计算特性
         */
        function _onmousewheel(param) {
            _messageCenter.dispatch(
                ecConfig.EVENT.MOUSEWHEEL,
                param.event,
                _eventPackage(param.target)
            );
        }

        /**
         * dragstart回调，可计算特性实现
         */
        function _ondragstart(param) {
            // 复位用于图表间通信拖拽标识
            _status = {
                dragIn : false,
                dragOut : false,
                needRefresh : false
            };
            var len = _chartList.length;
            while (len--) {
                if (_chartList[len].ondragstart) {
                    _chartList[len].ondragstart(param);
                }
            }

        }

        /**
         * dragging回调，可计算特性实现
         */
        function _ondragenter(param) {
            var len = _chartList.length;
            while (len--) {
                if (_chartList[len].ondragenter) {
                    _chartList[len].ondragenter(param);
                }
            }
        }

        /**
         * dragstart回调，可计算特性实现
         */
        function _ondragover(param) {
            var len = _chartList.length;
            while (len--) {
                if (_chartList[len].ondragover) {
                    _chartList[len].ondragover(param);
                }
            }
        }
        /**
         * dragstart回调，可计算特性实现
         */
        function _ondragleave(param) {
            var len = _chartList.length;
            while (len--) {
                if (_chartList[len].ondragleave) {
                    _chartList[len].ondragleave(param);
                }
            }
        }

        /**
         * dragstart回调，可计算特性实现
         */
        function _ondrop(param) {
            var len = _chartList.length;
            while (len--) {
                if (_chartList[len].ondrop) {
                    _chartList[len].ondrop(param, _status);
                }
            }
            _island.ondrop(param, _status);
        }

        /**
         * dragdone回调 ，可计算特性实现
         */
        function _ondragend(param) {
            var len = _chartList.length;
            while (len--) {
                if (_chartList[len].ondragend) {
                    _chartList[len].ondragend(param, _status);
                }
            }
            _island.ondragend(param, _status);

            // 发生过重计算
            if (_status.needRefresh) {
                _syncBackupData(_island.getOption());
                _messageCenter.dispatch(
                    ecConfig.EVENT.DATA_CHANGED,
                    param.event,
                    _eventPackage(param.target)
                );
                _messageCenter.dispatch(ecConfig.EVENT.REFRESH);
            }
        }

        /**
         * 图例选择响应
         */
        function _onlegendSelected(param) {
            // 用于图表间通信
            _status.needRefresh = false;
            for (var l = _chartList.length - 1; l >= 0; l--) {
                if (_chartList[l].onlegendSelected) {
                    _chartList[l].onlegendSelected(param, _status);
                }
            }
            _selectedMap = param.selected;

            if (_status.needRefresh) {
                _messageCenter.dispatch(ecConfig.EVENT.REFRESH);
            }
        }

        /**
         * 数据区域缩放响应 
         */
        function _ondataZoom(param) {
            // 用于图表间通信
            _status.needRefresh = false;
            for (var l = _chartList.length - 1; l >= 0; l--) {
                if (_chartList[l].ondataZoom) {
                    _chartList[l].ondataZoom(param, _status);
                }
            }

            if (_status.needRefresh) {
                _messageCenter.dispatch(ecConfig.EVENT.REFRESH);
            }
        }

        /**
         * 值域漫游响应 
         */
        function _ondataRange(param) {
            // 用于图表间通信
            _status.needRefresh = false;
            for (var l = _chartList.length - 1; l >= 0; l--) {
                if (_chartList[l].ondataRange) {
                    _chartList[l].ondataRange(param, _status);
                }
            }

            // 没有相互影响，直接刷新即可
            if (_status.needRefresh) {
                _zr.refresh();
            }
        }

        /**
         * 动态类型切换响应 
         */
        function _onmagicTypeChanged() {
            var magicOption = _toolbox.getMagicOption();
            var len;
            // 横轴数据还原
            if (_optionBackup.xAxis) {
                if (_optionBackup.xAxis instanceof Array) {
                    len = _optionBackup.xAxis.length;
                    while (len--) {
                        magicOption.xAxis[len].data =
                            _optionBackup.xAxis[len].data;
                    }
                }
                else {
                    magicOption.xAxis.data = _optionBackup.xAxis.data;
                }
            }
            
            // 纵轴数据还原
            if (_optionBackup.yAxis) {
                if (_optionBackup.yAxis instanceof Array) {
                    len = _optionBackup.yAxis.length;
                    while (len--) {
                        magicOption.yAxis[len].data =
                            _optionBackup.yAxis[len].data;
                    }
                }
                else {
                    magicOption.yAxis.data = _optionBackup.yAxis.data;
                }
            }

            // 系列数据还原
            len = magicOption.series.length;
            while (len--) {
                magicOption.series[len].data = _optionBackup.series[len].data;
            }

            _render(magicOption);
        }

        /**
         * 数据视图修改响应 
         */
        function _ondataViewChanged(param) {
            _syncBackupData(param.option);
            _messageCenter.dispatch(
                ecConfig.EVENT.DATA_CHANGED,
                null,
                param
            );
            _messageCenter.dispatch(ecConfig.EVENT.REFRESH);
        }

        /**
         * 还原 
         */
        function _onrestore() {
            restore();
        }

        /**
         * 刷新 
         */
        function _onrefresh() {
            refresh();
        }

        /**
         * 数据修改后的反向同步备份数据 
         */
        function _syncBackupData(curOption) {
            if ((curOption.dataZoom && curOption.dataZoom.show)
                || (curOption.toolbox
                    && curOption.toolbox.show
                    && curOption.toolbox.feature
                    && curOption.toolbox.feature.dataZoom
                )
            ) {
                // 有dataZoom就dataZoom做同步
                for (var i = 0, l = _chartList.length; i < l; i++) {
                    if (_chartList[i].type == ecConfig.COMPONENT_TYPE_DATAZOOM
                    ) {
                        _chartList[i].syncBackupData(curOption, _optionBackup);
                        return;
                    }
                }
            }
            
            // 没有就ECharts做
            var curSeries = curOption.series;
            var curData;
            for (var i = 0, l = curSeries.length; i < l; i++) {
                curData = curSeries[i].data;
                for (var j = 0, k = curData.length; j < k; j++) {
                    if (typeof _optionBackup.series[i].data[j].value 
                        != 'undefined'
                    ) {
                        _optionBackup.series[i].data[j].value 
                            = curData[j].value;
                    }
                    else {
                        _optionBackup.series[i].data[j] = curData[j];
                    }
                }
            }
        }

        /**
         * 打包Echarts层的事件附件
         */
        function _eventPackage(target) {
            if (target) {
                var ecData = require('./util/ecData');
                return {
                    seriesIndex : ecData.get(target, 'seriesIndex'),
                    dataIndex : ecData.get(target, 'dataIndex')
                };
            }
            return;
        }

        /**
         * 图表渲染 
         */
        function _render(magicOption) {
            _disposeChartList();
            _zr.clear();

            var chartLibrary = require('./chart');
            var componentLibrary = require('./component');

            // 标题
            var title;
            if (magicOption.title) {
                var Title = new componentLibrary.get('title');
                title = new Title(
                    _messageCenter, _zr, magicOption
                );
                _chartList.push(title);
            }
            
            // 提示
            var tooltip;
            if (magicOption.tooltip) {
                var Tooltip = componentLibrary.get('tooltip');
                tooltip = new Tooltip(_messageCenter, _zr, magicOption, dom);
                _chartList.push(tooltip);
            }

            // 图例
            var legend;
            if (magicOption.legend) {
                var Legend = new componentLibrary.get('legend');
                legend = new Legend(
                    _messageCenter, _zr, magicOption, _selectedMap
                );
                _chartList.push(legend);
            }
            
            // 色尺
            var dataRange;
            if (magicOption.dataRange) {
                var DataRange = new componentLibrary.get('dataRange');
                dataRange = new DataRange(
                    _messageCenter, _zr, magicOption
                );
                _chartList.push(dataRange);
            }

            var grid;
            var dataZoom;
            var xAxis;
            var yAxis;
            if (magicOption.grid || magicOption.xAxis || magicOption.yAxis) {
                var Grid = componentLibrary.get('grid');
                grid = new Grid(_messageCenter, _zr, magicOption);
                _chartList.push(grid);

                var DataZoom = componentLibrary.get('dataZoom');
                dataZoom = new DataZoom(
                    _messageCenter,
                    _zr,
                    magicOption,
                    {
                        'legend' : legend,
                        'grid' : grid
                    }
                );
                _chartList.push(dataZoom);

                var Axis = componentLibrary.get('axis');
                xAxis = new Axis(
                    _messageCenter,
                    _zr,
                    magicOption,
                    {
                        'legend' : legend,
                        'grid' : grid
                    },
                    'xAxis'
                );
                _chartList.push(xAxis);

                yAxis = new Axis(
                    _messageCenter,
                    _zr,
                    magicOption,
                    {
                        'legend' : legend,
                        'grid' : grid
                    },
                    'yAxis'
                );
                _chartList.push(yAxis);
                tooltip && tooltip.setComponent({
                    'grid' : grid,
                    'xAxis' : xAxis,
                    'yAxis' : yAxis
                });
            }

            var ChartClass;
            var chartType;
            var chart;
            var chartMap = {};      // 记录已经初始化的图表
            for (var i = 0, l = magicOption.series.length; i < l; i++) {
                chartType = magicOption.series[i].type;
                if (!chartType) {
                    continue;
                }
                if (!chartMap[chartType]) {
                    chartMap[chartType] = true;
                    ChartClass = chartLibrary.get(chartType);
                    if (ChartClass) {
                        chart = new ChartClass(
                            _messageCenter,
                            _zr,
                            magicOption,
                            {
                                'tooltip' : tooltip,
                                'legend' : legend,
                                'dataRange' : dataRange,
                                'grid' : grid,
                                'xAxis' : xAxis,
                                'yAxis' : yAxis
                            }
                        );
                        _chartList.push(chart);
                    }
                }
            }

            _island.render(magicOption);

            _toolbox.render(magicOption, {dataZoom: dataZoom});

            if (magicOption.animation) {
                var len = _chartList.length;
                while (len--) {
                    _chartList[len].animation && _chartList[len].animation();
                }
            }

            _zr.render();
        }

        /**
         * 还原 
         */
        function restore() {
            var zrUtil = require('zrender/tool/util');
            if (_optionRestore.legend && _optionRestore.legend.selected) {
                _selectedMap = _optionRestore.legend.selected;
            }
            else {
                _selectedMap = {};
            }
            _optionBackup = zrUtil.clone(_optionRestore);
            _option = zrUtil.clone(_optionRestore);
            _island.clear();
            _toolbox.reset(_option);
            _render(_option);
        }

        /**
         * 刷新 
         */
        function refresh() {
            // 先来后到，不能仅刷新自己，也不能在上一个循环中刷新，如坐标系数据改变会影响其他图表的大小
            // 所以安顺序刷新各种图表，图表内部refresh优化无需更新则不更新~
            for (var i = 0, l = _chartList.length; i < l; i++) {
                _chartList[i].refresh && _chartList[i].refresh();
            }
            _zr.refresh();
        }

        /**
         * 释放图表实例
         */
        function _disposeChartList() {
            var len = _chartList.length;
            while (len--) {
                _chartList[len].dispose && _chartList[len].dispose();
            }
            _chartList = [];
        }

        /**
         * 万能接口，配置图表实例任何可配置选项，多次调用时option选项做merge处理
         * @param {Object} option
         * @param {boolean=} notMerge 多次调用时option选项是默认是合并（merge）的，
         *                   如果不需求，可以通过notMerger参数为true阻止与上次option的合并
         */
        function setOption(option, notMerge) {
            var zrUtil = require('zrender/tool/util');
            if (!notMerge) {
                zrUtil.merge(
                    _option,
                    zrUtil.clone(option),
                    {
                        'overwrite': true,
                        'recursive': true
                    }
                );
            }
            else {
                _option = zrUtil.clone(option);
            }

            if (!option.series || option.series.length === 0) {
                return;
            }

            // 非图表全局属性merge~~
            if (typeof _option.calculable == 'undefined') {
                _option.calculable = ecConfig.calculable;
            }
            if (typeof _option.nameConnector == 'undefined') {
                _option.nameConnector = ecConfig.nameConnector;
            }
            if (typeof _option.valueConnector == 'undefined') {
                _option.valueConnector = ecConfig.valueConnector;
            }
            if (typeof _option.animation == 'undefined') {
                _option.animation = ecConfig.animation;
            }
            if (typeof _option.animationDuration == 'undefined') {
                _option.animationDuration = ecConfig.animationDuration;
            }
            if (typeof _option.animationEasing == 'undefined') {
                _option.animationEasing = ecConfig.animationEasing;
            }

            var zrColor = require('zrender/tool/color');
            // 数值系列的颜色列表，不传则采用内置颜色，可配数组
            if (_option.color && _option.color.length > 0) {
                _zr.getColor = function(idx) {
                    return zrColor.getColor(idx, _option.color);
                };
            }
            else {
                _zr.getColor = function(idx) {
                    return zrColor.getColor(idx, ecConfig.color);
                };
            }
            // calculable可计算颜色提示
            _zr.getCalculableColor = function () {
                return _option.calculableColor || ecConfig.calculableColor;
            };

            _optionBackup = zrUtil.clone(_option);
            _optionRestore = zrUtil.clone(_option);
            
            if (_option.legend && _option.legend.selected) {
                _selectedMap = _option.legend.selected;
            }
            else {
                _selectedMap = {};
            }

            _island.clear();
            _toolbox.reset(_option);
            _render(_option);
            return self;
        }

        /**
         * 数据设置快捷接口
         * @param {Array} series
         * @param {boolean=} notMerge 多次调用时option选项是默认是合并（merge）的，
         *                   如果不需求，可以通过notMerger参数为true阻止与上次option的合并。
         */
        function setSeries(series, notMerge) {
            if (!notMerge) {
                self.setOption({series: series});
            }
            else {
                _option.series = series;
                self.setOption(_option, notMerge);
            }

            return self;
        }

        /**
         * 获取当前zrender实例，可用于添加额为的shape和深度控制 
         */
        function getZrender() {
            return _zr;
        }

        /**
         * 绑定事件
         * @param {Object} eventName 事件名称
         * @param {Object} eventListener 事件响应函数
         */
        function on(eventName, eventListener) {
            _messageCenter.bind(eventName, eventListener);
            return self;
        }

        /**
         * 解除事件绑定
         * @param {Object} eventName 事件名称
         * @param {Object} eventListener 事件响应函数
         */
        function un(eventName, eventListener) {
            _messageCenter.unbind(eventName, eventListener);
            return self;
        }

        /**
         * 显示loading过渡 
         * @param {Object} loadingOption
         */
        function showLoading(loadingOption) {
            _toolbox.hideDataView();

            var zrUtil = require('zrender/tool/util');
            loadingOption = loadingOption || {};
            loadingOption.textStyle = loadingOption.textStyle || {};

            var finalTextStyle = zrUtil.merge(
                zrUtil.clone(loadingOption.textStyle),
                ecConfig.textStyle,
                { 'overwrite': false}
            );
            loadingOption.textStyle.textFont = finalTextStyle.fontStyle + ' '
                                            + finalTextStyle.fontWeight + ' '
                                            + finalTextStyle.fontSize + 'px '
                                            + finalTextStyle.fontFamily;

            loadingOption.textStyle.text = loadingOption.text || 'Loading...';

            if (typeof loadingOption.x != 'undefined') {
                loadingOption.textStyle.x = loadingOption.x;
            }

            if (typeof loadingOption.y != 'undefined') {
                loadingOption.textStyle.y = loadingOption.y;
            }
            _zr.showLoading(loadingOption);

            return self;
        }

        /**
         * 隐藏loading过渡 
         */
        function hideLoading() {
            _zr.hideLoading();
            return self;
        }

        /**
         * 视图区域大小变化更新，不默认绑定，供使用方按需调用 
         */
        function resize() {
            _zr.resize();
            // 先来后到，不能仅刷新自己，也不能在上一个循环中刷新，如坐标系数据改变会影响其他图表的大小
            // 所以安顺序刷新各种图表，图表内部refresh优化无需更新则不更新~
            for (var i = 0, l = _chartList.length; i < l; i++) {
                _chartList[i].resize && _chartList[i].resize();
                _chartList[i].refresh && _chartList[i].refresh();
            }
            _island.resize();
            _toolbox.resize();
            _zr.refresh();
        }

        /**
         * 清楚已渲染内容 ，clear后echarts实例可用
         */
        function clear() {
            _zr.clear();
            return self;
        }

        /**
         * 释放，dispose后echarts实例不可用
         */
        function dispose() {
            _island.dispose();
            _toolbox.dispose();
            _disposeChartList();
            _messageCenter.unbind();
            _zr.dispose();
            self = null;
            return;
        }

        // 接口方法暴漏
        self.setOption = setOption;
        self.setSeries = setSeries;
        self.getZrender = getZrender;
        self.on = on;
        self.un = un;
        self.showLoading = showLoading;
        self.hideLoading = hideLoading;
        self.resize = resize;
        self.refresh = refresh;
        self.restore = restore;
        self.clear = clear;
        self.dispose = dispose;
    }

    return self;
});
define('echarts', ['echarts/echarts'], function (main) { return main; });