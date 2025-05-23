import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButtonField extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_fields';
  info: {
    description: '';
    displayName: 'buttonField';
    icon: 'plus';
  };
  attributes: {
    firstButton: Schema.Attribute.Component<'shared.first-button', false>;
    secondButton: Schema.Attribute.Component<'shared.second-button', false>;
  };
}

export interface SharedDisplayDate extends Struct.ComponentSchema {
  collectionName: 'components_shared_display_dates';
  info: {
    description: '';
    displayName: '\uB178\uCD9C \uAE30\uAC04 \uC124\uC815';
    icon: 'plus';
  };
  attributes: {
    displayEndDate: Schema.Attribute.DateTime;
    displayStartDate: Schema.Attribute.DateTime;
  };
}

export interface SharedFirstButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_first_buttons';
  info: {
    description: '';
    displayName: 'firstButton';
    icon: 'plus';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    name: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedImageSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_sliders';
  info: {
    description: '';
    displayName: '\uC774\uBBF8\uC9C0 \uC2AC\uB77C\uC774\uB4DC';
    icon: 'plus';
  };
  attributes: {
    altText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedImageWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_with_titles';
  info: {
    description: '';
    displayName: '\uC2A4\uD2F1\uD0A4 \uCEE8\uD14C\uC774\uB108';
    icon: 'stack';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SharedMainThumbnailContainer extends Struct.ComponentSchema {
  collectionName: 'components_shared_main_thumbnail_containers';
  info: {
    description: '';
    displayName: 'mainThumbnailContainer';
    icon: 'stack';
  };
  attributes: {
    mobileMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    pcMedia: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SharedProductList extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_lists';
  info: {
    description: '';
    displayName: '\uC0C1\uD488 \uB9AC\uC2A4\uD2B8(\uC0C1\uD488 ID\uAC12 \uC785\uB825\uB780)';
    icon: 'plus';
  };
  attributes: {
    productList: Schema.Attribute.JSON;
  };
}

export interface SharedSecondButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_second_buttons';
  info: {
    description: '';
    displayName: 'secondButton';
    icon: 'plus';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    name: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSlideMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_slide_maps';
  info: {
    description: '';
    displayName: '\uC774\uBBF8\uC9C0 \uC2AC\uB77C\uC774\uB4DC \uCEF4\uD3EC\uB10C\uD2B8';
    icon: 'plus';
  };
  attributes: {
    Slider: Schema.Attribute.Component<'shared.image-slider', true>;
  };
}

export interface SharedThumbnailContainer extends Struct.ComponentSchema {
  collectionName: 'components_shared_thumbnail_containers';
  info: {
    description: '';
    displayName: 'thumbnailContainer';
    icon: 'stack';
  };
  attributes: {
    fixThumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    HorizontalThumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    listPageThumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    PreviewVerticalThumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button-field': SharedButtonField;
      'shared.display-date': SharedDisplayDate;
      'shared.first-button': SharedFirstButton;
      'shared.image-slider': SharedImageSlider;
      'shared.image-with-title': SharedImageWithTitle;
      'shared.main-thumbnail-container': SharedMainThumbnailContainer;
      'shared.product-list': SharedProductList;
      'shared.second-button': SharedSecondButton;
      'shared.slide-map': SharedSlideMap;
      'shared.thumbnail-container': SharedThumbnailContainer;
    }
  }
}
