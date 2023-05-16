// 泛型函数，接口，类
export interface BannerApiResponse<T> {
  //基本上响应数据里的message都是string类型
  code: number;
  //但是data的类型是变化的，所以我们不能写死，需要传给axios
  banners: T;
}

export type bannerType = {
  imageUrl: string;
  targetType: number;
};

export interface playListApiResponse<T> {
  hasTaste: boolean;
  code: number;
  category: number;
  //但是data的类型是变化的，所以我们不能写死，需要传给axios
  result: T;
}

export type playListType = {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
};
