import {
  loginUserWithEmailAndPassword,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail
} from './auth.service';

import {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview
} from './review.service';

import {
  generateToken,
  saveToken,
  verifyToken,
  generateAuthTokens,
  generateResetPasswordToken,
  generateVerifyEmailToken
} from './token.service';

import {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendAfterResetPasswordMessage,
  sendVerificationEmail
} from './email.service';

import {
  createUser,
  queryUsers,
  updateUserById,
  deleteUserById
} from './user.service';

import {
  createCategory,
  queryCategories,
  getCategoryByName,
  getCategoryById,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById
} from './category.service';

import {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats
} from './product.service';

import { set, get, generateCacheKey } from './redis.service';

const authService = {
  loginUserWithEmailAndPassword,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail
};

const reviewService = {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview
};

const emailService = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendAfterResetPasswordMessage,
  sendVerificationEmail
};

const tokenService = {
  generateToken,
  saveToken,
  verifyToken,
  generateAuthTokens,
  generateResetPasswordToken,
  generateVerifyEmailToken
};

const userService = {
  createUser,
  queryUsers,
  updateUserById,
  deleteUserById
};

const categoryService = {
  createCategory,
  queryCategories,
  getCategoryByName,
  getCategoryById,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById
};

const productService = {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats
};

const redisService = { set, get, generateCacheKey };

export {
  authService,
  tokenService,
  userService,
  emailService,
  categoryService,
  productService,
  redisService,
  reviewService
};
