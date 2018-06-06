$(document).ready(function(){
	var snippets = {};

	function store(snippetName,code) {
	    snippets[snippetName] = '<code>'+code+' </code>';
	    localStorage.setItem("snippets", JSON.stringify(snippets));
	}

    $('.submitCode').on('click', function() {

    
      let snippetName = $('.shortName').val();
      let code = $('.snippet').val()
      store(snippetName,code);
      $('.snippet').val('');
      $('.shortName').val('');


    });

    $('.display').one('click', function(){
    	let retrievedData = JSON.parse(localStorage.getItem('snippets'));
    	for(let key in retrievedData){
    		$('.codes').append('<div>'+retrievedData[key]+'</div>');
    	}

    });

    $('.clear').on('click',function(){
    	$('.codes').html('');
    })

    $('.searchButton').on('click',function(){
    	let retrievedData = JSON.parse(localStorage.getItem('snippets'));
    	// console.log(retrievedData);
    	for(let key in retrievedData){
    		
    		if($('.search').val() === key){
    			$('.searchResults').append(retrievedData[key]);
    		}
    	}

    })


});