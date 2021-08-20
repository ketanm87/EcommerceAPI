export const getAllCategories = {
  tags: ['Category'],
  description: 'This route allow to get all categories',
  opeationId: 'getAllCategories',
  parameters: [
    {
      in: 'query',
      name: 'select',
      type: 'string',
      example: 'name, image',
      description: 'Select only fields you want.'
    },
    {
      in: 'query',
      name: 'limit',
      type: 'string',
      example: '5',
      description:
        'Limit the number of categories from for example 20 category to 5 categories.'
    },
    {
      in: 'query',
      name: 'sort',
      type: 'string',
      example: 'name',
      description:
        'Sorting categories according to specified field for example the name field.'
    },
    {
      in: 'query',
      name: 'page',
      type: 'string',
      example: '2',
      description:
        'When number of categories is greater than 10 categories, it divides into pages each page contain 10 categories.'
    }
  ],
  responses: {
    200: {
      description: 'Log user out',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Found Categories Successfully.'
              },
              catagories: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    name: {
                      type: 'string',
                      example: 'Makeup'
                    },
                    description: {
                      type: 'string',
                      example:
                        'This category contains all products related to makeup.'
                    },
                    image: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629411601/EcommerceAPI/Category/Makeup/wnxfwht979aao486afll.webp'
                    },
                    imageId: {
                      type: 'string',
                      example:
                        'EcommerceAPI/Category/Makeup/wnxfwht979aao486afll'
                    },
                    createdAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    },
                    updatedAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const getCategory = {
  tags: ['Category'],
  description: "This route allow to get category using it's ID",
  opeationId: 'getCategory',
  parameters: [
    {
      in: 'path',
      name: 'id',
      type: 'integer',
      description: 'Category ID'
    }
  ],
  responses: {
    200: {
      description: "Get category using it's ID",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Category Found Successfully.'
              },
              catagory: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611ed9117ae59e944d27920d'
                    },
                    name: {
                      type: 'string',
                      example: 'Makeup'
                    },
                    description: {
                      type: 'string',
                      example:
                        'This category contains all products related to makeup.'
                    },
                    image: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629411601/EcommerceAPI/Category/Makeup/wnxfwht979aao486afll.webp'
                    },
                    imageId: {
                      type: 'string',
                      example:
                        'EcommerceAPI/Category/Makeup/wnxfwht979aao486afll'
                    },
                    createdAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    },
                    updatedAt: {
                      type: 'string',
                      example: '2021-08-19T22:20:01.688Z'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const addCategory = {
  tags: ['Category'],
  description: 'This route allow only admin to add new category',
  opeationId: 'addCategory',
  security: {
    bearerAuth: []
  },
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              required: true
            },
            description: {
              type: 'string',
              required: true
            },
            image: {
              type: 'string',
              formate: 'binary',
              required: true
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Add new category',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Category Created Successfully.'
              },
              catagory: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    example: 'Laptop'
                  },
                  description: {
                    type: 'string',
                    example:
                      "This category contains all products related to Laptops, it's components and accessories."
                  },
                  image: {
                    type: 'string',
                    example:
                      'https://res.cloudinary.com/dknma8cck/image/upload/v1629411453/EcommerceAPI/Category/Laptop/hqbknfppz8src5szz2w9.webp'
                  },
                  imageId: {
                    type: 'string',
                    example: 'EcommerceAPI/Category/Laptop/hqbknfppz8src5szz2w9'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const updateCategoryDetails = {};

export const updateCategoryImage = {};

export const deleteCategory = {};