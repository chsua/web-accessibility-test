export default function Animal() {
  return (
    <>
      <main>
        <section tabIndex={1}>
          <h1>척추 동물</h1>
          <h2>체온이 변하나요?</h2>
          <h3>아가미로 호흡하나요?</h3>
          <dl>
            <dt>어류</dt>
            <dd>물에 살아요. 금붕어, 잉어, 붕어 등이 있어요</dd>
          </dl>
          <img
            src="https://images.unsplash.com/photo-1625369708811-65ebfc5ca632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVBJUI4JTg4JUVCJUI2JTk1JUVDJTk2JUI0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="금붕어 사진"
          />
          <h3>아가미와 폐로 호흡하나요?</h3>
          <dl>
            <dt>양서류</dt>
            <dd>
              새끼때는 아가미로 호흡하고 커서는 폐로 호흡해요. 개구리가 있어요.
            </dd>
          </dl>
          <h3>폐로 호흡하나요?</h3>
          <dl>
            <dt>파충류</dt>
            <dd>이구아나, 도마뱀 등이 있어요.</dd>
          </dl>
          <h2>체온이 일정하나요?</h2>
          <h3>알을 낳나요?</h3>
          <dl>
            <dt>조류</dt>
            <dd>닭, 비둘기, 갈매기 등이 있어요.</dd>
          </dl>
          <h3>새끼를 낳나요?</h3>
          <dl>
            <dt>포유류</dt>
            <dd>우리 사람이 포유류에 해당해요.</dd>
          </dl>
          <blockquote>
            참고로 고래는 바다에 살지만 새끼를 낳기 때문에 포유류에 해당합니다.
          </blockquote>
        </section>
        <section tabIndex={2}>
          <h1>무척추 동물</h1>
          <a href="#!">무척추 동물에 대해 알아보러 가기</a>
        </section>
      </main>
      <aside>
        <button>사이드1</button>
        <button>사이드2</button>
        <button>사이드3</button>
        <button>사이드4</button>
        <button>사이드5</button>
      </aside>
      <footer>이것은 풋터입니다.</footer>
    </>
  );
}
