import React from 'react';

export default function Footer(){

    return(
        <>
        
        <div className=" bg-dark text-light footer text-sm pt-4 row mx-0 mt-4">
            <div className="col-4">
            <h6 className="mb-3">Contact Us:</h6>
                <h6 >Phone: 08-85578986</h6>
                <h6>email:tiptpp@gmail.com</h6>
            </div>
            <div className="col-4"><h1 className="text-light p-2"style={{ fontFamily:" 'Krona One', sans-serif ",textShadow:"2px 2px red" }}>TipTop</h1></div>
            <div className="col-4"><h6 className="mb-3">Here they found us:</h6>
                <h6>Ashdod branch - 15 HaTzveuni Street</h6>
                <h6>Opening hours 13: 00-11: 00 22: 00-17: 00</h6>
                <h6>Beit Shemesh Branch - 1 Ben Ish Chai Street</h6>
                <h6>Opening hours 13: 00-11: 00 22: 00-17: 00</h6></div>
            </div>
        </>
    )
}