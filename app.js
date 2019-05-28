$(function(){
    console.log('jQuery is working!');

    $('#search').keyup(function(e) {
        let search = $('#search').val();
        $.ajax({
            url: 'task-search.php',
            type: 'POST',
            data: { search: search },
            success: function(response) {
                let tasks = JSON.parse(response);
                tasks.forEach(task => {
                    console.log(task);
                })
            }
        })
    })
});