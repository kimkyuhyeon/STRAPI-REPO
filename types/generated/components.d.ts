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

export interface SharedThumbnailContainer extends Struct.ComponentSchema {
  collectionName: 'components_shared_thumbnail_containers';
  info: {
    description: '';
    displayName: 'thumbnailContainer';
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
      'shared.image-with-title': SharedImageWithTitle;
      'shared.main-thumbnail-container': SharedMainThumbnailContainer;
      'shared.second-button': SharedSecondButton;
      'shared.thumbnail-container': SharedThumbnailContainer;
    }
  }
}
