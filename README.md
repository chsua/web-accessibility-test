# web-accessibility-test

웹 접근성 테스트용 레파지토리

- 보이스오버

  - IOS: 16.6
  - 기기: iPhone 8
  - aria-label 읽히지 않음
    - role을 부여해도 읽히지 않음
    ```js
      <span role="presentation" aria-label="작동법 설명">
        숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
      </span>
      <p role="presentation" aria-label="작동법 설명">
        숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
      </p>
      <div role="presentation" aria-label="작동법 설명" tabIndex={0}>
        숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
      </div>
    ```
  - tabIndex 0은 인식해서 div에 멈추지만 1, 2같이 우선값은 작동하지 않음

- 토크백

  - 삼성
  - aria-label

    - 태그, 롤에 따라서 읽히는 것이 다름

    ```js
    // role이 없으면 aria-label만 읽힘
    // role="presentation"이면  aria-label이 아닌 내용이 읽힘
    // role="contentinfo"이면  aria-label + role이 읽힘
    <span role="..." aria-label="작동법 설명">
    숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
    </span>

    // role이 없으면 aria-label만 읽힘
    // role="presentation"이면  aria-label이 아닌 내용이 읽힘
    // role="contentinfo"이면   aria-label + role이 읽힘
    <p role="..." aria-label="작동법 설명">
      숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
    </p>

    // role이 없으면 aria-label만 읽힘
    // role="presentation"이어도 aria-label만 읽힘
    // role="contentinfo"이면 aria-label + role이 읽힘
    <div role="presentation" aria-label="작동법 설명" tabIndex={0}>
      숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
    </div>
    ```

  - tabIndex
    - tabIndex 0은 인식해서 div에 멈춤
    - section 두 개에 같이 2를 부여했을 때
      - 1개는 안으로 들어가지지 않고 그냥 내용을 한번에 다 읽어버림
      - 1개는 안으로 들어가짐
    - section 한 개에만 2를 부여했을 때
      - 우선순위 부여되지 않음

- 데스크탑
  - tabIndex
    - 우선순위에 따라 잘 이동됨
