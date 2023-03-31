import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface ContextType {
  post?: string;
  setPost?: Dispatch<React.SetStateAction<string>>;
  postList?: string[];
  setPostList?: Dispatch<React.SetStateAction<string[]>>;
}
export const Context = createContext<ContextType | null>(null);
export const ContextProvider = (props: { children: ReactNode }) => {
  const [post, setPost] = useState<string>('');
  const [postList, setPostList] = useState<string[]>([]);

  return (
    <Context.Provider
      value={{
        post: post,
        setPost: setPost,
        postList: postList,
        setPostList: setPostList,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
