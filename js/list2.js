async function resolveRes() {
    const body = await fetch(
        'http://www.xiongmaoyouxuan.com/api/tab/1?start=0'
    )
    const { code, data } = await body.json()
    return code === 200 ? data : {}
}

const jsonRender = async () => {
    const res = await resolveRes()
    const baonkuanEl = document.querySelector('.baokaun-box .baokuan')
    const baokaunFragment = document.createDocumentFragment()
    const gridEl = document.querySelector('.grids-box')
    const gridFragment = document.createDocumentFragment()
    const unknowEl = document.querySelector('.unknow-box')
    const unknowFragment = document.createDocumentFragment()
    const topicEl = document.querySelector('.topic-box')
    const topicFragment = document.createDocumentFragment()
    const {
        baokuanCommodities: { list: baokaunList },
        grids,
        items: { list: unknowList },
        topList,
    } = res

    for (let item of baokaunList) {
        let newLi = document.createElement('li')
        newLi.innerText = item.qunTitle
        baokaunFragment.appendChild(newLi)
    }

    for (let item of grids) {
        let newGrid = document.createElement('div')
        newGrid.innerHTML = '<img src=' + item.wxUrl + '>'
        gridFragment.appendChild(newGrid)
    }

    for (let item of unknowList) {
        let newLi = document.createElement('li')
        newLi.innerText = item.qunTitle
        unknowFragment.appendChild(newLi)
    }

    for (let item of topList) {
        let newLi = document.createElement('li')
        newLi.innerText = item.title
        topicFragment.appendChild(newLi)
    }

    baonkuanEl.appendChild(baokaunFragment)
    gridEl.appendChild(gridFragment)
    unknowEl.appendChild(unknowFragment)
    topicEl.appendChild(topicFragment)
}

window.onload = jsonRender