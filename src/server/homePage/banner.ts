import { BannerApiResponse, bannerType } from '../../Type/requestType';
import request from '../request';

export function getBanner() {
  return request.get<BannerApiResponse<bannerType[]>>('/banner');
}
