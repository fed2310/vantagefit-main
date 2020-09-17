import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import GhostContentAPI from '@tryghost/content-api'

const Topthree = ({ id }) => {
    const api = new GhostContentAPI({
        url: `https://vantagefitblog.ghost.io`,
        key: `a5f3bfdf2173b72ad44fbd4e08`,
        version: `v3`,
    })
    api.posts
        .browse({ limit: 3, include: `tags,authors` })
        .then((res) => {
            console.log(res)
            appenddata(res)
        })
        .catch((err) => {
            console.error(err)
        })
    return (
        <div className="row" id="topthree"></div>
    )
     
}

function appenddata(data){
    var info = document.getElementById(`topthree`)
    var template = ``
    for (var i = 0; i < data.length; i++){
        template += `<div class="col-md-4 col-lg-4 col-sx-12 col-sm-4 d-left">
            <div class="box-shadow">
                <div class="overflow">
                    <a href="`+data[i].url+`" target="_blank">
                        <img width="377" height="211" class="img-responsive ease" src="`+ data[i].feature_image+`" alt="blog"/>
                    </a>
                </div>
                <a href="`+data[i].url+`" target="_blank">
                    <div class="post_titel">
                        `+ data[i].title +`
                    </div>
                </a>
                <a href="`+data[i].url+`" target="_blank">
                    <div class="blog_excerpt">`+ data[i].excerpt +`
                    </div>
                </a>
            </div>
        </div>`
    }
    info.innerHTML = template	
}
Topthree.propTypes = {
    id: PropTypes.string,
}

export default Topthree
