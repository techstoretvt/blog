


function FuncAllBlogs(n) {
    if (n == 1) {
        var kt = $('.ListBlog-container-item').height()

        var element = document.querySelector('.ListBlog-container')

        element.scrollLeft += kt + 10

    }
    else {
        var kt = $('.ListBlog-container-item').height()

        var element = document.querySelector('.ListBlog-container')

        element.scrollLeft -= kt + 10
    }
}

//sắp xếp blog
var Options = document.querySelector(".ListBlog-sapxep select")
Options.onchange = () => {
    if (Options.value == "Phổ biến nhất") {
        //sắp xếp theo phổ biến nhất
        var arr = [...document.querySelectorAll('.ListBlog-container-item')]
        var arrNum = []
        arr.forEach((item) => {
            arrNum.push(item.getAttribute('data-viewblog') * 1)
        })
        arrNum.sort(function (a, b) { return a - b });
        arrNum.reverse()
        arrNum.forEach((item, index) => {
            arr.forEach((item2) => {
                if (item2.getAttribute('data-viewblog') == item.toString()) {
                    item2.style.order = index
                }
            })
        })
    }
    else if (Options.value == 'Mới nhất') {
        //sắp xếp mới nhất
        var arr = [...document.querySelectorAll('.ListBlog-container-item')]
        var arrNum = []
        arr.forEach((item) => {
            arrNum.push(item.getAttribute('data-stt')*1)
        })

        arrNum.sort(function (a, b) { return a - b });
        arrNum.reverse()

        arrNum.forEach((item, index) => {
            arr.forEach((item2) => {
                if (item2.getAttribute('data-stt') == item.toString()) {
                    item2.style.order = index
                    return;
                }
            })
        })

    }
    else {
        //sắp xếp cũ nhất
        var arr = [...document.querySelectorAll('.ListBlog-container-item')]
        arr.forEach((item, index) => {
            item.style.order = item.getAttribute('data-stt')
        })
    }
}

//kéo
var isBlogDrap = false
var isBlogLocation
document.querySelector('.ListBlog-container').addEventListener('mousedown', evt => {
    isBlogDrap = true
    isBlogLocation = evt.clientX


})

document.addEventListener('mousemove', evt => {
    if (isBlogDrap) {
        
        var item = document.querySelector('.ListBlog-container')
        var left = item.scrollLeft
        var kt = evt.clientX - isBlogLocation

        if (evt.clientX - isBlogLocation < 0)
            FuncAllBlogs(1)
        else
            FuncAllBlogs(-1)

        
    }
})

document.addEventListener('mouseup', evt => {
    isBlogDrap = false




})