import React, {useRef} from 'react'


function Income({income, setIncome}) {
    const desc = useRef(null);
    const amount = useRef(null);
    const date = useRef(null);

    const addInc = (e) =>{
        e.preventDefault();

        let d = date.current.value.split("-");
        let currD = new Date(d[0], d[1], d[2]);

        setIncome([...income, {
            "desc": desc.current.value,
            "amount": amount.current.value,
            "date" : currD.getTime()

        }]);
        desc.current.value = "";
        amount.current.value = null;
        date.current.value = null;

        
    }
  return (
    <div className='d-flex justify-content-center align-items-center '>
        <form className='square border border-success border-2 mx-3' onSubmit={addInc}>
            <label >
                Description
            </label>
            <div className="mb-3 mt-3 px-3">
                    <input  name ="desc" type="text" id='desc' placeholder="Enter income description" ref={desc}></input>
            </div>
            <label>
                Amount
            </label>
            <div className="mb-3 mt-3 px-3">
            <input name ="amount" type="number" id='amount' placeholder="Enter income amount" ref={amount}></input>
            </div>
            <label>
                Date
            </label>
            <div className="mb-3 mt-3 px-3">
            <input  name ="date" type="date" id='date' placeholder="Enter date" ref={date}></input>
            </div>

            <div className="mb-3 mt-3 px-3">
            <input className='square border border-success border-2 mx-3' type="submit" value='Add' ></input>
            </div>
            




    </form>
    </div>


    

  )
}

export default Income