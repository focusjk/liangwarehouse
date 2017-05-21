import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div>
        <div className="home">
			
        	<div className="col-xs-12 slogan"><p>" เว็บนี้ ไม่มีสโลแกน แง่มๆ "</p></div>
			<div className="searchzone col-sm-12">
				<div className="col-sm-2"></div>

				<div className="col-sm-8 text-center">
				<div className="input-group">
                	<input type="text" className="form-control" name="email" placeholder="Time : 9.00" />
            	</div>
            	<div className="input-group">
                	  <input type="text" className="form-control" name="email" placeholder="Time : 9.00" />
            	</div>

            	<div className="input-group">
    	            <input type="number" className="form-control" placeholder="Time : 9.00" />
        	    </div>
            	
                <button className="btn btn-primary searchbtn" type="botton">search</button>
            	
            	</div>
            </div>
		</div>
        </div>
    );
  }
}

export default Home;
