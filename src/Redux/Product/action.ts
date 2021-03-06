import * as types from "./types";
import { Product, Review, Qna } from "../../Model/db";
import { AxiosError } from "axios";

// 엑션의 타입을 인터페이스로 정의하고 액션생성자도 따로 만들어야 되서 코드가 길어진다
// 액션 생성자만 따로 만들고 ReturnType 을 이용해 인터페이스를 사용하지 않는다
//typesafe-actions 를 안쓰고 작성하면 작성해야하는 코드의 양이 늘어난다.
export interface GetProductsRequestAction {
  type: typeof types.GET_PRODUCTS_REQUEST;
}
export interface GetProductsSuccessAction {
  type: typeof types.GET_PRODUCTS_SUCCESS;
  payload: Product[];
}
export interface GetProductsFailureAction {
  type: typeof types.GET_PRODUCTS_FAILURE;
  payload: AxiosError;
}

export const getProductsRequest = (): GetProductsRequestAction => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};
export const getProductsSuccess = (
  products: Product[]
): GetProductsSuccessAction => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};
export const getProductsFailure = (
  err: AxiosError
): GetProductsFailureAction => {
  return {
    type: types.GET_PRODUCTS_FAILURE,
    payload: err,
  };
};
export const addProductRequest = () => {
  return {
    type: types.ADD_PRODUCT_REQUEST,
  } as const;
};
export const addProductSuccess = (product: Product) => {
  return <const>{
    type: types.ADD_PRODUCT_SUCCESS,
    payload: product,
  };
};
export const addProductFailure = (err: AxiosError) => {
  return <const>{
    type: types.ADD_PRODUCT_FAILURE,
    payload: err,
  };
};

export const willDeleteProductRequest = () => {
  return <const>{
    type: types.WILL_DELETE_PRODUCT_REQUEST,
  };
};
export const willDeleteProductSuccess = () => {
  return <const>{
    type: types.WILL_DELETE_PRODUCT_SUCCESS,
  };
};
export const willDeleteProductFailure = (err: AxiosError) => {
  return <const>{
    type: types.WILL_DELETE_PRODUCT_FAILURE,
    payload: err,
  };
};

export const deleteProductRequest = () => {
  return <const>{
    type: types.DELETE_PRODUCT_REQUEST,
  };
};
export const deleteProductSuccess = () => {
  return <const>{
    type: types.DELETE_PRODUCT_SUCCESS,
  };
};
export const deleteProductFailure = (err: AxiosError) => {
  return <const>{
    type: types.DELETE_PRODUCT_FAILURE,
    payload: err,
  };
};

export const addReviewRequest = () => {
  return <const>{
    type: types.ADD_REVIEW_REQUEST,
  };
};
export const addReviewSuccess = (review: Review) => {
  return <const>{
    type: types.ADD_REVIEW_SUCCESS,
    payload: review,
  };
};
export const addReviewFailure = (err: AxiosError) => {
  return <const>{
    type: types.ADD_REVIEW_FAILURE,
    payload: err,
  };
};

export const addQuestionRequest = () => {
  return <const>{
    type: types.ADD_QUESTION_REQUEST,
  };
};
export const addQuestionSuccess = (qna: Qna) => {
  return <const>{
    type: types.ADD_QUESTION_SUCCESS,
    payload: qna,
  };
};
export const addQuestionFailure = (err: AxiosError) => {
  return <const>{
    type: types.ADD_QUESTION_FAILURE,
    payload: err,
  };
};
export const addAnswerRequest = () => {
  return <const>{
    type: types.ADD_ANSWER_REQUEST,
  };
};
export const addAnswerSuccess = (qna: Qna) => {
  return <const>{
    type: types.ADD_ANSWER_SUCCESS,
    payload: qna,
  };
};
export const addAnswerFailure = (err: AxiosError) => {
  return <const>{
    type: types.ADD_ANSWER_FAILURE,
    payload: err,
  };
};

