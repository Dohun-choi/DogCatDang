import { FormEvent } from "react";
import styled from "styled-components";

import { SearchGlasses } from "./Icons";

const FormLayout = styled.form`
  display: flex;
  height: 32px;
  justify-content: space-between;

  p {
    flex: 1 0 auto;
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const FormMolecule = styled.div`
  display: flex;
  flex: 3 0 auto;
  justify-content: flex-end;

  label {
    white-space: nowrap;
  }

  button {
    margin: 0px 10px;
  }
`;

const TextSearch: React.FC<{
  searchRef: React.RefObject<HTMLInputElement>;
  onSubmit: (event: FormEvent) => void;
  text?: string;
}> = ({ searchRef, onSubmit, text }) => {
  return (
    <FormLayout onSubmit={onSubmit}>
      <p>{text}</p>
      <FormMolecule>
        <label
          htmlFor="search"
          className="text-sm font-medium text-gray-600 pr-2 flex justify-center items-center"
        >
          검색
        </label>
        <input
          id="search"
          type="text"
          ref={searchRef}
          className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="검색할 키워드를 입력하세요..."
        />
        <SearchGlasses />
      </FormMolecule>
    </FormLayout>
  );
};

export default TextSearch;
