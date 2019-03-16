import giphyAPI from "../APIs/giphyAPI";

// リクエスト開始用のアクションを作成するクリエイター
const startRequest = () => {
  return {
    type: "START_REQUEST"
  };
};

// 通常の action creator
const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

// thunk 用の関数を返す action creator
const getUrls = word => {
  return dispatch => {
    dispatch(startRequest());
    giphyAPI(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
