import { commonActions, selectPageDescription, selectPageTitle } from 'features/common/commonSlice'
import { useDispatch, useSelector } from 'react-redux'

export function useTitle() {
  const pageTitle = useSelector(selectPageTitle)
  const pageDescription = useSelector(selectPageDescription)
  const dispatch = useDispatch()

  const setTitle = (title) => {
    dispatch(commonActions.setPageTitle(title))
  }

  const setDescription = (description) => {
    dispatch(commonActions.setPageDescription(description))
  }

  const setBoth = (title, description) => {
    dispatch(commonActions.setPageData({ title, description }))
  }

  const reset = () => {
    dispatch(commonActions.resetPageData())
  }

  return {
    title: pageTitle,
    onChangeTitle: setTitle,
    description: pageDescription,
    onChangeDescription: setDescription,
    onUpdateTitleAndDescription: setBoth,
    reset: reset
  }
}