export const getPrdQuestionListRequest = () => {
  return <const>{
    type: types.GET_PRD_QUESTIONS_REQUEST,
  };
};
export const getPrdQuestionListSuccess = ({
  qnaList,
  productId,
}: {
  qnaList: Qna[];
  productId: string;
}) => {
  return <const>{
    type: types.GET_PRD_QUESTIONS_SUCCESS,
    payload: { qnaList, productId },
  };
};
export const getPrdQuestionListFailure = (err: AxiosError) => {
  return <const>{
    type: types.GET_PRD_QUESTIONS_FAILURE,
    payload: err,
  };
};

export const addImageRequest = () => {
  return <const>{
    type: types.ADD_IMAGE_REQUEST,
  };
};
export const addImageSuccess = (imagePath: { url: string; idx: string }[]) => {
  return <const>{
    type: types.ADD_IMAGE_SUCCESS,
    payload: imagePath,
  };
};
export const addImageFailure = (err: AxiosError) => {
  return <const>{
    type: types.ADD_IMAGE_FAILURE,
    payload: err,
  };
};
export const editProductRequest = () => {
  return <const>{
    type: types.EDIT_PRODUCT_REQUEST,
  };
};
export const editProductSuccess = (product: Product) => {
  return <const>{
    type: types.EDIT_PRODUCT_SUCCESS,
    payload: product,
  };
};
export const editProductFailure = (err: AxiosError) => {
  return <const>{
    type: types.EDIT_PRODUCT_FAILURE,
    payload: err,
  };
};
export const getProductDetailRequest = () => {
  return <const>{
    type: types.GET_PRODUCT_DETAIL_REQUEST,
  };
};
export const getProductDetailSuccess = (product: Product) => {
  return <const>{
    type: types.GET_PRODUCT_DETAIL_SUCCESS,
    payload: product,
  };
};
export const getProductDetailFailure = (err: AxiosError) => {
  return <const>{
    type: types.GET_PRODUCT_DETAIL_FAILURE,
    payload: err,
  };
};
export type GetProductsAction =
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;

export type AddProductAction =
  | ReturnType<typeof addProductRequest>
  | ReturnType<typeof addProductSuccess>
  | ReturnType<typeof addProductFailure>;

export type WillDeleteProductAction =
  | ReturnType<typeof willDeleteProductRequest>
  | ReturnType<typeof willDeleteProductSuccess>
  | ReturnType<typeof willDeleteProductFailure>;

export type DeleteProductAction =
  | ReturnType<typeof deleteProductRequest>
  | ReturnType<typeof deleteProductSuccess>
  | ReturnType<typeof deleteProductFailure>;

export type AddReviewAction =
  | ReturnType<typeof addReviewRequest>
  | ReturnType<typeof addReviewSuccess>
  | ReturnType<typeof addReviewFailure>;

export type AddQuetionAction =
  | ReturnType<typeof addQuestionRequest>
  | ReturnType<typeof addQuestionSuccess>
  | ReturnType<typeof addQuestionFailure>;

export type AddAnswerAction =
  | ReturnType<typeof addAnswerRequest>
  | ReturnType<typeof addAnswerSuccess>
  | ReturnType<typeof addAnswerFailure>;

export type GetPrdQuestionListAction =
  | ReturnType<typeof getPrdQuestionListRequest>
  | ReturnType<typeof getPrdQuestionListSuccess>
  | ReturnType<typeof getPrdQuestionListFailure>;

export type AddImageAction =
  | ReturnType<typeof addImageRequest>
  | ReturnType<typeof addImageSuccess>
  | ReturnType<typeof addImageFailure>;

export type EditProductAction =
  | ReturnType<typeof editProductRequest>
  | ReturnType<typeof editProductSuccess>
  | ReturnType<typeof editProductFailure>;

export type GetProductDetailAction =
  | ReturnType<typeof getProductDetailRequest>
  | ReturnType<typeof getProductDetailSuccess>
  | ReturnType<typeof getProductDetailFailure>;

type ProductAction =
  | GetProductsAction
  | AddProductAction
  | WillDeleteProductAction
  | DeleteProductAction
  | AddReviewAction
  | AddQuetionAction
  | AddAnswerAction
  | GetPrdQuestionListAction
  | AddImageAction
  | EditProductAction
  | GetProductDetailAction;

export default ProductAction;
