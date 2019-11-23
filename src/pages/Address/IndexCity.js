import React, { Component } from 'react';

//const actionCreate = (type, payload) => ({ type, payload })

class IndexCity extends Component {
    clickTitle(position, index) {
        let lis = document.getElementsByClassName('indexlist-box')
        lis = [...lis]
        lis = lis.slice(0, index)

        let heightAll = lis.reduce((preValue, item) => {
            return preValue + item.clientHeight
        }, 380)

        position = position || heightAll
        window.scrollTo({
            top: position,
            behavior: "smooth"
        })
    }
/*     handleTouch(position, index, e) {
        if (e.target.tagName !== "DIV") {
            return
        }
        let navOffsetX = e.changedTouches[0].clientX;
        let navOffsetY = e.changedTouches[0].clientY

        scrollList(navOffsetY)
        function scrollList(y) {
            // 通过当前的y值以及之前记录的clientX值来获得索引栏中的对应item
            var currentItem = document.elementFromPoint(navOffsetX, y);


            if (!currentItem || !!currentItem.classList.contains('cityIndexContainer')) {
                return;
            }

            // 找到左侧内容的对应section
            var targets = [].slice.call(sections).filter(function (section) {
                var index = section.getAttribute('data-index');
                return index === currentItem.innerText;
            });
            var targetDOM;
            if (targets.length > 0) {
                targetDOM = targets[0];
                // 通过对比要滑动到的区域的top值与最开始的一个区域的top值
                // 两者的差值即为要滚动的距离
                content.scrollTop = targetDOM.getBoundingClientRect().top - firstSection.getBoundingClientRect().top;

            }
        } */
        render() {
            return (
                <div className='cityIndexContainer'>
                    <p style={{ margin: '10px 0' }} onClick={this.clickTitle.bind(this, 5)}>定位</p>
                    <p style={{ margin: '10px 0' }} onClick={this.clickTitle.bind(this, 90)}>最近</p>
                    <p style={{ margin: '10px 0' }} onClick={this.clickTitle.bind(this, 175)}>热门</p>
                    {this.props.cityTitles.map((item, index) => {
                        return (
                            <div
                                style={{ textAlign: "center", margin: '10px 0' }}
                                className='cityIndex'
                                key={index}
                                onClick={this.clickTitle.bind(this, "", index)}
                                /* onTouchStart={this.handleTouch.bind(this, "", index)} */
                            > 
                                {item}
                            </div>
                        )
                    })}
                </div>
            );
        }
    }

    export default IndexCity;