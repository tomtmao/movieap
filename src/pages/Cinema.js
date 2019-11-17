import React, { Fragment } from "react"
import { Route, NavLink, Link } from "react-router-dom"
import defaultStyle from "../assets/styles/main-container.module.css"
import '../assets/styles/Cinema/Cinema.css'
import { Icon } from 'antd-mobile'

import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        city: state.city
    }
}

@connect(mapStateToProps)

class Cinema extends React.Component {
    render() {
        console.log(this.props);

        return (
            <Fragment>
                <div className={defaultStyle.container}>
                    <Link to="/address" style={{ color: '#777' }}>{this.props.city.nm}▽</Link>
                    <Link to="/cinemasearch">
                        <div className='searchbox'>
                            <Icon className='icon-search' type="search" /> <span style={{ color: '#777' }}>  搜索影院</span>
                        </div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default Cinema