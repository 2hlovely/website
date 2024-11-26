---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        欧米伽知识表示与推理团队
      image:
        filename: welcome.jpg
      text: |
        <br>
        
        欧米伽知识表示与推理团队主要从事计算机软件与理论的基础研究，主要研究内容包括人工智能，知识表示和推理，回答集程序设计，非单调推理等方面的研究。负责培养研究生。
  
  - block: collection
    content:
      title: 新闻
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'
  
  - block: collection
    content:
      title: 最新发表
      allLang: true
      text: ""
      count: 5
      filters:
        folders:
          - publication
        # publication_type: 'article'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="团队成员 →" %}}
    design:
      columns: '1'
---
