import React from "react";

const SaleProjectBottomContent = () => {
    return (
        <div className="text-center mt-3">
            <h3 className="title-project">Average Sales</h3>
            <p className="mb-4 desc-project">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam velit quisquam veniam excepturi.</p>
            <div className="col p-1 mt-2">
                <div className="float-start">
                    <h3 className="ms-5 title-project"><i className="fa fa-caret-up fa-1x text-primary me-1"></i>$3.2</h3>
                    <h6 className="ms-5 pb-0 mb-0">last month</h6>
                </div>
                <div className="float-end">
                    <h3 className="me-5 title-project"><i className="fa fa-caret-up fa-1x text-primary me-1"></i>$2.4</h3>
                    <h6 className="me-5 mt-0 mb-0">last year</h6>
                </div>
            </div>
        </div>
    )

}
export default SaleProjectBottomContent