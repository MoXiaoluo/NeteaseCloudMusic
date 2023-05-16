import { playListApiResponse, playListType } from '../../Type/requestType';
import request from '../request';

export function getRecommendPlayList() {
  return request.get<playListApiResponse<playListType[]>>('/personalized');
}
