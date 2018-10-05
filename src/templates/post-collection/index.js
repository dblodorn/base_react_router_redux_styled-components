import React from 'react'
import styled from 'styled-components'
import { Section, H1, H2, StyledMarkup, PadWrapper } from './../../styles/components'
import { pageData } from './../../components';
import { spacing, shared } from './../../styles/theme.json'
import PostCard from './PostCard'
import Taxonomies from './Taxonomies'
import { parseTaxonomies } from './../../scripts'

export default pageData((props) => {
  const taxonomies = {
    category: parseTaxonomies(props.content.post_collection, 'taxonomies', 'category'),
    capabilities: parseTaxonomies(props.content.post_collection, 'taxonomies', 'capabilities'),
    client: parseTaxonomies(props.content.post_collection, 'taxonomies', 'client'),
    industry: parseTaxonomies(props.content.post_collection, 'taxonomies', 'industry')
  }
  return (
    <Section>
      <PadWrapper>
        <H1>{props.title}</H1>
        {(props.content.short_description) && <H2>{props.content.short_description}</H2>}
      </PadWrapper>
      {(props.content.show_taxonomies) && <Taxonomies title={'All Taxonomies'} taxonomies={taxonomies}/>}
      <PadWrapper className={(!props.content.show_taxonomies) && 'add-top-border'}>
        <StyledMarkup dangerouslySetInnerHTML={{__html: props.content.description }}/>
      </PadWrapper>
      <PostList>
        {props.content.post_collection.map((item, i) =>
          <PostCard 
            columns={props.content.columns}
            showTaxonomies={props.content.show_post_taxonomies}
            showThumbnail={props.content.show_thumbnail}
            cardData={item} 
            key={`${item.ID}-post-${i}`}
          />
        )}
      </PostList>
    </Section>
  )
})

// STYLES
const PostList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-top: ${shared.border_thick};
`