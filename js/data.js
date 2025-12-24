const $container = $('.galleryWrap');
const $loadMoreBtn = $('.loadMore .loadBt');
let $allData = []; //배열로 받는다는 뜻
let $added = 0;
let $addItemCount = 4;
let $filter = $('#gallery-filter');
let $filterData = [];



$.getJSON('./data/video.json', function(data){
    $allData = data;
    //console.log(data)
    $loadMoreBtn.click(addItem);
    $filterData = $allData;
    addItem();
    $filter.on('change', 'input[type = "radio"]', filterItems);
});

function addItem(data){
    let element=[];
    let slicedData;
    slicedData = $filterData.slice($added, $added += $addItemCount);
    //console.log(slicedData)
    $.each(slicedData, function(index, item){
        let itemHtml = `
            <li>
                <div>
                    <a href="" class="galleryBt">
                        <sapn class="g-video">
                            <video src=${item.video} autoplay muted></video>
                        </sapn>
                        <span class="g-color"></span>
                        <span class="g-title">
                            <span><strong>${item.title}</strong></span>
                            <span><b>${item.description}</b></span>
                        </span>
                    </a>
                </div>
            </li>
        `
        element.push($(itemHtml).get(0));
        $container.append(element);

        if($added < $allData.length){
            $loadMoreBtn.text('Load More');
        }else{
            $loadMoreBtn.text('End');
        }
        if($added < $filterData.length){
            $loadMoreBtn.text('Load More');
        }else{
            $loadMoreBtn.text('End');
        }
    });
};


function filterItems(){
    let key = $(this).val();

    $filterData = [];
    $added = 0; //초기값 0
    $container.empty();

    if(key == 'all'){
        $filterData = $allData;
    }else{
        $filterData = $.grep($allData, function(item){ //jQuery에서 주는 코드 걸러내는 거
            return item.category === key;
        }) 
    };
    addItem(true)
}