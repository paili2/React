import { CSSProperties } from "react";

const Data = {
  code: 0,
  result: {
    homeEvent: [
      {
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/M_9월배너.png",
        webImageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/PC_9월배너.png",
        isExternalUrl: false,
        redirectUrl: "https://bit.ly/3uWvSh8",
      },
      {
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/M_메인배너_07.png",
        webImageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/pc_메인배너_07.png",
        isExternalUrl: false,
        redirectUrl: "https://bit.ly/49Y2abH",
      },
      {
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/M_%EB%8B%A4%EC%A7%90_%EB%B8%94%EB%A1%9C%EA%B7%B8%EB%A6%AC%EB%B7%B0_%EC%9D%B4%EB%B2%A4%ED%8A%B8_01.png",
        webImageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/pc_%EB%8B%A4%EC%A7%90_%EB%B8%94%EB%A1%9C%EA%B7%B8%EB%A6%AC%EB%B7%B0_%EC%9D%B4%EB%B2%A4%ED%8A%B8_01.png",
        isExternalUrl: false,
        redirectUrl: "https://bit.ly/3xTdqaS",
      },
      {
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/2023_re-registraion_ver2_mobile.png",
        webImageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/pc_메인배너_03.png",
        isExternalUrl: false,
        redirectUrl: "https://bit.ly/41K1jb3",
      },
      {
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/M_메인배너_2405.png",
        webImageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/pc_메인배너_2405.png",
        isExternalUrl: false,
        redirectUrl: "https://www.da-gym.co.kr/friend",
      },
      {
        imageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/2024_consult_mobile.png",
        webImageUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/events/2024_consult_pc.png",
        isExternalUrl: false,
        redirectUrl: "https://bit.ly/3V2Ma2x",
      },
    ],
    gyms: [
      {
        id: "66598f406a36af001d813f9d",
        gymName: "시청 피트니스온",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/18fcdd79463342aa28/2YBLc2P6ECeDH15A7K13xykGCCSJhkEMDqo5.Small_15.jpg",
        address: "서울 중구 무교동",
      },
      {
        id: "62e913e9f9efad001d8f473e",
        gymName: "을지로 펄스핏 피트니스",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/1825e75c7082a576a4/4K8gHYEb5rWJtJKJpHwCnL8V5xTn6yNPKGD5LcYzAx9E.jpg",
        address: "서울 중구 을지로1가",
      },
      {
        id: "6321454882a1c2001d14e202",
        gymName: "종로 스포짐",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/18339f6a20fe5f94e/kXjvwH8c7VMy1K45LqKEzxNAyFcnP766Nz36VAyF68.jpg",
        address: "서울 종로구 서린동",
      },
      {
        id: "632d2a6967a7ff001d507f2b",
        gymName: "광화문 이스트 골프라운지",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/183686dadc937bb767/2aFefNkefcTcYBSxbxtQhqGBDgxiDjSERsa6.photo_2.900x676.jpg",
        address: "서울 종로구 종로1가",
      },
      {
        id: "65fb96e46d09b7001d9d1fa0",
        gymName: "시청 무브짐앤무브맥스PT",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/18e5ec56c2a2c8a2e4/2WiSHkcu3B7NDn3bQy7zDzxXfUQVYzS9t9hk.list_photo.jpg",
        address: "서울 중구 서소문동",
      },
      {
        id: "62c3eefd99269f001d846287",
        gymName: "시청 요가타운 서소문교육원",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/181cd5d8c511a9b79a/4K8g81Hip8Do9PTbbeREKtTTABr6BLQQD7NtWzShtJc8.jpg",
        address: "서울 중구 서소문동",
      },
      {
        id: "606178dd43115b0039225ae0",
        gymName: "명동 은행회관 헬스클럽",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/1787cc020665232fec/4K7pCDmb1Rr5UHrvRJyUA82i4ME2ZEYJMwqnaSxuf384.jpg",
        address: "서울 중구 명동1가",
      },
      {
        id: "63020a6a253e7e001dc8e1e0",
        gymName: "시청 겟투잇 피트니스",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/182bff8af4a1e60773/2WQFyg7sWAqyqkDEQVKE5GRYSfMJFy2mKwRj.list_photo.jpg",
        address: "서울 서대문구 미근동",
      },
      {
        id: "5faa2611cf2a1a001d936319",
        gymName: "을지로 크로스핏 삼손",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/175b0a4b4fe567e322/2WjeJZnzEMeavHrbhXwVEMwPK76mZMMcitug.list_photo.jpg",
        address: "서울 중구 장교동",
      },
      {
        id: "6059847543115b00392248e0",
        gymName: "을지로 피트니스101",
        listImgUrl:
          "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/1785dad6b2e639542/kXYY4y8ZNcFA177fEscdJ7i7Xc1tjp7wxMvyUTFnxx.jpg",
        address: "서울 중구 저동1가",
      },
    ],
  },
};

const Card = () => {
  const Cardstyle: CSSProperties = {
    width: "1020px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    margin: "0px auto",
  };

  const centered: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };

  const albumSize: CSSProperties = { width: "150px", height: "200px" };
  const imgSize: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const textStyle: CSSProperties = {
    fontSize: "30px",
  };
  return (
    <div style={Cardstyle}>
      <div className="centered" style={centered}>
        <div className="text" style={textStyle}>
          {" "}
          헬스 / P.T
          <div className="album" style={albumSize}>
            <img
              style={imgSize}
              src="https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/18fcdd79463342aa28/2Zw9JCqfv33TgjXzG2j9NCEpp6eXri6Pk3zG.Big_15.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
