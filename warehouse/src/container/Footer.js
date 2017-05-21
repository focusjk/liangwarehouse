import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div>
            <footer className="container-fluid text-center">
            	<div className="text-left">
            		<span className="fa fa-facebook-square"></span>
            	</div>
            	<div className="text-right">
                
                <p>อู่เลี้ยงการช่าง เลขที่ 414 หมู่ 13 ตำบลบ้านกล้วย อำเภอเมือง จังหวัดสุโขทัย 64000</p>
                <p>โทรศัพท์ <a href="tel:">081-5965858</a>(ศักดิ์), <a href="tel:">055-611064</a> Email : sak-boon@hotmail.com</p>
                </div>

            </footer>
        </div>
    );
  }
}

export default Footer;
