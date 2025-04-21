import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAsafasf extends Struct.ComponentSchema {
  collectionName: 'components_shared_asafasfs';
  info: {
    displayName: 'asafasf';
  };
  attributes: {};
}

export interface SharedAsgga extends Struct.ComponentSchema {
  collectionName: 'components_shared_asggas';
  info: {
    displayName: 'asgga';
  };
  attributes: {
    asga: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
  };
}

export interface SharedDisplayDate extends Struct.ComponentSchema {
  collectionName: 'components_shared_display_dates';
  info: {
    displayName: 'displayDate';
  };
  attributes: {
    displayEndDate: Schema.Attribute.DateTime;
    displayStartDate: Schema.Attribute.DateTime;
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

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRelatedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_related_contents';
  info: {
    displayName: 'relatedContent';
  };
  attributes: {};
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSearchTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_search_tags';
  info: {
    displayName: 'searchTag';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
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
      'shared.asafasf': SharedAsafasf;
      'shared.asgga': SharedAsgga;
      'shared.display-date': SharedDisplayDate;
      'shared.image-with-title': SharedImageWithTitle;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.related-content': SharedRelatedContent;
      'shared.rich-text': SharedRichText;
      'shared.search-tag': SharedSearchTag;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.thumbnail-container': SharedThumbnailContainer;
    }
  }
}
