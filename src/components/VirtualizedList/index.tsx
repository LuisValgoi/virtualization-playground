import { Dispatch, Fragment, SetStateAction, useState } from "react";
import useVirtual, { LoadMoreEvent } from "react-cool-virtual";

import * as Const from "../../utils/constants";
import { IComment } from "../../utils/interfaces";
import { showLoading, sleep } from "../../utils/methods";

import LoadingIndicator from "../LoadingIndicator";
import { Inner, Outer, Row } from "./index.style";

const isItemLoadedArr: boolean[] = [];
isItemLoadedArr[50] = true;

const loadData = async (
  e: LoadMoreEvent,
  setComments: Dispatch<SetStateAction<IComment[]>>
) => {
  isItemLoadedArr[e.loadIndex] = true;

  try {
    await sleep(500);
    const res = await fetch(`${Const.COMMENT_URL}?postId=${e.loadIndex + 1}`);
    const data = await res.json();

    setComments((prevComments) => [...prevComments, ...data]);
  } catch (err) {
    isItemLoadedArr[e.loadIndex] = false;
    loadData(e, setComments);
  }
};

const VirtualizedList = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const { outerRef, innerRef, items } = useVirtual<
    HTMLDivElement,
    HTMLDivElement
  >({
    itemCount: comments.length,
    loadMoreCount: Const.BATCH_COMMENTS,
    isItemLoaded: (loadIndex) => isItemLoadedArr[loadIndex],
    loadMore: (e) => loadData(e, setComments),
  });

  return (
    <Outer forwardedRef={outerRef}>
      <Inner forwardedRef={innerRef}>
        {!items.length ? (
          <LoadingIndicator />
        ) : (
          items.map((item) => (
            <Fragment key={comments[item.index].id}>
              <Row forwardedRef={item.measureRef} isDark={item.index % 2 === 0}>
                {`${comments[item.index].id} - ${comments[item.index].body}`}
              </Row>
              {showLoading(item.index, comments) && <LoadingIndicator />}
            </Fragment>
          ))
        )}
      </Inner>
    </Outer>
  );
};

export default VirtualizedList;
