import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import {AiOutlinePlusCircle} from "react-icons/ai";

export default function MainModal(props) {
    const { modalItem, show, setShow,add } = props
    const[flag,setFlag]=useState(true)
    function click(){
    
    if (flag) {
        magnify("myimage", 3);
        setFlag(false);
    }
      
    }
   
    function magnify(imgID, zoom) {
        var img, glass, w, h, bw;
        img = document.getElementById(imgID);
        /*create magnifier glass:*/
        glass = document.createElement("DIV");
        glass.setAttribute("class", "img-magnifier-glass");
        /*insert magnifier glass:*/
        img.parentElement.insertBefore(glass, img);
        /*set background properties for the magnifier glass:*/
        glass.style.backgroundImage = "url('" + img.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
        /*execute a function when someone moves the magnifier glass over the image:*/
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);
        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);
        function moveMagnifier(e) {
          var pos, x, y;
          /*prevent any other actions that may occur when moving over the image*/
          e.preventDefault();
          /*get the cursor's x and y positions:*/
          pos = getCursorPos(e);
          x = pos.x;
          y = pos.y;
          /*prevent the magnifier glass from being positioned outside the image:*/
          if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
          if (x < w / zoom) {x = w / zoom;}
          if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
          if (y < h / zoom) {y = h / zoom;}
          /*set the position of the magnifier glass:*/
          glass.style.left = (x - w) + "px";
          glass.style.top = (y - h) + "px";
          /*display what the magnifier glass "sees":*/
          glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }
        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x : x, y : y};
          }
      }
     
    return (
        <>
            <Modal show={show} setShow={setShow} modalItem={modalItem} add={add}>
                <Modal.Header closeButton onClick={(e) =>{ 
                    setShow(false)
                    setFlag(true);
                    }}>
            <Modal.Title>
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="col-3 m-5" >
                        <div className="card img-magnifier-container" style={{"width":"20rem"}}>
                        <button className="card-title  text-center" onClick={click}> enlargement<AiOutlinePlusCircle></AiOutlinePlusCircle></button>

                          <img className="card-img-top" src={modalItem.image} alt="" id="myimage"/>
                          <div className="card-body">
                          <h4 className="card-title text-center"> {modalItem.name}</h4>
                            <h5 className="card-title  text-center"> $ {modalItem.price}</h5>
                            <button className="btn-secondary text-center"
              onClick={(e)=> {e.stopPropagation(); add(modalItem)}} >Add to the basket</button>
                          </div>
                        </div></div> 
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}