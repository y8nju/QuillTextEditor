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
  postList?: object[];
  setPostList?: Dispatch<React.SetStateAction<object[]>>;
}
export const Context = createContext<ContextType | null>(null);
export const ContextProvider = (props: { children: ReactNode }) => {
  const [post, setPost] = useState<string>('');
  const [postList, setPostList] = useState<object[]>(() => {
    const data = localStorage.getItem('data');
    try {
      if (data) 
        return JSON.parse(data);
      return [];
    } catch (e) {
      localStorage.removeItem('data');
      return [];
    }
  });

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
