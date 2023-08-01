import { Fragment } from "react";
import EmptyMsgCat from '../Assets/cat.png';

const ErrorMsg = ({msg}) => {

    return (
        <Fragment>
            <div className='col-12 text-center mt-5'>
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                    <h3>{msg}</h3>
                    </div>
                    <div className="col-12">
                    <img src={EmptyMsgCat} style={{ height: "20rem", width: "20rem", marginBottom: '5px' }} alt="Empty Message" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ErrorMsg;