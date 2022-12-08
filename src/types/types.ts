export interface ItemNews {
  author: string, content: string, description: string, publishedAt: string,
  source: { id: string, name: string }
  id: string, name: string, title: string, url: string, urlToImage: string
}

export interface ItemSource {
  category: string,
  country: string,
  description: string,
  id: string,
  language: string,
  name: string,
  url: string,
}

export interface DataNews {
  status: string,
  totalResults: number,
  articles: Array<ItemNews>
}

export interface DataSource {
  status: string,
  sources: Array<ItemSource>
}
