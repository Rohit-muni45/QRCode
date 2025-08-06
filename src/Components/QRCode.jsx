import { QRCodeSVG } from 'qrcode.react';

function QRCode() {
  return (
    <div className='px-10 py-4'>
      <h2 className='text-2xl font-bold mb-4'>QR Code</h2>  
      <QRCodeSVG
        value="http://localhost:5173/profile" />
    </div>
  )
}

export default QRCode