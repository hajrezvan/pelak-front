
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/layouts/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default async function UiPage() {

  return (
    <>
      <main>


        <div className='relative h-[432px] bg-P-Primary overflow-hidden'>
          <div className="absolute inset-0 bg-cover bg-center opacity-72" style={{ backgroundImage: 'url(/image/Iran-Exportal-Header.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-P-Background/72 to-P-Primary/72" />
          <div className="relative flex pt-[100px] h-full bg-orange-600/40 justify-center">
            <h1 className='text-center p-P-2'>Ui Design Styles</h1>
          </div>
        </div>

        <div className='flex flex-col justify-center container mx-auto px-P-5'>

          <h2 className='text-center p-P-5'>Size</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 items-center my-P-3 gap-P-2">
              <div className="w-P-0 h-P-0 bg-P-Text justify-self-end" />
              <p>Size:0 - - - 000</p>
              <div className="w-P-O h-P-O bg-P-Text justify-self-end" />
              <p>Size:O - - - 001</p>
              <div className="w-P-T h-P-T bg-P-Text justify-self-end" />
              <p>Size:T - - - 002</p>
              <div className="w-P-1 h-P-1 bg-P-Text justify-self-end" />
              <p>Size:1 - - - 004</p>
              <div className="w-P-2 h-P-2 bg-P-Text justify-self-end" />
              <p>Size:2 - - - 008</p>
              <div className="w-P-3 h-P-3 bg-P-Text justify-self-end" />
              <p>Size:3 - - - 012</p>
              <div className="w-P-Z h-P-Z bg-P-Text justify-self-end" />
              <p>Size:Z - - - 014</p>
              <div className="w-P-H h-P-H bg-P-Text justify-self-end" />
              <p>Size:H - - - 016</p>
              <div className="w-P-4 h-P-4 bg-P-Text justify-self-end" />
              <p>Size:4 - - - 018</p>
              <div className="w-P-5 h-P-5 bg-P-Text justify-self-end" />
              <p>Size:5 - - - 024</p>
              <div className="w-P-6 h-P-6 bg-P-Text justify-self-end" />
              <p>Size:6 - - - 028</p>
              <div className="w-P-7 h-P-7 bg-P-Text justify-self-end" />
              <p>Size:7 - - - 034</p>
              <div className="w-P-8 h-P-8 bg-P-Text justify-self-end" />
              <p>Size:8 - - - 040</p>
              <div className="w-P-M h-P-M bg-P-Text justify-self-end" />
              <p>Size:M - - - 056</p>
              <div className="w-P-9 h-P-9 bg-P-Text justify-self-end" />
              <p>Size:9 - - - 072</p>
              <div className="w-P-10 h-P-10 bg-P-Text justify-self-end" />
              <p>Size:10 - - - 080</p>
              <div className="w-P-11 h-P-11 bg-P-Text justify-self-end" />
              <p>Size:11 - - - 100</p>
              <div className="w-P-12 h-P-12 bg-P-Text justify-self-end" />
              <p>Size:12 - - - 110</p>
              <div className="w-P-13 h-P-13 bg-P-Text justify-self-end" />
              <p>Size:13 - - - 144</p>
              <div className="w-P-14 h-P-14 bg-P-Text justify-self-end" />
              <p>Size:14 - - - 180</p>
            </div>
          </div>

          <h2 className='text-center p-P-5'>Text EN</h2>
          <div className="max-w-3xl mx-auto">
            <h1>Heading H1</h1>
            <h2>Heading H2</h2>
            <h3>Heading H3</h3>
            <h4>Heading H4</h4>
            <h5>Heading H5</h5>
            <h6>Heading H6</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<strong>bold</strong>  Aliquid minus quod tempore laboriosam eius molestias, explicabo quibusdam quos autem rem odit, ad dolor et minima consectetur, voluptatem magni eum libero!</p>
            <h1>Heading H1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<strong>bold</strong>  Aliquid minus quod tempore laboriosam eius molestias, explicabo quibusdam quos autem rem odit, ad dolor et minima consectetur, voluptatem magni eum libero!</p>
            <h2>Heading H2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<strong>bold</strong>  Aliquid minus quod tempore laboriosam eius molestias, explicabo quibusdam quos autem rem odit, ad dolor et minima consectetur, voluptatem magni eum libero!</p>
            <h3>Heading H3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<strong>bold</strong>  Aliquid minus quod tempore laboriosam eius molestias, explicabo quibusdam quos autem rem odit, ad dolor et minima consectetur, voluptatem magni eum libero!</p>
            <h4>Heading H4</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<strong>bold</strong>  Aliquid minus quod tempore laboriosam eius molestias, explicabo quibusdam quos autem rem odit, ad dolor et minima consectetur, voluptatem magni eum libero!</p>
            <h5>Heading H5</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<strong>bold</strong>  Aliquid minus quod tempore laboriosam eius molestias, explicabo quibusdam quos autem rem odit, ad dolor et minima consectetur, voluptatem magni eum libero!</p>
            <h6>Heading H6</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<strong>bold</strong>  Aliquid minus quod tempore laboriosam eius molestias, explicabo quibusdam quos autem rem odit, ad dolor et minima consectetur, voluptatem magni eum libero!</p>
          </div>

          <h2 className='text-center p-P-5' style={{ fontFamily: 'var(--font-R-title)' }}>متن فارسی</h2>
          <div className="max-w-3xl mx-auto" style={{ direction: 'rtl' }}>
            <h1 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H1</h1>
            <h2 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H2</h2>
            <h3 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H3</h3>
            <h4 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H4</h4>
            <h5 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H5</h5>
            <h6 className="font-R-title" style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H6</h6>
            <p style={{ fontFamily: 'var(--font-R-text)' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، <strong> بولد شده </strong> و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            <h1 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H1</h1>
            <p style={{ fontFamily: 'var(--font-R-text)' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، <strong> بولد شده </strong> و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            <h2 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H2</h2>
            <p style={{ fontFamily: 'var(--font-R-text)' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، <strong> بولد شده </strong> و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            <h3 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H3</h3>
            <p style={{ fontFamily: 'var(--font-R-text)' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، <strong> بولد شده </strong> و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            <h4 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H4</h4>
            <p style={{ fontFamily: 'var(--font-R-text)' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، <strong> بولد شده </strong> و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            <h5 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H5</h5>
            <p style={{ fontFamily: 'var(--font-R-text)' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، <strong> بولد شده </strong> و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            <h6 style={{ fontFamily: 'var(--font-R-title)' }}>عنوان H6</h6>
            <p style={{ fontFamily: 'var(--font-R-text)' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، <strong> بولد شده </strong> و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          </div>

          <h2 className='text-center p-P-5'>radius</h2>
          <div className="max-w-3xl mx-auto">
            <div className="m-P-3 p-P-3 rounded-P-0 flex items-center justify-center bg-P-BackgroundLight border-P-1 border-P-BackgroundBorder">
              rounded:0
            </div>
            <div className="m-P-3 p-P-3 rounded-P-1 flex items-center justify-center bg-P-BackgroundLight border-P-1 border-P-BackgroundBorder">
              rounded:1
            </div>
            <div className="m-P-3 p-P-3 rounded-P-2 flex items-center justify-center bg-P-BackgroundLight border-P-1 border-P-BackgroundBorder">
              rounded:2
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight border-P-1 border-P-BackgroundBorder">
              rounded:3
            </div>
            <div className="m-P-3 p-P-3 rounded-P-4 flex items-center justify-center bg-P-BackgroundLight border-P-1 border-P-BackgroundBorder">
              rounded:4
            </div>
          </div>

          <h2 className='text-center p-P-5'>Border & Shadow</h2>
          <div className="max-w-3xl mx-auto">
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight border-P-0">
              border:0
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight border-P-1 border-P-BackgroundBorder">
              border:1 | border:BackgroundBorder
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight border-P-2 border-P-BackgroundBorder">
              border:2 | border:BackgroundBorder
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight border-P-3 border-P-BackgroundBorder">
              border:3 | border:BackgroundBorder
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight shadow-P-0">
              shadow:0
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight shadow-P-0b shadow-P-BackgroundBorder">
              shadow:0b | color:BackgroundBorder
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight shadow-P-1 shadow-P-BackgroundBorder">
              shadow:1 | color:BackgroundBorder
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight shadow-P-1b shadow-P-BackgroundBorder">
              shadow:1b | color:BackgroundBorder
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight shadow-P-2  shadow-P-BackgroundBorder">
              shadow:2 | color:BackgroundBorder
            </div>
            <div className="m-P-3 p-P-3 rounded-P-3 flex items-center justify-center bg-P-BackgroundLight shadow-P-2b  shadow-P-BackgroundBorder">
              shadow:2b | color:BackgroundBorder
            </div>
          </div>

          <h2 className='text-center p-P-5'>Color</h2>
          <div className='grid grid-cols-6 gap-P-2 p-P-2 w-full bg-P-Background' >
            <p className='p-P-3 h-[50px] flex items-center justify-center col-span-6 bg-P-Black text-P-White' >Black</p>

            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-TextDark text-P-White' >TextDark</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Text text-P-White' >Text</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-TextLight text-P-White' >TextLight</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-TextShadow text-P-White' >TextShadow</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-TextMiddle text-P-White' >TextMiddle</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-TextLow text-P-White' >TextLow</p>

            <p className='p-P-3 h-[50px] flex items-center justify-center col-span-6 bg-P-White text-P-Black' >White</p>

            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-BackgroundLight text-P-Black' >BackgroundLight</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Background text-P-Black' >Background</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-BackgroundDark text-P-Black' >BackgroundDark</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-BackgroundBorder text-P-Black' >BackgroundBorder</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-BackgroundMiddle text-P-Black' >BackgroundMiddle</p>
            <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-BackgroundLow text-P-Black' >BackgroundLow</p>

            <p className='p-P-3 h-[50px] flex items-center justify-center col-span-6 bg-P-Gray text-P-White' >Gray</p>

            <div className='col-span-3 grid grid-cols-3 gap-P-8 p-P-8 bg-P-White' >

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-PrimaryDark text-P-ExactWhite' >PrimaryDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Primary text-P-ExactWhite' >Primary</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-PrimaryLight text-P-ExactWhite' >PrimaryLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-SecondaryDark text-P-ExactWhite' >SecondaryDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Secondary text-P-ExactWhite' >Secondary</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-SecondaryLight text-P-ExactWhite' >SecondaryLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-ThirdDark text-P-ExactWhite' >ThirdDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Third text-P-ExactWhite' >Third</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-ThirdLight text-P-ExactWhite' >ThirdLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-SuccessDark text-P-ExactWhite' >SuccessDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Success text-P-ExactWhite' >Success</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-SuccessLight text-P-ExactWhite' >SuccessLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-ErrorDark text-P-ExactWhite' >ErrorDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Error text-P-ExactWhite' >Error</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-ErrorLight text-P-ExactWhite' >ErrorLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-WarningDark text-P-ExactWhite' >WarningDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Warning text-P-ExactWhite' >Warning</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-WarningLight text-P-ExactWhite' >WarningLight</p>
            </div>
            <div className='col-span-3 grid grid-cols-3 gap-P-8 p-P-8 bg-P-Black' >

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-PrimaryDark text-P-ExactWhite' >PrimaryDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Primary text-P-ExactWhite' >Primary</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-PrimaryLight text-P-ExactWhite' >PrimaryLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-SecondaryDark text-P-ExactWhite' >SecondaryDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Secondary text-P-ExactWhite' >Secondary</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-SecondaryLight text-P-ExactWhite' >SecondaryLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-ThirdDark text-P-ExactWhite' >ThirdDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Third text-P-ExactWhite' >Third</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-ThirdLight text-P-ExactWhite' >ThirdLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-SuccessDark text-P-ExactWhite' >SuccessDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Success text-P-ExactWhite' >Success</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-SuccessLight text-P-ExactWhite' >SuccessLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-ErrorDark text-P-ExactWhite' >ErrorDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Error text-P-ExactWhite' >Error</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-ErrorLight text-P-ExactWhite' >ErrorLight</p>

              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-WarningDark text-P-ExactWhite' >WarningDark</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-Warning text-P-ExactWhite' >Warning</p>
              <p className='p-P-3 h-[100px] flex items-center justify-center bg-P-WarningLight text-P-ExactWhite' >WarningLight</p>
            </div>

          </div>

          <h2 className='text-center p-P-5'>Button</h2>
          <h3 className='text-center p-P-5'>Styles : UI</h3>
          <div className='grid grid-cols-3 gap-P-2 p-P-2 w-full' >

            <P.Button UI='primary'> primary </P.Button>
            <P.Button UI='secondary'> secondary </P.Button>
            <P.Button UI='third'> third </P.Button>

            <P.Button UI='success'> success </P.Button>
            <P.Button UI='error'> error </P.Button>
            <P.Button UI='warning'> warning </P.Button>

            <P.Button UI='primaryOutline'> primaryOutline </P.Button>
            <P.Button UI='secondaryOutline'> secondaryOutline </P.Button>
            <P.Button UI='thirdOutline'> thirdOutline </P.Button>

            <P.Button UI='successOutline'> successOutline </P.Button>
            <P.Button UI='errorOutline'> errorOutline </P.Button>
            <P.Button UI='warningOutline'> warningOutline </P.Button>

            <P.Button UI='light'> light </P.Button>
            <P.Button UI='middle'> middle </P.Button>
            <P.Button UI='dark'> dark </P.Button>

            <P.Button UI='grayOutline'> grayOutline </P.Button>
            <P.Button UI='linkBackground'> linkBackground </P.Button>
            <P.Button UI='linkOutline'> linkOutline </P.Button>

            <P.Button UI='link'> link </P.Button>
            <P.Button UI='linkHover'> linkHover </P.Button>
            <P.Button disabled> disabled </P.Button>
          </div>
          <h3 className='text-center p-P-5'>Aligns without icon : align</h3>

          <div className='grid grid-cols-2 gap-P-2 p-P-2 w-full max-w-3xl mx-auto' >
            <P.Button align='between'> between </P.Button>
            <P.Button align='betweenReverse'> betweenReverse </P.Button>
            <P.Button align='center'> center </P.Button>
            <P.Button align='centerReverse'> centerReverse </P.Button>
            <P.Button align='start'> start </P.Button>
            <P.Button align='end'> end </P.Button>
          </div>
          <h3 className='text-center p-P-5'>Aligns with icon : svgIcon</h3>
          <div className='grid grid-cols-2 gap-P-2 p-P-2 w-full max-w-3xl mx-auto' >
            <P.Button align='between' svgIcon='home'> between </P.Button>
            <P.Button align='betweenReverse' svgIcon='home'> betweenReverse </P.Button>
            <P.Button align='center' svgIcon='home'> center </P.Button>
            <P.Button align='centerReverse' svgIcon='home'> centerReverse </P.Button>
            <P.Button align='start' svgIcon='home'> start </P.Button>
            <P.Button align='end' svgIcon='home'> end </P.Button>
          </div>


          <h2 className='text-center p-P-5'>Icon</h2>
          <h3 className='text-center p-P-5'>Shapes : svgName</h3>
          <div className='grid grid-cols-7 gap-P-2 p-P-2 max-w-6xl mx-auto text-P-Black' >
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='apparel' svgSize='xLarge' />apparel
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='arrowCircleLeft' svgSize='xLarge' />arrowCircleLeft
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='arrowCircleRight' svgSize='xLarge' />arrowCircleRight
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='beaker' svgSize='xLarge' />beaker
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='bookmark' svgSize='xLarge' />bookmark
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='building' svgSize='xLarge' />building
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='chevronDown' svgSize='xLarge' />chevronDown
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='food' svgSize='xLarge' />food
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='globe' svgSize='xLarge' />globe
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='xLarge' />home
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='medical' svgSize='xLarge' />medical
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='menu' svgSize='xLarge' />menu
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='minus' svgSize='xLarge' />minus
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='palette' svgSize='xLarge' />palette
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='plus' svgSize='xLarge' />plus
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='search' svgSize='xLarge' />search
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='tool' svgSize='xLarge' />tool
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='user' svgSize='xLarge' />user
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='video' svgSize='xLarge' />video
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='xCircle' svgSize='xLarge' />xCircle
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='xMark' svgSize='xLarge' />xMark
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='phone' svgSize='xLarge' />phone
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='email' svgSize='xLarge' />email
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='address' svgSize='xLarge' />address
            </div>
          </div>
          <h3 className='text-center p-P-5'>Sizes : svgSize</h3>
          <div className='grid grid-cols-4 gap-P-2 p-P-2 max-w-7xl mx-auto text-P-Black' >
            < div className='bg-P-White py-P-4 px-P-6 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='small' />small
            </div>
            < div className='bg-P-White py-P-4 px-P-6 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='medium' />medium
            </div>
            < div className='bg-P-White py-P-4 px-P-6 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='large' />large
            </div>
            < div className='bg-P-White py-P-4 px-P-6 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='xLarge' />xLarge
            </div>
          </div>
          <h3 className='text-center p-P-5'>Strokes : svgStroke</h3>
          <div className='grid grid-cols-4 gap-P-2 p-P-2 max-w-7xl mx-auto text-P-Black' >
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='small' svgStroke='small' />small | small
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='medium' svgStroke='small' />medium | small
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='large' svgStroke='small' />large | small
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='xLarge' svgStroke='small' />xLarge | small
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='small' svgStroke='medium' />small | medium
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='medium' svgStroke='medium' />medium | medium
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='large' svgStroke='medium' />large | medium
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='xLarge' svgStroke='medium' />xLarge | medium
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='small' svgStroke='large' />small | large
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='medium' svgStroke='large' />medium | large
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='large' svgStroke='large' />large | large
            </div>
            < div className='bg-P-White p-P-4 flex flex-col items-center justify-center rounded-P-4'>
              <P.SvgIcon svgName='home' svgSize='xLarge' svgStroke='large' />xLarge | large
            </div>
          </div>


          <h2 className='text-center p-P-5'>Tag</h2>
          <h3 className='text-center p-P-5'>Styles : UI</h3>
          <div className='grid grid-cols-3 gap-P-2 p-P-2 w-full' >

            <P.Tag href='#' UI='primary'> primary </P.Tag>
            <P.Tag href='#' UI='secondary'> secondary </P.Tag>
            <P.Tag href='#' UI='third'> third </P.Tag>

            <P.Tag href='#' UI='success'> success </P.Tag>
            <P.Tag href='#' UI='error'> error </P.Tag>
            <P.Tag href='#' UI='warning'> warning </P.Tag>

            <P.Tag href='#' UI='primaryOutline'> primaryOutline </P.Tag>
            <P.Tag href='#' UI='secondaryOutline'> secondaryOutline </P.Tag>
            <P.Tag href='#' UI='thirdOutline'> thirdOutline </P.Tag>

            <P.Tag href='#' UI='successOutline'> successOutline </P.Tag>
            <P.Tag href='#' UI='errorOutline'> errorOutline </P.Tag>
            <P.Tag href='#' UI='warningOutline'> warningOutline </P.Tag>

            <P.Tag href='#' UI='light'> light </P.Tag>
            <P.Tag href='#' UI='middle'> middle </P.Tag>
            <P.Tag href='#' UI='dark'> dark </P.Tag>

            <P.Tag href='#' UI='grayOutline'> grayOutline </P.Tag>
            <P.Tag href='#' UI='linkBackground'> linkBackground </P.Tag>
            <P.Tag href='#' UI='linkOutline'> linkOutline </P.Tag>

          </div>
          <h3 className='text-center p-P-5'>Aligns without icon : align</h3>

          <div className='grid grid-cols-2 gap-P-2 p-P-2 w-full max-w-3xl mx-auto' >
            <P.Tag href='#' align='between'> between </P.Tag>
            <P.Tag href='#' align='betweenReverse'> betweenReverse </P.Tag>
            <P.Tag href='#' align='center'> center </P.Tag>
            <P.Tag href='#' align='centerReverse'> centerReverse </P.Tag>
            <P.Tag href='#' align='start'> start </P.Tag>
            <P.Tag href='#' align='end'> end </P.Tag>
          </div>
          <h3 className='text-center p-P-5'>Aligns with icon : svgIcon</h3>
          <div className='grid grid-cols-2 gap-P-2 p-P-2 w-full max-w-3xl mx-auto' >
            <P.Tag href='#' align='between' svgIcon='home'> between </P.Tag>
            <P.Tag href='#' align='betweenReverse' svgIcon='home'> betweenReverse </P.Tag>
            <P.Tag href='#' align='center' svgIcon='home'> center </P.Tag>
            <P.Tag href='#' align='centerReverse' svgIcon='home'> centerReverse </P.Tag>
            <P.Tag href='#' align='start' svgIcon='home'> start </P.Tag>
            <P.Tag href='#' align='end' svgIcon='home'> end </P.Tag>
          </div>

          <div className='h-[300px]'></div>

        </div>
      </main >
    </>
  )
}