# Linking

# 1. 서비스 개요

## 1.1 초록

인터넷이 보편화 되면서 우리는 예전보다 더 많은 정보를 쉽게 접하고, 생산한다. 그리고 생산된 정보들을 다른 이들과 공유한다. 정보를 생산하고, 보내고, 저장하는 데 편해지기 위해 클라우드 기술이 많이 발달하게 되었다. 그리고 더 나아가 설치가 필요 없는, 클라우드를 기반으로 하는 웹 기반의 프로그램들이 흔히 쓰이게 되었다. 클라우드 기반의 프로그램은 일상의 영역에서 업무의 영역까지 다방면으로 쓰인다.

이런 클라우드 기반의 프로그램들은 모두 링크를 통해 필요한 사람들에게 전달된다. 일상에서 우리가 흥미로운 웹사이트를 공유하듯 이제는 링크를 통해 필요한 정보와 프로그램 그 자체가 공유된다. 편하게 큰 리소스 낭비 없이 공유가 가능하고 접근이 가능하다. 하지만, 이런 중요한 링크는 많이 공유되지만, 마땅히 모아서 저장하여 관리할 곳이 없어, 분산되어 저장되고 이로 인해 쉽게 잊히게 된다.

[https://lh6.googleusercontent.com/0YaI9OFH0t1svm8pZukNwZHjbokuWorgzYZCX8WOb7JgHBSS6Zn_Xm95DXhFPvkUV57Nc_eIGc7MLPkN9TFvZHw6aIPLkZGD7Dp6eLnjJ-wvlWHERI8Rzd17CQOG5ut4bc4wm2zL](https://lh6.googleusercontent.com/0YaI9OFH0t1svm8pZukNwZHjbokuWorgzYZCX8WOb7JgHBSS6Zn_Xm95DXhFPvkUV57Nc_eIGc7MLPkN9TFvZHw6aIPLkZGD7Dp6eLnjJ-wvlWHERI8Rzd17CQOG5ut4bc4wm2zL)

브라우저의 북마크나 메모장 등의 기능을 이용하면 쉽게 링크를 저장할 수 있다. 하지만 필요한 링크를 다시 찾아볼 때 북마크나 메모장의 경우 링크에 관한 정보가 한눈에 들어오지 않는 문제점이 있다. 이로 인해, 링크를 찾는 데 시간이 더 걸려 링크를 저장한 의미가 퇴색된다.

[https://lh4.googleusercontent.com/UuLtYUn1qvsyHYvjBGyxMTNjIadHFRKOYjbbJVNrWFQfMsUWD6bclUkuZ4ggjKRX9ic399vhz17xhv7ylzXlIda67Digr5nNvFCqasNTb2rJwPeDlGOoCHOv4JnL3JZhnRWhGOQy](https://lh4.googleusercontent.com/UuLtYUn1qvsyHYvjBGyxMTNjIadHFRKOYjbbJVNrWFQfMsUWD6bclUkuZ4ggjKRX9ic399vhz17xhv7ylzXlIda67Digr5nNvFCqasNTb2rJwPeDlGOoCHOv4JnL3JZhnRWhGOQy)

[https://lh4.googleusercontent.com/ojWZQXBGoML9wz8IISBOsW06D9hdZ5gjRtDsh9H8OP4eSUEzyIQQdUK9CHodD5nNLhKWN7tujgjOIRv-c60u6quSM0_FiyEB6jxpms2aKhNUcnnxNNAwZerC56taCRKjQiMHAEVj](https://lh4.googleusercontent.com/ojWZQXBGoML9wz8IISBOsW06D9hdZ5gjRtDsh9H8OP4eSUEzyIQQdUK9CHodD5nNLhKWN7tujgjOIRv-c60u6quSM0_FiyEB6jxpms2aKhNUcnnxNNAwZerC56taCRKjQiMHAEVj)

이러한 문제에서 착안하여 링크를 보다 보기 쉽고, 저장하기 쉬우며, 다시 찾아보기 쉽게 만들 수 있는 Linking이라는 서비스를 개발하여 해결하고자 한다. Linking을 통해 사용자는 링크를 주제에 맞게 한 저장소에 모아 보기 편하게 만들고, 쉽게 관리할 수 있다. Linking은 'Link all in one workspace' 라는 슬로건 아래, 본인이 관심 있는 분야와 관련된 콘텐츠의 링크를 모아 한눈에 볼 수 있고 관리할 수 있는 서비스다.

## 1.2 목표

이번 프로젝트에서는 구현하고자 하는 서비스가 링크 공유 서비스 이용자를 위한 생산성 도구인 만큼, 해당 서비스 구현을 통해다른 Stakeholder의 문제들도 함께 해결하고자 한다.

링크 공유 서비스 이용자의 문제인, 링크 저장, 탐색 및 공유의 어려움을 가장 큰 목표로 두고 프로젝트를 진행하려 한다.

| 링크 공유 서비스 이용자 문제                                 | 해결                                                     |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| 저장된 링크의 정보를 알기 어려움                             | 메타 데이터 크롤링을 통한 링크에 대한 제목과 설명 크롤링 |
| 저장된 링크를 필요에 의해 탐색을 하려 할 때, 필요한 데이터 찾기 어려움 | 저장된 메타 데이터, 태그, 유저 설명 모두에서 전체 탐색   |
| 링크를 한 번에 공유하기 어려움                               | 링크를 모은 저장소를 유저간에 한꺼번에 공유              |



## 1.3 사용 기술

### 1.3.1 Semantic UI

semantic ui는 UI 라이브러리의 카테고리에 속하는 제품이다. 이 도구는 잘 만들어진 기본 component를 제공하기 때문에 react 상에서 활용하여 빠르게 서비스를 구현할 수 있고 필요에 따라서는 개조해서 사용할 수 있다. 매번 component를 새롭게 구현하는 것은 생산성이 떨어지고 프로젝트 특성상 시간이 많이 부족한 상황에서 빠르게 개발하기 위해 사용하였다.

### 1.3.2 React Hooks

React.js와 함께 사용되는 상태와 생명주기를 관리하는 새로운 방법이다. 기존에 함수형 컴포넌트에서 못하던 상태값 관리, 컴포넌트의 생명 주기 함수를 이용하기 위해 사용한다. 응집성과 조립 가능성을 얻고 현재 라이프사이클 메서드보다 단순하기 때문에 사용하였다.

### 1.3.3 Cheerio

Cheerio는 웹 스크래핑을 위한 모듈이다. 웹 스크래핑은 웹페이지의 정보를 프로그램을 통해서 가져오는 것을 뜻한다. Linking 서비스는 사용자가 저장하고자 하는 링크에서 meta data를 추출하여 카드뷰 형태로 출력해야한다. 따라서 사용자가 저장한 URL에서 추출에 필요한 HTML 태그를 사전에 설정해두고 meta data를 추출해 낸다. 정상적으로 meta data의 추출이 어려운 경우에는 예외 처리를 하여 사용자에게 카드뷰 형태로 출력되도록 작성하였다.

# 2. 구현 기능

## 2.1 Meta 데이터 수집부 구현

Node에서 fetch를 통해 전체 HTML을 불러와 Cheerio 라이브러리를 이용하여 Meta데이터를 가공하여 객체로 내보내는 모듈을 구현하였다.

```jsx
const axios = require("axios");
const cheerio = require("cheerio");

class Scraper {
    constructor(url) {
        this.url = url;
    }

    async getResponse() {
        const { data } = await axios.get(this.url);

        return data;
    }

    filterByTarget({ data, target }) {
        return data.filter(elem => {
            const itemprop = elem.itemprop ? elem.itemprop : "";
            const property = elem.property ? elem.property : "";
            const name = elem.name ? elem.name : "";
            return (
                itemprop.includes(target) ||
                property.includes(target) ||
                name.includes(target)
            );
        });
    }

    getData(html) {
        const $ = cheerio.load(html);
        let data = [];

        $("meta").each((i, elem) => {
            const attrib = elem.attribs;
            if (attrib.itemprop || attrib.property || attrib.name)
                data = [...data, attrib];
        });

        const pageTitle = $("title").text();

        const [title, ...titleArg] = this.filterByTarget({
            data,
            target: "title"
        });
        const [desc, ...descArg] = this.filterByTarget({
            data,
            target: "description"
        });
        const [imgUrl, ...imgUrlArg] = this.filterByTarget({
            data,
            target: "image"
        });

        return {
            title: title ? title.content : pageTitle ? pageTitle : this.url,
            desc: desc ? desc.content : "",
            imgUrl: imgUrl ? imgUrl.content : ""
        };
    }
}
module.exports = Scraper;
```

## 2.2 로그인 화면

별도의 로그인 없이 구글 로그인 만을 제공하고 있다.

![Linking%20700594c064734a159d1c198589e93b06/Untitled.png](Linking%20700594c064734a159d1c198589e93b06/Untitled.png)

 

## 2.3 사용자 워크스페이스 페이지

![Linking%20700594c064734a159d1c198589e93b06/Untitled%201.png](Linking%20700594c064734a159d1c198589e93b06/Untitled%201.png)

즐겨찾기, 수정, 삭제의 기능 제공

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.26.41.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.26.41.png)

## 2.4 링크 저장 기능

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.26.56.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.26.56.png)

### 2.4.1 메타데이터 추출

링크를 붙여넣기하고 저장하면 별도의 스크래퍼가 메타데이터를 불러와 함께 저장한다.

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.05.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.05.png)

## 2.5 디렉토리 공유 기능

### 2.5.1 공유받기

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.17.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.17.png)

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.35.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.35.png)

### 2.5.2 공유하기

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.43.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.43.png)

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.52.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.27.52.png)

## 2.6 검색기능

### 2.6.1 링크검색

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.03.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.03.png)

### 2.6.2 사용자검색

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.09.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.09.png)

### 2.6.3 태그검색

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.15.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.15.png)

## 2.7 팔로잉/팔로워 기능

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.22.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.22.png)

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.28.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.28.png)

## 2.8 디렉토리 권한 변경 기능

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.45.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.45.png)

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.50.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.50.png)

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.55.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.55.png)

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.29.01.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.29.01.png)

![Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.39.png](Linking%20700594c064734a159d1c198589e93b06/_2020-05-14__10.28.39.png)