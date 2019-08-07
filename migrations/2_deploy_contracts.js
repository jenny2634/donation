const fs = require('fs')
const Donation = artifacts.require('./Donation.sol')//additopngame불러옴
module.exports = function (deployer) {
    deployer.deploy(Donation)//배포함
        .then(() => {//then 비동기 처리할때 콜백처리
            if (Donation._json) {
                fs.writeFile(//nodejs에서 제공되는 기능 
                    'deployedABI', JSON.stringify(Donation._json.abi),
                    (err) => {
                        if (err) throw err;
                        console.log(' 파일에 ABI 입력 성공 ');
                    }
                );
                fs.writeFile(
                    'deployedAddress', Donation.address,
                    (err) => {
                        if (err) throw err;
                        console.log(' 파일에 주소 입력 성공 ');
                    }
                );
            }
        });
}