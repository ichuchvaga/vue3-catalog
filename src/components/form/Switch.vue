<script>
export default {
  data() {
    return {
      checked: true
    }
  },
  props: {
    name: String,
    text: String
  }
}
</script>

<template>
<div class="switch">
  <label class="switch__label">
    <input type="checkbox" :name="name" value="1" :checked="checked">

    <span class="switch__content">
      <span class="switch__icon"></span>
      <span class="switch__text">{{ text }}</span>
    </span>    
  </label>
</div>
</template>

<style lang="scss">
.switch {
  input {
    display: none;
  }

  &__label {
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
    padding-left: 50px;
    cursor: pointer;
  }

  &__content {
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  &__icon {
    display: block;
    background-color: #BDBDBD;
    border-radius: 12px;
    width: 40px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -12px;

    &::after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 4px;
      left: 4px;
      transition: all .25s ease;
    }
  }

  &__text {
    display: block;
  }

  input:checked + .switch__content {
    .switch {
      &__icon {
        background-color: #279FB9;

        &::after {
          left: 20px;
        }
      }
    }
  }

  input:disabled + .switch__content {
    color: #BDBDBD;

    .switch {
      &__icon {
        background-color: #F5F5F5;
        
        &::after {
          background-color: #BDBDBD;
        }
      }
    }
  }

  input:disabled:checked + .switch__content {
    color: #BDBDBD;

    .switch {
      &__icon {
        background-color: #BDBDBD;
        
        &::after {
          background-color: #F5F5F5;
        }
      }
    }
  }
}
</style>