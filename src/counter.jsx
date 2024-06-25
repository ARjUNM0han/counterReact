import { React, useState } from 'react'

function Counter() {

    var [counterNumber, setcounterNumber] = useState(0)

    const incre = () => {
        setcounterNumber(counterNumber + 1)
        console.log(counterNumber + 1)
    }

    const decre = () => {
        if (counterNumber !== 0) {
            setcounterNumber(counterNumber - 1)
            console.log(counterNumber - 1)
        }
    }

    const resetCounterNumber = () => {
        setcounterNumber(0)
    }
    return (
        <>
            <div className='container w-80 text-center mt-5'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    <div className="col">
                        <div className="card">
                            <div className='fs-1'>
                                <span>{counterNumber}</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Counter</h5>
                                <p className="card-text mt-3">
                                    <button className='btn btn-primary' onClick={incre}>Increment</button>
                                </p>
                                <p className="card-text">
                                    <button className='btn btn-danger' onClick={decre}>Decrement</button>
                                </p> <p className="card-text">
                                    <button className='btn btn-success' onClick={resetCounterNumber}>Reset</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter