import React from 'react';

import { Row, Col } from 'antd';

import {
  DivListItem,
  AMediaConent,
  DivMedia,
  DivPaper,
  DivListBody,
  DivListFooter,
  AListBody,
  DivListDesc,
  DivItemCenter,
  DivInlineBlock,
  AUserName,
  DivIB2,
  DivTime
} from './style';

function List(props) {
  const {
    list
  } = props;

  const category = (item) => {
    return item.blogCategoryVo? (
      <AUserName>{item.blogCategoryVo.categoryName}</AUserName>
    ): null;
  }

  // 遍历文章list
  const articleList = (list) => {
    return (
      list.map(item => (
        <DivListItem key={item.id}>
          {/* <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <DivPaper className={useStyles.paper} elevation={0}>
                <DivMedia>
                  <AMediaConent to={`/article/${item.id}`} title={item.title} image={React.$imgPath(item.thumbnail)}/>
                </DivMedia>
              </DivPaper>
            </Grid>
            <Grid item xs={8} md={8}>
              <DivPaper className={useStyles.paper} elevation={0}>
                <DivListBody>
                  <AListBody to={`/article/${item.id}`}>{item.title}</AListBody>
                  <Hidden smDown>
                    <DivListDesc>
                      <p>{item.excerpt}</p>
                    </DivListDesc>
                  </Hidden>
                </DivListBody>
                <DivListFooter>
                  <DivItemCenter>
                    <DivInlineBlock>
                      <AUserName>{item.author}</AUserName>
                    </DivInlineBlock>
                    <DivIB2>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-line"></use>
                      </svg>
                    </DivIB2>
                    <DivInlineBlock>
                      {
                        category(item)
                      }
                    </DivInlineBlock>
                    <div className="flex-fill"></div>
                    <DivTime>
                      <time>{item.createTime}</time>
                    </DivTime>
                  </DivItemCenter>
                </DivListFooter>
              </DivPaper>
            </Grid>
          </Grid> */}
          <Row gutter={[16, 0]}>
            <Col xs={8} md={8}>
              <DivPaper>
                <DivMedia>
                  <AMediaConent to={`/article/${item.id}`} title={item.title} image={React.$imgPath(item.thumbnail)}/>
                </DivMedia>
              </DivPaper>
            </Col>
            <Col xs={16} md={16}>
              <DivPaper>
                <DivListBody>
                  <AListBody to={`/article/${item.id}`}>{item.title}</AListBody>
                    <DivListDesc>
                      <p>{item.excerpt}</p>
                    </DivListDesc>
                </DivListBody>
                <DivListFooter>
                  <DivItemCenter>
                    <DivInlineBlock>
                      <AUserName>{item.author}</AUserName>
                    </DivInlineBlock>
                    <DivIB2>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-line"></use>
                      </svg>
                    </DivIB2>
                    <DivInlineBlock>
                      {
                        category(item)
                      }
                    </DivInlineBlock>
                    <div className="flex-fill"></div>
                    <DivTime>
                      <time>{item.createTime}</time>
                    </DivTime>
                  </DivItemCenter>
                </DivListFooter>
              </DivPaper>
            </Col>
          </Row>
        </DivListItem>
      ))
    );
  }

  return (
    <div>
      {
        articleList(list)
      }
    </div>
  );
}

export default React.memo(List);