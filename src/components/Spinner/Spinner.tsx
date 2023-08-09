interface ISpinner {
  w: string;
}

export const Spinner = ({ w }: ISpinner) => (
  <img src="loading.svg" alt="loading" width={w} />
);
