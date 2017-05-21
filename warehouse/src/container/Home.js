import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div>
        	<div className="home">
			<div className="slogan"><p>" เว็บนี้ ไม่มีสโลแกน แง่มๆ "</p></div>

			<div className="searchzone col-sm-12">
				<div className="col-sm-2"></div>
				<div className="input-group col-sm-2">
                	<input type="text" className="form-control" name="email" placeholder="Time : 9.00" />
            	</div>
            	<div className="input-group col-xs-2">
                	  <input type="text" className="form-control" name="email" placeholder="Time : 9.00" />
            	</div>

            	<div className="input-group col-xs-2">
	                <span className="input-group-addon"><i className="glyphicon glyphicon-time"></i></span>
    	            <input type="text" className="form-control" name="email" placeholder="Time : 9.00" />
        	    </div>
            	    
            	<div className="col-xs-1 inline">
                	<button className="btn btn-primary" type="botton">search</button>
            	</div>
            </div>
		</div>
        </div>
    );
  }
}

export default Home;
