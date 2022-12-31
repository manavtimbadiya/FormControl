

function Jsonfile () {

    function request(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response){
            return response.json()
        })
        .then((response) => {
            var result = document.getElementById('result')
            console.log(response)
            response.forEach(element => {
                result.innerHTML = 'UserName' + element.name
            });
           
            
        })
    }
    return (
        <div>
            <button onClick={request()}>Request Data</button>
            <div id="result"></div>
        </div>
            )
}

export default Jsonfile;