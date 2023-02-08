import 'bootstrap/dist/css/bootstrap.min.css'

function ClickButton()
{
    function press(e)
    {
        
        alert("Exit done"+e)
    }
    return <button className="btn-link" onClick={press}>Exit</button>
}
export default ClickButton