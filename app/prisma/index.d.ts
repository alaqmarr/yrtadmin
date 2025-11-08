
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model DayItinerary
 * 
 */
export type DayItinerary = $Result.DefaultSelection<Prisma.$DayItineraryPayload>
/**
 * Model FeaturedItems
 * 
 */
export type FeaturedItems = $Result.DefaultSelection<Prisma.$FeaturedItemsPayload>
/**
 * Model IncludedItems
 * 
 */
export type IncludedItems = $Result.DefaultSelection<Prisma.$IncludedItemsPayload>
/**
 * Model ExcludedItems
 * 
 */
export type ExcludedItems = $Result.DefaultSelection<Prisma.$ExcludedItemsPayload>
/**
 * Model Blogs
 * 
 */
export type Blogs = $Result.DefaultSelection<Prisma.$BlogsPayload>
/**
 * Model BlogImages
 * 
 */
export type BlogImages = $Result.DefaultSelection<Prisma.$BlogImagesPayload>
/**
 * Model BlogCategory
 * 
 */
export type BlogCategory = $Result.DefaultSelection<Prisma.$BlogCategoryPayload>
/**
 * Model Destinations
 * 
 */
export type Destinations = $Result.DefaultSelection<Prisma.$DestinationsPayload>
/**
 * Model Places
 * 
 */
export type Places = $Result.DefaultSelection<Prisma.$PlacesPayload>
/**
 * Model DestinationFAQ
 * 
 */
export type DestinationFAQ = $Result.DefaultSelection<Prisma.$DestinationFAQPayload>
/**
 * Model Testimonials
 * 
 */
export type Testimonials = $Result.DefaultSelection<Prisma.$TestimonialsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Packages
 * const packages = await prisma.package.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Packages
   * const packages = await prisma.package.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dayItinerary`: Exposes CRUD operations for the **DayItinerary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayItineraries
    * const dayItineraries = await prisma.dayItinerary.findMany()
    * ```
    */
  get dayItinerary(): Prisma.DayItineraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featuredItems`: Exposes CRUD operations for the **FeaturedItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeaturedItems
    * const featuredItems = await prisma.featuredItems.findMany()
    * ```
    */
  get featuredItems(): Prisma.FeaturedItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.includedItems`: Exposes CRUD operations for the **IncludedItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncludedItems
    * const includedItems = await prisma.includedItems.findMany()
    * ```
    */
  get includedItems(): Prisma.IncludedItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.excludedItems`: Exposes CRUD operations for the **ExcludedItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExcludedItems
    * const excludedItems = await prisma.excludedItems.findMany()
    * ```
    */
  get excludedItems(): Prisma.ExcludedItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogs`: Exposes CRUD operations for the **Blogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blogs.findMany()
    * ```
    */
  get blogs(): Prisma.BlogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogImages`: Exposes CRUD operations for the **BlogImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogImages
    * const blogImages = await prisma.blogImages.findMany()
    * ```
    */
  get blogImages(): Prisma.BlogImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogCategory`: Exposes CRUD operations for the **BlogCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogCategories
    * const blogCategories = await prisma.blogCategory.findMany()
    * ```
    */
  get blogCategory(): Prisma.BlogCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinations`: Exposes CRUD operations for the **Destinations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destinations.findMany()
    * ```
    */
  get destinations(): Prisma.DestinationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.places`: Exposes CRUD operations for the **Places** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.places.findMany()
    * ```
    */
  get places(): Prisma.PlacesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinationFAQ`: Exposes CRUD operations for the **DestinationFAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DestinationFAQS
    * const destinationFAQS = await prisma.destinationFAQ.findMany()
    * ```
    */
  get destinationFAQ(): Prisma.DestinationFAQDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonials`: Exposes CRUD operations for the **Testimonials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonials.findMany()
    * ```
    */
  get testimonials(): Prisma.TestimonialsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Package: 'Package',
    Bookings: 'Bookings',
    Payment: 'Payment',
    DayItinerary: 'DayItinerary',
    FeaturedItems: 'FeaturedItems',
    IncludedItems: 'IncludedItems',
    ExcludedItems: 'ExcludedItems',
    Blogs: 'Blogs',
    BlogImages: 'BlogImages',
    BlogCategory: 'BlogCategory',
    Destinations: 'Destinations',
    Places: 'Places',
    DestinationFAQ: 'DestinationFAQ',
    Testimonials: 'Testimonials'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "package" | "bookings" | "payment" | "dayItinerary" | "featuredItems" | "includedItems" | "excludedItems" | "blogs" | "blogImages" | "blogCategory" | "destinations" | "places" | "destinationFAQ" | "testimonials"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      DayItinerary: {
        payload: Prisma.$DayItineraryPayload<ExtArgs>
        fields: Prisma.DayItineraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayItineraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayItineraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>
          }
          findFirst: {
            args: Prisma.DayItineraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayItineraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>
          }
          findMany: {
            args: Prisma.DayItineraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>[]
          }
          create: {
            args: Prisma.DayItineraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>
          }
          createMany: {
            args: Prisma.DayItineraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DayItineraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>[]
          }
          delete: {
            args: Prisma.DayItineraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>
          }
          update: {
            args: Prisma.DayItineraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>
          }
          deleteMany: {
            args: Prisma.DayItineraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayItineraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DayItineraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>[]
          }
          upsert: {
            args: Prisma.DayItineraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayItineraryPayload>
          }
          aggregate: {
            args: Prisma.DayItineraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDayItinerary>
          }
          groupBy: {
            args: Prisma.DayItineraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayItineraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayItineraryCountArgs<ExtArgs>
            result: $Utils.Optional<DayItineraryCountAggregateOutputType> | number
          }
        }
      }
      FeaturedItems: {
        payload: Prisma.$FeaturedItemsPayload<ExtArgs>
        fields: Prisma.FeaturedItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeaturedItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeaturedItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>
          }
          findFirst: {
            args: Prisma.FeaturedItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeaturedItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>
          }
          findMany: {
            args: Prisma.FeaturedItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>[]
          }
          create: {
            args: Prisma.FeaturedItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>
          }
          createMany: {
            args: Prisma.FeaturedItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeaturedItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>[]
          }
          delete: {
            args: Prisma.FeaturedItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>
          }
          update: {
            args: Prisma.FeaturedItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>
          }
          deleteMany: {
            args: Prisma.FeaturedItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeaturedItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeaturedItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>[]
          }
          upsert: {
            args: Prisma.FeaturedItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemsPayload>
          }
          aggregate: {
            args: Prisma.FeaturedItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeaturedItems>
          }
          groupBy: {
            args: Prisma.FeaturedItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeaturedItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeaturedItemsCountArgs<ExtArgs>
            result: $Utils.Optional<FeaturedItemsCountAggregateOutputType> | number
          }
        }
      }
      IncludedItems: {
        payload: Prisma.$IncludedItemsPayload<ExtArgs>
        fields: Prisma.IncludedItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncludedItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncludedItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>
          }
          findFirst: {
            args: Prisma.IncludedItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncludedItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>
          }
          findMany: {
            args: Prisma.IncludedItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>[]
          }
          create: {
            args: Prisma.IncludedItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>
          }
          createMany: {
            args: Prisma.IncludedItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncludedItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>[]
          }
          delete: {
            args: Prisma.IncludedItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>
          }
          update: {
            args: Prisma.IncludedItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>
          }
          deleteMany: {
            args: Prisma.IncludedItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncludedItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncludedItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>[]
          }
          upsert: {
            args: Prisma.IncludedItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncludedItemsPayload>
          }
          aggregate: {
            args: Prisma.IncludedItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncludedItems>
          }
          groupBy: {
            args: Prisma.IncludedItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncludedItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncludedItemsCountArgs<ExtArgs>
            result: $Utils.Optional<IncludedItemsCountAggregateOutputType> | number
          }
        }
      }
      ExcludedItems: {
        payload: Prisma.$ExcludedItemsPayload<ExtArgs>
        fields: Prisma.ExcludedItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExcludedItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExcludedItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>
          }
          findFirst: {
            args: Prisma.ExcludedItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExcludedItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>
          }
          findMany: {
            args: Prisma.ExcludedItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>[]
          }
          create: {
            args: Prisma.ExcludedItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>
          }
          createMany: {
            args: Prisma.ExcludedItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExcludedItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>[]
          }
          delete: {
            args: Prisma.ExcludedItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>
          }
          update: {
            args: Prisma.ExcludedItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>
          }
          deleteMany: {
            args: Prisma.ExcludedItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExcludedItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExcludedItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>[]
          }
          upsert: {
            args: Prisma.ExcludedItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcludedItemsPayload>
          }
          aggregate: {
            args: Prisma.ExcludedItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExcludedItems>
          }
          groupBy: {
            args: Prisma.ExcludedItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExcludedItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExcludedItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ExcludedItemsCountAggregateOutputType> | number
          }
        }
      }
      Blogs: {
        payload: Prisma.$BlogsPayload<ExtArgs>
        fields: Prisma.BlogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          findFirst: {
            args: Prisma.BlogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          findMany: {
            args: Prisma.BlogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>[]
          }
          create: {
            args: Prisma.BlogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          createMany: {
            args: Prisma.BlogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>[]
          }
          delete: {
            args: Prisma.BlogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          update: {
            args: Prisma.BlogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          deleteMany: {
            args: Prisma.BlogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>[]
          }
          upsert: {
            args: Prisma.BlogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          aggregate: {
            args: Prisma.BlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogs>
          }
          groupBy: {
            args: Prisma.BlogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogsCountArgs<ExtArgs>
            result: $Utils.Optional<BlogsCountAggregateOutputType> | number
          }
        }
      }
      BlogImages: {
        payload: Prisma.$BlogImagesPayload<ExtArgs>
        fields: Prisma.BlogImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>
          }
          findFirst: {
            args: Prisma.BlogImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>
          }
          findMany: {
            args: Prisma.BlogImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>[]
          }
          create: {
            args: Prisma.BlogImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>
          }
          createMany: {
            args: Prisma.BlogImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>[]
          }
          delete: {
            args: Prisma.BlogImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>
          }
          update: {
            args: Prisma.BlogImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>
          }
          deleteMany: {
            args: Prisma.BlogImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>[]
          }
          upsert: {
            args: Prisma.BlogImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogImagesPayload>
          }
          aggregate: {
            args: Prisma.BlogImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogImages>
          }
          groupBy: {
            args: Prisma.BlogImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogImagesCountArgs<ExtArgs>
            result: $Utils.Optional<BlogImagesCountAggregateOutputType> | number
          }
        }
      }
      BlogCategory: {
        payload: Prisma.$BlogCategoryPayload<ExtArgs>
        fields: Prisma.BlogCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlogCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findMany: {
            args: Prisma.BlogCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          create: {
            args: Prisma.BlogCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          createMany: {
            args: Prisma.BlogCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          delete: {
            args: Prisma.BlogCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          update: {
            args: Prisma.BlogCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlogCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          upsert: {
            args: Prisma.BlogCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlogCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogCategory>
          }
          groupBy: {
            args: Prisma.BlogCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryCountAggregateOutputType> | number
          }
        }
      }
      Destinations: {
        payload: Prisma.$DestinationsPayload<ExtArgs>
        fields: Prisma.DestinationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>
          }
          findFirst: {
            args: Prisma.DestinationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>
          }
          findMany: {
            args: Prisma.DestinationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>[]
          }
          create: {
            args: Prisma.DestinationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>
          }
          createMany: {
            args: Prisma.DestinationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>[]
          }
          delete: {
            args: Prisma.DestinationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>
          }
          update: {
            args: Prisma.DestinationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>
          }
          deleteMany: {
            args: Prisma.DestinationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>[]
          }
          upsert: {
            args: Prisma.DestinationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationsPayload>
          }
          aggregate: {
            args: Prisma.DestinationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinations>
          }
          groupBy: {
            args: Prisma.DestinationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationsCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationsCountAggregateOutputType> | number
          }
        }
      }
      Places: {
        payload: Prisma.$PlacesPayload<ExtArgs>
        fields: Prisma.PlacesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlacesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlacesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          findFirst: {
            args: Prisma.PlacesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlacesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          findMany: {
            args: Prisma.PlacesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>[]
          }
          create: {
            args: Prisma.PlacesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          createMany: {
            args: Prisma.PlacesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlacesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>[]
          }
          delete: {
            args: Prisma.PlacesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          update: {
            args: Prisma.PlacesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          deleteMany: {
            args: Prisma.PlacesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlacesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlacesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>[]
          }
          upsert: {
            args: Prisma.PlacesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          aggregate: {
            args: Prisma.PlacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaces>
          }
          groupBy: {
            args: Prisma.PlacesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlacesCountArgs<ExtArgs>
            result: $Utils.Optional<PlacesCountAggregateOutputType> | number
          }
        }
      }
      DestinationFAQ: {
        payload: Prisma.$DestinationFAQPayload<ExtArgs>
        fields: Prisma.DestinationFAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>
          }
          findFirst: {
            args: Prisma.DestinationFAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>
          }
          findMany: {
            args: Prisma.DestinationFAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>[]
          }
          create: {
            args: Prisma.DestinationFAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>
          }
          createMany: {
            args: Prisma.DestinationFAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationFAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>[]
          }
          delete: {
            args: Prisma.DestinationFAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>
          }
          update: {
            args: Prisma.DestinationFAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>
          }
          deleteMany: {
            args: Prisma.DestinationFAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationFAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationFAQUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>[]
          }
          upsert: {
            args: Prisma.DestinationFAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationFAQPayload>
          }
          aggregate: {
            args: Prisma.DestinationFAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinationFAQ>
          }
          groupBy: {
            args: Prisma.DestinationFAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationFAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationFAQCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationFAQCountAggregateOutputType> | number
          }
        }
      }
      Testimonials: {
        payload: Prisma.$TestimonialsPayload<ExtArgs>
        fields: Prisma.TestimonialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          findFirst: {
            args: Prisma.TestimonialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          findMany: {
            args: Prisma.TestimonialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          create: {
            args: Prisma.TestimonialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          createMany: {
            args: Prisma.TestimonialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          delete: {
            args: Prisma.TestimonialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          update: {
            args: Prisma.TestimonialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          aggregate: {
            args: Prisma.TestimonialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonials>
          }
          groupBy: {
            args: Prisma.TestimonialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialsCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    package?: PackageOmit
    bookings?: BookingsOmit
    payment?: PaymentOmit
    dayItinerary?: DayItineraryOmit
    featuredItems?: FeaturedItemsOmit
    includedItems?: IncludedItemsOmit
    excludedItems?: ExcludedItemsOmit
    blogs?: BlogsOmit
    blogImages?: BlogImagesOmit
    blogCategory?: BlogCategoryOmit
    destinations?: DestinationsOmit
    places?: PlacesOmit
    destinationFAQ?: DestinationFAQOmit
    testimonials?: TestimonialsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    inclusions: number
    exclusions: number
    itineraries: number
    bookings: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inclusions?: boolean | PackageCountOutputTypeCountInclusionsArgs
    exclusions?: boolean | PackageCountOutputTypeCountExclusionsArgs
    itineraries?: boolean | PackageCountOutputTypeCountItinerariesArgs
    bookings?: boolean | PackageCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountInclusionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncludedItemsWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountExclusionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExcludedItemsWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountItinerariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayItineraryWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Count Type BookingsCountOutputType
   */

  export type BookingsCountOutputType = {
    payment: number
  }

  export type BookingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | BookingsCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingsCountOutputType
     */
    select?: BookingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type DayItineraryCountOutputType
   */

  export type DayItineraryCountOutputType = {
    features: number
  }

  export type DayItineraryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | DayItineraryCountOutputTypeCountFeaturesArgs
  }

  // Custom InputTypes
  /**
   * DayItineraryCountOutputType without action
   */
  export type DayItineraryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItineraryCountOutputType
     */
    select?: DayItineraryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DayItineraryCountOutputType without action
   */
  export type DayItineraryCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedItemsWhereInput
  }


  /**
   * Count Type BlogsCountOutputType
   */

  export type BlogsCountOutputType = {
    categories: number
    images: number
  }

  export type BlogsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | BlogsCountOutputTypeCountCategoriesArgs
    images?: boolean | BlogsCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * BlogsCountOutputType without action
   */
  export type BlogsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogsCountOutputType
     */
    select?: BlogsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogsCountOutputType without action
   */
  export type BlogsCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
  }

  /**
   * BlogsCountOutputType without action
   */
  export type BlogsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogImagesWhereInput
  }


  /**
   * Count Type BlogCategoryCountOutputType
   */

  export type BlogCategoryCountOutputType = {
    blogs: number
  }

  export type BlogCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogCategoryCountOutputTypeCountBlogsArgs
  }

  // Custom InputTypes
  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategoryCountOutputType
     */
    select?: BlogCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogsWhereInput
  }


  /**
   * Count Type DestinationsCountOutputType
   */

  export type DestinationsCountOutputType = {
    places: number
    faqs: number
  }

  export type DestinationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | DestinationsCountOutputTypeCountPlacesArgs
    faqs?: boolean | DestinationsCountOutputTypeCountFaqsArgs
  }

  // Custom InputTypes
  /**
   * DestinationsCountOutputType without action
   */
  export type DestinationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationsCountOutputType
     */
    select?: DestinationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationsCountOutputType without action
   */
  export type DestinationsCountOutputTypeCountPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacesWhereInput
  }

  /**
   * DestinationsCountOutputType without action
   */
  export type DestinationsCountOutputTypeCountFaqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationFAQWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    days: number | null
    nights: number | null
    price: Decimal | null
  }

  export type PackageSumAggregateOutputType = {
    days: number | null
    nights: number | null
    price: Decimal | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    name: string | null
    days: number | null
    nights: number | null
    description: string | null
    image: string | null
    price: Decimal | null
    type: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    days: number | null
    nights: number | null
    description: string | null
    image: string | null
    price: Decimal | null
    type: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    name: number
    days: number
    nights: number
    description: number
    image: number
    price: number
    type: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    days?: true
    nights?: true
    price?: true
  }

  export type PackageSumAggregateInputType = {
    days?: true
    nights?: true
    price?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    name?: true
    days?: true
    nights?: true
    description?: true
    image?: true
    price?: true
    type?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    name?: true
    days?: true
    nights?: true
    description?: true
    image?: true
    price?: true
    type?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    name?: true
    days?: true
    nights?: true
    description?: true
    image?: true
    price?: true
    type?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    name: string
    days: number
    nights: number
    description: string
    image: string | null
    price: Decimal
    type: string | null
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    days?: boolean
    nights?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    type?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inclusions?: boolean | Package$inclusionsArgs<ExtArgs>
    exclusions?: boolean | Package$exclusionsArgs<ExtArgs>
    itineraries?: boolean | Package$itinerariesArgs<ExtArgs>
    bookings?: boolean | Package$bookingsArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    days?: boolean
    nights?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    type?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    days?: boolean
    nights?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    type?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    name?: boolean
    days?: boolean
    nights?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    type?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "days" | "nights" | "description" | "image" | "price" | "type" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inclusions?: boolean | Package$inclusionsArgs<ExtArgs>
    exclusions?: boolean | Package$exclusionsArgs<ExtArgs>
    itineraries?: boolean | Package$itinerariesArgs<ExtArgs>
    bookings?: boolean | Package$bookingsArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      inclusions: Prisma.$IncludedItemsPayload<ExtArgs>[]
      exclusions: Prisma.$ExcludedItemsPayload<ExtArgs>[]
      itineraries: Prisma.$DayItineraryPayload<ExtArgs>[]
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      days: number
      nights: number
      description: string
      image: string | null
      price: Prisma.Decimal
      type: string | null
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inclusions<T extends Package$inclusionsArgs<ExtArgs> = {}>(args?: Subset<T, Package$inclusionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exclusions<T extends Package$exclusionsArgs<ExtArgs> = {}>(args?: Subset<T, Package$exclusionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itineraries<T extends Package$itinerariesArgs<ExtArgs> = {}>(args?: Subset<T, Package$itinerariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Package$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Package$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly name: FieldRef<"Package", 'String'>
    readonly days: FieldRef<"Package", 'Int'>
    readonly nights: FieldRef<"Package", 'Int'>
    readonly description: FieldRef<"Package", 'String'>
    readonly image: FieldRef<"Package", 'String'>
    readonly price: FieldRef<"Package", 'Decimal'>
    readonly type: FieldRef<"Package", 'String'>
    readonly location: FieldRef<"Package", 'String'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
    readonly updatedAt: FieldRef<"Package", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.inclusions
   */
  export type Package$inclusionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    where?: IncludedItemsWhereInput
    orderBy?: IncludedItemsOrderByWithRelationInput | IncludedItemsOrderByWithRelationInput[]
    cursor?: IncludedItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncludedItemsScalarFieldEnum | IncludedItemsScalarFieldEnum[]
  }

  /**
   * Package.exclusions
   */
  export type Package$exclusionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    where?: ExcludedItemsWhereInput
    orderBy?: ExcludedItemsOrderByWithRelationInput | ExcludedItemsOrderByWithRelationInput[]
    cursor?: ExcludedItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExcludedItemsScalarFieldEnum | ExcludedItemsScalarFieldEnum[]
  }

  /**
   * Package.itineraries
   */
  export type Package$itinerariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    where?: DayItineraryWhereInput
    orderBy?: DayItineraryOrderByWithRelationInput | DayItineraryOrderByWithRelationInput[]
    cursor?: DayItineraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayItineraryScalarFieldEnum | DayItineraryScalarFieldEnum[]
  }

  /**
   * Package.bookings
   */
  export type Package$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    numberOfPeople: number | null
  }

  export type BookingsSumAggregateOutputType = {
    numberOfPeople: number | null
  }

  export type BookingsMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    numberOfPeople: number | null
    paid: boolean | null
    packageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    numberOfPeople: number | null
    paid: boolean | null
    packageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    customerName: number
    customerEmail: number
    customerPhone: number
    numberOfPeople: number
    paid: number
    packageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    numberOfPeople?: true
  }

  export type BookingsSumAggregateInputType = {
    numberOfPeople?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    numberOfPeople?: true
    paid?: true
    packageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    numberOfPeople?: true
    paid?: true
    packageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    numberOfPeople?: true
    paid?: true
    packageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid: boolean
    packageId: string
    createdAt: Date
    updatedAt: Date
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    numberOfPeople?: boolean
    paid?: boolean
    packageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | Bookings$paymentArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    numberOfPeople?: boolean
    paid?: boolean
    packageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    numberOfPeople?: boolean
    paid?: boolean
    packageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectScalar = {
    id?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    numberOfPeople?: boolean
    paid?: boolean
    packageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "customerEmail" | "customerPhone" | "numberOfPeople" | "paid" | "packageId" | "createdAt" | "updatedAt", ExtArgs["result"]["bookings"]>
  export type BookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | Bookings$paymentArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type BookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>[]
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      customerEmail: string
      customerPhone: string
      numberOfPeople: number
      paid: boolean
      packageId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingsFindUniqueArgs>(args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingsFindFirstArgs>(args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingsFindManyArgs>(args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends BookingsCreateArgs>(args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingsCreateManyArgs>(args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends BookingsDeleteArgs>(args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingsUpdateArgs>(args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingsDeleteManyArgs>(args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingsUpdateManyArgs>(args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends BookingsUpsertArgs>(args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends Bookings$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Bookings$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookings model
   */
  interface BookingsFieldRefs {
    readonly id: FieldRef<"Bookings", 'String'>
    readonly customerName: FieldRef<"Bookings", 'String'>
    readonly customerEmail: FieldRef<"Bookings", 'String'>
    readonly customerPhone: FieldRef<"Bookings", 'String'>
    readonly numberOfPeople: FieldRef<"Bookings", 'Int'>
    readonly paid: FieldRef<"Bookings", 'Boolean'>
    readonly packageId: FieldRef<"Bookings", 'String'>
    readonly createdAt: FieldRef<"Bookings", 'DateTime'>
    readonly updatedAt: FieldRef<"Bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }

  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookings createManyAndReturn
   */
  export type BookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Bookings updateManyAndReturn
   */
  export type BookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }

  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Bookings.payment
   */
  export type Bookings$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    paid: boolean | null
    paymentMethod: string | null
    razorpayPaymentId: string | null
    paymentDate: Date | null
    bookingId: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    paid: boolean | null
    paymentMethod: string | null
    razorpayPaymentId: string | null
    paymentDate: Date | null
    bookingId: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    paid: number
    paymentMethod: number
    razorpayPaymentId: number
    paymentDate: number
    bookingId: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    paid?: true
    paymentMethod?: true
    razorpayPaymentId?: true
    paymentDate?: true
    bookingId?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    paid?: true
    paymentMethod?: true
    razorpayPaymentId?: true
    paymentDate?: true
    bookingId?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    paid?: true
    paymentMethod?: true
    razorpayPaymentId?: true
    paymentDate?: true
    bookingId?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: Decimal
    paid: boolean
    paymentMethod: string
    razorpayPaymentId: string | null
    paymentDate: Date
    bookingId: string
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paid?: boolean
    paymentMethod?: boolean
    razorpayPaymentId?: boolean
    paymentDate?: boolean
    bookingId?: boolean
    createdAt?: boolean
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paid?: boolean
    paymentMethod?: boolean
    razorpayPaymentId?: boolean
    paymentDate?: boolean
    bookingId?: boolean
    createdAt?: boolean
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paid?: boolean
    paymentMethod?: boolean
    razorpayPaymentId?: boolean
    paymentDate?: boolean
    bookingId?: boolean
    createdAt?: boolean
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    paid?: boolean
    paymentMethod?: boolean
    razorpayPaymentId?: boolean
    paymentDate?: boolean
    bookingId?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "paid" | "paymentMethod" | "razorpayPaymentId" | "paymentDate" | "bookingId" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      paid: boolean
      paymentMethod: string
      razorpayPaymentId: string | null
      paymentDate: Date
      bookingId: string
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingsDefaultArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paid: FieldRef<"Payment", 'Boolean'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payment", 'String'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly bookingId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model DayItinerary
   */

  export type AggregateDayItinerary = {
    _count: DayItineraryCountAggregateOutputType | null
    _avg: DayItineraryAvgAggregateOutputType | null
    _sum: DayItinerarySumAggregateOutputType | null
    _min: DayItineraryMinAggregateOutputType | null
    _max: DayItineraryMaxAggregateOutputType | null
  }

  export type DayItineraryAvgAggregateOutputType = {
    dayNumber: number | null
  }

  export type DayItinerarySumAggregateOutputType = {
    dayNumber: number | null
  }

  export type DayItineraryMinAggregateOutputType = {
    id: string | null
    title: string | null
    dayNumber: number | null
    description: string | null
    packageId: string | null
  }

  export type DayItineraryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    dayNumber: number | null
    description: string | null
    packageId: string | null
  }

  export type DayItineraryCountAggregateOutputType = {
    id: number
    title: number
    dayNumber: number
    description: number
    packageId: number
    _all: number
  }


  export type DayItineraryAvgAggregateInputType = {
    dayNumber?: true
  }

  export type DayItinerarySumAggregateInputType = {
    dayNumber?: true
  }

  export type DayItineraryMinAggregateInputType = {
    id?: true
    title?: true
    dayNumber?: true
    description?: true
    packageId?: true
  }

  export type DayItineraryMaxAggregateInputType = {
    id?: true
    title?: true
    dayNumber?: true
    description?: true
    packageId?: true
  }

  export type DayItineraryCountAggregateInputType = {
    id?: true
    title?: true
    dayNumber?: true
    description?: true
    packageId?: true
    _all?: true
  }

  export type DayItineraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayItinerary to aggregate.
     */
    where?: DayItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayItineraries to fetch.
     */
    orderBy?: DayItineraryOrderByWithRelationInput | DayItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayItineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayItineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayItineraries
    **/
    _count?: true | DayItineraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayItineraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayItinerarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayItineraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayItineraryMaxAggregateInputType
  }

  export type GetDayItineraryAggregateType<T extends DayItineraryAggregateArgs> = {
        [P in keyof T & keyof AggregateDayItinerary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayItinerary[P]>
      : GetScalarType<T[P], AggregateDayItinerary[P]>
  }




  export type DayItineraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayItineraryWhereInput
    orderBy?: DayItineraryOrderByWithAggregationInput | DayItineraryOrderByWithAggregationInput[]
    by: DayItineraryScalarFieldEnum[] | DayItineraryScalarFieldEnum
    having?: DayItineraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayItineraryCountAggregateInputType | true
    _avg?: DayItineraryAvgAggregateInputType
    _sum?: DayItinerarySumAggregateInputType
    _min?: DayItineraryMinAggregateInputType
    _max?: DayItineraryMaxAggregateInputType
  }

  export type DayItineraryGroupByOutputType = {
    id: string
    title: string
    dayNumber: number
    description: string
    packageId: string
    _count: DayItineraryCountAggregateOutputType | null
    _avg: DayItineraryAvgAggregateOutputType | null
    _sum: DayItinerarySumAggregateOutputType | null
    _min: DayItineraryMinAggregateOutputType | null
    _max: DayItineraryMaxAggregateOutputType | null
  }

  type GetDayItineraryGroupByPayload<T extends DayItineraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayItineraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayItineraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayItineraryGroupByOutputType[P]>
            : GetScalarType<T[P], DayItineraryGroupByOutputType[P]>
        }
      >
    >


  export type DayItinerarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dayNumber?: boolean
    description?: boolean
    packageId?: boolean
    features?: boolean | DayItinerary$featuresArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
    _count?: boolean | DayItineraryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayItinerary"]>

  export type DayItinerarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dayNumber?: boolean
    description?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayItinerary"]>

  export type DayItinerarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dayNumber?: boolean
    description?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayItinerary"]>

  export type DayItinerarySelectScalar = {
    id?: boolean
    title?: boolean
    dayNumber?: boolean
    description?: boolean
    packageId?: boolean
  }

  export type DayItineraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "dayNumber" | "description" | "packageId", ExtArgs["result"]["dayItinerary"]>
  export type DayItineraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | DayItinerary$featuresArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
    _count?: boolean | DayItineraryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DayItineraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type DayItineraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $DayItineraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayItinerary"
    objects: {
      features: Prisma.$FeaturedItemsPayload<ExtArgs>[]
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      dayNumber: number
      description: string
      packageId: string
    }, ExtArgs["result"]["dayItinerary"]>
    composites: {}
  }

  type DayItineraryGetPayload<S extends boolean | null | undefined | DayItineraryDefaultArgs> = $Result.GetResult<Prisma.$DayItineraryPayload, S>

  type DayItineraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DayItineraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DayItineraryCountAggregateInputType | true
    }

  export interface DayItineraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayItinerary'], meta: { name: 'DayItinerary' } }
    /**
     * Find zero or one DayItinerary that matches the filter.
     * @param {DayItineraryFindUniqueArgs} args - Arguments to find a DayItinerary
     * @example
     * // Get one DayItinerary
     * const dayItinerary = await prisma.dayItinerary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayItineraryFindUniqueArgs>(args: SelectSubset<T, DayItineraryFindUniqueArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DayItinerary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DayItineraryFindUniqueOrThrowArgs} args - Arguments to find a DayItinerary
     * @example
     * // Get one DayItinerary
     * const dayItinerary = await prisma.dayItinerary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayItineraryFindUniqueOrThrowArgs>(args: SelectSubset<T, DayItineraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayItinerary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayItineraryFindFirstArgs} args - Arguments to find a DayItinerary
     * @example
     * // Get one DayItinerary
     * const dayItinerary = await prisma.dayItinerary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayItineraryFindFirstArgs>(args?: SelectSubset<T, DayItineraryFindFirstArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayItinerary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayItineraryFindFirstOrThrowArgs} args - Arguments to find a DayItinerary
     * @example
     * // Get one DayItinerary
     * const dayItinerary = await prisma.dayItinerary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayItineraryFindFirstOrThrowArgs>(args?: SelectSubset<T, DayItineraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DayItineraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayItineraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayItineraries
     * const dayItineraries = await prisma.dayItinerary.findMany()
     * 
     * // Get first 10 DayItineraries
     * const dayItineraries = await prisma.dayItinerary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayItineraryWithIdOnly = await prisma.dayItinerary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayItineraryFindManyArgs>(args?: SelectSubset<T, DayItineraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DayItinerary.
     * @param {DayItineraryCreateArgs} args - Arguments to create a DayItinerary.
     * @example
     * // Create one DayItinerary
     * const DayItinerary = await prisma.dayItinerary.create({
     *   data: {
     *     // ... data to create a DayItinerary
     *   }
     * })
     * 
     */
    create<T extends DayItineraryCreateArgs>(args: SelectSubset<T, DayItineraryCreateArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DayItineraries.
     * @param {DayItineraryCreateManyArgs} args - Arguments to create many DayItineraries.
     * @example
     * // Create many DayItineraries
     * const dayItinerary = await prisma.dayItinerary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayItineraryCreateManyArgs>(args?: SelectSubset<T, DayItineraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DayItineraries and returns the data saved in the database.
     * @param {DayItineraryCreateManyAndReturnArgs} args - Arguments to create many DayItineraries.
     * @example
     * // Create many DayItineraries
     * const dayItinerary = await prisma.dayItinerary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DayItineraries and only return the `id`
     * const dayItineraryWithIdOnly = await prisma.dayItinerary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayItineraryCreateManyAndReturnArgs>(args?: SelectSubset<T, DayItineraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DayItinerary.
     * @param {DayItineraryDeleteArgs} args - Arguments to delete one DayItinerary.
     * @example
     * // Delete one DayItinerary
     * const DayItinerary = await prisma.dayItinerary.delete({
     *   where: {
     *     // ... filter to delete one DayItinerary
     *   }
     * })
     * 
     */
    delete<T extends DayItineraryDeleteArgs>(args: SelectSubset<T, DayItineraryDeleteArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DayItinerary.
     * @param {DayItineraryUpdateArgs} args - Arguments to update one DayItinerary.
     * @example
     * // Update one DayItinerary
     * const dayItinerary = await prisma.dayItinerary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayItineraryUpdateArgs>(args: SelectSubset<T, DayItineraryUpdateArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DayItineraries.
     * @param {DayItineraryDeleteManyArgs} args - Arguments to filter DayItineraries to delete.
     * @example
     * // Delete a few DayItineraries
     * const { count } = await prisma.dayItinerary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayItineraryDeleteManyArgs>(args?: SelectSubset<T, DayItineraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayItineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayItineraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayItineraries
     * const dayItinerary = await prisma.dayItinerary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayItineraryUpdateManyArgs>(args: SelectSubset<T, DayItineraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayItineraries and returns the data updated in the database.
     * @param {DayItineraryUpdateManyAndReturnArgs} args - Arguments to update many DayItineraries.
     * @example
     * // Update many DayItineraries
     * const dayItinerary = await prisma.dayItinerary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DayItineraries and only return the `id`
     * const dayItineraryWithIdOnly = await prisma.dayItinerary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DayItineraryUpdateManyAndReturnArgs>(args: SelectSubset<T, DayItineraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DayItinerary.
     * @param {DayItineraryUpsertArgs} args - Arguments to update or create a DayItinerary.
     * @example
     * // Update or create a DayItinerary
     * const dayItinerary = await prisma.dayItinerary.upsert({
     *   create: {
     *     // ... data to create a DayItinerary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayItinerary we want to update
     *   }
     * })
     */
    upsert<T extends DayItineraryUpsertArgs>(args: SelectSubset<T, DayItineraryUpsertArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DayItineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayItineraryCountArgs} args - Arguments to filter DayItineraries to count.
     * @example
     * // Count the number of DayItineraries
     * const count = await prisma.dayItinerary.count({
     *   where: {
     *     // ... the filter for the DayItineraries we want to count
     *   }
     * })
    **/
    count<T extends DayItineraryCountArgs>(
      args?: Subset<T, DayItineraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayItineraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayItinerary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayItineraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayItineraryAggregateArgs>(args: Subset<T, DayItineraryAggregateArgs>): Prisma.PrismaPromise<GetDayItineraryAggregateType<T>>

    /**
     * Group by DayItinerary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayItineraryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayItineraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayItineraryGroupByArgs['orderBy'] }
        : { orderBy?: DayItineraryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayItineraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayItineraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayItinerary model
   */
  readonly fields: DayItineraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayItinerary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayItineraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    features<T extends DayItinerary$featuresArgs<ExtArgs> = {}>(args?: Subset<T, DayItinerary$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DayItinerary model
   */
  interface DayItineraryFieldRefs {
    readonly id: FieldRef<"DayItinerary", 'String'>
    readonly title: FieldRef<"DayItinerary", 'String'>
    readonly dayNumber: FieldRef<"DayItinerary", 'Int'>
    readonly description: FieldRef<"DayItinerary", 'String'>
    readonly packageId: FieldRef<"DayItinerary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DayItinerary findUnique
   */
  export type DayItineraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * Filter, which DayItinerary to fetch.
     */
    where: DayItineraryWhereUniqueInput
  }

  /**
   * DayItinerary findUniqueOrThrow
   */
  export type DayItineraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * Filter, which DayItinerary to fetch.
     */
    where: DayItineraryWhereUniqueInput
  }

  /**
   * DayItinerary findFirst
   */
  export type DayItineraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * Filter, which DayItinerary to fetch.
     */
    where?: DayItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayItineraries to fetch.
     */
    orderBy?: DayItineraryOrderByWithRelationInput | DayItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayItineraries.
     */
    cursor?: DayItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayItineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayItineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayItineraries.
     */
    distinct?: DayItineraryScalarFieldEnum | DayItineraryScalarFieldEnum[]
  }

  /**
   * DayItinerary findFirstOrThrow
   */
  export type DayItineraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * Filter, which DayItinerary to fetch.
     */
    where?: DayItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayItineraries to fetch.
     */
    orderBy?: DayItineraryOrderByWithRelationInput | DayItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayItineraries.
     */
    cursor?: DayItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayItineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayItineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayItineraries.
     */
    distinct?: DayItineraryScalarFieldEnum | DayItineraryScalarFieldEnum[]
  }

  /**
   * DayItinerary findMany
   */
  export type DayItineraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * Filter, which DayItineraries to fetch.
     */
    where?: DayItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayItineraries to fetch.
     */
    orderBy?: DayItineraryOrderByWithRelationInput | DayItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayItineraries.
     */
    cursor?: DayItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayItineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayItineraries.
     */
    skip?: number
    distinct?: DayItineraryScalarFieldEnum | DayItineraryScalarFieldEnum[]
  }

  /**
   * DayItinerary create
   */
  export type DayItineraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * The data needed to create a DayItinerary.
     */
    data: XOR<DayItineraryCreateInput, DayItineraryUncheckedCreateInput>
  }

  /**
   * DayItinerary createMany
   */
  export type DayItineraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayItineraries.
     */
    data: DayItineraryCreateManyInput | DayItineraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayItinerary createManyAndReturn
   */
  export type DayItineraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * The data used to create many DayItineraries.
     */
    data: DayItineraryCreateManyInput | DayItineraryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DayItinerary update
   */
  export type DayItineraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * The data needed to update a DayItinerary.
     */
    data: XOR<DayItineraryUpdateInput, DayItineraryUncheckedUpdateInput>
    /**
     * Choose, which DayItinerary to update.
     */
    where: DayItineraryWhereUniqueInput
  }

  /**
   * DayItinerary updateMany
   */
  export type DayItineraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayItineraries.
     */
    data: XOR<DayItineraryUpdateManyMutationInput, DayItineraryUncheckedUpdateManyInput>
    /**
     * Filter which DayItineraries to update
     */
    where?: DayItineraryWhereInput
    /**
     * Limit how many DayItineraries to update.
     */
    limit?: number
  }

  /**
   * DayItinerary updateManyAndReturn
   */
  export type DayItineraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * The data used to update DayItineraries.
     */
    data: XOR<DayItineraryUpdateManyMutationInput, DayItineraryUncheckedUpdateManyInput>
    /**
     * Filter which DayItineraries to update
     */
    where?: DayItineraryWhereInput
    /**
     * Limit how many DayItineraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DayItinerary upsert
   */
  export type DayItineraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * The filter to search for the DayItinerary to update in case it exists.
     */
    where: DayItineraryWhereUniqueInput
    /**
     * In case the DayItinerary found by the `where` argument doesn't exist, create a new DayItinerary with this data.
     */
    create: XOR<DayItineraryCreateInput, DayItineraryUncheckedCreateInput>
    /**
     * In case the DayItinerary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayItineraryUpdateInput, DayItineraryUncheckedUpdateInput>
  }

  /**
   * DayItinerary delete
   */
  export type DayItineraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
    /**
     * Filter which DayItinerary to delete.
     */
    where: DayItineraryWhereUniqueInput
  }

  /**
   * DayItinerary deleteMany
   */
  export type DayItineraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayItineraries to delete
     */
    where?: DayItineraryWhereInput
    /**
     * Limit how many DayItineraries to delete.
     */
    limit?: number
  }

  /**
   * DayItinerary.features
   */
  export type DayItinerary$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    where?: FeaturedItemsWhereInput
    orderBy?: FeaturedItemsOrderByWithRelationInput | FeaturedItemsOrderByWithRelationInput[]
    cursor?: FeaturedItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeaturedItemsScalarFieldEnum | FeaturedItemsScalarFieldEnum[]
  }

  /**
   * DayItinerary without action
   */
  export type DayItineraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayItinerary
     */
    select?: DayItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayItinerary
     */
    omit?: DayItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayItineraryInclude<ExtArgs> | null
  }


  /**
   * Model FeaturedItems
   */

  export type AggregateFeaturedItems = {
    _count: FeaturedItemsCountAggregateOutputType | null
    _min: FeaturedItemsMinAggregateOutputType | null
    _max: FeaturedItemsMaxAggregateOutputType | null
  }

  export type FeaturedItemsMinAggregateOutputType = {
    id: string | null
    item: string | null
    dayItineraryId: string | null
  }

  export type FeaturedItemsMaxAggregateOutputType = {
    id: string | null
    item: string | null
    dayItineraryId: string | null
  }

  export type FeaturedItemsCountAggregateOutputType = {
    id: number
    item: number
    dayItineraryId: number
    _all: number
  }


  export type FeaturedItemsMinAggregateInputType = {
    id?: true
    item?: true
    dayItineraryId?: true
  }

  export type FeaturedItemsMaxAggregateInputType = {
    id?: true
    item?: true
    dayItineraryId?: true
  }

  export type FeaturedItemsCountAggregateInputType = {
    id?: true
    item?: true
    dayItineraryId?: true
    _all?: true
  }

  export type FeaturedItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedItems to aggregate.
     */
    where?: FeaturedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedItems to fetch.
     */
    orderBy?: FeaturedItemsOrderByWithRelationInput | FeaturedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeaturedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeaturedItems
    **/
    _count?: true | FeaturedItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeaturedItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeaturedItemsMaxAggregateInputType
  }

  export type GetFeaturedItemsAggregateType<T extends FeaturedItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateFeaturedItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeaturedItems[P]>
      : GetScalarType<T[P], AggregateFeaturedItems[P]>
  }




  export type FeaturedItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedItemsWhereInput
    orderBy?: FeaturedItemsOrderByWithAggregationInput | FeaturedItemsOrderByWithAggregationInput[]
    by: FeaturedItemsScalarFieldEnum[] | FeaturedItemsScalarFieldEnum
    having?: FeaturedItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeaturedItemsCountAggregateInputType | true
    _min?: FeaturedItemsMinAggregateInputType
    _max?: FeaturedItemsMaxAggregateInputType
  }

  export type FeaturedItemsGroupByOutputType = {
    id: string
    item: string
    dayItineraryId: string
    _count: FeaturedItemsCountAggregateOutputType | null
    _min: FeaturedItemsMinAggregateOutputType | null
    _max: FeaturedItemsMaxAggregateOutputType | null
  }

  type GetFeaturedItemsGroupByPayload<T extends FeaturedItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeaturedItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeaturedItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeaturedItemsGroupByOutputType[P]>
            : GetScalarType<T[P], FeaturedItemsGroupByOutputType[P]>
        }
      >
    >


  export type FeaturedItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    dayItineraryId?: boolean
    dayItinerary?: boolean | DayItineraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredItems"]>

  export type FeaturedItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    dayItineraryId?: boolean
    dayItinerary?: boolean | DayItineraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredItems"]>

  export type FeaturedItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    dayItineraryId?: boolean
    dayItinerary?: boolean | DayItineraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredItems"]>

  export type FeaturedItemsSelectScalar = {
    id?: boolean
    item?: boolean
    dayItineraryId?: boolean
  }

  export type FeaturedItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "dayItineraryId", ExtArgs["result"]["featuredItems"]>
  export type FeaturedItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dayItinerary?: boolean | DayItineraryDefaultArgs<ExtArgs>
  }
  export type FeaturedItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dayItinerary?: boolean | DayItineraryDefaultArgs<ExtArgs>
  }
  export type FeaturedItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dayItinerary?: boolean | DayItineraryDefaultArgs<ExtArgs>
  }

  export type $FeaturedItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeaturedItems"
    objects: {
      dayItinerary: Prisma.$DayItineraryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item: string
      dayItineraryId: string
    }, ExtArgs["result"]["featuredItems"]>
    composites: {}
  }

  type FeaturedItemsGetPayload<S extends boolean | null | undefined | FeaturedItemsDefaultArgs> = $Result.GetResult<Prisma.$FeaturedItemsPayload, S>

  type FeaturedItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeaturedItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeaturedItemsCountAggregateInputType | true
    }

  export interface FeaturedItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeaturedItems'], meta: { name: 'FeaturedItems' } }
    /**
     * Find zero or one FeaturedItems that matches the filter.
     * @param {FeaturedItemsFindUniqueArgs} args - Arguments to find a FeaturedItems
     * @example
     * // Get one FeaturedItems
     * const featuredItems = await prisma.featuredItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeaturedItemsFindUniqueArgs>(args: SelectSubset<T, FeaturedItemsFindUniqueArgs<ExtArgs>>): Prisma__FeaturedItemsClient<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeaturedItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeaturedItemsFindUniqueOrThrowArgs} args - Arguments to find a FeaturedItems
     * @example
     * // Get one FeaturedItems
     * const featuredItems = await prisma.featuredItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeaturedItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, FeaturedItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeaturedItemsClient<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemsFindFirstArgs} args - Arguments to find a FeaturedItems
     * @example
     * // Get one FeaturedItems
     * const featuredItems = await prisma.featuredItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeaturedItemsFindFirstArgs>(args?: SelectSubset<T, FeaturedItemsFindFirstArgs<ExtArgs>>): Prisma__FeaturedItemsClient<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemsFindFirstOrThrowArgs} args - Arguments to find a FeaturedItems
     * @example
     * // Get one FeaturedItems
     * const featuredItems = await prisma.featuredItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeaturedItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, FeaturedItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeaturedItemsClient<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeaturedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeaturedItems
     * const featuredItems = await prisma.featuredItems.findMany()
     * 
     * // Get first 10 FeaturedItems
     * const featuredItems = await prisma.featuredItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featuredItemsWithIdOnly = await prisma.featuredItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeaturedItemsFindManyArgs>(args?: SelectSubset<T, FeaturedItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeaturedItems.
     * @param {FeaturedItemsCreateArgs} args - Arguments to create a FeaturedItems.
     * @example
     * // Create one FeaturedItems
     * const FeaturedItems = await prisma.featuredItems.create({
     *   data: {
     *     // ... data to create a FeaturedItems
     *   }
     * })
     * 
     */
    create<T extends FeaturedItemsCreateArgs>(args: SelectSubset<T, FeaturedItemsCreateArgs<ExtArgs>>): Prisma__FeaturedItemsClient<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeaturedItems.
     * @param {FeaturedItemsCreateManyArgs} args - Arguments to create many FeaturedItems.
     * @example
     * // Create many FeaturedItems
     * const featuredItems = await prisma.featuredItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeaturedItemsCreateManyArgs>(args?: SelectSubset<T, FeaturedItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeaturedItems and returns the data saved in the database.
     * @param {FeaturedItemsCreateManyAndReturnArgs} args - Arguments to create many FeaturedItems.
     * @example
     * // Create many FeaturedItems
     * const featuredItems = await prisma.featuredItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeaturedItems and only return the `id`
     * const featuredItemsWithIdOnly = await prisma.featuredItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeaturedItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, FeaturedItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeaturedItems.
     * @param {FeaturedItemsDeleteArgs} args - Arguments to delete one FeaturedItems.
     * @example
     * // Delete one FeaturedItems
     * const FeaturedItems = await prisma.featuredItems.delete({
     *   where: {
     *     // ... filter to delete one FeaturedItems
     *   }
     * })
     * 
     */
    delete<T extends FeaturedItemsDeleteArgs>(args: SelectSubset<T, FeaturedItemsDeleteArgs<ExtArgs>>): Prisma__FeaturedItemsClient<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeaturedItems.
     * @param {FeaturedItemsUpdateArgs} args - Arguments to update one FeaturedItems.
     * @example
     * // Update one FeaturedItems
     * const featuredItems = await prisma.featuredItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeaturedItemsUpdateArgs>(args: SelectSubset<T, FeaturedItemsUpdateArgs<ExtArgs>>): Prisma__FeaturedItemsClient<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeaturedItems.
     * @param {FeaturedItemsDeleteManyArgs} args - Arguments to filter FeaturedItems to delete.
     * @example
     * // Delete a few FeaturedItems
     * const { count } = await prisma.featuredItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeaturedItemsDeleteManyArgs>(args?: SelectSubset<T, FeaturedItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeaturedItems
     * const featuredItems = await prisma.featuredItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeaturedItemsUpdateManyArgs>(args: SelectSubset<T, FeaturedItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedItems and returns the data updated in the database.
     * @param {FeaturedItemsUpdateManyAndReturnArgs} args - Arguments to update many FeaturedItems.
     * @example
     * // Update many FeaturedItems
     * const featuredItems = await prisma.featuredItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeaturedItems and only return the `id`
     * const featuredItemsWithIdOnly = await prisma.featuredItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeaturedItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, FeaturedItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeaturedItems.
     * @param {FeaturedItemsUpsertArgs} args - Arguments to update or create a FeaturedItems.
     * @example
     * // Update or create a FeaturedItems
     * const featuredItems = await prisma.featuredItems.upsert({
     *   create: {
     *     // ... data to create a FeaturedItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeaturedItems we want to update
     *   }
     * })
     */
    upsert<T extends FeaturedItemsUpsertArgs>(args: SelectSubset<T, FeaturedItemsUpsertArgs<ExtArgs>>): Prisma__FeaturedItemsClient<$Result.GetResult<Prisma.$FeaturedItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeaturedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemsCountArgs} args - Arguments to filter FeaturedItems to count.
     * @example
     * // Count the number of FeaturedItems
     * const count = await prisma.featuredItems.count({
     *   where: {
     *     // ... the filter for the FeaturedItems we want to count
     *   }
     * })
    **/
    count<T extends FeaturedItemsCountArgs>(
      args?: Subset<T, FeaturedItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeaturedItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeaturedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeaturedItemsAggregateArgs>(args: Subset<T, FeaturedItemsAggregateArgs>): Prisma.PrismaPromise<GetFeaturedItemsAggregateType<T>>

    /**
     * Group by FeaturedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeaturedItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeaturedItemsGroupByArgs['orderBy'] }
        : { orderBy?: FeaturedItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeaturedItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturedItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeaturedItems model
   */
  readonly fields: FeaturedItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeaturedItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeaturedItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dayItinerary<T extends DayItineraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DayItineraryDefaultArgs<ExtArgs>>): Prisma__DayItineraryClient<$Result.GetResult<Prisma.$DayItineraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeaturedItems model
   */
  interface FeaturedItemsFieldRefs {
    readonly id: FieldRef<"FeaturedItems", 'String'>
    readonly item: FieldRef<"FeaturedItems", 'String'>
    readonly dayItineraryId: FieldRef<"FeaturedItems", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeaturedItems findUnique
   */
  export type FeaturedItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedItems to fetch.
     */
    where: FeaturedItemsWhereUniqueInput
  }

  /**
   * FeaturedItems findUniqueOrThrow
   */
  export type FeaturedItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedItems to fetch.
     */
    where: FeaturedItemsWhereUniqueInput
  }

  /**
   * FeaturedItems findFirst
   */
  export type FeaturedItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedItems to fetch.
     */
    where?: FeaturedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedItems to fetch.
     */
    orderBy?: FeaturedItemsOrderByWithRelationInput | FeaturedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedItems.
     */
    cursor?: FeaturedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedItems.
     */
    distinct?: FeaturedItemsScalarFieldEnum | FeaturedItemsScalarFieldEnum[]
  }

  /**
   * FeaturedItems findFirstOrThrow
   */
  export type FeaturedItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedItems to fetch.
     */
    where?: FeaturedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedItems to fetch.
     */
    orderBy?: FeaturedItemsOrderByWithRelationInput | FeaturedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedItems.
     */
    cursor?: FeaturedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedItems.
     */
    distinct?: FeaturedItemsScalarFieldEnum | FeaturedItemsScalarFieldEnum[]
  }

  /**
   * FeaturedItems findMany
   */
  export type FeaturedItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedItems to fetch.
     */
    where?: FeaturedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedItems to fetch.
     */
    orderBy?: FeaturedItemsOrderByWithRelationInput | FeaturedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeaturedItems.
     */
    cursor?: FeaturedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedItems.
     */
    skip?: number
    distinct?: FeaturedItemsScalarFieldEnum | FeaturedItemsScalarFieldEnum[]
  }

  /**
   * FeaturedItems create
   */
  export type FeaturedItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a FeaturedItems.
     */
    data: XOR<FeaturedItemsCreateInput, FeaturedItemsUncheckedCreateInput>
  }

  /**
   * FeaturedItems createMany
   */
  export type FeaturedItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeaturedItems.
     */
    data: FeaturedItemsCreateManyInput | FeaturedItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeaturedItems createManyAndReturn
   */
  export type FeaturedItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * The data used to create many FeaturedItems.
     */
    data: FeaturedItemsCreateManyInput | FeaturedItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeaturedItems update
   */
  export type FeaturedItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a FeaturedItems.
     */
    data: XOR<FeaturedItemsUpdateInput, FeaturedItemsUncheckedUpdateInput>
    /**
     * Choose, which FeaturedItems to update.
     */
    where: FeaturedItemsWhereUniqueInput
  }

  /**
   * FeaturedItems updateMany
   */
  export type FeaturedItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeaturedItems.
     */
    data: XOR<FeaturedItemsUpdateManyMutationInput, FeaturedItemsUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedItems to update
     */
    where?: FeaturedItemsWhereInput
    /**
     * Limit how many FeaturedItems to update.
     */
    limit?: number
  }

  /**
   * FeaturedItems updateManyAndReturn
   */
  export type FeaturedItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * The data used to update FeaturedItems.
     */
    data: XOR<FeaturedItemsUpdateManyMutationInput, FeaturedItemsUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedItems to update
     */
    where?: FeaturedItemsWhereInput
    /**
     * Limit how many FeaturedItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeaturedItems upsert
   */
  export type FeaturedItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the FeaturedItems to update in case it exists.
     */
    where: FeaturedItemsWhereUniqueInput
    /**
     * In case the FeaturedItems found by the `where` argument doesn't exist, create a new FeaturedItems with this data.
     */
    create: XOR<FeaturedItemsCreateInput, FeaturedItemsUncheckedCreateInput>
    /**
     * In case the FeaturedItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeaturedItemsUpdateInput, FeaturedItemsUncheckedUpdateInput>
  }

  /**
   * FeaturedItems delete
   */
  export type FeaturedItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
    /**
     * Filter which FeaturedItems to delete.
     */
    where: FeaturedItemsWhereUniqueInput
  }

  /**
   * FeaturedItems deleteMany
   */
  export type FeaturedItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedItems to delete
     */
    where?: FeaturedItemsWhereInput
    /**
     * Limit how many FeaturedItems to delete.
     */
    limit?: number
  }

  /**
   * FeaturedItems without action
   */
  export type FeaturedItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItems
     */
    select?: FeaturedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItems
     */
    omit?: FeaturedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedItemsInclude<ExtArgs> | null
  }


  /**
   * Model IncludedItems
   */

  export type AggregateIncludedItems = {
    _count: IncludedItemsCountAggregateOutputType | null
    _min: IncludedItemsMinAggregateOutputType | null
    _max: IncludedItemsMaxAggregateOutputType | null
  }

  export type IncludedItemsMinAggregateOutputType = {
    id: string | null
    item: string | null
    packageId: string | null
  }

  export type IncludedItemsMaxAggregateOutputType = {
    id: string | null
    item: string | null
    packageId: string | null
  }

  export type IncludedItemsCountAggregateOutputType = {
    id: number
    item: number
    packageId: number
    _all: number
  }


  export type IncludedItemsMinAggregateInputType = {
    id?: true
    item?: true
    packageId?: true
  }

  export type IncludedItemsMaxAggregateInputType = {
    id?: true
    item?: true
    packageId?: true
  }

  export type IncludedItemsCountAggregateInputType = {
    id?: true
    item?: true
    packageId?: true
    _all?: true
  }

  export type IncludedItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncludedItems to aggregate.
     */
    where?: IncludedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncludedItems to fetch.
     */
    orderBy?: IncludedItemsOrderByWithRelationInput | IncludedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncludedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncludedItems
    **/
    _count?: true | IncludedItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncludedItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncludedItemsMaxAggregateInputType
  }

  export type GetIncludedItemsAggregateType<T extends IncludedItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateIncludedItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncludedItems[P]>
      : GetScalarType<T[P], AggregateIncludedItems[P]>
  }




  export type IncludedItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncludedItemsWhereInput
    orderBy?: IncludedItemsOrderByWithAggregationInput | IncludedItemsOrderByWithAggregationInput[]
    by: IncludedItemsScalarFieldEnum[] | IncludedItemsScalarFieldEnum
    having?: IncludedItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncludedItemsCountAggregateInputType | true
    _min?: IncludedItemsMinAggregateInputType
    _max?: IncludedItemsMaxAggregateInputType
  }

  export type IncludedItemsGroupByOutputType = {
    id: string
    item: string
    packageId: string
    _count: IncludedItemsCountAggregateOutputType | null
    _min: IncludedItemsMinAggregateOutputType | null
    _max: IncludedItemsMaxAggregateOutputType | null
  }

  type GetIncludedItemsGroupByPayload<T extends IncludedItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncludedItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncludedItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncludedItemsGroupByOutputType[P]>
            : GetScalarType<T[P], IncludedItemsGroupByOutputType[P]>
        }
      >
    >


  export type IncludedItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["includedItems"]>

  export type IncludedItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["includedItems"]>

  export type IncludedItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["includedItems"]>

  export type IncludedItemsSelectScalar = {
    id?: boolean
    item?: boolean
    packageId?: boolean
  }

  export type IncludedItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "packageId", ExtArgs["result"]["includedItems"]>
  export type IncludedItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type IncludedItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type IncludedItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $IncludedItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncludedItems"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item: string
      packageId: string
    }, ExtArgs["result"]["includedItems"]>
    composites: {}
  }

  type IncludedItemsGetPayload<S extends boolean | null | undefined | IncludedItemsDefaultArgs> = $Result.GetResult<Prisma.$IncludedItemsPayload, S>

  type IncludedItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncludedItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncludedItemsCountAggregateInputType | true
    }

  export interface IncludedItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncludedItems'], meta: { name: 'IncludedItems' } }
    /**
     * Find zero or one IncludedItems that matches the filter.
     * @param {IncludedItemsFindUniqueArgs} args - Arguments to find a IncludedItems
     * @example
     * // Get one IncludedItems
     * const includedItems = await prisma.includedItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncludedItemsFindUniqueArgs>(args: SelectSubset<T, IncludedItemsFindUniqueArgs<ExtArgs>>): Prisma__IncludedItemsClient<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncludedItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncludedItemsFindUniqueOrThrowArgs} args - Arguments to find a IncludedItems
     * @example
     * // Get one IncludedItems
     * const includedItems = await prisma.includedItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncludedItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, IncludedItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncludedItemsClient<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncludedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncludedItemsFindFirstArgs} args - Arguments to find a IncludedItems
     * @example
     * // Get one IncludedItems
     * const includedItems = await prisma.includedItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncludedItemsFindFirstArgs>(args?: SelectSubset<T, IncludedItemsFindFirstArgs<ExtArgs>>): Prisma__IncludedItemsClient<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncludedItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncludedItemsFindFirstOrThrowArgs} args - Arguments to find a IncludedItems
     * @example
     * // Get one IncludedItems
     * const includedItems = await prisma.includedItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncludedItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, IncludedItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncludedItemsClient<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncludedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncludedItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncludedItems
     * const includedItems = await prisma.includedItems.findMany()
     * 
     * // Get first 10 IncludedItems
     * const includedItems = await prisma.includedItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const includedItemsWithIdOnly = await prisma.includedItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncludedItemsFindManyArgs>(args?: SelectSubset<T, IncludedItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncludedItems.
     * @param {IncludedItemsCreateArgs} args - Arguments to create a IncludedItems.
     * @example
     * // Create one IncludedItems
     * const IncludedItems = await prisma.includedItems.create({
     *   data: {
     *     // ... data to create a IncludedItems
     *   }
     * })
     * 
     */
    create<T extends IncludedItemsCreateArgs>(args: SelectSubset<T, IncludedItemsCreateArgs<ExtArgs>>): Prisma__IncludedItemsClient<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncludedItems.
     * @param {IncludedItemsCreateManyArgs} args - Arguments to create many IncludedItems.
     * @example
     * // Create many IncludedItems
     * const includedItems = await prisma.includedItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncludedItemsCreateManyArgs>(args?: SelectSubset<T, IncludedItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncludedItems and returns the data saved in the database.
     * @param {IncludedItemsCreateManyAndReturnArgs} args - Arguments to create many IncludedItems.
     * @example
     * // Create many IncludedItems
     * const includedItems = await prisma.includedItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncludedItems and only return the `id`
     * const includedItemsWithIdOnly = await prisma.includedItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncludedItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, IncludedItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncludedItems.
     * @param {IncludedItemsDeleteArgs} args - Arguments to delete one IncludedItems.
     * @example
     * // Delete one IncludedItems
     * const IncludedItems = await prisma.includedItems.delete({
     *   where: {
     *     // ... filter to delete one IncludedItems
     *   }
     * })
     * 
     */
    delete<T extends IncludedItemsDeleteArgs>(args: SelectSubset<T, IncludedItemsDeleteArgs<ExtArgs>>): Prisma__IncludedItemsClient<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncludedItems.
     * @param {IncludedItemsUpdateArgs} args - Arguments to update one IncludedItems.
     * @example
     * // Update one IncludedItems
     * const includedItems = await prisma.includedItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncludedItemsUpdateArgs>(args: SelectSubset<T, IncludedItemsUpdateArgs<ExtArgs>>): Prisma__IncludedItemsClient<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncludedItems.
     * @param {IncludedItemsDeleteManyArgs} args - Arguments to filter IncludedItems to delete.
     * @example
     * // Delete a few IncludedItems
     * const { count } = await prisma.includedItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncludedItemsDeleteManyArgs>(args?: SelectSubset<T, IncludedItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncludedItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncludedItems
     * const includedItems = await prisma.includedItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncludedItemsUpdateManyArgs>(args: SelectSubset<T, IncludedItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncludedItems and returns the data updated in the database.
     * @param {IncludedItemsUpdateManyAndReturnArgs} args - Arguments to update many IncludedItems.
     * @example
     * // Update many IncludedItems
     * const includedItems = await prisma.includedItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncludedItems and only return the `id`
     * const includedItemsWithIdOnly = await prisma.includedItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncludedItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, IncludedItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncludedItems.
     * @param {IncludedItemsUpsertArgs} args - Arguments to update or create a IncludedItems.
     * @example
     * // Update or create a IncludedItems
     * const includedItems = await prisma.includedItems.upsert({
     *   create: {
     *     // ... data to create a IncludedItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncludedItems we want to update
     *   }
     * })
     */
    upsert<T extends IncludedItemsUpsertArgs>(args: SelectSubset<T, IncludedItemsUpsertArgs<ExtArgs>>): Prisma__IncludedItemsClient<$Result.GetResult<Prisma.$IncludedItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncludedItemsCountArgs} args - Arguments to filter IncludedItems to count.
     * @example
     * // Count the number of IncludedItems
     * const count = await prisma.includedItems.count({
     *   where: {
     *     // ... the filter for the IncludedItems we want to count
     *   }
     * })
    **/
    count<T extends IncludedItemsCountArgs>(
      args?: Subset<T, IncludedItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncludedItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncludedItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncludedItemsAggregateArgs>(args: Subset<T, IncludedItemsAggregateArgs>): Prisma.PrismaPromise<GetIncludedItemsAggregateType<T>>

    /**
     * Group by IncludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncludedItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncludedItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncludedItemsGroupByArgs['orderBy'] }
        : { orderBy?: IncludedItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncludedItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncludedItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncludedItems model
   */
  readonly fields: IncludedItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncludedItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncludedItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncludedItems model
   */
  interface IncludedItemsFieldRefs {
    readonly id: FieldRef<"IncludedItems", 'String'>
    readonly item: FieldRef<"IncludedItems", 'String'>
    readonly packageId: FieldRef<"IncludedItems", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IncludedItems findUnique
   */
  export type IncludedItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which IncludedItems to fetch.
     */
    where: IncludedItemsWhereUniqueInput
  }

  /**
   * IncludedItems findUniqueOrThrow
   */
  export type IncludedItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which IncludedItems to fetch.
     */
    where: IncludedItemsWhereUniqueInput
  }

  /**
   * IncludedItems findFirst
   */
  export type IncludedItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which IncludedItems to fetch.
     */
    where?: IncludedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncludedItems to fetch.
     */
    orderBy?: IncludedItemsOrderByWithRelationInput | IncludedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncludedItems.
     */
    cursor?: IncludedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncludedItems.
     */
    distinct?: IncludedItemsScalarFieldEnum | IncludedItemsScalarFieldEnum[]
  }

  /**
   * IncludedItems findFirstOrThrow
   */
  export type IncludedItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which IncludedItems to fetch.
     */
    where?: IncludedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncludedItems to fetch.
     */
    orderBy?: IncludedItemsOrderByWithRelationInput | IncludedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncludedItems.
     */
    cursor?: IncludedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncludedItems.
     */
    distinct?: IncludedItemsScalarFieldEnum | IncludedItemsScalarFieldEnum[]
  }

  /**
   * IncludedItems findMany
   */
  export type IncludedItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which IncludedItems to fetch.
     */
    where?: IncludedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncludedItems to fetch.
     */
    orderBy?: IncludedItemsOrderByWithRelationInput | IncludedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncludedItems.
     */
    cursor?: IncludedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncludedItems.
     */
    skip?: number
    distinct?: IncludedItemsScalarFieldEnum | IncludedItemsScalarFieldEnum[]
  }

  /**
   * IncludedItems create
   */
  export type IncludedItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a IncludedItems.
     */
    data: XOR<IncludedItemsCreateInput, IncludedItemsUncheckedCreateInput>
  }

  /**
   * IncludedItems createMany
   */
  export type IncludedItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncludedItems.
     */
    data: IncludedItemsCreateManyInput | IncludedItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncludedItems createManyAndReturn
   */
  export type IncludedItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * The data used to create many IncludedItems.
     */
    data: IncludedItemsCreateManyInput | IncludedItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncludedItems update
   */
  export type IncludedItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a IncludedItems.
     */
    data: XOR<IncludedItemsUpdateInput, IncludedItemsUncheckedUpdateInput>
    /**
     * Choose, which IncludedItems to update.
     */
    where: IncludedItemsWhereUniqueInput
  }

  /**
   * IncludedItems updateMany
   */
  export type IncludedItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncludedItems.
     */
    data: XOR<IncludedItemsUpdateManyMutationInput, IncludedItemsUncheckedUpdateManyInput>
    /**
     * Filter which IncludedItems to update
     */
    where?: IncludedItemsWhereInput
    /**
     * Limit how many IncludedItems to update.
     */
    limit?: number
  }

  /**
   * IncludedItems updateManyAndReturn
   */
  export type IncludedItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * The data used to update IncludedItems.
     */
    data: XOR<IncludedItemsUpdateManyMutationInput, IncludedItemsUncheckedUpdateManyInput>
    /**
     * Filter which IncludedItems to update
     */
    where?: IncludedItemsWhereInput
    /**
     * Limit how many IncludedItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncludedItems upsert
   */
  export type IncludedItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the IncludedItems to update in case it exists.
     */
    where: IncludedItemsWhereUniqueInput
    /**
     * In case the IncludedItems found by the `where` argument doesn't exist, create a new IncludedItems with this data.
     */
    create: XOR<IncludedItemsCreateInput, IncludedItemsUncheckedCreateInput>
    /**
     * In case the IncludedItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncludedItemsUpdateInput, IncludedItemsUncheckedUpdateInput>
  }

  /**
   * IncludedItems delete
   */
  export type IncludedItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
    /**
     * Filter which IncludedItems to delete.
     */
    where: IncludedItemsWhereUniqueInput
  }

  /**
   * IncludedItems deleteMany
   */
  export type IncludedItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncludedItems to delete
     */
    where?: IncludedItemsWhereInput
    /**
     * Limit how many IncludedItems to delete.
     */
    limit?: number
  }

  /**
   * IncludedItems without action
   */
  export type IncludedItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncludedItems
     */
    select?: IncludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncludedItems
     */
    omit?: IncludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncludedItemsInclude<ExtArgs> | null
  }


  /**
   * Model ExcludedItems
   */

  export type AggregateExcludedItems = {
    _count: ExcludedItemsCountAggregateOutputType | null
    _min: ExcludedItemsMinAggregateOutputType | null
    _max: ExcludedItemsMaxAggregateOutputType | null
  }

  export type ExcludedItemsMinAggregateOutputType = {
    id: string | null
    item: string | null
    packageId: string | null
  }

  export type ExcludedItemsMaxAggregateOutputType = {
    id: string | null
    item: string | null
    packageId: string | null
  }

  export type ExcludedItemsCountAggregateOutputType = {
    id: number
    item: number
    packageId: number
    _all: number
  }


  export type ExcludedItemsMinAggregateInputType = {
    id?: true
    item?: true
    packageId?: true
  }

  export type ExcludedItemsMaxAggregateInputType = {
    id?: true
    item?: true
    packageId?: true
  }

  export type ExcludedItemsCountAggregateInputType = {
    id?: true
    item?: true
    packageId?: true
    _all?: true
  }

  export type ExcludedItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExcludedItems to aggregate.
     */
    where?: ExcludedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExcludedItems to fetch.
     */
    orderBy?: ExcludedItemsOrderByWithRelationInput | ExcludedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExcludedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExcludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExcludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExcludedItems
    **/
    _count?: true | ExcludedItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExcludedItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExcludedItemsMaxAggregateInputType
  }

  export type GetExcludedItemsAggregateType<T extends ExcludedItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateExcludedItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExcludedItems[P]>
      : GetScalarType<T[P], AggregateExcludedItems[P]>
  }




  export type ExcludedItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExcludedItemsWhereInput
    orderBy?: ExcludedItemsOrderByWithAggregationInput | ExcludedItemsOrderByWithAggregationInput[]
    by: ExcludedItemsScalarFieldEnum[] | ExcludedItemsScalarFieldEnum
    having?: ExcludedItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExcludedItemsCountAggregateInputType | true
    _min?: ExcludedItemsMinAggregateInputType
    _max?: ExcludedItemsMaxAggregateInputType
  }

  export type ExcludedItemsGroupByOutputType = {
    id: string
    item: string
    packageId: string
    _count: ExcludedItemsCountAggregateOutputType | null
    _min: ExcludedItemsMinAggregateOutputType | null
    _max: ExcludedItemsMaxAggregateOutputType | null
  }

  type GetExcludedItemsGroupByPayload<T extends ExcludedItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExcludedItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExcludedItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExcludedItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ExcludedItemsGroupByOutputType[P]>
        }
      >
    >


  export type ExcludedItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["excludedItems"]>

  export type ExcludedItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["excludedItems"]>

  export type ExcludedItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    packageId?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["excludedItems"]>

  export type ExcludedItemsSelectScalar = {
    id?: boolean
    item?: boolean
    packageId?: boolean
  }

  export type ExcludedItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "packageId", ExtArgs["result"]["excludedItems"]>
  export type ExcludedItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type ExcludedItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type ExcludedItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $ExcludedItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExcludedItems"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item: string
      packageId: string
    }, ExtArgs["result"]["excludedItems"]>
    composites: {}
  }

  type ExcludedItemsGetPayload<S extends boolean | null | undefined | ExcludedItemsDefaultArgs> = $Result.GetResult<Prisma.$ExcludedItemsPayload, S>

  type ExcludedItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExcludedItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExcludedItemsCountAggregateInputType | true
    }

  export interface ExcludedItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExcludedItems'], meta: { name: 'ExcludedItems' } }
    /**
     * Find zero or one ExcludedItems that matches the filter.
     * @param {ExcludedItemsFindUniqueArgs} args - Arguments to find a ExcludedItems
     * @example
     * // Get one ExcludedItems
     * const excludedItems = await prisma.excludedItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExcludedItemsFindUniqueArgs>(args: SelectSubset<T, ExcludedItemsFindUniqueArgs<ExtArgs>>): Prisma__ExcludedItemsClient<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExcludedItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExcludedItemsFindUniqueOrThrowArgs} args - Arguments to find a ExcludedItems
     * @example
     * // Get one ExcludedItems
     * const excludedItems = await prisma.excludedItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExcludedItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, ExcludedItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExcludedItemsClient<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExcludedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcludedItemsFindFirstArgs} args - Arguments to find a ExcludedItems
     * @example
     * // Get one ExcludedItems
     * const excludedItems = await prisma.excludedItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExcludedItemsFindFirstArgs>(args?: SelectSubset<T, ExcludedItemsFindFirstArgs<ExtArgs>>): Prisma__ExcludedItemsClient<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExcludedItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcludedItemsFindFirstOrThrowArgs} args - Arguments to find a ExcludedItems
     * @example
     * // Get one ExcludedItems
     * const excludedItems = await prisma.excludedItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExcludedItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, ExcludedItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExcludedItemsClient<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExcludedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcludedItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExcludedItems
     * const excludedItems = await prisma.excludedItems.findMany()
     * 
     * // Get first 10 ExcludedItems
     * const excludedItems = await prisma.excludedItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const excludedItemsWithIdOnly = await prisma.excludedItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExcludedItemsFindManyArgs>(args?: SelectSubset<T, ExcludedItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExcludedItems.
     * @param {ExcludedItemsCreateArgs} args - Arguments to create a ExcludedItems.
     * @example
     * // Create one ExcludedItems
     * const ExcludedItems = await prisma.excludedItems.create({
     *   data: {
     *     // ... data to create a ExcludedItems
     *   }
     * })
     * 
     */
    create<T extends ExcludedItemsCreateArgs>(args: SelectSubset<T, ExcludedItemsCreateArgs<ExtArgs>>): Prisma__ExcludedItemsClient<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExcludedItems.
     * @param {ExcludedItemsCreateManyArgs} args - Arguments to create many ExcludedItems.
     * @example
     * // Create many ExcludedItems
     * const excludedItems = await prisma.excludedItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExcludedItemsCreateManyArgs>(args?: SelectSubset<T, ExcludedItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExcludedItems and returns the data saved in the database.
     * @param {ExcludedItemsCreateManyAndReturnArgs} args - Arguments to create many ExcludedItems.
     * @example
     * // Create many ExcludedItems
     * const excludedItems = await prisma.excludedItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExcludedItems and only return the `id`
     * const excludedItemsWithIdOnly = await prisma.excludedItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExcludedItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, ExcludedItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExcludedItems.
     * @param {ExcludedItemsDeleteArgs} args - Arguments to delete one ExcludedItems.
     * @example
     * // Delete one ExcludedItems
     * const ExcludedItems = await prisma.excludedItems.delete({
     *   where: {
     *     // ... filter to delete one ExcludedItems
     *   }
     * })
     * 
     */
    delete<T extends ExcludedItemsDeleteArgs>(args: SelectSubset<T, ExcludedItemsDeleteArgs<ExtArgs>>): Prisma__ExcludedItemsClient<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExcludedItems.
     * @param {ExcludedItemsUpdateArgs} args - Arguments to update one ExcludedItems.
     * @example
     * // Update one ExcludedItems
     * const excludedItems = await prisma.excludedItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExcludedItemsUpdateArgs>(args: SelectSubset<T, ExcludedItemsUpdateArgs<ExtArgs>>): Prisma__ExcludedItemsClient<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExcludedItems.
     * @param {ExcludedItemsDeleteManyArgs} args - Arguments to filter ExcludedItems to delete.
     * @example
     * // Delete a few ExcludedItems
     * const { count } = await prisma.excludedItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExcludedItemsDeleteManyArgs>(args?: SelectSubset<T, ExcludedItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExcludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcludedItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExcludedItems
     * const excludedItems = await prisma.excludedItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExcludedItemsUpdateManyArgs>(args: SelectSubset<T, ExcludedItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExcludedItems and returns the data updated in the database.
     * @param {ExcludedItemsUpdateManyAndReturnArgs} args - Arguments to update many ExcludedItems.
     * @example
     * // Update many ExcludedItems
     * const excludedItems = await prisma.excludedItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExcludedItems and only return the `id`
     * const excludedItemsWithIdOnly = await prisma.excludedItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExcludedItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, ExcludedItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExcludedItems.
     * @param {ExcludedItemsUpsertArgs} args - Arguments to update or create a ExcludedItems.
     * @example
     * // Update or create a ExcludedItems
     * const excludedItems = await prisma.excludedItems.upsert({
     *   create: {
     *     // ... data to create a ExcludedItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExcludedItems we want to update
     *   }
     * })
     */
    upsert<T extends ExcludedItemsUpsertArgs>(args: SelectSubset<T, ExcludedItemsUpsertArgs<ExtArgs>>): Prisma__ExcludedItemsClient<$Result.GetResult<Prisma.$ExcludedItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExcludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcludedItemsCountArgs} args - Arguments to filter ExcludedItems to count.
     * @example
     * // Count the number of ExcludedItems
     * const count = await prisma.excludedItems.count({
     *   where: {
     *     // ... the filter for the ExcludedItems we want to count
     *   }
     * })
    **/
    count<T extends ExcludedItemsCountArgs>(
      args?: Subset<T, ExcludedItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExcludedItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExcludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcludedItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExcludedItemsAggregateArgs>(args: Subset<T, ExcludedItemsAggregateArgs>): Prisma.PrismaPromise<GetExcludedItemsAggregateType<T>>

    /**
     * Group by ExcludedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcludedItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExcludedItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExcludedItemsGroupByArgs['orderBy'] }
        : { orderBy?: ExcludedItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExcludedItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExcludedItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExcludedItems model
   */
  readonly fields: ExcludedItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExcludedItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExcludedItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExcludedItems model
   */
  interface ExcludedItemsFieldRefs {
    readonly id: FieldRef<"ExcludedItems", 'String'>
    readonly item: FieldRef<"ExcludedItems", 'String'>
    readonly packageId: FieldRef<"ExcludedItems", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExcludedItems findUnique
   */
  export type ExcludedItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which ExcludedItems to fetch.
     */
    where: ExcludedItemsWhereUniqueInput
  }

  /**
   * ExcludedItems findUniqueOrThrow
   */
  export type ExcludedItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which ExcludedItems to fetch.
     */
    where: ExcludedItemsWhereUniqueInput
  }

  /**
   * ExcludedItems findFirst
   */
  export type ExcludedItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which ExcludedItems to fetch.
     */
    where?: ExcludedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExcludedItems to fetch.
     */
    orderBy?: ExcludedItemsOrderByWithRelationInput | ExcludedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExcludedItems.
     */
    cursor?: ExcludedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExcludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExcludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExcludedItems.
     */
    distinct?: ExcludedItemsScalarFieldEnum | ExcludedItemsScalarFieldEnum[]
  }

  /**
   * ExcludedItems findFirstOrThrow
   */
  export type ExcludedItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which ExcludedItems to fetch.
     */
    where?: ExcludedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExcludedItems to fetch.
     */
    orderBy?: ExcludedItemsOrderByWithRelationInput | ExcludedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExcludedItems.
     */
    cursor?: ExcludedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExcludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExcludedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExcludedItems.
     */
    distinct?: ExcludedItemsScalarFieldEnum | ExcludedItemsScalarFieldEnum[]
  }

  /**
   * ExcludedItems findMany
   */
  export type ExcludedItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * Filter, which ExcludedItems to fetch.
     */
    where?: ExcludedItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExcludedItems to fetch.
     */
    orderBy?: ExcludedItemsOrderByWithRelationInput | ExcludedItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExcludedItems.
     */
    cursor?: ExcludedItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExcludedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExcludedItems.
     */
    skip?: number
    distinct?: ExcludedItemsScalarFieldEnum | ExcludedItemsScalarFieldEnum[]
  }

  /**
   * ExcludedItems create
   */
  export type ExcludedItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a ExcludedItems.
     */
    data: XOR<ExcludedItemsCreateInput, ExcludedItemsUncheckedCreateInput>
  }

  /**
   * ExcludedItems createMany
   */
  export type ExcludedItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExcludedItems.
     */
    data: ExcludedItemsCreateManyInput | ExcludedItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExcludedItems createManyAndReturn
   */
  export type ExcludedItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * The data used to create many ExcludedItems.
     */
    data: ExcludedItemsCreateManyInput | ExcludedItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExcludedItems update
   */
  export type ExcludedItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a ExcludedItems.
     */
    data: XOR<ExcludedItemsUpdateInput, ExcludedItemsUncheckedUpdateInput>
    /**
     * Choose, which ExcludedItems to update.
     */
    where: ExcludedItemsWhereUniqueInput
  }

  /**
   * ExcludedItems updateMany
   */
  export type ExcludedItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExcludedItems.
     */
    data: XOR<ExcludedItemsUpdateManyMutationInput, ExcludedItemsUncheckedUpdateManyInput>
    /**
     * Filter which ExcludedItems to update
     */
    where?: ExcludedItemsWhereInput
    /**
     * Limit how many ExcludedItems to update.
     */
    limit?: number
  }

  /**
   * ExcludedItems updateManyAndReturn
   */
  export type ExcludedItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * The data used to update ExcludedItems.
     */
    data: XOR<ExcludedItemsUpdateManyMutationInput, ExcludedItemsUncheckedUpdateManyInput>
    /**
     * Filter which ExcludedItems to update
     */
    where?: ExcludedItemsWhereInput
    /**
     * Limit how many ExcludedItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExcludedItems upsert
   */
  export type ExcludedItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the ExcludedItems to update in case it exists.
     */
    where: ExcludedItemsWhereUniqueInput
    /**
     * In case the ExcludedItems found by the `where` argument doesn't exist, create a new ExcludedItems with this data.
     */
    create: XOR<ExcludedItemsCreateInput, ExcludedItemsUncheckedCreateInput>
    /**
     * In case the ExcludedItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExcludedItemsUpdateInput, ExcludedItemsUncheckedUpdateInput>
  }

  /**
   * ExcludedItems delete
   */
  export type ExcludedItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
    /**
     * Filter which ExcludedItems to delete.
     */
    where: ExcludedItemsWhereUniqueInput
  }

  /**
   * ExcludedItems deleteMany
   */
  export type ExcludedItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExcludedItems to delete
     */
    where?: ExcludedItemsWhereInput
    /**
     * Limit how many ExcludedItems to delete.
     */
    limit?: number
  }

  /**
   * ExcludedItems without action
   */
  export type ExcludedItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcludedItems
     */
    select?: ExcludedItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcludedItems
     */
    omit?: ExcludedItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcludedItemsInclude<ExtArgs> | null
  }


  /**
   * Model Blogs
   */

  export type AggregateBlogs = {
    _count: BlogsCountAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  export type BlogsMinAggregateOutputType = {
    id: string | null
    title: string | null
    html: string | null
    thumbnail: string | null
    customerName: string | null
    feedback: string | null
    author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    html: string | null
    thumbnail: string | null
    customerName: string | null
    feedback: string | null
    author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogsCountAggregateOutputType = {
    id: number
    title: number
    html: number
    thumbnail: number
    customerName: number
    feedback: number
    author: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogsMinAggregateInputType = {
    id?: true
    title?: true
    html?: true
    thumbnail?: true
    customerName?: true
    feedback?: true
    author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogsMaxAggregateInputType = {
    id?: true
    title?: true
    html?: true
    thumbnail?: true
    customerName?: true
    feedback?: true
    author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogsCountAggregateInputType = {
    id?: true
    title?: true
    html?: true
    thumbnail?: true
    customerName?: true
    feedback?: true
    author?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to aggregate.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogsMaxAggregateInputType
  }

  export type GetBlogsAggregateType<T extends BlogsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogs[P]>
      : GetScalarType<T[P], AggregateBlogs[P]>
  }




  export type BlogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogsWhereInput
    orderBy?: BlogsOrderByWithAggregationInput | BlogsOrderByWithAggregationInput[]
    by: BlogsScalarFieldEnum[] | BlogsScalarFieldEnum
    having?: BlogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogsCountAggregateInputType | true
    _min?: BlogsMinAggregateInputType
    _max?: BlogsMaxAggregateInputType
  }

  export type BlogsGroupByOutputType = {
    id: string
    title: string
    html: string
    thumbnail: string | null
    customerName: string | null
    feedback: string | null
    author: string
    createdAt: Date
    updatedAt: Date
    _count: BlogsCountAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  type GetBlogsGroupByPayload<T extends BlogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogsGroupByOutputType[P]>
        }
      >
    >


  export type BlogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    html?: boolean
    thumbnail?: boolean
    customerName?: boolean
    feedback?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Blogs$categoriesArgs<ExtArgs>
    images?: boolean | Blogs$imagesArgs<ExtArgs>
    _count?: boolean | BlogsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogs"]>

  export type BlogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    html?: boolean
    thumbnail?: boolean
    customerName?: boolean
    feedback?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogs"]>

  export type BlogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    html?: boolean
    thumbnail?: boolean
    customerName?: boolean
    feedback?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogs"]>

  export type BlogsSelectScalar = {
    id?: boolean
    title?: boolean
    html?: boolean
    thumbnail?: boolean
    customerName?: boolean
    feedback?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "html" | "thumbnail" | "customerName" | "feedback" | "author" | "createdAt" | "updatedAt", ExtArgs["result"]["blogs"]>
  export type BlogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Blogs$categoriesArgs<ExtArgs>
    images?: boolean | Blogs$imagesArgs<ExtArgs>
    _count?: boolean | BlogsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blogs"
    objects: {
      categories: Prisma.$BlogCategoryPayload<ExtArgs>[]
      images: Prisma.$BlogImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      html: string
      thumbnail: string | null
      customerName: string | null
      feedback: string | null
      author: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogs"]>
    composites: {}
  }

  type BlogsGetPayload<S extends boolean | null | undefined | BlogsDefaultArgs> = $Result.GetResult<Prisma.$BlogsPayload, S>

  type BlogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogsCountAggregateInputType | true
    }

  export interface BlogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blogs'], meta: { name: 'Blogs' } }
    /**
     * Find zero or one Blogs that matches the filter.
     * @param {BlogsFindUniqueArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogsFindUniqueArgs>(args: SelectSubset<T, BlogsFindUniqueArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogsFindUniqueOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogsFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindFirstArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogsFindFirstArgs>(args?: SelectSubset<T, BlogsFindFirstArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindFirstOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogsFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blogs.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogsWithIdOnly = await prisma.blogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogsFindManyArgs>(args?: SelectSubset<T, BlogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blogs.
     * @param {BlogsCreateArgs} args - Arguments to create a Blogs.
     * @example
     * // Create one Blogs
     * const Blogs = await prisma.blogs.create({
     *   data: {
     *     // ... data to create a Blogs
     *   }
     * })
     * 
     */
    create<T extends BlogsCreateArgs>(args: SelectSubset<T, BlogsCreateArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogsCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogsCreateManyArgs>(args?: SelectSubset<T, BlogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogsCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogsWithIdOnly = await prisma.blogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogsCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blogs.
     * @param {BlogsDeleteArgs} args - Arguments to delete one Blogs.
     * @example
     * // Delete one Blogs
     * const Blogs = await prisma.blogs.delete({
     *   where: {
     *     // ... filter to delete one Blogs
     *   }
     * })
     * 
     */
    delete<T extends BlogsDeleteArgs>(args: SelectSubset<T, BlogsDeleteArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blogs.
     * @param {BlogsUpdateArgs} args - Arguments to update one Blogs.
     * @example
     * // Update one Blogs
     * const blogs = await prisma.blogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogsUpdateArgs>(args: SelectSubset<T, BlogsUpdateArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogsDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogsDeleteManyArgs>(args?: SelectSubset<T, BlogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogsUpdateManyArgs>(args: SelectSubset<T, BlogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogsUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogsWithIdOnly = await prisma.blogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogsUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blogs.
     * @param {BlogsUpsertArgs} args - Arguments to update or create a Blogs.
     * @example
     * // Update or create a Blogs
     * const blogs = await prisma.blogs.upsert({
     *   create: {
     *     // ... data to create a Blogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogs we want to update
     *   }
     * })
     */
    upsert<T extends BlogsUpsertArgs>(args: SelectSubset<T, BlogsUpsertArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blogs.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogsCountArgs>(
      args?: Subset<T, BlogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogsAggregateArgs>(args: Subset<T, BlogsAggregateArgs>): Prisma.PrismaPromise<GetBlogsAggregateType<T>>

    /**
     * Group by Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogsGroupByArgs['orderBy'] }
        : { orderBy?: BlogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blogs model
   */
  readonly fields: BlogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Blogs$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Blogs$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Blogs$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Blogs$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blogs model
   */
  interface BlogsFieldRefs {
    readonly id: FieldRef<"Blogs", 'String'>
    readonly title: FieldRef<"Blogs", 'String'>
    readonly html: FieldRef<"Blogs", 'String'>
    readonly thumbnail: FieldRef<"Blogs", 'String'>
    readonly customerName: FieldRef<"Blogs", 'String'>
    readonly feedback: FieldRef<"Blogs", 'String'>
    readonly author: FieldRef<"Blogs", 'String'>
    readonly createdAt: FieldRef<"Blogs", 'DateTime'>
    readonly updatedAt: FieldRef<"Blogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blogs findUnique
   */
  export type BlogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs findUniqueOrThrow
   */
  export type BlogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs findFirst
   */
  export type BlogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs findFirstOrThrow
   */
  export type BlogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs findMany
   */
  export type BlogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs create
   */
  export type BlogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The data needed to create a Blogs.
     */
    data: XOR<BlogsCreateInput, BlogsUncheckedCreateInput>
  }

  /**
   * Blogs createMany
   */
  export type BlogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogsCreateManyInput | BlogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blogs createManyAndReturn
   */
  export type BlogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogsCreateManyInput | BlogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blogs update
   */
  export type BlogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The data needed to update a Blogs.
     */
    data: XOR<BlogsUpdateInput, BlogsUncheckedUpdateInput>
    /**
     * Choose, which Blogs to update.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs updateMany
   */
  export type BlogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogsUpdateManyMutationInput, BlogsUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogsWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blogs updateManyAndReturn
   */
  export type BlogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogsUpdateManyMutationInput, BlogsUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogsWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blogs upsert
   */
  export type BlogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The filter to search for the Blogs to update in case it exists.
     */
    where: BlogsWhereUniqueInput
    /**
     * In case the Blogs found by the `where` argument doesn't exist, create a new Blogs with this data.
     */
    create: XOR<BlogsCreateInput, BlogsUncheckedCreateInput>
    /**
     * In case the Blogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogsUpdateInput, BlogsUncheckedUpdateInput>
  }

  /**
   * Blogs delete
   */
  export type BlogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter which Blogs to delete.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs deleteMany
   */
  export type BlogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogsWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blogs.categories
   */
  export type Blogs$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    cursor?: BlogCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * Blogs.images
   */
  export type Blogs$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    where?: BlogImagesWhereInput
    orderBy?: BlogImagesOrderByWithRelationInput | BlogImagesOrderByWithRelationInput[]
    cursor?: BlogImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogImagesScalarFieldEnum | BlogImagesScalarFieldEnum[]
  }

  /**
   * Blogs without action
   */
  export type BlogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
  }


  /**
   * Model BlogImages
   */

  export type AggregateBlogImages = {
    _count: BlogImagesCountAggregateOutputType | null
    _min: BlogImagesMinAggregateOutputType | null
    _max: BlogImagesMaxAggregateOutputType | null
  }

  export type BlogImagesMinAggregateOutputType = {
    id: string | null
    url: string | null
    blogId: string | null
  }

  export type BlogImagesMaxAggregateOutputType = {
    id: string | null
    url: string | null
    blogId: string | null
  }

  export type BlogImagesCountAggregateOutputType = {
    id: number
    url: number
    blogId: number
    _all: number
  }


  export type BlogImagesMinAggregateInputType = {
    id?: true
    url?: true
    blogId?: true
  }

  export type BlogImagesMaxAggregateInputType = {
    id?: true
    url?: true
    blogId?: true
  }

  export type BlogImagesCountAggregateInputType = {
    id?: true
    url?: true
    blogId?: true
    _all?: true
  }

  export type BlogImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogImages to aggregate.
     */
    where?: BlogImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogImages to fetch.
     */
    orderBy?: BlogImagesOrderByWithRelationInput | BlogImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogImages
    **/
    _count?: true | BlogImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogImagesMaxAggregateInputType
  }

  export type GetBlogImagesAggregateType<T extends BlogImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogImages[P]>
      : GetScalarType<T[P], AggregateBlogImages[P]>
  }




  export type BlogImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogImagesWhereInput
    orderBy?: BlogImagesOrderByWithAggregationInput | BlogImagesOrderByWithAggregationInput[]
    by: BlogImagesScalarFieldEnum[] | BlogImagesScalarFieldEnum
    having?: BlogImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogImagesCountAggregateInputType | true
    _min?: BlogImagesMinAggregateInputType
    _max?: BlogImagesMaxAggregateInputType
  }

  export type BlogImagesGroupByOutputType = {
    id: string
    url: string
    blogId: string
    _count: BlogImagesCountAggregateOutputType | null
    _min: BlogImagesMinAggregateOutputType | null
    _max: BlogImagesMaxAggregateOutputType | null
  }

  type GetBlogImagesGroupByPayload<T extends BlogImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogImagesGroupByOutputType[P]>
            : GetScalarType<T[P], BlogImagesGroupByOutputType[P]>
        }
      >
    >


  export type BlogImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    blogId?: boolean
    blog?: boolean | BlogsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogImages"]>

  export type BlogImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    blogId?: boolean
    blog?: boolean | BlogsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogImages"]>

  export type BlogImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    blogId?: boolean
    blog?: boolean | BlogsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogImages"]>

  export type BlogImagesSelectScalar = {
    id?: boolean
    url?: boolean
    blogId?: boolean
  }

  export type BlogImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "blogId", ExtArgs["result"]["blogImages"]>
  export type BlogImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogsDefaultArgs<ExtArgs>
  }
  export type BlogImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogsDefaultArgs<ExtArgs>
  }
  export type BlogImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogsDefaultArgs<ExtArgs>
  }

  export type $BlogImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogImages"
    objects: {
      blog: Prisma.$BlogsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      blogId: string
    }, ExtArgs["result"]["blogImages"]>
    composites: {}
  }

  type BlogImagesGetPayload<S extends boolean | null | undefined | BlogImagesDefaultArgs> = $Result.GetResult<Prisma.$BlogImagesPayload, S>

  type BlogImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogImagesCountAggregateInputType | true
    }

  export interface BlogImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogImages'], meta: { name: 'BlogImages' } }
    /**
     * Find zero or one BlogImages that matches the filter.
     * @param {BlogImagesFindUniqueArgs} args - Arguments to find a BlogImages
     * @example
     * // Get one BlogImages
     * const blogImages = await prisma.blogImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogImagesFindUniqueArgs>(args: SelectSubset<T, BlogImagesFindUniqueArgs<ExtArgs>>): Prisma__BlogImagesClient<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogImagesFindUniqueOrThrowArgs} args - Arguments to find a BlogImages
     * @example
     * // Get one BlogImages
     * const blogImages = await prisma.blogImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogImagesClient<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogImagesFindFirstArgs} args - Arguments to find a BlogImages
     * @example
     * // Get one BlogImages
     * const blogImages = await prisma.blogImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogImagesFindFirstArgs>(args?: SelectSubset<T, BlogImagesFindFirstArgs<ExtArgs>>): Prisma__BlogImagesClient<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogImagesFindFirstOrThrowArgs} args - Arguments to find a BlogImages
     * @example
     * // Get one BlogImages
     * const blogImages = await prisma.blogImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogImagesClient<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogImages
     * const blogImages = await prisma.blogImages.findMany()
     * 
     * // Get first 10 BlogImages
     * const blogImages = await prisma.blogImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogImagesWithIdOnly = await prisma.blogImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogImagesFindManyArgs>(args?: SelectSubset<T, BlogImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogImages.
     * @param {BlogImagesCreateArgs} args - Arguments to create a BlogImages.
     * @example
     * // Create one BlogImages
     * const BlogImages = await prisma.blogImages.create({
     *   data: {
     *     // ... data to create a BlogImages
     *   }
     * })
     * 
     */
    create<T extends BlogImagesCreateArgs>(args: SelectSubset<T, BlogImagesCreateArgs<ExtArgs>>): Prisma__BlogImagesClient<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogImages.
     * @param {BlogImagesCreateManyArgs} args - Arguments to create many BlogImages.
     * @example
     * // Create many BlogImages
     * const blogImages = await prisma.blogImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogImagesCreateManyArgs>(args?: SelectSubset<T, BlogImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogImages and returns the data saved in the database.
     * @param {BlogImagesCreateManyAndReturnArgs} args - Arguments to create many BlogImages.
     * @example
     * // Create many BlogImages
     * const blogImages = await prisma.blogImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogImages and only return the `id`
     * const blogImagesWithIdOnly = await prisma.blogImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogImages.
     * @param {BlogImagesDeleteArgs} args - Arguments to delete one BlogImages.
     * @example
     * // Delete one BlogImages
     * const BlogImages = await prisma.blogImages.delete({
     *   where: {
     *     // ... filter to delete one BlogImages
     *   }
     * })
     * 
     */
    delete<T extends BlogImagesDeleteArgs>(args: SelectSubset<T, BlogImagesDeleteArgs<ExtArgs>>): Prisma__BlogImagesClient<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogImages.
     * @param {BlogImagesUpdateArgs} args - Arguments to update one BlogImages.
     * @example
     * // Update one BlogImages
     * const blogImages = await prisma.blogImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogImagesUpdateArgs>(args: SelectSubset<T, BlogImagesUpdateArgs<ExtArgs>>): Prisma__BlogImagesClient<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogImages.
     * @param {BlogImagesDeleteManyArgs} args - Arguments to filter BlogImages to delete.
     * @example
     * // Delete a few BlogImages
     * const { count } = await prisma.blogImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogImagesDeleteManyArgs>(args?: SelectSubset<T, BlogImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogImages
     * const blogImages = await prisma.blogImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogImagesUpdateManyArgs>(args: SelectSubset<T, BlogImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogImages and returns the data updated in the database.
     * @param {BlogImagesUpdateManyAndReturnArgs} args - Arguments to update many BlogImages.
     * @example
     * // Update many BlogImages
     * const blogImages = await prisma.blogImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogImages and only return the `id`
     * const blogImagesWithIdOnly = await prisma.blogImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogImages.
     * @param {BlogImagesUpsertArgs} args - Arguments to update or create a BlogImages.
     * @example
     * // Update or create a BlogImages
     * const blogImages = await prisma.blogImages.upsert({
     *   create: {
     *     // ... data to create a BlogImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogImages we want to update
     *   }
     * })
     */
    upsert<T extends BlogImagesUpsertArgs>(args: SelectSubset<T, BlogImagesUpsertArgs<ExtArgs>>): Prisma__BlogImagesClient<$Result.GetResult<Prisma.$BlogImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogImagesCountArgs} args - Arguments to filter BlogImages to count.
     * @example
     * // Count the number of BlogImages
     * const count = await prisma.blogImages.count({
     *   where: {
     *     // ... the filter for the BlogImages we want to count
     *   }
     * })
    **/
    count<T extends BlogImagesCountArgs>(
      args?: Subset<T, BlogImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogImagesAggregateArgs>(args: Subset<T, BlogImagesAggregateArgs>): Prisma.PrismaPromise<GetBlogImagesAggregateType<T>>

    /**
     * Group by BlogImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogImagesGroupByArgs['orderBy'] }
        : { orderBy?: BlogImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogImages model
   */
  readonly fields: BlogImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogsDefaultArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogImages model
   */
  interface BlogImagesFieldRefs {
    readonly id: FieldRef<"BlogImages", 'String'>
    readonly url: FieldRef<"BlogImages", 'String'>
    readonly blogId: FieldRef<"BlogImages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogImages findUnique
   */
  export type BlogImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * Filter, which BlogImages to fetch.
     */
    where: BlogImagesWhereUniqueInput
  }

  /**
   * BlogImages findUniqueOrThrow
   */
  export type BlogImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * Filter, which BlogImages to fetch.
     */
    where: BlogImagesWhereUniqueInput
  }

  /**
   * BlogImages findFirst
   */
  export type BlogImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * Filter, which BlogImages to fetch.
     */
    where?: BlogImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogImages to fetch.
     */
    orderBy?: BlogImagesOrderByWithRelationInput | BlogImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogImages.
     */
    cursor?: BlogImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogImages.
     */
    distinct?: BlogImagesScalarFieldEnum | BlogImagesScalarFieldEnum[]
  }

  /**
   * BlogImages findFirstOrThrow
   */
  export type BlogImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * Filter, which BlogImages to fetch.
     */
    where?: BlogImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogImages to fetch.
     */
    orderBy?: BlogImagesOrderByWithRelationInput | BlogImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogImages.
     */
    cursor?: BlogImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogImages.
     */
    distinct?: BlogImagesScalarFieldEnum | BlogImagesScalarFieldEnum[]
  }

  /**
   * BlogImages findMany
   */
  export type BlogImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * Filter, which BlogImages to fetch.
     */
    where?: BlogImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogImages to fetch.
     */
    orderBy?: BlogImagesOrderByWithRelationInput | BlogImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogImages.
     */
    cursor?: BlogImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogImages.
     */
    skip?: number
    distinct?: BlogImagesScalarFieldEnum | BlogImagesScalarFieldEnum[]
  }

  /**
   * BlogImages create
   */
  export type BlogImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogImages.
     */
    data: XOR<BlogImagesCreateInput, BlogImagesUncheckedCreateInput>
  }

  /**
   * BlogImages createMany
   */
  export type BlogImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogImages.
     */
    data: BlogImagesCreateManyInput | BlogImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogImages createManyAndReturn
   */
  export type BlogImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * The data used to create many BlogImages.
     */
    data: BlogImagesCreateManyInput | BlogImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogImages update
   */
  export type BlogImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogImages.
     */
    data: XOR<BlogImagesUpdateInput, BlogImagesUncheckedUpdateInput>
    /**
     * Choose, which BlogImages to update.
     */
    where: BlogImagesWhereUniqueInput
  }

  /**
   * BlogImages updateMany
   */
  export type BlogImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogImages.
     */
    data: XOR<BlogImagesUpdateManyMutationInput, BlogImagesUncheckedUpdateManyInput>
    /**
     * Filter which BlogImages to update
     */
    where?: BlogImagesWhereInput
    /**
     * Limit how many BlogImages to update.
     */
    limit?: number
  }

  /**
   * BlogImages updateManyAndReturn
   */
  export type BlogImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * The data used to update BlogImages.
     */
    data: XOR<BlogImagesUpdateManyMutationInput, BlogImagesUncheckedUpdateManyInput>
    /**
     * Filter which BlogImages to update
     */
    where?: BlogImagesWhereInput
    /**
     * Limit how many BlogImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogImages upsert
   */
  export type BlogImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogImages to update in case it exists.
     */
    where: BlogImagesWhereUniqueInput
    /**
     * In case the BlogImages found by the `where` argument doesn't exist, create a new BlogImages with this data.
     */
    create: XOR<BlogImagesCreateInput, BlogImagesUncheckedCreateInput>
    /**
     * In case the BlogImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogImagesUpdateInput, BlogImagesUncheckedUpdateInput>
  }

  /**
   * BlogImages delete
   */
  export type BlogImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
    /**
     * Filter which BlogImages to delete.
     */
    where: BlogImagesWhereUniqueInput
  }

  /**
   * BlogImages deleteMany
   */
  export type BlogImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogImages to delete
     */
    where?: BlogImagesWhereInput
    /**
     * Limit how many BlogImages to delete.
     */
    limit?: number
  }

  /**
   * BlogImages without action
   */
  export type BlogImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogImages
     */
    select?: BlogImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogImages
     */
    omit?: BlogImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogImagesInclude<ExtArgs> | null
  }


  /**
   * Model BlogCategory
   */

  export type AggregateBlogCategory = {
    _count: BlogCategoryCountAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  export type BlogCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BlogCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BlogCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BlogCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BlogCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BlogCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BlogCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategory to aggregate.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogCategories
    **/
    _count?: true | BlogCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type GetBlogCategoryAggregateType<T extends BlogCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogCategory[P]>
      : GetScalarType<T[P], AggregateBlogCategory[P]>
  }




  export type BlogCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithAggregationInput | BlogCategoryOrderByWithAggregationInput[]
    by: BlogCategoryScalarFieldEnum[] | BlogCategoryScalarFieldEnum
    having?: BlogCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCategoryCountAggregateInputType | true
    _min?: BlogCategoryMinAggregateInputType
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type BlogCategoryGroupByOutputType = {
    id: string
    name: string
    _count: BlogCategoryCountAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  type GetBlogCategoryGroupByPayload<T extends BlogCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlogCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    blogs?: boolean | BlogCategory$blogsArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BlogCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["blogCategory"]>
  export type BlogCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | BlogCategory$blogsArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogCategory"
    objects: {
      blogs: Prisma.$BlogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["blogCategory"]>
    composites: {}
  }

  type BlogCategoryGetPayload<S extends boolean | null | undefined | BlogCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlogCategoryPayload, S>

  type BlogCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCategoryCountAggregateInputType | true
    }

  export interface BlogCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogCategory'], meta: { name: 'BlogCategory' } }
    /**
     * Find zero or one BlogCategory that matches the filter.
     * @param {BlogCategoryFindUniqueArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCategoryFindUniqueArgs>(args: SelectSubset<T, BlogCategoryFindUniqueArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCategoryFindFirstArgs>(args?: SelectSubset<T, BlogCategoryFindFirstArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany()
     * 
     * // Get first 10 BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogCategoryFindManyArgs>(args?: SelectSubset<T, BlogCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogCategory.
     * @param {BlogCategoryCreateArgs} args - Arguments to create a BlogCategory.
     * @example
     * // Create one BlogCategory
     * const BlogCategory = await prisma.blogCategory.create({
     *   data: {
     *     // ... data to create a BlogCategory
     *   }
     * })
     * 
     */
    create<T extends BlogCategoryCreateArgs>(args: SelectSubset<T, BlogCategoryCreateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogCategories.
     * @param {BlogCategoryCreateManyArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCategoryCreateManyArgs>(args?: SelectSubset<T, BlogCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogCategories and returns the data saved in the database.
     * @param {BlogCategoryCreateManyAndReturnArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogCategories and only return the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogCategory.
     * @param {BlogCategoryDeleteArgs} args - Arguments to delete one BlogCategory.
     * @example
     * // Delete one BlogCategory
     * const BlogCategory = await prisma.blogCategory.delete({
     *   where: {
     *     // ... filter to delete one BlogCategory
     *   }
     * })
     * 
     */
    delete<T extends BlogCategoryDeleteArgs>(args: SelectSubset<T, BlogCategoryDeleteArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogCategory.
     * @param {BlogCategoryUpdateArgs} args - Arguments to update one BlogCategory.
     * @example
     * // Update one BlogCategory
     * const blogCategory = await prisma.blogCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCategoryUpdateArgs>(args: SelectSubset<T, BlogCategoryUpdateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogCategories.
     * @param {BlogCategoryDeleteManyArgs} args - Arguments to filter BlogCategories to delete.
     * @example
     * // Delete a few BlogCategories
     * const { count } = await prisma.blogCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCategoryDeleteManyArgs>(args?: SelectSubset<T, BlogCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCategoryUpdateManyArgs>(args: SelectSubset<T, BlogCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories and returns the data updated in the database.
     * @param {BlogCategoryUpdateManyAndReturnArgs} args - Arguments to update many BlogCategories.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogCategories and only return the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogCategory.
     * @param {BlogCategoryUpsertArgs} args - Arguments to update or create a BlogCategory.
     * @example
     * // Update or create a BlogCategory
     * const blogCategory = await prisma.blogCategory.upsert({
     *   create: {
     *     // ... data to create a BlogCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogCategory we want to update
     *   }
     * })
     */
    upsert<T extends BlogCategoryUpsertArgs>(args: SelectSubset<T, BlogCategoryUpsertArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryCountArgs} args - Arguments to filter BlogCategories to count.
     * @example
     * // Count the number of BlogCategories
     * const count = await prisma.blogCategory.count({
     *   where: {
     *     // ... the filter for the BlogCategories we want to count
     *   }
     * })
    **/
    count<T extends BlogCategoryCountArgs>(
      args?: Subset<T, BlogCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogCategoryAggregateArgs>(args: Subset<T, BlogCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlogCategoryAggregateType<T>>

    /**
     * Group by BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlogCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogCategory model
   */
  readonly fields: BlogCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends BlogCategory$blogsArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogCategory model
   */
  interface BlogCategoryFieldRefs {
    readonly id: FieldRef<"BlogCategory", 'String'>
    readonly name: FieldRef<"BlogCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogCategory findUnique
   */
  export type BlogCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findUniqueOrThrow
   */
  export type BlogCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findFirst
   */
  export type BlogCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findFirstOrThrow
   */
  export type BlogCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findMany
   */
  export type BlogCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategories to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory create
   */
  export type BlogCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogCategory.
     */
    data: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
  }

  /**
   * BlogCategory createMany
   */
  export type BlogCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogCategory createManyAndReturn
   */
  export type BlogCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogCategory update
   */
  export type BlogCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogCategory.
     */
    data: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlogCategory to update.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory updateMany
   */
  export type BlogCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
  }

  /**
   * BlogCategory updateManyAndReturn
   */
  export type BlogCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
  }

  /**
   * BlogCategory upsert
   */
  export type BlogCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogCategory to update in case it exists.
     */
    where: BlogCategoryWhereUniqueInput
    /**
     * In case the BlogCategory found by the `where` argument doesn't exist, create a new BlogCategory with this data.
     */
    create: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
    /**
     * In case the BlogCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
  }

  /**
   * BlogCategory delete
   */
  export type BlogCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter which BlogCategory to delete.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory deleteMany
   */
  export type BlogCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategories to delete
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to delete.
     */
    limit?: number
  }

  /**
   * BlogCategory.blogs
   */
  export type BlogCategory$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    where?: BlogsWhereInput
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    cursor?: BlogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * BlogCategory without action
   */
  export type BlogCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Destinations
   */

  export type AggregateDestinations = {
    _count: DestinationsCountAggregateOutputType | null
    _min: DestinationsMinAggregateOutputType | null
    _max: DestinationsMaxAggregateOutputType | null
  }

  export type DestinationsMinAggregateOutputType = {
    id: string | null
    name: string | null
    tag: string | null
    title: string | null
    description: string | null
    image: string | null
    country: string | null
    visa: string | null
    languagesSpoken: string | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tag: string | null
    title: string | null
    description: string | null
    image: string | null
    country: string | null
    visa: string | null
    languagesSpoken: string | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationsCountAggregateOutputType = {
    id: number
    name: number
    tag: number
    title: number
    description: number
    image: number
    country: number
    visa: number
    languagesSpoken: number
    currency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationsMinAggregateInputType = {
    id?: true
    name?: true
    tag?: true
    title?: true
    description?: true
    image?: true
    country?: true
    visa?: true
    languagesSpoken?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationsMaxAggregateInputType = {
    id?: true
    name?: true
    tag?: true
    title?: true
    description?: true
    image?: true
    country?: true
    visa?: true
    languagesSpoken?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationsCountAggregateInputType = {
    id?: true
    name?: true
    tag?: true
    title?: true
    description?: true
    image?: true
    country?: true
    visa?: true
    languagesSpoken?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to aggregate.
     */
    where?: DestinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationsOrderByWithRelationInput | DestinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationsMaxAggregateInputType
  }

  export type GetDestinationsAggregateType<T extends DestinationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinations[P]>
      : GetScalarType<T[P], AggregateDestinations[P]>
  }




  export type DestinationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationsWhereInput
    orderBy?: DestinationsOrderByWithAggregationInput | DestinationsOrderByWithAggregationInput[]
    by: DestinationsScalarFieldEnum[] | DestinationsScalarFieldEnum
    having?: DestinationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationsCountAggregateInputType | true
    _min?: DestinationsMinAggregateInputType
    _max?: DestinationsMaxAggregateInputType
  }

  export type DestinationsGroupByOutputType = {
    id: string
    name: string
    tag: string | null
    title: string | null
    description: string
    image: string | null
    country: string
    visa: string | null
    languagesSpoken: string | null
    currency: string | null
    createdAt: Date
    updatedAt: Date
    _count: DestinationsCountAggregateOutputType | null
    _min: DestinationsMinAggregateOutputType | null
    _max: DestinationsMaxAggregateOutputType | null
  }

  type GetDestinationsGroupByPayload<T extends DestinationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationsGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationsGroupByOutputType[P]>
        }
      >
    >


  export type DestinationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tag?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    country?: boolean
    visa?: boolean
    languagesSpoken?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    places?: boolean | Destinations$placesArgs<ExtArgs>
    faqs?: boolean | Destinations$faqsArgs<ExtArgs>
    _count?: boolean | DestinationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinations"]>

  export type DestinationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tag?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    country?: boolean
    visa?: boolean
    languagesSpoken?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destinations"]>

  export type DestinationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tag?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    country?: boolean
    visa?: boolean
    languagesSpoken?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destinations"]>

  export type DestinationsSelectScalar = {
    id?: boolean
    name?: boolean
    tag?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    country?: boolean
    visa?: boolean
    languagesSpoken?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tag" | "title" | "description" | "image" | "country" | "visa" | "languagesSpoken" | "currency" | "createdAt" | "updatedAt", ExtArgs["result"]["destinations"]>
  export type DestinationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | Destinations$placesArgs<ExtArgs>
    faqs?: boolean | Destinations$faqsArgs<ExtArgs>
    _count?: boolean | DestinationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DestinationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DestinationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destinations"
    objects: {
      places: Prisma.$PlacesPayload<ExtArgs>[]
      faqs: Prisma.$DestinationFAQPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tag: string | null
      title: string | null
      description: string
      image: string | null
      country: string
      visa: string | null
      languagesSpoken: string | null
      currency: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destinations"]>
    composites: {}
  }

  type DestinationsGetPayload<S extends boolean | null | undefined | DestinationsDefaultArgs> = $Result.GetResult<Prisma.$DestinationsPayload, S>

  type DestinationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationsCountAggregateInputType | true
    }

  export interface DestinationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destinations'], meta: { name: 'Destinations' } }
    /**
     * Find zero or one Destinations that matches the filter.
     * @param {DestinationsFindUniqueArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationsFindUniqueArgs>(args: SelectSubset<T, DestinationsFindUniqueArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destinations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationsFindUniqueOrThrowArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationsFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsFindFirstArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationsFindFirstArgs>(args?: SelectSubset<T, DestinationsFindFirstArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destinations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsFindFirstOrThrowArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationsFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destinations.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destinations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationsWithIdOnly = await prisma.destinations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationsFindManyArgs>(args?: SelectSubset<T, DestinationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destinations.
     * @param {DestinationsCreateArgs} args - Arguments to create a Destinations.
     * @example
     * // Create one Destinations
     * const Destinations = await prisma.destinations.create({
     *   data: {
     *     // ... data to create a Destinations
     *   }
     * })
     * 
     */
    create<T extends DestinationsCreateArgs>(args: SelectSubset<T, DestinationsCreateArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationsCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destinations = await prisma.destinations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationsCreateManyArgs>(args?: SelectSubset<T, DestinationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationsCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destinations = await prisma.destinations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationsWithIdOnly = await prisma.destinations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationsCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destinations.
     * @param {DestinationsDeleteArgs} args - Arguments to delete one Destinations.
     * @example
     * // Delete one Destinations
     * const Destinations = await prisma.destinations.delete({
     *   where: {
     *     // ... filter to delete one Destinations
     *   }
     * })
     * 
     */
    delete<T extends DestinationsDeleteArgs>(args: SelectSubset<T, DestinationsDeleteArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destinations.
     * @param {DestinationsUpdateArgs} args - Arguments to update one Destinations.
     * @example
     * // Update one Destinations
     * const destinations = await prisma.destinations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationsUpdateArgs>(args: SelectSubset<T, DestinationsUpdateArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationsDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destinations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationsDeleteManyArgs>(args?: SelectSubset<T, DestinationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destinations = await prisma.destinations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationsUpdateManyArgs>(args: SelectSubset<T, DestinationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationsUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destinations = await prisma.destinations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationsWithIdOnly = await prisma.destinations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationsUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destinations.
     * @param {DestinationsUpsertArgs} args - Arguments to update or create a Destinations.
     * @example
     * // Update or create a Destinations
     * const destinations = await prisma.destinations.upsert({
     *   create: {
     *     // ... data to create a Destinations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destinations we want to update
     *   }
     * })
     */
    upsert<T extends DestinationsUpsertArgs>(args: SelectSubset<T, DestinationsUpsertArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destinations.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationsCountArgs>(
      args?: Subset<T, DestinationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationsAggregateArgs>(args: Subset<T, DestinationsAggregateArgs>): Prisma.PrismaPromise<GetDestinationsAggregateType<T>>

    /**
     * Group by Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationsGroupByArgs['orderBy'] }
        : { orderBy?: DestinationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destinations model
   */
  readonly fields: DestinationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destinations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    places<T extends Destinations$placesArgs<ExtArgs> = {}>(args?: Subset<T, Destinations$placesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faqs<T extends Destinations$faqsArgs<ExtArgs> = {}>(args?: Subset<T, Destinations$faqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destinations model
   */
  interface DestinationsFieldRefs {
    readonly id: FieldRef<"Destinations", 'String'>
    readonly name: FieldRef<"Destinations", 'String'>
    readonly tag: FieldRef<"Destinations", 'String'>
    readonly title: FieldRef<"Destinations", 'String'>
    readonly description: FieldRef<"Destinations", 'String'>
    readonly image: FieldRef<"Destinations", 'String'>
    readonly country: FieldRef<"Destinations", 'String'>
    readonly visa: FieldRef<"Destinations", 'String'>
    readonly languagesSpoken: FieldRef<"Destinations", 'String'>
    readonly currency: FieldRef<"Destinations", 'String'>
    readonly createdAt: FieldRef<"Destinations", 'DateTime'>
    readonly updatedAt: FieldRef<"Destinations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Destinations findUnique
   */
  export type DestinationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where: DestinationsWhereUniqueInput
  }

  /**
   * Destinations findUniqueOrThrow
   */
  export type DestinationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where: DestinationsWhereUniqueInput
  }

  /**
   * Destinations findFirst
   */
  export type DestinationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationsOrderByWithRelationInput | DestinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * Destinations findFirstOrThrow
   */
  export type DestinationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationsOrderByWithRelationInput | DestinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * Destinations findMany
   */
  export type DestinationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationsOrderByWithRelationInput | DestinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * Destinations create
   */
  export type DestinationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Destinations.
     */
    data: XOR<DestinationsCreateInput, DestinationsUncheckedCreateInput>
  }

  /**
   * Destinations createMany
   */
  export type DestinationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationsCreateManyInput | DestinationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destinations createManyAndReturn
   */
  export type DestinationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationsCreateManyInput | DestinationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destinations update
   */
  export type DestinationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Destinations.
     */
    data: XOR<DestinationsUpdateInput, DestinationsUncheckedUpdateInput>
    /**
     * Choose, which Destinations to update.
     */
    where: DestinationsWhereUniqueInput
  }

  /**
   * Destinations updateMany
   */
  export type DestinationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationsUpdateManyMutationInput, DestinationsUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationsWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destinations updateManyAndReturn
   */
  export type DestinationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationsUpdateManyMutationInput, DestinationsUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationsWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destinations upsert
   */
  export type DestinationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Destinations to update in case it exists.
     */
    where: DestinationsWhereUniqueInput
    /**
     * In case the Destinations found by the `where` argument doesn't exist, create a new Destinations with this data.
     */
    create: XOR<DestinationsCreateInput, DestinationsUncheckedCreateInput>
    /**
     * In case the Destinations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationsUpdateInput, DestinationsUncheckedUpdateInput>
  }

  /**
   * Destinations delete
   */
  export type DestinationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
    /**
     * Filter which Destinations to delete.
     */
    where: DestinationsWhereUniqueInput
  }

  /**
   * Destinations deleteMany
   */
  export type DestinationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationsWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destinations.places
   */
  export type Destinations$placesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    where?: PlacesWhereInput
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    cursor?: PlacesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * Destinations.faqs
   */
  export type Destinations$faqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    where?: DestinationFAQWhereInput
    orderBy?: DestinationFAQOrderByWithRelationInput | DestinationFAQOrderByWithRelationInput[]
    cursor?: DestinationFAQWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationFAQScalarFieldEnum | DestinationFAQScalarFieldEnum[]
  }

  /**
   * Destinations without action
   */
  export type DestinationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinations
     */
    select?: DestinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinations
     */
    omit?: DestinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationsInclude<ExtArgs> | null
  }


  /**
   * Model Places
   */

  export type AggregatePlaces = {
    _count: PlacesCountAggregateOutputType | null
    _min: PlacesMinAggregateOutputType | null
    _max: PlacesMaxAggregateOutputType | null
  }

  export type PlacesMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    description: string | null
    destinationId: string | null
  }

  export type PlacesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    description: string | null
    destinationId: string | null
  }

  export type PlacesCountAggregateOutputType = {
    id: number
    name: number
    image: number
    description: number
    destinationId: number
    _all: number
  }


  export type PlacesMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    destinationId?: true
  }

  export type PlacesMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    destinationId?: true
  }

  export type PlacesCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    destinationId?: true
    _all?: true
  }

  export type PlacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to aggregate.
     */
    where?: PlacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacesMaxAggregateInputType
  }

  export type GetPlacesAggregateType<T extends PlacesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaces[P]>
      : GetScalarType<T[P], AggregatePlaces[P]>
  }




  export type PlacesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacesWhereInput
    orderBy?: PlacesOrderByWithAggregationInput | PlacesOrderByWithAggregationInput[]
    by: PlacesScalarFieldEnum[] | PlacesScalarFieldEnum
    having?: PlacesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacesCountAggregateInputType | true
    _min?: PlacesMinAggregateInputType
    _max?: PlacesMaxAggregateInputType
  }

  export type PlacesGroupByOutputType = {
    id: string
    name: string
    image: string | null
    description: string
    destinationId: string
    _count: PlacesCountAggregateOutputType | null
    _min: PlacesMinAggregateOutputType | null
    _max: PlacesMaxAggregateOutputType | null
  }

  type GetPlacesGroupByPayload<T extends PlacesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacesGroupByOutputType[P]>
            : GetScalarType<T[P], PlacesGroupByOutputType[P]>
        }
      >
    >


  export type PlacesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["places"]>

  export type PlacesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["places"]>

  export type PlacesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["places"]>

  export type PlacesSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    destinationId?: boolean
  }

  export type PlacesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "description" | "destinationId", ExtArgs["result"]["places"]>
  export type PlacesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }
  export type PlacesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }
  export type PlacesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }

  export type $PlacesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Places"
    objects: {
      destination: Prisma.$DestinationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string | null
      description: string
      destinationId: string
    }, ExtArgs["result"]["places"]>
    composites: {}
  }

  type PlacesGetPayload<S extends boolean | null | undefined | PlacesDefaultArgs> = $Result.GetResult<Prisma.$PlacesPayload, S>

  type PlacesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlacesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacesCountAggregateInputType | true
    }

  export interface PlacesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Places'], meta: { name: 'Places' } }
    /**
     * Find zero or one Places that matches the filter.
     * @param {PlacesFindUniqueArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlacesFindUniqueArgs>(args: SelectSubset<T, PlacesFindUniqueArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Places that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlacesFindUniqueOrThrowArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlacesFindUniqueOrThrowArgs>(args: SelectSubset<T, PlacesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesFindFirstArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlacesFindFirstArgs>(args?: SelectSubset<T, PlacesFindFirstArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Places that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesFindFirstOrThrowArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlacesFindFirstOrThrowArgs>(args?: SelectSubset<T, PlacesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.places.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.places.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placesWithIdOnly = await prisma.places.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlacesFindManyArgs>(args?: SelectSubset<T, PlacesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Places.
     * @param {PlacesCreateArgs} args - Arguments to create a Places.
     * @example
     * // Create one Places
     * const Places = await prisma.places.create({
     *   data: {
     *     // ... data to create a Places
     *   }
     * })
     * 
     */
    create<T extends PlacesCreateArgs>(args: SelectSubset<T, PlacesCreateArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Places.
     * @param {PlacesCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const places = await prisma.places.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlacesCreateManyArgs>(args?: SelectSubset<T, PlacesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Places and returns the data saved in the database.
     * @param {PlacesCreateManyAndReturnArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const places = await prisma.places.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Places and only return the `id`
     * const placesWithIdOnly = await prisma.places.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlacesCreateManyAndReturnArgs>(args?: SelectSubset<T, PlacesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Places.
     * @param {PlacesDeleteArgs} args - Arguments to delete one Places.
     * @example
     * // Delete one Places
     * const Places = await prisma.places.delete({
     *   where: {
     *     // ... filter to delete one Places
     *   }
     * })
     * 
     */
    delete<T extends PlacesDeleteArgs>(args: SelectSubset<T, PlacesDeleteArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Places.
     * @param {PlacesUpdateArgs} args - Arguments to update one Places.
     * @example
     * // Update one Places
     * const places = await prisma.places.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlacesUpdateArgs>(args: SelectSubset<T, PlacesUpdateArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Places.
     * @param {PlacesDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.places.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlacesDeleteManyArgs>(args?: SelectSubset<T, PlacesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const places = await prisma.places.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlacesUpdateManyArgs>(args: SelectSubset<T, PlacesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places and returns the data updated in the database.
     * @param {PlacesUpdateManyAndReturnArgs} args - Arguments to update many Places.
     * @example
     * // Update many Places
     * const places = await prisma.places.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Places and only return the `id`
     * const placesWithIdOnly = await prisma.places.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlacesUpdateManyAndReturnArgs>(args: SelectSubset<T, PlacesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Places.
     * @param {PlacesUpsertArgs} args - Arguments to update or create a Places.
     * @example
     * // Update or create a Places
     * const places = await prisma.places.upsert({
     *   create: {
     *     // ... data to create a Places
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Places we want to update
     *   }
     * })
     */
    upsert<T extends PlacesUpsertArgs>(args: SelectSubset<T, PlacesUpsertArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.places.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlacesCountArgs>(
      args?: Subset<T, PlacesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlacesAggregateArgs>(args: Subset<T, PlacesAggregateArgs>): Prisma.PrismaPromise<GetPlacesAggregateType<T>>

    /**
     * Group by Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlacesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlacesGroupByArgs['orderBy'] }
        : { orderBy?: PlacesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlacesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Places model
   */
  readonly fields: PlacesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Places.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlacesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationsDefaultArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Places model
   */
  interface PlacesFieldRefs {
    readonly id: FieldRef<"Places", 'String'>
    readonly name: FieldRef<"Places", 'String'>
    readonly image: FieldRef<"Places", 'String'>
    readonly description: FieldRef<"Places", 'String'>
    readonly destinationId: FieldRef<"Places", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Places findUnique
   */
  export type PlacesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where: PlacesWhereUniqueInput
  }

  /**
   * Places findUniqueOrThrow
   */
  export type PlacesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where: PlacesWhereUniqueInput
  }

  /**
   * Places findFirst
   */
  export type PlacesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * Places findFirstOrThrow
   */
  export type PlacesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * Places findMany
   */
  export type PlacesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * Places create
   */
  export type PlacesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * The data needed to create a Places.
     */
    data: XOR<PlacesCreateInput, PlacesUncheckedCreateInput>
  }

  /**
   * Places createMany
   */
  export type PlacesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlacesCreateManyInput | PlacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Places createManyAndReturn
   */
  export type PlacesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * The data used to create many Places.
     */
    data: PlacesCreateManyInput | PlacesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Places update
   */
  export type PlacesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * The data needed to update a Places.
     */
    data: XOR<PlacesUpdateInput, PlacesUncheckedUpdateInput>
    /**
     * Choose, which Places to update.
     */
    where: PlacesWhereUniqueInput
  }

  /**
   * Places updateMany
   */
  export type PlacesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlacesUpdateManyMutationInput, PlacesUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlacesWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
  }

  /**
   * Places updateManyAndReturn
   */
  export type PlacesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * The data used to update Places.
     */
    data: XOR<PlacesUpdateManyMutationInput, PlacesUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlacesWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Places upsert
   */
  export type PlacesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * The filter to search for the Places to update in case it exists.
     */
    where: PlacesWhereUniqueInput
    /**
     * In case the Places found by the `where` argument doesn't exist, create a new Places with this data.
     */
    create: XOR<PlacesCreateInput, PlacesUncheckedCreateInput>
    /**
     * In case the Places was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlacesUpdateInput, PlacesUncheckedUpdateInput>
  }

  /**
   * Places delete
   */
  export type PlacesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter which Places to delete.
     */
    where: PlacesWhereUniqueInput
  }

  /**
   * Places deleteMany
   */
  export type PlacesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlacesWhereInput
    /**
     * Limit how many Places to delete.
     */
    limit?: number
  }

  /**
   * Places without action
   */
  export type PlacesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Places
     */
    omit?: PlacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
  }


  /**
   * Model DestinationFAQ
   */

  export type AggregateDestinationFAQ = {
    _count: DestinationFAQCountAggregateOutputType | null
    _min: DestinationFAQMinAggregateOutputType | null
    _max: DestinationFAQMaxAggregateOutputType | null
  }

  export type DestinationFAQMinAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    destinationId: string | null
  }

  export type DestinationFAQMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    destinationId: string | null
  }

  export type DestinationFAQCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    destinationId: number
    _all: number
  }


  export type DestinationFAQMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    destinationId?: true
  }

  export type DestinationFAQMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    destinationId?: true
  }

  export type DestinationFAQCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    destinationId?: true
    _all?: true
  }

  export type DestinationFAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationFAQ to aggregate.
     */
    where?: DestinationFAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationFAQS to fetch.
     */
    orderBy?: DestinationFAQOrderByWithRelationInput | DestinationFAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationFAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationFAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationFAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DestinationFAQS
    **/
    _count?: true | DestinationFAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationFAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationFAQMaxAggregateInputType
  }

  export type GetDestinationFAQAggregateType<T extends DestinationFAQAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinationFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinationFAQ[P]>
      : GetScalarType<T[P], AggregateDestinationFAQ[P]>
  }




  export type DestinationFAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationFAQWhereInput
    orderBy?: DestinationFAQOrderByWithAggregationInput | DestinationFAQOrderByWithAggregationInput[]
    by: DestinationFAQScalarFieldEnum[] | DestinationFAQScalarFieldEnum
    having?: DestinationFAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationFAQCountAggregateInputType | true
    _min?: DestinationFAQMinAggregateInputType
    _max?: DestinationFAQMaxAggregateInputType
  }

  export type DestinationFAQGroupByOutputType = {
    id: string
    question: string
    answer: string
    destinationId: string
    _count: DestinationFAQCountAggregateOutputType | null
    _min: DestinationFAQMinAggregateOutputType | null
    _max: DestinationFAQMaxAggregateOutputType | null
  }

  type GetDestinationFAQGroupByPayload<T extends DestinationFAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationFAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationFAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationFAQGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationFAQGroupByOutputType[P]>
        }
      >
    >


  export type DestinationFAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationFAQ"]>

  export type DestinationFAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationFAQ"]>

  export type DestinationFAQSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationFAQ"]>

  export type DestinationFAQSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    destinationId?: boolean
  }

  export type DestinationFAQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "destinationId", ExtArgs["result"]["destinationFAQ"]>
  export type DestinationFAQInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }
  export type DestinationFAQIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }
  export type DestinationFAQIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationsDefaultArgs<ExtArgs>
  }

  export type $DestinationFAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DestinationFAQ"
    objects: {
      destination: Prisma.$DestinationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answer: string
      destinationId: string
    }, ExtArgs["result"]["destinationFAQ"]>
    composites: {}
  }

  type DestinationFAQGetPayload<S extends boolean | null | undefined | DestinationFAQDefaultArgs> = $Result.GetResult<Prisma.$DestinationFAQPayload, S>

  type DestinationFAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationFAQCountAggregateInputType | true
    }

  export interface DestinationFAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DestinationFAQ'], meta: { name: 'DestinationFAQ' } }
    /**
     * Find zero or one DestinationFAQ that matches the filter.
     * @param {DestinationFAQFindUniqueArgs} args - Arguments to find a DestinationFAQ
     * @example
     * // Get one DestinationFAQ
     * const destinationFAQ = await prisma.destinationFAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFAQFindUniqueArgs>(args: SelectSubset<T, DestinationFAQFindUniqueArgs<ExtArgs>>): Prisma__DestinationFAQClient<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DestinationFAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFAQFindUniqueOrThrowArgs} args - Arguments to find a DestinationFAQ
     * @example
     * // Get one DestinationFAQ
     * const destinationFAQ = await prisma.destinationFAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFAQFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationFAQClient<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationFAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFAQFindFirstArgs} args - Arguments to find a DestinationFAQ
     * @example
     * // Get one DestinationFAQ
     * const destinationFAQ = await prisma.destinationFAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFAQFindFirstArgs>(args?: SelectSubset<T, DestinationFAQFindFirstArgs<ExtArgs>>): Prisma__DestinationFAQClient<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationFAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFAQFindFirstOrThrowArgs} args - Arguments to find a DestinationFAQ
     * @example
     * // Get one DestinationFAQ
     * const destinationFAQ = await prisma.destinationFAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFAQFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationFAQClient<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DestinationFAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinationFAQS
     * const destinationFAQS = await prisma.destinationFAQ.findMany()
     * 
     * // Get first 10 DestinationFAQS
     * const destinationFAQS = await prisma.destinationFAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationFAQWithIdOnly = await prisma.destinationFAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFAQFindManyArgs>(args?: SelectSubset<T, DestinationFAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DestinationFAQ.
     * @param {DestinationFAQCreateArgs} args - Arguments to create a DestinationFAQ.
     * @example
     * // Create one DestinationFAQ
     * const DestinationFAQ = await prisma.destinationFAQ.create({
     *   data: {
     *     // ... data to create a DestinationFAQ
     *   }
     * })
     * 
     */
    create<T extends DestinationFAQCreateArgs>(args: SelectSubset<T, DestinationFAQCreateArgs<ExtArgs>>): Prisma__DestinationFAQClient<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DestinationFAQS.
     * @param {DestinationFAQCreateManyArgs} args - Arguments to create many DestinationFAQS.
     * @example
     * // Create many DestinationFAQS
     * const destinationFAQ = await prisma.destinationFAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationFAQCreateManyArgs>(args?: SelectSubset<T, DestinationFAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DestinationFAQS and returns the data saved in the database.
     * @param {DestinationFAQCreateManyAndReturnArgs} args - Arguments to create many DestinationFAQS.
     * @example
     * // Create many DestinationFAQS
     * const destinationFAQ = await prisma.destinationFAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DestinationFAQS and only return the `id`
     * const destinationFAQWithIdOnly = await prisma.destinationFAQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationFAQCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationFAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DestinationFAQ.
     * @param {DestinationFAQDeleteArgs} args - Arguments to delete one DestinationFAQ.
     * @example
     * // Delete one DestinationFAQ
     * const DestinationFAQ = await prisma.destinationFAQ.delete({
     *   where: {
     *     // ... filter to delete one DestinationFAQ
     *   }
     * })
     * 
     */
    delete<T extends DestinationFAQDeleteArgs>(args: SelectSubset<T, DestinationFAQDeleteArgs<ExtArgs>>): Prisma__DestinationFAQClient<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DestinationFAQ.
     * @param {DestinationFAQUpdateArgs} args - Arguments to update one DestinationFAQ.
     * @example
     * // Update one DestinationFAQ
     * const destinationFAQ = await prisma.destinationFAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationFAQUpdateArgs>(args: SelectSubset<T, DestinationFAQUpdateArgs<ExtArgs>>): Prisma__DestinationFAQClient<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DestinationFAQS.
     * @param {DestinationFAQDeleteManyArgs} args - Arguments to filter DestinationFAQS to delete.
     * @example
     * // Delete a few DestinationFAQS
     * const { count } = await prisma.destinationFAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationFAQDeleteManyArgs>(args?: SelectSubset<T, DestinationFAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationFAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinationFAQS
     * const destinationFAQ = await prisma.destinationFAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationFAQUpdateManyArgs>(args: SelectSubset<T, DestinationFAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationFAQS and returns the data updated in the database.
     * @param {DestinationFAQUpdateManyAndReturnArgs} args - Arguments to update many DestinationFAQS.
     * @example
     * // Update many DestinationFAQS
     * const destinationFAQ = await prisma.destinationFAQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DestinationFAQS and only return the `id`
     * const destinationFAQWithIdOnly = await prisma.destinationFAQ.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationFAQUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationFAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DestinationFAQ.
     * @param {DestinationFAQUpsertArgs} args - Arguments to update or create a DestinationFAQ.
     * @example
     * // Update or create a DestinationFAQ
     * const destinationFAQ = await prisma.destinationFAQ.upsert({
     *   create: {
     *     // ... data to create a DestinationFAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinationFAQ we want to update
     *   }
     * })
     */
    upsert<T extends DestinationFAQUpsertArgs>(args: SelectSubset<T, DestinationFAQUpsertArgs<ExtArgs>>): Prisma__DestinationFAQClient<$Result.GetResult<Prisma.$DestinationFAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DestinationFAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFAQCountArgs} args - Arguments to filter DestinationFAQS to count.
     * @example
     * // Count the number of DestinationFAQS
     * const count = await prisma.destinationFAQ.count({
     *   where: {
     *     // ... the filter for the DestinationFAQS we want to count
     *   }
     * })
    **/
    count<T extends DestinationFAQCountArgs>(
      args?: Subset<T, DestinationFAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationFAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DestinationFAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationFAQAggregateArgs>(args: Subset<T, DestinationFAQAggregateArgs>): Prisma.PrismaPromise<GetDestinationFAQAggregateType<T>>

    /**
     * Group by DestinationFAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFAQGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationFAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationFAQGroupByArgs['orderBy'] }
        : { orderBy?: DestinationFAQGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationFAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DestinationFAQ model
   */
  readonly fields: DestinationFAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DestinationFAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationFAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationsDefaultArgs<ExtArgs>>): Prisma__DestinationsClient<$Result.GetResult<Prisma.$DestinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DestinationFAQ model
   */
  interface DestinationFAQFieldRefs {
    readonly id: FieldRef<"DestinationFAQ", 'String'>
    readonly question: FieldRef<"DestinationFAQ", 'String'>
    readonly answer: FieldRef<"DestinationFAQ", 'String'>
    readonly destinationId: FieldRef<"DestinationFAQ", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DestinationFAQ findUnique
   */
  export type DestinationFAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * Filter, which DestinationFAQ to fetch.
     */
    where: DestinationFAQWhereUniqueInput
  }

  /**
   * DestinationFAQ findUniqueOrThrow
   */
  export type DestinationFAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * Filter, which DestinationFAQ to fetch.
     */
    where: DestinationFAQWhereUniqueInput
  }

  /**
   * DestinationFAQ findFirst
   */
  export type DestinationFAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * Filter, which DestinationFAQ to fetch.
     */
    where?: DestinationFAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationFAQS to fetch.
     */
    orderBy?: DestinationFAQOrderByWithRelationInput | DestinationFAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationFAQS.
     */
    cursor?: DestinationFAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationFAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationFAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationFAQS.
     */
    distinct?: DestinationFAQScalarFieldEnum | DestinationFAQScalarFieldEnum[]
  }

  /**
   * DestinationFAQ findFirstOrThrow
   */
  export type DestinationFAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * Filter, which DestinationFAQ to fetch.
     */
    where?: DestinationFAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationFAQS to fetch.
     */
    orderBy?: DestinationFAQOrderByWithRelationInput | DestinationFAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationFAQS.
     */
    cursor?: DestinationFAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationFAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationFAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationFAQS.
     */
    distinct?: DestinationFAQScalarFieldEnum | DestinationFAQScalarFieldEnum[]
  }

  /**
   * DestinationFAQ findMany
   */
  export type DestinationFAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * Filter, which DestinationFAQS to fetch.
     */
    where?: DestinationFAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationFAQS to fetch.
     */
    orderBy?: DestinationFAQOrderByWithRelationInput | DestinationFAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DestinationFAQS.
     */
    cursor?: DestinationFAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationFAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationFAQS.
     */
    skip?: number
    distinct?: DestinationFAQScalarFieldEnum | DestinationFAQScalarFieldEnum[]
  }

  /**
   * DestinationFAQ create
   */
  export type DestinationFAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * The data needed to create a DestinationFAQ.
     */
    data: XOR<DestinationFAQCreateInput, DestinationFAQUncheckedCreateInput>
  }

  /**
   * DestinationFAQ createMany
   */
  export type DestinationFAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DestinationFAQS.
     */
    data: DestinationFAQCreateManyInput | DestinationFAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DestinationFAQ createManyAndReturn
   */
  export type DestinationFAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * The data used to create many DestinationFAQS.
     */
    data: DestinationFAQCreateManyInput | DestinationFAQCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationFAQ update
   */
  export type DestinationFAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * The data needed to update a DestinationFAQ.
     */
    data: XOR<DestinationFAQUpdateInput, DestinationFAQUncheckedUpdateInput>
    /**
     * Choose, which DestinationFAQ to update.
     */
    where: DestinationFAQWhereUniqueInput
  }

  /**
   * DestinationFAQ updateMany
   */
  export type DestinationFAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DestinationFAQS.
     */
    data: XOR<DestinationFAQUpdateManyMutationInput, DestinationFAQUncheckedUpdateManyInput>
    /**
     * Filter which DestinationFAQS to update
     */
    where?: DestinationFAQWhereInput
    /**
     * Limit how many DestinationFAQS to update.
     */
    limit?: number
  }

  /**
   * DestinationFAQ updateManyAndReturn
   */
  export type DestinationFAQUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * The data used to update DestinationFAQS.
     */
    data: XOR<DestinationFAQUpdateManyMutationInput, DestinationFAQUncheckedUpdateManyInput>
    /**
     * Filter which DestinationFAQS to update
     */
    where?: DestinationFAQWhereInput
    /**
     * Limit how many DestinationFAQS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationFAQ upsert
   */
  export type DestinationFAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * The filter to search for the DestinationFAQ to update in case it exists.
     */
    where: DestinationFAQWhereUniqueInput
    /**
     * In case the DestinationFAQ found by the `where` argument doesn't exist, create a new DestinationFAQ with this data.
     */
    create: XOR<DestinationFAQCreateInput, DestinationFAQUncheckedCreateInput>
    /**
     * In case the DestinationFAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationFAQUpdateInput, DestinationFAQUncheckedUpdateInput>
  }

  /**
   * DestinationFAQ delete
   */
  export type DestinationFAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
    /**
     * Filter which DestinationFAQ to delete.
     */
    where: DestinationFAQWhereUniqueInput
  }

  /**
   * DestinationFAQ deleteMany
   */
  export type DestinationFAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationFAQS to delete
     */
    where?: DestinationFAQWhereInput
    /**
     * Limit how many DestinationFAQS to delete.
     */
    limit?: number
  }

  /**
   * DestinationFAQ without action
   */
  export type DestinationFAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationFAQ
     */
    select?: DestinationFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationFAQ
     */
    omit?: DestinationFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationFAQInclude<ExtArgs> | null
  }


  /**
   * Model Testimonials
   */

  export type AggregateTestimonials = {
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  export type TestimonialsAvgAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialsSumAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialsMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    feedback: string | null
    rating: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialsMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    feedback: string | null
    rating: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialsCountAggregateOutputType = {
    id: number
    customerName: number
    feedback: number
    rating: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestimonialsAvgAggregateInputType = {
    rating?: true
  }

  export type TestimonialsSumAggregateInputType = {
    rating?: true
  }

  export type TestimonialsMinAggregateInputType = {
    id?: true
    customerName?: true
    feedback?: true
    rating?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialsMaxAggregateInputType = {
    id?: true
    customerName?: true
    feedback?: true
    rating?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialsCountAggregateInputType = {
    id?: true
    customerName?: true
    feedback?: true
    rating?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestimonialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to aggregate.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialsMaxAggregateInputType
  }

  export type GetTestimonialsAggregateType<T extends TestimonialsAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonials[P]>
      : GetScalarType<T[P], AggregateTestimonials[P]>
  }




  export type TestimonialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialsWhereInput
    orderBy?: TestimonialsOrderByWithAggregationInput | TestimonialsOrderByWithAggregationInput[]
    by: TestimonialsScalarFieldEnum[] | TestimonialsScalarFieldEnum
    having?: TestimonialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialsCountAggregateInputType | true
    _avg?: TestimonialsAvgAggregateInputType
    _sum?: TestimonialsSumAggregateInputType
    _min?: TestimonialsMinAggregateInputType
    _max?: TestimonialsMaxAggregateInputType
  }

  export type TestimonialsGroupByOutputType = {
    id: string
    customerName: string
    feedback: string
    rating: number
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  type GetTestimonialsGroupByPayload<T extends TestimonialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    feedback?: boolean
    rating?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    feedback?: boolean
    rating?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    feedback?: boolean
    rating?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectScalar = {
    id?: boolean
    customerName?: boolean
    feedback?: boolean
    rating?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestimonialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "feedback" | "rating" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["testimonials"]>

  export type $TestimonialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      feedback: string
      rating: number
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testimonials"]>
    composites: {}
  }

  type TestimonialsGetPayload<S extends boolean | null | undefined | TestimonialsDefaultArgs> = $Result.GetResult<Prisma.$TestimonialsPayload, S>

  type TestimonialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialsCountAggregateInputType | true
    }

  export interface TestimonialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonials'], meta: { name: 'Testimonials' } }
    /**
     * Find zero or one Testimonials that matches the filter.
     * @param {TestimonialsFindUniqueArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialsFindUniqueArgs>(args: SelectSubset<T, TestimonialsFindUniqueArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialsFindUniqueOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialsFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindFirstArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialsFindFirstArgs>(args?: SelectSubset<T, TestimonialsFindFirstArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindFirstOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialsFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonials.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialsFindManyArgs>(args?: SelectSubset<T, TestimonialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonials.
     * @param {TestimonialsCreateArgs} args - Arguments to create a Testimonials.
     * @example
     * // Create one Testimonials
     * const Testimonials = await prisma.testimonials.create({
     *   data: {
     *     // ... data to create a Testimonials
     *   }
     * })
     * 
     */
    create<T extends TestimonialsCreateArgs>(args: SelectSubset<T, TestimonialsCreateArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialsCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonials = await prisma.testimonials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialsCreateManyArgs>(args?: SelectSubset<T, TestimonialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialsCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonials = await prisma.testimonials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialsCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonials.
     * @param {TestimonialsDeleteArgs} args - Arguments to delete one Testimonials.
     * @example
     * // Delete one Testimonials
     * const Testimonials = await prisma.testimonials.delete({
     *   where: {
     *     // ... filter to delete one Testimonials
     *   }
     * })
     * 
     */
    delete<T extends TestimonialsDeleteArgs>(args: SelectSubset<T, TestimonialsDeleteArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonials.
     * @param {TestimonialsUpdateArgs} args - Arguments to update one Testimonials.
     * @example
     * // Update one Testimonials
     * const testimonials = await prisma.testimonials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialsUpdateArgs>(args: SelectSubset<T, TestimonialsUpdateArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialsDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialsDeleteManyArgs>(args?: SelectSubset<T, TestimonialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialsUpdateManyArgs>(args: SelectSubset<T, TestimonialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialsUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestimonialsUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonials.
     * @param {TestimonialsUpsertArgs} args - Arguments to update or create a Testimonials.
     * @example
     * // Update or create a Testimonials
     * const testimonials = await prisma.testimonials.upsert({
     *   create: {
     *     // ... data to create a Testimonials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonials we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialsUpsertArgs>(args: SelectSubset<T, TestimonialsUpsertArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonials.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialsCountArgs>(
      args?: Subset<T, TestimonialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestimonialsAggregateArgs>(args: Subset<T, TestimonialsAggregateArgs>): Prisma.PrismaPromise<GetTestimonialsAggregateType<T>>

    /**
     * Group by Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestimonialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialsGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestimonialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonials model
   */
  readonly fields: TestimonialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Testimonials model
   */
  interface TestimonialsFieldRefs {
    readonly id: FieldRef<"Testimonials", 'String'>
    readonly customerName: FieldRef<"Testimonials", 'String'>
    readonly feedback: FieldRef<"Testimonials", 'String'>
    readonly rating: FieldRef<"Testimonials", 'Int'>
    readonly image: FieldRef<"Testimonials", 'String'>
    readonly createdAt: FieldRef<"Testimonials", 'DateTime'>
    readonly updatedAt: FieldRef<"Testimonials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonials findUnique
   */
  export type TestimonialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials findUniqueOrThrow
   */
  export type TestimonialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials findFirst
   */
  export type TestimonialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials findFirstOrThrow
   */
  export type TestimonialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials findMany
   */
  export type TestimonialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials create
   */
  export type TestimonialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data needed to create a Testimonials.
     */
    data: XOR<TestimonialsCreateInput, TestimonialsUncheckedCreateInput>
  }

  /**
   * Testimonials createMany
   */
  export type TestimonialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialsCreateManyInput | TestimonialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonials createManyAndReturn
   */
  export type TestimonialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialsCreateManyInput | TestimonialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonials update
   */
  export type TestimonialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data needed to update a Testimonials.
     */
    data: XOR<TestimonialsUpdateInput, TestimonialsUncheckedUpdateInput>
    /**
     * Choose, which Testimonials to update.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials updateMany
   */
  export type TestimonialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialsUpdateManyMutationInput, TestimonialsUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonials updateManyAndReturn
   */
  export type TestimonialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialsUpdateManyMutationInput, TestimonialsUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonials upsert
   */
  export type TestimonialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The filter to search for the Testimonials to update in case it exists.
     */
    where: TestimonialsWhereUniqueInput
    /**
     * In case the Testimonials found by the `where` argument doesn't exist, create a new Testimonials with this data.
     */
    create: XOR<TestimonialsCreateInput, TestimonialsUncheckedCreateInput>
    /**
     * In case the Testimonials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialsUpdateInput, TestimonialsUncheckedUpdateInput>
  }

  /**
   * Testimonials delete
   */
  export type TestimonialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter which Testimonials to delete.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials deleteMany
   */
  export type TestimonialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonials without action
   */
  export type TestimonialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    days: 'days',
    nights: 'nights',
    description: 'description',
    image: 'image',
    price: 'price',
    type: 'type',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    customerPhone: 'customerPhone',
    numberOfPeople: 'numberOfPeople',
    paid: 'paid',
    packageId: 'packageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    paid: 'paid',
    paymentMethod: 'paymentMethod',
    razorpayPaymentId: 'razorpayPaymentId',
    paymentDate: 'paymentDate',
    bookingId: 'bookingId',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const DayItineraryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    dayNumber: 'dayNumber',
    description: 'description',
    packageId: 'packageId'
  };

  export type DayItineraryScalarFieldEnum = (typeof DayItineraryScalarFieldEnum)[keyof typeof DayItineraryScalarFieldEnum]


  export const FeaturedItemsScalarFieldEnum: {
    id: 'id',
    item: 'item',
    dayItineraryId: 'dayItineraryId'
  };

  export type FeaturedItemsScalarFieldEnum = (typeof FeaturedItemsScalarFieldEnum)[keyof typeof FeaturedItemsScalarFieldEnum]


  export const IncludedItemsScalarFieldEnum: {
    id: 'id',
    item: 'item',
    packageId: 'packageId'
  };

  export type IncludedItemsScalarFieldEnum = (typeof IncludedItemsScalarFieldEnum)[keyof typeof IncludedItemsScalarFieldEnum]


  export const ExcludedItemsScalarFieldEnum: {
    id: 'id',
    item: 'item',
    packageId: 'packageId'
  };

  export type ExcludedItemsScalarFieldEnum = (typeof ExcludedItemsScalarFieldEnum)[keyof typeof ExcludedItemsScalarFieldEnum]


  export const BlogsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    html: 'html',
    thumbnail: 'thumbnail',
    customerName: 'customerName',
    feedback: 'feedback',
    author: 'author',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogsScalarFieldEnum = (typeof BlogsScalarFieldEnum)[keyof typeof BlogsScalarFieldEnum]


  export const BlogImagesScalarFieldEnum: {
    id: 'id',
    url: 'url',
    blogId: 'blogId'
  };

  export type BlogImagesScalarFieldEnum = (typeof BlogImagesScalarFieldEnum)[keyof typeof BlogImagesScalarFieldEnum]


  export const BlogCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BlogCategoryScalarFieldEnum = (typeof BlogCategoryScalarFieldEnum)[keyof typeof BlogCategoryScalarFieldEnum]


  export const DestinationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tag: 'tag',
    title: 'title',
    description: 'description',
    image: 'image',
    country: 'country',
    visa: 'visa',
    languagesSpoken: 'languagesSpoken',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationsScalarFieldEnum = (typeof DestinationsScalarFieldEnum)[keyof typeof DestinationsScalarFieldEnum]


  export const PlacesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    description: 'description',
    destinationId: 'destinationId'
  };

  export type PlacesScalarFieldEnum = (typeof PlacesScalarFieldEnum)[keyof typeof PlacesScalarFieldEnum]


  export const DestinationFAQScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    destinationId: 'destinationId'
  };

  export type DestinationFAQScalarFieldEnum = (typeof DestinationFAQScalarFieldEnum)[keyof typeof DestinationFAQScalarFieldEnum]


  export const TestimonialsScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    feedback: 'feedback',
    rating: 'rating',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestimonialsScalarFieldEnum = (typeof TestimonialsScalarFieldEnum)[keyof typeof TestimonialsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    name?: StringFilter<"Package"> | string
    days?: IntFilter<"Package"> | number
    nights?: IntFilter<"Package"> | number
    description?: StringFilter<"Package"> | string
    image?: StringNullableFilter<"Package"> | string | null
    price?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    type?: StringNullableFilter<"Package"> | string | null
    location?: StringNullableFilter<"Package"> | string | null
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    inclusions?: IncludedItemsListRelationFilter
    exclusions?: ExcludedItemsListRelationFilter
    itineraries?: DayItineraryListRelationFilter
    bookings?: BookingsListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    days?: SortOrder
    nights?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    type?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inclusions?: IncludedItemsOrderByRelationAggregateInput
    exclusions?: ExcludedItemsOrderByRelationAggregateInput
    itineraries?: DayItineraryOrderByRelationAggregateInput
    bookings?: BookingsOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    name?: StringFilter<"Package"> | string
    days?: IntFilter<"Package"> | number
    nights?: IntFilter<"Package"> | number
    description?: StringFilter<"Package"> | string
    image?: StringNullableFilter<"Package"> | string | null
    price?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    type?: StringNullableFilter<"Package"> | string | null
    location?: StringNullableFilter<"Package"> | string | null
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    inclusions?: IncludedItemsListRelationFilter
    exclusions?: ExcludedItemsListRelationFilter
    itineraries?: DayItineraryListRelationFilter
    bookings?: BookingsListRelationFilter
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    days?: SortOrder
    nights?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    type?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    name?: StringWithAggregatesFilter<"Package"> | string
    days?: IntWithAggregatesFilter<"Package"> | number
    nights?: IntWithAggregatesFilter<"Package"> | number
    description?: StringWithAggregatesFilter<"Package"> | string
    image?: StringNullableWithAggregatesFilter<"Package"> | string | null
    price?: DecimalWithAggregatesFilter<"Package"> | Decimal | DecimalJsLike | number | string
    type?: StringNullableWithAggregatesFilter<"Package"> | string | null
    location?: StringNullableWithAggregatesFilter<"Package"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    id?: StringFilter<"Bookings"> | string
    customerName?: StringFilter<"Bookings"> | string
    customerEmail?: StringFilter<"Bookings"> | string
    customerPhone?: StringFilter<"Bookings"> | string
    numberOfPeople?: IntFilter<"Bookings"> | number
    paid?: BoolFilter<"Bookings"> | boolean
    packageId?: StringFilter<"Bookings"> | string
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
    payment?: PaymentListRelationFilter
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type BookingsOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    numberOfPeople?: SortOrder
    paid?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payment?: PaymentOrderByRelationAggregateInput
    package?: PackageOrderByWithRelationInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    customerName?: StringFilter<"Bookings"> | string
    customerEmail?: StringFilter<"Bookings"> | string
    customerPhone?: StringFilter<"Bookings"> | string
    numberOfPeople?: IntFilter<"Bookings"> | number
    paid?: BoolFilter<"Bookings"> | boolean
    packageId?: StringFilter<"Bookings"> | string
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
    payment?: PaymentListRelationFilter
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id">

  export type BookingsOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    numberOfPeople?: SortOrder
    paid?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _avg?: BookingsAvgOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
    _sum?: BookingsSumOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookings"> | string
    customerName?: StringWithAggregatesFilter<"Bookings"> | string
    customerEmail?: StringWithAggregatesFilter<"Bookings"> | string
    customerPhone?: StringWithAggregatesFilter<"Bookings"> | string
    numberOfPeople?: IntWithAggregatesFilter<"Bookings"> | number
    paid?: BoolWithAggregatesFilter<"Bookings"> | boolean
    packageId?: StringWithAggregatesFilter<"Bookings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"Payment"> | boolean
    paymentMethod?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    bookingId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingsScalarRelationFilter, BookingsWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paymentMethod?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    paymentDate?: SortOrder
    bookingId?: SortOrder
    createdAt?: SortOrder
    booking?: BookingsOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"Payment"> | boolean
    paymentMethod?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    bookingId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingsScalarRelationFilter, BookingsWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paymentMethod?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    paymentDate?: SortOrder
    bookingId?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paid?: BoolWithAggregatesFilter<"Payment"> | boolean
    paymentMethod?: StringWithAggregatesFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    bookingId?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type DayItineraryWhereInput = {
    AND?: DayItineraryWhereInput | DayItineraryWhereInput[]
    OR?: DayItineraryWhereInput[]
    NOT?: DayItineraryWhereInput | DayItineraryWhereInput[]
    id?: StringFilter<"DayItinerary"> | string
    title?: StringFilter<"DayItinerary"> | string
    dayNumber?: IntFilter<"DayItinerary"> | number
    description?: StringFilter<"DayItinerary"> | string
    packageId?: StringFilter<"DayItinerary"> | string
    features?: FeaturedItemsListRelationFilter
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type DayItineraryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    dayNumber?: SortOrder
    description?: SortOrder
    packageId?: SortOrder
    features?: FeaturedItemsOrderByRelationAggregateInput
    package?: PackageOrderByWithRelationInput
  }

  export type DayItineraryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    packageId_dayNumber?: DayItineraryPackageIdDayNumberCompoundUniqueInput
    AND?: DayItineraryWhereInput | DayItineraryWhereInput[]
    OR?: DayItineraryWhereInput[]
    NOT?: DayItineraryWhereInput | DayItineraryWhereInput[]
    title?: StringFilter<"DayItinerary"> | string
    dayNumber?: IntFilter<"DayItinerary"> | number
    description?: StringFilter<"DayItinerary"> | string
    packageId?: StringFilter<"DayItinerary"> | string
    features?: FeaturedItemsListRelationFilter
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id" | "packageId_dayNumber">

  export type DayItineraryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    dayNumber?: SortOrder
    description?: SortOrder
    packageId?: SortOrder
    _count?: DayItineraryCountOrderByAggregateInput
    _avg?: DayItineraryAvgOrderByAggregateInput
    _max?: DayItineraryMaxOrderByAggregateInput
    _min?: DayItineraryMinOrderByAggregateInput
    _sum?: DayItinerarySumOrderByAggregateInput
  }

  export type DayItineraryScalarWhereWithAggregatesInput = {
    AND?: DayItineraryScalarWhereWithAggregatesInput | DayItineraryScalarWhereWithAggregatesInput[]
    OR?: DayItineraryScalarWhereWithAggregatesInput[]
    NOT?: DayItineraryScalarWhereWithAggregatesInput | DayItineraryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DayItinerary"> | string
    title?: StringWithAggregatesFilter<"DayItinerary"> | string
    dayNumber?: IntWithAggregatesFilter<"DayItinerary"> | number
    description?: StringWithAggregatesFilter<"DayItinerary"> | string
    packageId?: StringWithAggregatesFilter<"DayItinerary"> | string
  }

  export type FeaturedItemsWhereInput = {
    AND?: FeaturedItemsWhereInput | FeaturedItemsWhereInput[]
    OR?: FeaturedItemsWhereInput[]
    NOT?: FeaturedItemsWhereInput | FeaturedItemsWhereInput[]
    id?: StringFilter<"FeaturedItems"> | string
    item?: StringFilter<"FeaturedItems"> | string
    dayItineraryId?: StringFilter<"FeaturedItems"> | string
    dayItinerary?: XOR<DayItineraryScalarRelationFilter, DayItineraryWhereInput>
  }

  export type FeaturedItemsOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrder
    dayItineraryId?: SortOrder
    dayItinerary?: DayItineraryOrderByWithRelationInput
  }

  export type FeaturedItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeaturedItemsWhereInput | FeaturedItemsWhereInput[]
    OR?: FeaturedItemsWhereInput[]
    NOT?: FeaturedItemsWhereInput | FeaturedItemsWhereInput[]
    item?: StringFilter<"FeaturedItems"> | string
    dayItineraryId?: StringFilter<"FeaturedItems"> | string
    dayItinerary?: XOR<DayItineraryScalarRelationFilter, DayItineraryWhereInput>
  }, "id">

  export type FeaturedItemsOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrder
    dayItineraryId?: SortOrder
    _count?: FeaturedItemsCountOrderByAggregateInput
    _max?: FeaturedItemsMaxOrderByAggregateInput
    _min?: FeaturedItemsMinOrderByAggregateInput
  }

  export type FeaturedItemsScalarWhereWithAggregatesInput = {
    AND?: FeaturedItemsScalarWhereWithAggregatesInput | FeaturedItemsScalarWhereWithAggregatesInput[]
    OR?: FeaturedItemsScalarWhereWithAggregatesInput[]
    NOT?: FeaturedItemsScalarWhereWithAggregatesInput | FeaturedItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeaturedItems"> | string
    item?: StringWithAggregatesFilter<"FeaturedItems"> | string
    dayItineraryId?: StringWithAggregatesFilter<"FeaturedItems"> | string
  }

  export type IncludedItemsWhereInput = {
    AND?: IncludedItemsWhereInput | IncludedItemsWhereInput[]
    OR?: IncludedItemsWhereInput[]
    NOT?: IncludedItemsWhereInput | IncludedItemsWhereInput[]
    id?: StringFilter<"IncludedItems"> | string
    item?: StringFilter<"IncludedItems"> | string
    packageId?: StringFilter<"IncludedItems"> | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type IncludedItemsOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
    package?: PackageOrderByWithRelationInput
  }

  export type IncludedItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncludedItemsWhereInput | IncludedItemsWhereInput[]
    OR?: IncludedItemsWhereInput[]
    NOT?: IncludedItemsWhereInput | IncludedItemsWhereInput[]
    item?: StringFilter<"IncludedItems"> | string
    packageId?: StringFilter<"IncludedItems"> | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id">

  export type IncludedItemsOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
    _count?: IncludedItemsCountOrderByAggregateInput
    _max?: IncludedItemsMaxOrderByAggregateInput
    _min?: IncludedItemsMinOrderByAggregateInput
  }

  export type IncludedItemsScalarWhereWithAggregatesInput = {
    AND?: IncludedItemsScalarWhereWithAggregatesInput | IncludedItemsScalarWhereWithAggregatesInput[]
    OR?: IncludedItemsScalarWhereWithAggregatesInput[]
    NOT?: IncludedItemsScalarWhereWithAggregatesInput | IncludedItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncludedItems"> | string
    item?: StringWithAggregatesFilter<"IncludedItems"> | string
    packageId?: StringWithAggregatesFilter<"IncludedItems"> | string
  }

  export type ExcludedItemsWhereInput = {
    AND?: ExcludedItemsWhereInput | ExcludedItemsWhereInput[]
    OR?: ExcludedItemsWhereInput[]
    NOT?: ExcludedItemsWhereInput | ExcludedItemsWhereInput[]
    id?: StringFilter<"ExcludedItems"> | string
    item?: StringFilter<"ExcludedItems"> | string
    packageId?: StringFilter<"ExcludedItems"> | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type ExcludedItemsOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
    package?: PackageOrderByWithRelationInput
  }

  export type ExcludedItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExcludedItemsWhereInput | ExcludedItemsWhereInput[]
    OR?: ExcludedItemsWhereInput[]
    NOT?: ExcludedItemsWhereInput | ExcludedItemsWhereInput[]
    item?: StringFilter<"ExcludedItems"> | string
    packageId?: StringFilter<"ExcludedItems"> | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id">

  export type ExcludedItemsOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
    _count?: ExcludedItemsCountOrderByAggregateInput
    _max?: ExcludedItemsMaxOrderByAggregateInput
    _min?: ExcludedItemsMinOrderByAggregateInput
  }

  export type ExcludedItemsScalarWhereWithAggregatesInput = {
    AND?: ExcludedItemsScalarWhereWithAggregatesInput | ExcludedItemsScalarWhereWithAggregatesInput[]
    OR?: ExcludedItemsScalarWhereWithAggregatesInput[]
    NOT?: ExcludedItemsScalarWhereWithAggregatesInput | ExcludedItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExcludedItems"> | string
    item?: StringWithAggregatesFilter<"ExcludedItems"> | string
    packageId?: StringWithAggregatesFilter<"ExcludedItems"> | string
  }

  export type BlogsWhereInput = {
    AND?: BlogsWhereInput | BlogsWhereInput[]
    OR?: BlogsWhereInput[]
    NOT?: BlogsWhereInput | BlogsWhereInput[]
    id?: StringFilter<"Blogs"> | string
    title?: StringFilter<"Blogs"> | string
    html?: StringFilter<"Blogs"> | string
    thumbnail?: StringNullableFilter<"Blogs"> | string | null
    customerName?: StringNullableFilter<"Blogs"> | string | null
    feedback?: StringNullableFilter<"Blogs"> | string | null
    author?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
    categories?: BlogCategoryListRelationFilter
    images?: BlogImagesListRelationFilter
  }

  export type BlogsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    html?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: BlogCategoryOrderByRelationAggregateInput
    images?: BlogImagesOrderByRelationAggregateInput
  }

  export type BlogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogsWhereInput | BlogsWhereInput[]
    OR?: BlogsWhereInput[]
    NOT?: BlogsWhereInput | BlogsWhereInput[]
    title?: StringFilter<"Blogs"> | string
    html?: StringFilter<"Blogs"> | string
    thumbnail?: StringNullableFilter<"Blogs"> | string | null
    customerName?: StringNullableFilter<"Blogs"> | string | null
    feedback?: StringNullableFilter<"Blogs"> | string | null
    author?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
    categories?: BlogCategoryListRelationFilter
    images?: BlogImagesListRelationFilter
  }, "id">

  export type BlogsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    html?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogsCountOrderByAggregateInput
    _max?: BlogsMaxOrderByAggregateInput
    _min?: BlogsMinOrderByAggregateInput
  }

  export type BlogsScalarWhereWithAggregatesInput = {
    AND?: BlogsScalarWhereWithAggregatesInput | BlogsScalarWhereWithAggregatesInput[]
    OR?: BlogsScalarWhereWithAggregatesInput[]
    NOT?: BlogsScalarWhereWithAggregatesInput | BlogsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blogs"> | string
    title?: StringWithAggregatesFilter<"Blogs"> | string
    html?: StringWithAggregatesFilter<"Blogs"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"Blogs"> | string | null
    customerName?: StringNullableWithAggregatesFilter<"Blogs"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"Blogs"> | string | null
    author?: StringWithAggregatesFilter<"Blogs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Blogs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blogs"> | Date | string
  }

  export type BlogImagesWhereInput = {
    AND?: BlogImagesWhereInput | BlogImagesWhereInput[]
    OR?: BlogImagesWhereInput[]
    NOT?: BlogImagesWhereInput | BlogImagesWhereInput[]
    id?: StringFilter<"BlogImages"> | string
    url?: StringFilter<"BlogImages"> | string
    blogId?: StringFilter<"BlogImages"> | string
    blog?: XOR<BlogsScalarRelationFilter, BlogsWhereInput>
  }

  export type BlogImagesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    blogId?: SortOrder
    blog?: BlogsOrderByWithRelationInput
  }

  export type BlogImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogImagesWhereInput | BlogImagesWhereInput[]
    OR?: BlogImagesWhereInput[]
    NOT?: BlogImagesWhereInput | BlogImagesWhereInput[]
    url?: StringFilter<"BlogImages"> | string
    blogId?: StringFilter<"BlogImages"> | string
    blog?: XOR<BlogsScalarRelationFilter, BlogsWhereInput>
  }, "id">

  export type BlogImagesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    blogId?: SortOrder
    _count?: BlogImagesCountOrderByAggregateInput
    _max?: BlogImagesMaxOrderByAggregateInput
    _min?: BlogImagesMinOrderByAggregateInput
  }

  export type BlogImagesScalarWhereWithAggregatesInput = {
    AND?: BlogImagesScalarWhereWithAggregatesInput | BlogImagesScalarWhereWithAggregatesInput[]
    OR?: BlogImagesScalarWhereWithAggregatesInput[]
    NOT?: BlogImagesScalarWhereWithAggregatesInput | BlogImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogImages"> | string
    url?: StringWithAggregatesFilter<"BlogImages"> | string
    blogId?: StringWithAggregatesFilter<"BlogImages"> | string
  }

  export type BlogCategoryWhereInput = {
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    id?: StringFilter<"BlogCategory"> | string
    name?: StringFilter<"BlogCategory"> | string
    blogs?: BlogsListRelationFilter
  }

  export type BlogCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    blogs?: BlogsOrderByRelationAggregateInput
  }

  export type BlogCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    name?: StringFilter<"BlogCategory"> | string
    blogs?: BlogsListRelationFilter
  }, "id">

  export type BlogCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BlogCategoryCountOrderByAggregateInput
    _max?: BlogCategoryMaxOrderByAggregateInput
    _min?: BlogCategoryMinOrderByAggregateInput
  }

  export type BlogCategoryScalarWhereWithAggregatesInput = {
    AND?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    OR?: BlogCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogCategory"> | string
    name?: StringWithAggregatesFilter<"BlogCategory"> | string
  }

  export type DestinationsWhereInput = {
    AND?: DestinationsWhereInput | DestinationsWhereInput[]
    OR?: DestinationsWhereInput[]
    NOT?: DestinationsWhereInput | DestinationsWhereInput[]
    id?: StringFilter<"Destinations"> | string
    name?: StringFilter<"Destinations"> | string
    tag?: StringNullableFilter<"Destinations"> | string | null
    title?: StringNullableFilter<"Destinations"> | string | null
    description?: StringFilter<"Destinations"> | string
    image?: StringNullableFilter<"Destinations"> | string | null
    country?: StringFilter<"Destinations"> | string
    visa?: StringNullableFilter<"Destinations"> | string | null
    languagesSpoken?: StringNullableFilter<"Destinations"> | string | null
    currency?: StringNullableFilter<"Destinations"> | string | null
    createdAt?: DateTimeFilter<"Destinations"> | Date | string
    updatedAt?: DateTimeFilter<"Destinations"> | Date | string
    places?: PlacesListRelationFilter
    faqs?: DestinationFAQListRelationFilter
  }

  export type DestinationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tag?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    country?: SortOrder
    visa?: SortOrderInput | SortOrder
    languagesSpoken?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    places?: PlacesOrderByRelationAggregateInput
    faqs?: DestinationFAQOrderByRelationAggregateInput
  }

  export type DestinationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationsWhereInput | DestinationsWhereInput[]
    OR?: DestinationsWhereInput[]
    NOT?: DestinationsWhereInput | DestinationsWhereInput[]
    name?: StringFilter<"Destinations"> | string
    tag?: StringNullableFilter<"Destinations"> | string | null
    title?: StringNullableFilter<"Destinations"> | string | null
    description?: StringFilter<"Destinations"> | string
    image?: StringNullableFilter<"Destinations"> | string | null
    country?: StringFilter<"Destinations"> | string
    visa?: StringNullableFilter<"Destinations"> | string | null
    languagesSpoken?: StringNullableFilter<"Destinations"> | string | null
    currency?: StringNullableFilter<"Destinations"> | string | null
    createdAt?: DateTimeFilter<"Destinations"> | Date | string
    updatedAt?: DateTimeFilter<"Destinations"> | Date | string
    places?: PlacesListRelationFilter
    faqs?: DestinationFAQListRelationFilter
  }, "id">

  export type DestinationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tag?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    country?: SortOrder
    visa?: SortOrderInput | SortOrder
    languagesSpoken?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationsCountOrderByAggregateInput
    _max?: DestinationsMaxOrderByAggregateInput
    _min?: DestinationsMinOrderByAggregateInput
  }

  export type DestinationsScalarWhereWithAggregatesInput = {
    AND?: DestinationsScalarWhereWithAggregatesInput | DestinationsScalarWhereWithAggregatesInput[]
    OR?: DestinationsScalarWhereWithAggregatesInput[]
    NOT?: DestinationsScalarWhereWithAggregatesInput | DestinationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Destinations"> | string
    name?: StringWithAggregatesFilter<"Destinations"> | string
    tag?: StringNullableWithAggregatesFilter<"Destinations"> | string | null
    title?: StringNullableWithAggregatesFilter<"Destinations"> | string | null
    description?: StringWithAggregatesFilter<"Destinations"> | string
    image?: StringNullableWithAggregatesFilter<"Destinations"> | string | null
    country?: StringWithAggregatesFilter<"Destinations"> | string
    visa?: StringNullableWithAggregatesFilter<"Destinations"> | string | null
    languagesSpoken?: StringNullableWithAggregatesFilter<"Destinations"> | string | null
    currency?: StringNullableWithAggregatesFilter<"Destinations"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Destinations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Destinations"> | Date | string
  }

  export type PlacesWhereInput = {
    AND?: PlacesWhereInput | PlacesWhereInput[]
    OR?: PlacesWhereInput[]
    NOT?: PlacesWhereInput | PlacesWhereInput[]
    id?: StringFilter<"Places"> | string
    name?: StringFilter<"Places"> | string
    image?: StringNullableFilter<"Places"> | string | null
    description?: StringFilter<"Places"> | string
    destinationId?: StringFilter<"Places"> | string
    destination?: XOR<DestinationsScalarRelationFilter, DestinationsWhereInput>
  }

  export type PlacesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrder
    destinationId?: SortOrder
    destination?: DestinationsOrderByWithRelationInput
  }

  export type PlacesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlacesWhereInput | PlacesWhereInput[]
    OR?: PlacesWhereInput[]
    NOT?: PlacesWhereInput | PlacesWhereInput[]
    name?: StringFilter<"Places"> | string
    image?: StringNullableFilter<"Places"> | string | null
    description?: StringFilter<"Places"> | string
    destinationId?: StringFilter<"Places"> | string
    destination?: XOR<DestinationsScalarRelationFilter, DestinationsWhereInput>
  }, "id">

  export type PlacesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrder
    destinationId?: SortOrder
    _count?: PlacesCountOrderByAggregateInput
    _max?: PlacesMaxOrderByAggregateInput
    _min?: PlacesMinOrderByAggregateInput
  }

  export type PlacesScalarWhereWithAggregatesInput = {
    AND?: PlacesScalarWhereWithAggregatesInput | PlacesScalarWhereWithAggregatesInput[]
    OR?: PlacesScalarWhereWithAggregatesInput[]
    NOT?: PlacesScalarWhereWithAggregatesInput | PlacesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Places"> | string
    name?: StringWithAggregatesFilter<"Places"> | string
    image?: StringNullableWithAggregatesFilter<"Places"> | string | null
    description?: StringWithAggregatesFilter<"Places"> | string
    destinationId?: StringWithAggregatesFilter<"Places"> | string
  }

  export type DestinationFAQWhereInput = {
    AND?: DestinationFAQWhereInput | DestinationFAQWhereInput[]
    OR?: DestinationFAQWhereInput[]
    NOT?: DestinationFAQWhereInput | DestinationFAQWhereInput[]
    id?: StringFilter<"DestinationFAQ"> | string
    question?: StringFilter<"DestinationFAQ"> | string
    answer?: StringFilter<"DestinationFAQ"> | string
    destinationId?: StringFilter<"DestinationFAQ"> | string
    destination?: XOR<DestinationsScalarRelationFilter, DestinationsWhereInput>
  }

  export type DestinationFAQOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    destinationId?: SortOrder
    destination?: DestinationsOrderByWithRelationInput
  }

  export type DestinationFAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationFAQWhereInput | DestinationFAQWhereInput[]
    OR?: DestinationFAQWhereInput[]
    NOT?: DestinationFAQWhereInput | DestinationFAQWhereInput[]
    question?: StringFilter<"DestinationFAQ"> | string
    answer?: StringFilter<"DestinationFAQ"> | string
    destinationId?: StringFilter<"DestinationFAQ"> | string
    destination?: XOR<DestinationsScalarRelationFilter, DestinationsWhereInput>
  }, "id">

  export type DestinationFAQOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    destinationId?: SortOrder
    _count?: DestinationFAQCountOrderByAggregateInput
    _max?: DestinationFAQMaxOrderByAggregateInput
    _min?: DestinationFAQMinOrderByAggregateInput
  }

  export type DestinationFAQScalarWhereWithAggregatesInput = {
    AND?: DestinationFAQScalarWhereWithAggregatesInput | DestinationFAQScalarWhereWithAggregatesInput[]
    OR?: DestinationFAQScalarWhereWithAggregatesInput[]
    NOT?: DestinationFAQScalarWhereWithAggregatesInput | DestinationFAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DestinationFAQ"> | string
    question?: StringWithAggregatesFilter<"DestinationFAQ"> | string
    answer?: StringWithAggregatesFilter<"DestinationFAQ"> | string
    destinationId?: StringWithAggregatesFilter<"DestinationFAQ"> | string
  }

  export type TestimonialsWhereInput = {
    AND?: TestimonialsWhereInput | TestimonialsWhereInput[]
    OR?: TestimonialsWhereInput[]
    NOT?: TestimonialsWhereInput | TestimonialsWhereInput[]
    id?: StringFilter<"Testimonials"> | string
    customerName?: StringFilter<"Testimonials"> | string
    feedback?: StringFilter<"Testimonials"> | string
    rating?: IntFilter<"Testimonials"> | number
    image?: StringNullableFilter<"Testimonials"> | string | null
    createdAt?: DateTimeFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonials"> | Date | string
  }

  export type TestimonialsOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestimonialsWhereInput | TestimonialsWhereInput[]
    OR?: TestimonialsWhereInput[]
    NOT?: TestimonialsWhereInput | TestimonialsWhereInput[]
    customerName?: StringFilter<"Testimonials"> | string
    feedback?: StringFilter<"Testimonials"> | string
    rating?: IntFilter<"Testimonials"> | number
    image?: StringNullableFilter<"Testimonials"> | string | null
    createdAt?: DateTimeFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonials"> | Date | string
  }, "id">

  export type TestimonialsOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestimonialsCountOrderByAggregateInput
    _avg?: TestimonialsAvgOrderByAggregateInput
    _max?: TestimonialsMaxOrderByAggregateInput
    _min?: TestimonialsMinOrderByAggregateInput
    _sum?: TestimonialsSumOrderByAggregateInput
  }

  export type TestimonialsScalarWhereWithAggregatesInput = {
    AND?: TestimonialsScalarWhereWithAggregatesInput | TestimonialsScalarWhereWithAggregatesInput[]
    OR?: TestimonialsScalarWhereWithAggregatesInput[]
    NOT?: TestimonialsScalarWhereWithAggregatesInput | TestimonialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Testimonials"> | string
    customerName?: StringWithAggregatesFilter<"Testimonials"> | string
    feedback?: StringWithAggregatesFilter<"Testimonials"> | string
    rating?: IntWithAggregatesFilter<"Testimonials"> | number
    image?: StringNullableWithAggregatesFilter<"Testimonials"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Testimonials"> | Date | string
  }

  export type PackageCreateInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inclusions?: IncludedItemsCreateNestedManyWithoutPackageInput
    exclusions?: ExcludedItemsCreateNestedManyWithoutPackageInput
    itineraries?: DayItineraryCreateNestedManyWithoutPackageInput
    bookings?: BookingsCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inclusions?: IncludedItemsUncheckedCreateNestedManyWithoutPackageInput
    exclusions?: ExcludedItemsUncheckedCreateNestedManyWithoutPackageInput
    itineraries?: DayItineraryUncheckedCreateNestedManyWithoutPackageInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inclusions?: IncludedItemsUpdateManyWithoutPackageNestedInput
    exclusions?: ExcludedItemsUpdateManyWithoutPackageNestedInput
    itineraries?: DayItineraryUpdateManyWithoutPackageNestedInput
    bookings?: BookingsUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inclusions?: IncludedItemsUncheckedUpdateManyWithoutPackageNestedInput
    exclusions?: ExcludedItemsUncheckedUpdateManyWithoutPackageNestedInput
    itineraries?: DayItineraryUncheckedUpdateManyWithoutPackageNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateInput = {
    id?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentCreateNestedManyWithoutBookingInput
    package: PackageCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateInput = {
    id?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid?: boolean
    packageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateManyWithoutBookingNestedInput
    package?: PackageUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    packageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingsCreateManyInput = {
    id?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid?: boolean
    packageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    packageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    paymentMethod: string
    razorpayPaymentId?: string | null
    paymentDate?: Date | string
    createdAt?: Date | string
    booking: BookingsCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    paymentMethod: string
    razorpayPaymentId?: string | null
    paymentDate?: Date | string
    bookingId: string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingsUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    paymentMethod: string
    razorpayPaymentId?: string | null
    paymentDate?: Date | string
    bookingId: string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayItineraryCreateInput = {
    id?: string
    title?: string
    dayNumber: number
    description?: string
    features?: FeaturedItemsCreateNestedManyWithoutDayItineraryInput
    package: PackageCreateNestedOneWithoutItinerariesInput
  }

  export type DayItineraryUncheckedCreateInput = {
    id?: string
    title?: string
    dayNumber: number
    description?: string
    packageId: string
    features?: FeaturedItemsUncheckedCreateNestedManyWithoutDayItineraryInput
  }

  export type DayItineraryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: FeaturedItemsUpdateManyWithoutDayItineraryNestedInput
    package?: PackageUpdateOneRequiredWithoutItinerariesNestedInput
  }

  export type DayItineraryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    features?: FeaturedItemsUncheckedUpdateManyWithoutDayItineraryNestedInput
  }

  export type DayItineraryCreateManyInput = {
    id?: string
    title?: string
    dayNumber: number
    description?: string
    packageId: string
  }

  export type DayItineraryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DayItineraryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type FeaturedItemsCreateInput = {
    id?: string
    item: string
    dayItinerary: DayItineraryCreateNestedOneWithoutFeaturesInput
  }

  export type FeaturedItemsUncheckedCreateInput = {
    id?: string
    item: string
    dayItineraryId: string
  }

  export type FeaturedItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    dayItinerary?: DayItineraryUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type FeaturedItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    dayItineraryId?: StringFieldUpdateOperationsInput | string
  }

  export type FeaturedItemsCreateManyInput = {
    id?: string
    item: string
    dayItineraryId: string
  }

  export type FeaturedItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type FeaturedItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    dayItineraryId?: StringFieldUpdateOperationsInput | string
  }

  export type IncludedItemsCreateInput = {
    id?: string
    item: string
    package: PackageCreateNestedOneWithoutInclusionsInput
  }

  export type IncludedItemsUncheckedCreateInput = {
    id?: string
    item: string
    packageId: string
  }

  export type IncludedItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    package?: PackageUpdateOneRequiredWithoutInclusionsNestedInput
  }

  export type IncludedItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type IncludedItemsCreateManyInput = {
    id?: string
    item: string
    packageId: string
  }

  export type IncludedItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type IncludedItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type ExcludedItemsCreateInput = {
    id?: string
    item: string
    package: PackageCreateNestedOneWithoutExclusionsInput
  }

  export type ExcludedItemsUncheckedCreateInput = {
    id?: string
    item: string
    packageId: string
  }

  export type ExcludedItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    package?: PackageUpdateOneRequiredWithoutExclusionsNestedInput
  }

  export type ExcludedItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type ExcludedItemsCreateManyInput = {
    id?: string
    item: string
    packageId: string
  }

  export type ExcludedItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type ExcludedItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogsCreateInput = {
    id?: string
    title: string
    html: string
    thumbnail?: string | null
    customerName?: string | null
    feedback?: string | null
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: BlogCategoryCreateNestedManyWithoutBlogsInput
    images?: BlogImagesCreateNestedManyWithoutBlogInput
  }

  export type BlogsUncheckedCreateInput = {
    id?: string
    title: string
    html: string
    thumbnail?: string | null
    customerName?: string | null
    feedback?: string | null
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: BlogCategoryUncheckedCreateNestedManyWithoutBlogsInput
    images?: BlogImagesUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BlogCategoryUpdateManyWithoutBlogsNestedInput
    images?: BlogImagesUpdateManyWithoutBlogNestedInput
  }

  export type BlogsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BlogCategoryUncheckedUpdateManyWithoutBlogsNestedInput
    images?: BlogImagesUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogsCreateManyInput = {
    id?: string
    title: string
    html: string
    thumbnail?: string | null
    customerName?: string | null
    feedback?: string | null
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogImagesCreateInput = {
    id?: string
    url: string
    blog: BlogsCreateNestedOneWithoutImagesInput
  }

  export type BlogImagesUncheckedCreateInput = {
    id?: string
    url: string
    blogId: string
  }

  export type BlogImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blog?: BlogsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type BlogImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogImagesCreateManyInput = {
    id?: string
    url: string
    blogId: string
  }

  export type BlogImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BlogImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryCreateInput = {
    id?: string
    name: string
    blogs?: BlogsCreateNestedManyWithoutCategoriesInput
  }

  export type BlogCategoryUncheckedCreateInput = {
    id?: string
    name: string
    blogs?: BlogsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type BlogCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    blogs?: BlogsUpdateManyWithoutCategoriesNestedInput
  }

  export type BlogCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    blogs?: BlogsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type BlogCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type BlogCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationsCreateInput = {
    id?: string
    name: string
    tag?: string | null
    title?: string | null
    description?: string
    image?: string | null
    country: string
    visa?: string | null
    languagesSpoken?: string | null
    currency?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    places?: PlacesCreateNestedManyWithoutDestinationInput
    faqs?: DestinationFAQCreateNestedManyWithoutDestinationInput
  }

  export type DestinationsUncheckedCreateInput = {
    id?: string
    name: string
    tag?: string | null
    title?: string | null
    description?: string
    image?: string | null
    country: string
    visa?: string | null
    languagesSpoken?: string | null
    currency?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    places?: PlacesUncheckedCreateNestedManyWithoutDestinationInput
    faqs?: DestinationFAQUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    visa?: NullableStringFieldUpdateOperationsInput | string | null
    languagesSpoken?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    places?: PlacesUpdateManyWithoutDestinationNestedInput
    faqs?: DestinationFAQUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    visa?: NullableStringFieldUpdateOperationsInput | string | null
    languagesSpoken?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    places?: PlacesUncheckedUpdateManyWithoutDestinationNestedInput
    faqs?: DestinationFAQUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationsCreateManyInput = {
    id?: string
    name: string
    tag?: string | null
    title?: string | null
    description?: string
    image?: string | null
    country: string
    visa?: string | null
    languagesSpoken?: string | null
    currency?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    visa?: NullableStringFieldUpdateOperationsInput | string | null
    languagesSpoken?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    visa?: NullableStringFieldUpdateOperationsInput | string | null
    languagesSpoken?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacesCreateInput = {
    id?: string
    name: string
    image?: string | null
    description?: string
    destination: DestinationsCreateNestedOneWithoutPlacesInput
  }

  export type PlacesUncheckedCreateInput = {
    id?: string
    name: string
    image?: string | null
    description?: string
    destinationId: string
  }

  export type PlacesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    destination?: DestinationsUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type PlacesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
  }

  export type PlacesCreateManyInput = {
    id?: string
    name: string
    image?: string | null
    description?: string
    destinationId: string
  }

  export type PlacesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlacesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationFAQCreateInput = {
    id?: string
    question: string
    answer: string
    destination: DestinationsCreateNestedOneWithoutFaqsInput
  }

  export type DestinationFAQUncheckedCreateInput = {
    id?: string
    question: string
    answer: string
    destinationId: string
  }

  export type DestinationFAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    destination?: DestinationsUpdateOneRequiredWithoutFaqsNestedInput
  }

  export type DestinationFAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationFAQCreateManyInput = {
    id?: string
    question: string
    answer: string
    destinationId: string
  }

  export type DestinationFAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationFAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
  }

  export type TestimonialsCreateInput = {
    id?: string
    customerName: string
    feedback: string
    rating: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsUncheckedCreateInput = {
    id?: string
    customerName: string
    feedback: string
    rating: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsCreateManyInput = {
    id?: string
    customerName: string
    feedback: string
    rating: number
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IncludedItemsListRelationFilter = {
    every?: IncludedItemsWhereInput
    some?: IncludedItemsWhereInput
    none?: IncludedItemsWhereInput
  }

  export type ExcludedItemsListRelationFilter = {
    every?: ExcludedItemsWhereInput
    some?: ExcludedItemsWhereInput
    none?: ExcludedItemsWhereInput
  }

  export type DayItineraryListRelationFilter = {
    every?: DayItineraryWhereInput
    some?: DayItineraryWhereInput
    none?: DayItineraryWhereInput
  }

  export type BookingsListRelationFilter = {
    every?: BookingsWhereInput
    some?: BookingsWhereInput
    none?: BookingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IncludedItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExcludedItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayItineraryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    days?: SortOrder
    nights?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    type?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    days?: SortOrder
    nights?: SortOrder
    price?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    days?: SortOrder
    nights?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    type?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    days?: SortOrder
    nights?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    type?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    days?: SortOrder
    nights?: SortOrder
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingsCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    numberOfPeople?: SortOrder
    paid?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsAvgOrderByAggregateInput = {
    numberOfPeople?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    numberOfPeople?: SortOrder
    paid?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    numberOfPeople?: SortOrder
    paid?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsSumOrderByAggregateInput = {
    numberOfPeople?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BookingsScalarRelationFilter = {
    is?: BookingsWhereInput
    isNot?: BookingsWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paymentMethod?: SortOrder
    razorpayPaymentId?: SortOrder
    paymentDate?: SortOrder
    bookingId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paymentMethod?: SortOrder
    razorpayPaymentId?: SortOrder
    paymentDate?: SortOrder
    bookingId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paymentMethod?: SortOrder
    razorpayPaymentId?: SortOrder
    paymentDate?: SortOrder
    bookingId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FeaturedItemsListRelationFilter = {
    every?: FeaturedItemsWhereInput
    some?: FeaturedItemsWhereInput
    none?: FeaturedItemsWhereInput
  }

  export type FeaturedItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayItineraryPackageIdDayNumberCompoundUniqueInput = {
    packageId: string
    dayNumber: number
  }

  export type DayItineraryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dayNumber?: SortOrder
    description?: SortOrder
    packageId?: SortOrder
  }

  export type DayItineraryAvgOrderByAggregateInput = {
    dayNumber?: SortOrder
  }

  export type DayItineraryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dayNumber?: SortOrder
    description?: SortOrder
    packageId?: SortOrder
  }

  export type DayItineraryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dayNumber?: SortOrder
    description?: SortOrder
    packageId?: SortOrder
  }

  export type DayItinerarySumOrderByAggregateInput = {
    dayNumber?: SortOrder
  }

  export type DayItineraryScalarRelationFilter = {
    is?: DayItineraryWhereInput
    isNot?: DayItineraryWhereInput
  }

  export type FeaturedItemsCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    dayItineraryId?: SortOrder
  }

  export type FeaturedItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    dayItineraryId?: SortOrder
  }

  export type FeaturedItemsMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    dayItineraryId?: SortOrder
  }

  export type IncludedItemsCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
  }

  export type IncludedItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
  }

  export type IncludedItemsMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
  }

  export type ExcludedItemsCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
  }

  export type ExcludedItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
  }

  export type ExcludedItemsMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    packageId?: SortOrder
  }

  export type BlogCategoryListRelationFilter = {
    every?: BlogCategoryWhereInput
    some?: BlogCategoryWhereInput
    none?: BlogCategoryWhereInput
  }

  export type BlogImagesListRelationFilter = {
    every?: BlogImagesWhereInput
    some?: BlogImagesWhereInput
    none?: BlogImagesWhereInput
  }

  export type BlogCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    html?: SortOrder
    thumbnail?: SortOrder
    customerName?: SortOrder
    feedback?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    html?: SortOrder
    thumbnail?: SortOrder
    customerName?: SortOrder
    feedback?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    html?: SortOrder
    thumbnail?: SortOrder
    customerName?: SortOrder
    feedback?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogsScalarRelationFilter = {
    is?: BlogsWhereInput
    isNot?: BlogsWhereInput
  }

  export type BlogImagesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    blogId?: SortOrder
  }

  export type BlogImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    blogId?: SortOrder
  }

  export type BlogImagesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    blogId?: SortOrder
  }

  export type BlogsListRelationFilter = {
    every?: BlogsWhereInput
    some?: BlogsWhereInput
    none?: BlogsWhereInput
  }

  export type BlogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BlogCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BlogCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PlacesListRelationFilter = {
    every?: PlacesWhereInput
    some?: PlacesWhereInput
    none?: PlacesWhereInput
  }

  export type DestinationFAQListRelationFilter = {
    every?: DestinationFAQWhereInput
    some?: DestinationFAQWhereInput
    none?: DestinationFAQWhereInput
  }

  export type PlacesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationFAQOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tag?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    country?: SortOrder
    visa?: SortOrder
    languagesSpoken?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tag?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    country?: SortOrder
    visa?: SortOrder
    languagesSpoken?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tag?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    country?: SortOrder
    visa?: SortOrder
    languagesSpoken?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationsScalarRelationFilter = {
    is?: DestinationsWhereInput
    isNot?: DestinationsWhereInput
  }

  export type PlacesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    destinationId?: SortOrder
  }

  export type PlacesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    destinationId?: SortOrder
  }

  export type PlacesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    destinationId?: SortOrder
  }

  export type DestinationFAQCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    destinationId?: SortOrder
  }

  export type DestinationFAQMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    destinationId?: SortOrder
  }

  export type DestinationFAQMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    destinationId?: SortOrder
  }

  export type TestimonialsCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type TestimonialsMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialsMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IncludedItemsCreateNestedManyWithoutPackageInput = {
    create?: XOR<IncludedItemsCreateWithoutPackageInput, IncludedItemsUncheckedCreateWithoutPackageInput> | IncludedItemsCreateWithoutPackageInput[] | IncludedItemsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: IncludedItemsCreateOrConnectWithoutPackageInput | IncludedItemsCreateOrConnectWithoutPackageInput[]
    createMany?: IncludedItemsCreateManyPackageInputEnvelope
    connect?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
  }

  export type ExcludedItemsCreateNestedManyWithoutPackageInput = {
    create?: XOR<ExcludedItemsCreateWithoutPackageInput, ExcludedItemsUncheckedCreateWithoutPackageInput> | ExcludedItemsCreateWithoutPackageInput[] | ExcludedItemsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ExcludedItemsCreateOrConnectWithoutPackageInput | ExcludedItemsCreateOrConnectWithoutPackageInput[]
    createMany?: ExcludedItemsCreateManyPackageInputEnvelope
    connect?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
  }

  export type DayItineraryCreateNestedManyWithoutPackageInput = {
    create?: XOR<DayItineraryCreateWithoutPackageInput, DayItineraryUncheckedCreateWithoutPackageInput> | DayItineraryCreateWithoutPackageInput[] | DayItineraryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: DayItineraryCreateOrConnectWithoutPackageInput | DayItineraryCreateOrConnectWithoutPackageInput[]
    createMany?: DayItineraryCreateManyPackageInputEnvelope
    connect?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
  }

  export type BookingsCreateNestedManyWithoutPackageInput = {
    create?: XOR<BookingsCreateWithoutPackageInput, BookingsUncheckedCreateWithoutPackageInput> | BookingsCreateWithoutPackageInput[] | BookingsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutPackageInput | BookingsCreateOrConnectWithoutPackageInput[]
    createMany?: BookingsCreateManyPackageInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type IncludedItemsUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<IncludedItemsCreateWithoutPackageInput, IncludedItemsUncheckedCreateWithoutPackageInput> | IncludedItemsCreateWithoutPackageInput[] | IncludedItemsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: IncludedItemsCreateOrConnectWithoutPackageInput | IncludedItemsCreateOrConnectWithoutPackageInput[]
    createMany?: IncludedItemsCreateManyPackageInputEnvelope
    connect?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
  }

  export type ExcludedItemsUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<ExcludedItemsCreateWithoutPackageInput, ExcludedItemsUncheckedCreateWithoutPackageInput> | ExcludedItemsCreateWithoutPackageInput[] | ExcludedItemsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ExcludedItemsCreateOrConnectWithoutPackageInput | ExcludedItemsCreateOrConnectWithoutPackageInput[]
    createMany?: ExcludedItemsCreateManyPackageInputEnvelope
    connect?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
  }

  export type DayItineraryUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<DayItineraryCreateWithoutPackageInput, DayItineraryUncheckedCreateWithoutPackageInput> | DayItineraryCreateWithoutPackageInput[] | DayItineraryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: DayItineraryCreateOrConnectWithoutPackageInput | DayItineraryCreateOrConnectWithoutPackageInput[]
    createMany?: DayItineraryCreateManyPackageInputEnvelope
    connect?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<BookingsCreateWithoutPackageInput, BookingsUncheckedCreateWithoutPackageInput> | BookingsCreateWithoutPackageInput[] | BookingsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutPackageInput | BookingsCreateOrConnectWithoutPackageInput[]
    createMany?: BookingsCreateManyPackageInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IncludedItemsUpdateManyWithoutPackageNestedInput = {
    create?: XOR<IncludedItemsCreateWithoutPackageInput, IncludedItemsUncheckedCreateWithoutPackageInput> | IncludedItemsCreateWithoutPackageInput[] | IncludedItemsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: IncludedItemsCreateOrConnectWithoutPackageInput | IncludedItemsCreateOrConnectWithoutPackageInput[]
    upsert?: IncludedItemsUpsertWithWhereUniqueWithoutPackageInput | IncludedItemsUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: IncludedItemsCreateManyPackageInputEnvelope
    set?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
    disconnect?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
    delete?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
    connect?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
    update?: IncludedItemsUpdateWithWhereUniqueWithoutPackageInput | IncludedItemsUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: IncludedItemsUpdateManyWithWhereWithoutPackageInput | IncludedItemsUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: IncludedItemsScalarWhereInput | IncludedItemsScalarWhereInput[]
  }

  export type ExcludedItemsUpdateManyWithoutPackageNestedInput = {
    create?: XOR<ExcludedItemsCreateWithoutPackageInput, ExcludedItemsUncheckedCreateWithoutPackageInput> | ExcludedItemsCreateWithoutPackageInput[] | ExcludedItemsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ExcludedItemsCreateOrConnectWithoutPackageInput | ExcludedItemsCreateOrConnectWithoutPackageInput[]
    upsert?: ExcludedItemsUpsertWithWhereUniqueWithoutPackageInput | ExcludedItemsUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: ExcludedItemsCreateManyPackageInputEnvelope
    set?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
    disconnect?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
    delete?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
    connect?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
    update?: ExcludedItemsUpdateWithWhereUniqueWithoutPackageInput | ExcludedItemsUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: ExcludedItemsUpdateManyWithWhereWithoutPackageInput | ExcludedItemsUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: ExcludedItemsScalarWhereInput | ExcludedItemsScalarWhereInput[]
  }

  export type DayItineraryUpdateManyWithoutPackageNestedInput = {
    create?: XOR<DayItineraryCreateWithoutPackageInput, DayItineraryUncheckedCreateWithoutPackageInput> | DayItineraryCreateWithoutPackageInput[] | DayItineraryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: DayItineraryCreateOrConnectWithoutPackageInput | DayItineraryCreateOrConnectWithoutPackageInput[]
    upsert?: DayItineraryUpsertWithWhereUniqueWithoutPackageInput | DayItineraryUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: DayItineraryCreateManyPackageInputEnvelope
    set?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
    disconnect?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
    delete?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
    connect?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
    update?: DayItineraryUpdateWithWhereUniqueWithoutPackageInput | DayItineraryUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: DayItineraryUpdateManyWithWhereWithoutPackageInput | DayItineraryUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: DayItineraryScalarWhereInput | DayItineraryScalarWhereInput[]
  }

  export type BookingsUpdateManyWithoutPackageNestedInput = {
    create?: XOR<BookingsCreateWithoutPackageInput, BookingsUncheckedCreateWithoutPackageInput> | BookingsCreateWithoutPackageInput[] | BookingsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutPackageInput | BookingsCreateOrConnectWithoutPackageInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutPackageInput | BookingsUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: BookingsCreateManyPackageInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutPackageInput | BookingsUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutPackageInput | BookingsUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type IncludedItemsUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<IncludedItemsCreateWithoutPackageInput, IncludedItemsUncheckedCreateWithoutPackageInput> | IncludedItemsCreateWithoutPackageInput[] | IncludedItemsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: IncludedItemsCreateOrConnectWithoutPackageInput | IncludedItemsCreateOrConnectWithoutPackageInput[]
    upsert?: IncludedItemsUpsertWithWhereUniqueWithoutPackageInput | IncludedItemsUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: IncludedItemsCreateManyPackageInputEnvelope
    set?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
    disconnect?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
    delete?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
    connect?: IncludedItemsWhereUniqueInput | IncludedItemsWhereUniqueInput[]
    update?: IncludedItemsUpdateWithWhereUniqueWithoutPackageInput | IncludedItemsUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: IncludedItemsUpdateManyWithWhereWithoutPackageInput | IncludedItemsUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: IncludedItemsScalarWhereInput | IncludedItemsScalarWhereInput[]
  }

  export type ExcludedItemsUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<ExcludedItemsCreateWithoutPackageInput, ExcludedItemsUncheckedCreateWithoutPackageInput> | ExcludedItemsCreateWithoutPackageInput[] | ExcludedItemsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ExcludedItemsCreateOrConnectWithoutPackageInput | ExcludedItemsCreateOrConnectWithoutPackageInput[]
    upsert?: ExcludedItemsUpsertWithWhereUniqueWithoutPackageInput | ExcludedItemsUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: ExcludedItemsCreateManyPackageInputEnvelope
    set?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
    disconnect?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
    delete?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
    connect?: ExcludedItemsWhereUniqueInput | ExcludedItemsWhereUniqueInput[]
    update?: ExcludedItemsUpdateWithWhereUniqueWithoutPackageInput | ExcludedItemsUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: ExcludedItemsUpdateManyWithWhereWithoutPackageInput | ExcludedItemsUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: ExcludedItemsScalarWhereInput | ExcludedItemsScalarWhereInput[]
  }

  export type DayItineraryUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<DayItineraryCreateWithoutPackageInput, DayItineraryUncheckedCreateWithoutPackageInput> | DayItineraryCreateWithoutPackageInput[] | DayItineraryUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: DayItineraryCreateOrConnectWithoutPackageInput | DayItineraryCreateOrConnectWithoutPackageInput[]
    upsert?: DayItineraryUpsertWithWhereUniqueWithoutPackageInput | DayItineraryUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: DayItineraryCreateManyPackageInputEnvelope
    set?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
    disconnect?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
    delete?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
    connect?: DayItineraryWhereUniqueInput | DayItineraryWhereUniqueInput[]
    update?: DayItineraryUpdateWithWhereUniqueWithoutPackageInput | DayItineraryUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: DayItineraryUpdateManyWithWhereWithoutPackageInput | DayItineraryUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: DayItineraryScalarWhereInput | DayItineraryScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<BookingsCreateWithoutPackageInput, BookingsUncheckedCreateWithoutPackageInput> | BookingsCreateWithoutPackageInput[] | BookingsUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutPackageInput | BookingsCreateOrConnectWithoutPackageInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutPackageInput | BookingsUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: BookingsCreateManyPackageInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutPackageInput | BookingsUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutPackageInput | BookingsUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PackageCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PackageCreateWithoutBookingsInput, PackageUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutBookingsInput
    connect?: PackageWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PackageUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PackageCreateWithoutBookingsInput, PackageUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutBookingsInput
    upsert?: PackageUpsertWithoutBookingsInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutBookingsInput, PackageUpdateWithoutBookingsInput>, PackageUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BookingsCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentInput
    connect?: BookingsWhereUniqueInput
  }

  export type BookingsUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentInput
    upsert?: BookingsUpsertWithoutPaymentInput
    connect?: BookingsWhereUniqueInput
    update?: XOR<XOR<BookingsUpdateToOneWithWhereWithoutPaymentInput, BookingsUpdateWithoutPaymentInput>, BookingsUncheckedUpdateWithoutPaymentInput>
  }

  export type FeaturedItemsCreateNestedManyWithoutDayItineraryInput = {
    create?: XOR<FeaturedItemsCreateWithoutDayItineraryInput, FeaturedItemsUncheckedCreateWithoutDayItineraryInput> | FeaturedItemsCreateWithoutDayItineraryInput[] | FeaturedItemsUncheckedCreateWithoutDayItineraryInput[]
    connectOrCreate?: FeaturedItemsCreateOrConnectWithoutDayItineraryInput | FeaturedItemsCreateOrConnectWithoutDayItineraryInput[]
    createMany?: FeaturedItemsCreateManyDayItineraryInputEnvelope
    connect?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
  }

  export type PackageCreateNestedOneWithoutItinerariesInput = {
    create?: XOR<PackageCreateWithoutItinerariesInput, PackageUncheckedCreateWithoutItinerariesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutItinerariesInput
    connect?: PackageWhereUniqueInput
  }

  export type FeaturedItemsUncheckedCreateNestedManyWithoutDayItineraryInput = {
    create?: XOR<FeaturedItemsCreateWithoutDayItineraryInput, FeaturedItemsUncheckedCreateWithoutDayItineraryInput> | FeaturedItemsCreateWithoutDayItineraryInput[] | FeaturedItemsUncheckedCreateWithoutDayItineraryInput[]
    connectOrCreate?: FeaturedItemsCreateOrConnectWithoutDayItineraryInput | FeaturedItemsCreateOrConnectWithoutDayItineraryInput[]
    createMany?: FeaturedItemsCreateManyDayItineraryInputEnvelope
    connect?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
  }

  export type FeaturedItemsUpdateManyWithoutDayItineraryNestedInput = {
    create?: XOR<FeaturedItemsCreateWithoutDayItineraryInput, FeaturedItemsUncheckedCreateWithoutDayItineraryInput> | FeaturedItemsCreateWithoutDayItineraryInput[] | FeaturedItemsUncheckedCreateWithoutDayItineraryInput[]
    connectOrCreate?: FeaturedItemsCreateOrConnectWithoutDayItineraryInput | FeaturedItemsCreateOrConnectWithoutDayItineraryInput[]
    upsert?: FeaturedItemsUpsertWithWhereUniqueWithoutDayItineraryInput | FeaturedItemsUpsertWithWhereUniqueWithoutDayItineraryInput[]
    createMany?: FeaturedItemsCreateManyDayItineraryInputEnvelope
    set?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
    disconnect?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
    delete?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
    connect?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
    update?: FeaturedItemsUpdateWithWhereUniqueWithoutDayItineraryInput | FeaturedItemsUpdateWithWhereUniqueWithoutDayItineraryInput[]
    updateMany?: FeaturedItemsUpdateManyWithWhereWithoutDayItineraryInput | FeaturedItemsUpdateManyWithWhereWithoutDayItineraryInput[]
    deleteMany?: FeaturedItemsScalarWhereInput | FeaturedItemsScalarWhereInput[]
  }

  export type PackageUpdateOneRequiredWithoutItinerariesNestedInput = {
    create?: XOR<PackageCreateWithoutItinerariesInput, PackageUncheckedCreateWithoutItinerariesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutItinerariesInput
    upsert?: PackageUpsertWithoutItinerariesInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutItinerariesInput, PackageUpdateWithoutItinerariesInput>, PackageUncheckedUpdateWithoutItinerariesInput>
  }

  export type FeaturedItemsUncheckedUpdateManyWithoutDayItineraryNestedInput = {
    create?: XOR<FeaturedItemsCreateWithoutDayItineraryInput, FeaturedItemsUncheckedCreateWithoutDayItineraryInput> | FeaturedItemsCreateWithoutDayItineraryInput[] | FeaturedItemsUncheckedCreateWithoutDayItineraryInput[]
    connectOrCreate?: FeaturedItemsCreateOrConnectWithoutDayItineraryInput | FeaturedItemsCreateOrConnectWithoutDayItineraryInput[]
    upsert?: FeaturedItemsUpsertWithWhereUniqueWithoutDayItineraryInput | FeaturedItemsUpsertWithWhereUniqueWithoutDayItineraryInput[]
    createMany?: FeaturedItemsCreateManyDayItineraryInputEnvelope
    set?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
    disconnect?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
    delete?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
    connect?: FeaturedItemsWhereUniqueInput | FeaturedItemsWhereUniqueInput[]
    update?: FeaturedItemsUpdateWithWhereUniqueWithoutDayItineraryInput | FeaturedItemsUpdateWithWhereUniqueWithoutDayItineraryInput[]
    updateMany?: FeaturedItemsUpdateManyWithWhereWithoutDayItineraryInput | FeaturedItemsUpdateManyWithWhereWithoutDayItineraryInput[]
    deleteMany?: FeaturedItemsScalarWhereInput | FeaturedItemsScalarWhereInput[]
  }

  export type DayItineraryCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<DayItineraryCreateWithoutFeaturesInput, DayItineraryUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: DayItineraryCreateOrConnectWithoutFeaturesInput
    connect?: DayItineraryWhereUniqueInput
  }

  export type DayItineraryUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: XOR<DayItineraryCreateWithoutFeaturesInput, DayItineraryUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: DayItineraryCreateOrConnectWithoutFeaturesInput
    upsert?: DayItineraryUpsertWithoutFeaturesInput
    connect?: DayItineraryWhereUniqueInput
    update?: XOR<XOR<DayItineraryUpdateToOneWithWhereWithoutFeaturesInput, DayItineraryUpdateWithoutFeaturesInput>, DayItineraryUncheckedUpdateWithoutFeaturesInput>
  }

  export type PackageCreateNestedOneWithoutInclusionsInput = {
    create?: XOR<PackageCreateWithoutInclusionsInput, PackageUncheckedCreateWithoutInclusionsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutInclusionsInput
    connect?: PackageWhereUniqueInput
  }

  export type PackageUpdateOneRequiredWithoutInclusionsNestedInput = {
    create?: XOR<PackageCreateWithoutInclusionsInput, PackageUncheckedCreateWithoutInclusionsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutInclusionsInput
    upsert?: PackageUpsertWithoutInclusionsInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutInclusionsInput, PackageUpdateWithoutInclusionsInput>, PackageUncheckedUpdateWithoutInclusionsInput>
  }

  export type PackageCreateNestedOneWithoutExclusionsInput = {
    create?: XOR<PackageCreateWithoutExclusionsInput, PackageUncheckedCreateWithoutExclusionsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutExclusionsInput
    connect?: PackageWhereUniqueInput
  }

  export type PackageUpdateOneRequiredWithoutExclusionsNestedInput = {
    create?: XOR<PackageCreateWithoutExclusionsInput, PackageUncheckedCreateWithoutExclusionsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutExclusionsInput
    upsert?: PackageUpsertWithoutExclusionsInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutExclusionsInput, PackageUpdateWithoutExclusionsInput>, PackageUncheckedUpdateWithoutExclusionsInput>
  }

  export type BlogCategoryCreateNestedManyWithoutBlogsInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput> | BlogCategoryCreateWithoutBlogsInput[] | BlogCategoryUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogsInput | BlogCategoryCreateOrConnectWithoutBlogsInput[]
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
  }

  export type BlogImagesCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogImagesCreateWithoutBlogInput, BlogImagesUncheckedCreateWithoutBlogInput> | BlogImagesCreateWithoutBlogInput[] | BlogImagesUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogImagesCreateOrConnectWithoutBlogInput | BlogImagesCreateOrConnectWithoutBlogInput[]
    createMany?: BlogImagesCreateManyBlogInputEnvelope
    connect?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
  }

  export type BlogCategoryUncheckedCreateNestedManyWithoutBlogsInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput> | BlogCategoryCreateWithoutBlogsInput[] | BlogCategoryUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogsInput | BlogCategoryCreateOrConnectWithoutBlogsInput[]
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
  }

  export type BlogImagesUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogImagesCreateWithoutBlogInput, BlogImagesUncheckedCreateWithoutBlogInput> | BlogImagesCreateWithoutBlogInput[] | BlogImagesUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogImagesCreateOrConnectWithoutBlogInput | BlogImagesCreateOrConnectWithoutBlogInput[]
    createMany?: BlogImagesCreateManyBlogInputEnvelope
    connect?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
  }

  export type BlogCategoryUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput> | BlogCategoryCreateWithoutBlogsInput[] | BlogCategoryUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogsInput | BlogCategoryCreateOrConnectWithoutBlogsInput[]
    upsert?: BlogCategoryUpsertWithWhereUniqueWithoutBlogsInput | BlogCategoryUpsertWithWhereUniqueWithoutBlogsInput[]
    set?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    disconnect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    delete?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    update?: BlogCategoryUpdateWithWhereUniqueWithoutBlogsInput | BlogCategoryUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: BlogCategoryUpdateManyWithWhereWithoutBlogsInput | BlogCategoryUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
  }

  export type BlogImagesUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogImagesCreateWithoutBlogInput, BlogImagesUncheckedCreateWithoutBlogInput> | BlogImagesCreateWithoutBlogInput[] | BlogImagesUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogImagesCreateOrConnectWithoutBlogInput | BlogImagesCreateOrConnectWithoutBlogInput[]
    upsert?: BlogImagesUpsertWithWhereUniqueWithoutBlogInput | BlogImagesUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogImagesCreateManyBlogInputEnvelope
    set?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
    disconnect?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
    delete?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
    connect?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
    update?: BlogImagesUpdateWithWhereUniqueWithoutBlogInput | BlogImagesUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogImagesUpdateManyWithWhereWithoutBlogInput | BlogImagesUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogImagesScalarWhereInput | BlogImagesScalarWhereInput[]
  }

  export type BlogCategoryUncheckedUpdateManyWithoutBlogsNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput> | BlogCategoryCreateWithoutBlogsInput[] | BlogCategoryUncheckedCreateWithoutBlogsInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogsInput | BlogCategoryCreateOrConnectWithoutBlogsInput[]
    upsert?: BlogCategoryUpsertWithWhereUniqueWithoutBlogsInput | BlogCategoryUpsertWithWhereUniqueWithoutBlogsInput[]
    set?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    disconnect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    delete?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    update?: BlogCategoryUpdateWithWhereUniqueWithoutBlogsInput | BlogCategoryUpdateWithWhereUniqueWithoutBlogsInput[]
    updateMany?: BlogCategoryUpdateManyWithWhereWithoutBlogsInput | BlogCategoryUpdateManyWithWhereWithoutBlogsInput[]
    deleteMany?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
  }

  export type BlogImagesUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogImagesCreateWithoutBlogInput, BlogImagesUncheckedCreateWithoutBlogInput> | BlogImagesCreateWithoutBlogInput[] | BlogImagesUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogImagesCreateOrConnectWithoutBlogInput | BlogImagesCreateOrConnectWithoutBlogInput[]
    upsert?: BlogImagesUpsertWithWhereUniqueWithoutBlogInput | BlogImagesUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogImagesCreateManyBlogInputEnvelope
    set?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
    disconnect?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
    delete?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
    connect?: BlogImagesWhereUniqueInput | BlogImagesWhereUniqueInput[]
    update?: BlogImagesUpdateWithWhereUniqueWithoutBlogInput | BlogImagesUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogImagesUpdateManyWithWhereWithoutBlogInput | BlogImagesUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogImagesScalarWhereInput | BlogImagesScalarWhereInput[]
  }

  export type BlogsCreateNestedOneWithoutImagesInput = {
    create?: XOR<BlogsCreateWithoutImagesInput, BlogsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: BlogsCreateOrConnectWithoutImagesInput
    connect?: BlogsWhereUniqueInput
  }

  export type BlogsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<BlogsCreateWithoutImagesInput, BlogsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: BlogsCreateOrConnectWithoutImagesInput
    upsert?: BlogsUpsertWithoutImagesInput
    connect?: BlogsWhereUniqueInput
    update?: XOR<XOR<BlogsUpdateToOneWithWhereWithoutImagesInput, BlogsUpdateWithoutImagesInput>, BlogsUncheckedUpdateWithoutImagesInput>
  }

  export type BlogsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<BlogsCreateWithoutCategoriesInput, BlogsUncheckedCreateWithoutCategoriesInput> | BlogsCreateWithoutCategoriesInput[] | BlogsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutCategoriesInput | BlogsCreateOrConnectWithoutCategoriesInput[]
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
  }

  export type BlogsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<BlogsCreateWithoutCategoriesInput, BlogsUncheckedCreateWithoutCategoriesInput> | BlogsCreateWithoutCategoriesInput[] | BlogsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutCategoriesInput | BlogsCreateOrConnectWithoutCategoriesInput[]
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
  }

  export type BlogsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<BlogsCreateWithoutCategoriesInput, BlogsUncheckedCreateWithoutCategoriesInput> | BlogsCreateWithoutCategoriesInput[] | BlogsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutCategoriesInput | BlogsCreateOrConnectWithoutCategoriesInput[]
    upsert?: BlogsUpsertWithWhereUniqueWithoutCategoriesInput | BlogsUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    disconnect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    delete?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    update?: BlogsUpdateWithWhereUniqueWithoutCategoriesInput | BlogsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: BlogsUpdateManyWithWhereWithoutCategoriesInput | BlogsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
  }

  export type BlogsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<BlogsCreateWithoutCategoriesInput, BlogsUncheckedCreateWithoutCategoriesInput> | BlogsCreateWithoutCategoriesInput[] | BlogsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutCategoriesInput | BlogsCreateOrConnectWithoutCategoriesInput[]
    upsert?: BlogsUpsertWithWhereUniqueWithoutCategoriesInput | BlogsUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    disconnect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    delete?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    update?: BlogsUpdateWithWhereUniqueWithoutCategoriesInput | BlogsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: BlogsUpdateManyWithWhereWithoutCategoriesInput | BlogsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
  }

  export type PlacesCreateNestedManyWithoutDestinationInput = {
    create?: XOR<PlacesCreateWithoutDestinationInput, PlacesUncheckedCreateWithoutDestinationInput> | PlacesCreateWithoutDestinationInput[] | PlacesUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: PlacesCreateOrConnectWithoutDestinationInput | PlacesCreateOrConnectWithoutDestinationInput[]
    createMany?: PlacesCreateManyDestinationInputEnvelope
    connect?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
  }

  export type DestinationFAQCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationFAQCreateWithoutDestinationInput, DestinationFAQUncheckedCreateWithoutDestinationInput> | DestinationFAQCreateWithoutDestinationInput[] | DestinationFAQUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationFAQCreateOrConnectWithoutDestinationInput | DestinationFAQCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationFAQCreateManyDestinationInputEnvelope
    connect?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
  }

  export type PlacesUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<PlacesCreateWithoutDestinationInput, PlacesUncheckedCreateWithoutDestinationInput> | PlacesCreateWithoutDestinationInput[] | PlacesUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: PlacesCreateOrConnectWithoutDestinationInput | PlacesCreateOrConnectWithoutDestinationInput[]
    createMany?: PlacesCreateManyDestinationInputEnvelope
    connect?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
  }

  export type DestinationFAQUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationFAQCreateWithoutDestinationInput, DestinationFAQUncheckedCreateWithoutDestinationInput> | DestinationFAQCreateWithoutDestinationInput[] | DestinationFAQUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationFAQCreateOrConnectWithoutDestinationInput | DestinationFAQCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationFAQCreateManyDestinationInputEnvelope
    connect?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
  }

  export type PlacesUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<PlacesCreateWithoutDestinationInput, PlacesUncheckedCreateWithoutDestinationInput> | PlacesCreateWithoutDestinationInput[] | PlacesUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: PlacesCreateOrConnectWithoutDestinationInput | PlacesCreateOrConnectWithoutDestinationInput[]
    upsert?: PlacesUpsertWithWhereUniqueWithoutDestinationInput | PlacesUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: PlacesCreateManyDestinationInputEnvelope
    set?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
    disconnect?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
    delete?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
    connect?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
    update?: PlacesUpdateWithWhereUniqueWithoutDestinationInput | PlacesUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: PlacesUpdateManyWithWhereWithoutDestinationInput | PlacesUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: PlacesScalarWhereInput | PlacesScalarWhereInput[]
  }

  export type DestinationFAQUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationFAQCreateWithoutDestinationInput, DestinationFAQUncheckedCreateWithoutDestinationInput> | DestinationFAQCreateWithoutDestinationInput[] | DestinationFAQUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationFAQCreateOrConnectWithoutDestinationInput | DestinationFAQCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationFAQUpsertWithWhereUniqueWithoutDestinationInput | DestinationFAQUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationFAQCreateManyDestinationInputEnvelope
    set?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
    disconnect?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
    delete?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
    connect?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
    update?: DestinationFAQUpdateWithWhereUniqueWithoutDestinationInput | DestinationFAQUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationFAQUpdateManyWithWhereWithoutDestinationInput | DestinationFAQUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationFAQScalarWhereInput | DestinationFAQScalarWhereInput[]
  }

  export type PlacesUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<PlacesCreateWithoutDestinationInput, PlacesUncheckedCreateWithoutDestinationInput> | PlacesCreateWithoutDestinationInput[] | PlacesUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: PlacesCreateOrConnectWithoutDestinationInput | PlacesCreateOrConnectWithoutDestinationInput[]
    upsert?: PlacesUpsertWithWhereUniqueWithoutDestinationInput | PlacesUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: PlacesCreateManyDestinationInputEnvelope
    set?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
    disconnect?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
    delete?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
    connect?: PlacesWhereUniqueInput | PlacesWhereUniqueInput[]
    update?: PlacesUpdateWithWhereUniqueWithoutDestinationInput | PlacesUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: PlacesUpdateManyWithWhereWithoutDestinationInput | PlacesUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: PlacesScalarWhereInput | PlacesScalarWhereInput[]
  }

  export type DestinationFAQUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationFAQCreateWithoutDestinationInput, DestinationFAQUncheckedCreateWithoutDestinationInput> | DestinationFAQCreateWithoutDestinationInput[] | DestinationFAQUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationFAQCreateOrConnectWithoutDestinationInput | DestinationFAQCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationFAQUpsertWithWhereUniqueWithoutDestinationInput | DestinationFAQUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationFAQCreateManyDestinationInputEnvelope
    set?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
    disconnect?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
    delete?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
    connect?: DestinationFAQWhereUniqueInput | DestinationFAQWhereUniqueInput[]
    update?: DestinationFAQUpdateWithWhereUniqueWithoutDestinationInput | DestinationFAQUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationFAQUpdateManyWithWhereWithoutDestinationInput | DestinationFAQUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationFAQScalarWhereInput | DestinationFAQScalarWhereInput[]
  }

  export type DestinationsCreateNestedOneWithoutPlacesInput = {
    create?: XOR<DestinationsCreateWithoutPlacesInput, DestinationsUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: DestinationsCreateOrConnectWithoutPlacesInput
    connect?: DestinationsWhereUniqueInput
  }

  export type DestinationsUpdateOneRequiredWithoutPlacesNestedInput = {
    create?: XOR<DestinationsCreateWithoutPlacesInput, DestinationsUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: DestinationsCreateOrConnectWithoutPlacesInput
    upsert?: DestinationsUpsertWithoutPlacesInput
    connect?: DestinationsWhereUniqueInput
    update?: XOR<XOR<DestinationsUpdateToOneWithWhereWithoutPlacesInput, DestinationsUpdateWithoutPlacesInput>, DestinationsUncheckedUpdateWithoutPlacesInput>
  }

  export type DestinationsCreateNestedOneWithoutFaqsInput = {
    create?: XOR<DestinationsCreateWithoutFaqsInput, DestinationsUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: DestinationsCreateOrConnectWithoutFaqsInput
    connect?: DestinationsWhereUniqueInput
  }

  export type DestinationsUpdateOneRequiredWithoutFaqsNestedInput = {
    create?: XOR<DestinationsCreateWithoutFaqsInput, DestinationsUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: DestinationsCreateOrConnectWithoutFaqsInput
    upsert?: DestinationsUpsertWithoutFaqsInput
    connect?: DestinationsWhereUniqueInput
    update?: XOR<XOR<DestinationsUpdateToOneWithWhereWithoutFaqsInput, DestinationsUpdateWithoutFaqsInput>, DestinationsUncheckedUpdateWithoutFaqsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IncludedItemsCreateWithoutPackageInput = {
    id?: string
    item: string
  }

  export type IncludedItemsUncheckedCreateWithoutPackageInput = {
    id?: string
    item: string
  }

  export type IncludedItemsCreateOrConnectWithoutPackageInput = {
    where: IncludedItemsWhereUniqueInput
    create: XOR<IncludedItemsCreateWithoutPackageInput, IncludedItemsUncheckedCreateWithoutPackageInput>
  }

  export type IncludedItemsCreateManyPackageInputEnvelope = {
    data: IncludedItemsCreateManyPackageInput | IncludedItemsCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type ExcludedItemsCreateWithoutPackageInput = {
    id?: string
    item: string
  }

  export type ExcludedItemsUncheckedCreateWithoutPackageInput = {
    id?: string
    item: string
  }

  export type ExcludedItemsCreateOrConnectWithoutPackageInput = {
    where: ExcludedItemsWhereUniqueInput
    create: XOR<ExcludedItemsCreateWithoutPackageInput, ExcludedItemsUncheckedCreateWithoutPackageInput>
  }

  export type ExcludedItemsCreateManyPackageInputEnvelope = {
    data: ExcludedItemsCreateManyPackageInput | ExcludedItemsCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type DayItineraryCreateWithoutPackageInput = {
    id?: string
    title?: string
    dayNumber: number
    description?: string
    features?: FeaturedItemsCreateNestedManyWithoutDayItineraryInput
  }

  export type DayItineraryUncheckedCreateWithoutPackageInput = {
    id?: string
    title?: string
    dayNumber: number
    description?: string
    features?: FeaturedItemsUncheckedCreateNestedManyWithoutDayItineraryInput
  }

  export type DayItineraryCreateOrConnectWithoutPackageInput = {
    where: DayItineraryWhereUniqueInput
    create: XOR<DayItineraryCreateWithoutPackageInput, DayItineraryUncheckedCreateWithoutPackageInput>
  }

  export type DayItineraryCreateManyPackageInputEnvelope = {
    data: DayItineraryCreateManyPackageInput | DayItineraryCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type BookingsCreateWithoutPackageInput = {
    id?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingsUncheckedCreateWithoutPackageInput = {
    id?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingsCreateOrConnectWithoutPackageInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutPackageInput, BookingsUncheckedCreateWithoutPackageInput>
  }

  export type BookingsCreateManyPackageInputEnvelope = {
    data: BookingsCreateManyPackageInput | BookingsCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type IncludedItemsUpsertWithWhereUniqueWithoutPackageInput = {
    where: IncludedItemsWhereUniqueInput
    update: XOR<IncludedItemsUpdateWithoutPackageInput, IncludedItemsUncheckedUpdateWithoutPackageInput>
    create: XOR<IncludedItemsCreateWithoutPackageInput, IncludedItemsUncheckedCreateWithoutPackageInput>
  }

  export type IncludedItemsUpdateWithWhereUniqueWithoutPackageInput = {
    where: IncludedItemsWhereUniqueInput
    data: XOR<IncludedItemsUpdateWithoutPackageInput, IncludedItemsUncheckedUpdateWithoutPackageInput>
  }

  export type IncludedItemsUpdateManyWithWhereWithoutPackageInput = {
    where: IncludedItemsScalarWhereInput
    data: XOR<IncludedItemsUpdateManyMutationInput, IncludedItemsUncheckedUpdateManyWithoutPackageInput>
  }

  export type IncludedItemsScalarWhereInput = {
    AND?: IncludedItemsScalarWhereInput | IncludedItemsScalarWhereInput[]
    OR?: IncludedItemsScalarWhereInput[]
    NOT?: IncludedItemsScalarWhereInput | IncludedItemsScalarWhereInput[]
    id?: StringFilter<"IncludedItems"> | string
    item?: StringFilter<"IncludedItems"> | string
    packageId?: StringFilter<"IncludedItems"> | string
  }

  export type ExcludedItemsUpsertWithWhereUniqueWithoutPackageInput = {
    where: ExcludedItemsWhereUniqueInput
    update: XOR<ExcludedItemsUpdateWithoutPackageInput, ExcludedItemsUncheckedUpdateWithoutPackageInput>
    create: XOR<ExcludedItemsCreateWithoutPackageInput, ExcludedItemsUncheckedCreateWithoutPackageInput>
  }

  export type ExcludedItemsUpdateWithWhereUniqueWithoutPackageInput = {
    where: ExcludedItemsWhereUniqueInput
    data: XOR<ExcludedItemsUpdateWithoutPackageInput, ExcludedItemsUncheckedUpdateWithoutPackageInput>
  }

  export type ExcludedItemsUpdateManyWithWhereWithoutPackageInput = {
    where: ExcludedItemsScalarWhereInput
    data: XOR<ExcludedItemsUpdateManyMutationInput, ExcludedItemsUncheckedUpdateManyWithoutPackageInput>
  }

  export type ExcludedItemsScalarWhereInput = {
    AND?: ExcludedItemsScalarWhereInput | ExcludedItemsScalarWhereInput[]
    OR?: ExcludedItemsScalarWhereInput[]
    NOT?: ExcludedItemsScalarWhereInput | ExcludedItemsScalarWhereInput[]
    id?: StringFilter<"ExcludedItems"> | string
    item?: StringFilter<"ExcludedItems"> | string
    packageId?: StringFilter<"ExcludedItems"> | string
  }

  export type DayItineraryUpsertWithWhereUniqueWithoutPackageInput = {
    where: DayItineraryWhereUniqueInput
    update: XOR<DayItineraryUpdateWithoutPackageInput, DayItineraryUncheckedUpdateWithoutPackageInput>
    create: XOR<DayItineraryCreateWithoutPackageInput, DayItineraryUncheckedCreateWithoutPackageInput>
  }

  export type DayItineraryUpdateWithWhereUniqueWithoutPackageInput = {
    where: DayItineraryWhereUniqueInput
    data: XOR<DayItineraryUpdateWithoutPackageInput, DayItineraryUncheckedUpdateWithoutPackageInput>
  }

  export type DayItineraryUpdateManyWithWhereWithoutPackageInput = {
    where: DayItineraryScalarWhereInput
    data: XOR<DayItineraryUpdateManyMutationInput, DayItineraryUncheckedUpdateManyWithoutPackageInput>
  }

  export type DayItineraryScalarWhereInput = {
    AND?: DayItineraryScalarWhereInput | DayItineraryScalarWhereInput[]
    OR?: DayItineraryScalarWhereInput[]
    NOT?: DayItineraryScalarWhereInput | DayItineraryScalarWhereInput[]
    id?: StringFilter<"DayItinerary"> | string
    title?: StringFilter<"DayItinerary"> | string
    dayNumber?: IntFilter<"DayItinerary"> | number
    description?: StringFilter<"DayItinerary"> | string
    packageId?: StringFilter<"DayItinerary"> | string
  }

  export type BookingsUpsertWithWhereUniqueWithoutPackageInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutPackageInput, BookingsUncheckedUpdateWithoutPackageInput>
    create: XOR<BookingsCreateWithoutPackageInput, BookingsUncheckedCreateWithoutPackageInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutPackageInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutPackageInput, BookingsUncheckedUpdateWithoutPackageInput>
  }

  export type BookingsUpdateManyWithWhereWithoutPackageInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutPackageInput>
  }

  export type BookingsScalarWhereInput = {
    AND?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    OR?: BookingsScalarWhereInput[]
    NOT?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    id?: StringFilter<"Bookings"> | string
    customerName?: StringFilter<"Bookings"> | string
    customerEmail?: StringFilter<"Bookings"> | string
    customerPhone?: StringFilter<"Bookings"> | string
    numberOfPeople?: IntFilter<"Bookings"> | number
    paid?: BoolFilter<"Bookings"> | boolean
    packageId?: StringFilter<"Bookings"> | string
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    paymentMethod: string
    razorpayPaymentId?: string | null
    paymentDate?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    paymentMethod: string
    razorpayPaymentId?: string | null
    paymentDate?: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutBookingsInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inclusions?: IncludedItemsCreateNestedManyWithoutPackageInput
    exclusions?: ExcludedItemsCreateNestedManyWithoutPackageInput
    itineraries?: DayItineraryCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inclusions?: IncludedItemsUncheckedCreateNestedManyWithoutPackageInput
    exclusions?: ExcludedItemsUncheckedCreateNestedManyWithoutPackageInput
    itineraries?: DayItineraryUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutBookingsInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutBookingsInput, PackageUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"Payment"> | boolean
    paymentMethod?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    bookingId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PackageUpsertWithoutBookingsInput = {
    update: XOR<PackageUpdateWithoutBookingsInput, PackageUncheckedUpdateWithoutBookingsInput>
    create: XOR<PackageCreateWithoutBookingsInput, PackageUncheckedCreateWithoutBookingsInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutBookingsInput, PackageUncheckedUpdateWithoutBookingsInput>
  }

  export type PackageUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inclusions?: IncludedItemsUpdateManyWithoutPackageNestedInput
    exclusions?: ExcludedItemsUpdateManyWithoutPackageNestedInput
    itineraries?: DayItineraryUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inclusions?: IncludedItemsUncheckedUpdateManyWithoutPackageNestedInput
    exclusions?: ExcludedItemsUncheckedUpdateManyWithoutPackageNestedInput
    itineraries?: DayItineraryUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type BookingsCreateWithoutPaymentInput = {
    id?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    package: PackageCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutPaymentInput = {
    id?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid?: boolean
    packageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsCreateOrConnectWithoutPaymentInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
  }

  export type BookingsUpsertWithoutPaymentInput = {
    update: XOR<BookingsUpdateWithoutPaymentInput, BookingsUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    where?: BookingsWhereInput
  }

  export type BookingsUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingsWhereInput
    data: XOR<BookingsUpdateWithoutPaymentInput, BookingsUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingsUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: PackageUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    packageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedItemsCreateWithoutDayItineraryInput = {
    id?: string
    item: string
  }

  export type FeaturedItemsUncheckedCreateWithoutDayItineraryInput = {
    id?: string
    item: string
  }

  export type FeaturedItemsCreateOrConnectWithoutDayItineraryInput = {
    where: FeaturedItemsWhereUniqueInput
    create: XOR<FeaturedItemsCreateWithoutDayItineraryInput, FeaturedItemsUncheckedCreateWithoutDayItineraryInput>
  }

  export type FeaturedItemsCreateManyDayItineraryInputEnvelope = {
    data: FeaturedItemsCreateManyDayItineraryInput | FeaturedItemsCreateManyDayItineraryInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutItinerariesInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inclusions?: IncludedItemsCreateNestedManyWithoutPackageInput
    exclusions?: ExcludedItemsCreateNestedManyWithoutPackageInput
    bookings?: BookingsCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutItinerariesInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inclusions?: IncludedItemsUncheckedCreateNestedManyWithoutPackageInput
    exclusions?: ExcludedItemsUncheckedCreateNestedManyWithoutPackageInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutItinerariesInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutItinerariesInput, PackageUncheckedCreateWithoutItinerariesInput>
  }

  export type FeaturedItemsUpsertWithWhereUniqueWithoutDayItineraryInput = {
    where: FeaturedItemsWhereUniqueInput
    update: XOR<FeaturedItemsUpdateWithoutDayItineraryInput, FeaturedItemsUncheckedUpdateWithoutDayItineraryInput>
    create: XOR<FeaturedItemsCreateWithoutDayItineraryInput, FeaturedItemsUncheckedCreateWithoutDayItineraryInput>
  }

  export type FeaturedItemsUpdateWithWhereUniqueWithoutDayItineraryInput = {
    where: FeaturedItemsWhereUniqueInput
    data: XOR<FeaturedItemsUpdateWithoutDayItineraryInput, FeaturedItemsUncheckedUpdateWithoutDayItineraryInput>
  }

  export type FeaturedItemsUpdateManyWithWhereWithoutDayItineraryInput = {
    where: FeaturedItemsScalarWhereInput
    data: XOR<FeaturedItemsUpdateManyMutationInput, FeaturedItemsUncheckedUpdateManyWithoutDayItineraryInput>
  }

  export type FeaturedItemsScalarWhereInput = {
    AND?: FeaturedItemsScalarWhereInput | FeaturedItemsScalarWhereInput[]
    OR?: FeaturedItemsScalarWhereInput[]
    NOT?: FeaturedItemsScalarWhereInput | FeaturedItemsScalarWhereInput[]
    id?: StringFilter<"FeaturedItems"> | string
    item?: StringFilter<"FeaturedItems"> | string
    dayItineraryId?: StringFilter<"FeaturedItems"> | string
  }

  export type PackageUpsertWithoutItinerariesInput = {
    update: XOR<PackageUpdateWithoutItinerariesInput, PackageUncheckedUpdateWithoutItinerariesInput>
    create: XOR<PackageCreateWithoutItinerariesInput, PackageUncheckedCreateWithoutItinerariesInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutItinerariesInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutItinerariesInput, PackageUncheckedUpdateWithoutItinerariesInput>
  }

  export type PackageUpdateWithoutItinerariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inclusions?: IncludedItemsUpdateManyWithoutPackageNestedInput
    exclusions?: ExcludedItemsUpdateManyWithoutPackageNestedInput
    bookings?: BookingsUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutItinerariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inclusions?: IncludedItemsUncheckedUpdateManyWithoutPackageNestedInput
    exclusions?: ExcludedItemsUncheckedUpdateManyWithoutPackageNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type DayItineraryCreateWithoutFeaturesInput = {
    id?: string
    title?: string
    dayNumber: number
    description?: string
    package: PackageCreateNestedOneWithoutItinerariesInput
  }

  export type DayItineraryUncheckedCreateWithoutFeaturesInput = {
    id?: string
    title?: string
    dayNumber: number
    description?: string
    packageId: string
  }

  export type DayItineraryCreateOrConnectWithoutFeaturesInput = {
    where: DayItineraryWhereUniqueInput
    create: XOR<DayItineraryCreateWithoutFeaturesInput, DayItineraryUncheckedCreateWithoutFeaturesInput>
  }

  export type DayItineraryUpsertWithoutFeaturesInput = {
    update: XOR<DayItineraryUpdateWithoutFeaturesInput, DayItineraryUncheckedUpdateWithoutFeaturesInput>
    create: XOR<DayItineraryCreateWithoutFeaturesInput, DayItineraryUncheckedCreateWithoutFeaturesInput>
    where?: DayItineraryWhereInput
  }

  export type DayItineraryUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: DayItineraryWhereInput
    data: XOR<DayItineraryUpdateWithoutFeaturesInput, DayItineraryUncheckedUpdateWithoutFeaturesInput>
  }

  export type DayItineraryUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    package?: PackageUpdateOneRequiredWithoutItinerariesNestedInput
  }

  export type DayItineraryUncheckedUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type PackageCreateWithoutInclusionsInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exclusions?: ExcludedItemsCreateNestedManyWithoutPackageInput
    itineraries?: DayItineraryCreateNestedManyWithoutPackageInput
    bookings?: BookingsCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutInclusionsInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exclusions?: ExcludedItemsUncheckedCreateNestedManyWithoutPackageInput
    itineraries?: DayItineraryUncheckedCreateNestedManyWithoutPackageInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutInclusionsInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutInclusionsInput, PackageUncheckedCreateWithoutInclusionsInput>
  }

  export type PackageUpsertWithoutInclusionsInput = {
    update: XOR<PackageUpdateWithoutInclusionsInput, PackageUncheckedUpdateWithoutInclusionsInput>
    create: XOR<PackageCreateWithoutInclusionsInput, PackageUncheckedCreateWithoutInclusionsInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutInclusionsInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutInclusionsInput, PackageUncheckedUpdateWithoutInclusionsInput>
  }

  export type PackageUpdateWithoutInclusionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exclusions?: ExcludedItemsUpdateManyWithoutPackageNestedInput
    itineraries?: DayItineraryUpdateManyWithoutPackageNestedInput
    bookings?: BookingsUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutInclusionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exclusions?: ExcludedItemsUncheckedUpdateManyWithoutPackageNestedInput
    itineraries?: DayItineraryUncheckedUpdateManyWithoutPackageNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateWithoutExclusionsInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inclusions?: IncludedItemsCreateNestedManyWithoutPackageInput
    itineraries?: DayItineraryCreateNestedManyWithoutPackageInput
    bookings?: BookingsCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutExclusionsInput = {
    id?: string
    name: string
    days: number
    nights: number
    description?: string
    image?: string | null
    price: Decimal | DecimalJsLike | number | string
    type?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inclusions?: IncludedItemsUncheckedCreateNestedManyWithoutPackageInput
    itineraries?: DayItineraryUncheckedCreateNestedManyWithoutPackageInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutExclusionsInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutExclusionsInput, PackageUncheckedCreateWithoutExclusionsInput>
  }

  export type PackageUpsertWithoutExclusionsInput = {
    update: XOR<PackageUpdateWithoutExclusionsInput, PackageUncheckedUpdateWithoutExclusionsInput>
    create: XOR<PackageCreateWithoutExclusionsInput, PackageUncheckedCreateWithoutExclusionsInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutExclusionsInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutExclusionsInput, PackageUncheckedUpdateWithoutExclusionsInput>
  }

  export type PackageUpdateWithoutExclusionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inclusions?: IncludedItemsUpdateManyWithoutPackageNestedInput
    itineraries?: DayItineraryUpdateManyWithoutPackageNestedInput
    bookings?: BookingsUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutExclusionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    nights?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inclusions?: IncludedItemsUncheckedUpdateManyWithoutPackageNestedInput
    itineraries?: DayItineraryUncheckedUpdateManyWithoutPackageNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type BlogCategoryCreateWithoutBlogsInput = {
    id?: string
    name: string
  }

  export type BlogCategoryUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
  }

  export type BlogCategoryCreateOrConnectWithoutBlogsInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
  }

  export type BlogImagesCreateWithoutBlogInput = {
    id?: string
    url: string
  }

  export type BlogImagesUncheckedCreateWithoutBlogInput = {
    id?: string
    url: string
  }

  export type BlogImagesCreateOrConnectWithoutBlogInput = {
    where: BlogImagesWhereUniqueInput
    create: XOR<BlogImagesCreateWithoutBlogInput, BlogImagesUncheckedCreateWithoutBlogInput>
  }

  export type BlogImagesCreateManyBlogInputEnvelope = {
    data: BlogImagesCreateManyBlogInput | BlogImagesCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type BlogCategoryUpsertWithWhereUniqueWithoutBlogsInput = {
    where: BlogCategoryWhereUniqueInput
    update: XOR<BlogCategoryUpdateWithoutBlogsInput, BlogCategoryUncheckedUpdateWithoutBlogsInput>
    create: XOR<BlogCategoryCreateWithoutBlogsInput, BlogCategoryUncheckedCreateWithoutBlogsInput>
  }

  export type BlogCategoryUpdateWithWhereUniqueWithoutBlogsInput = {
    where: BlogCategoryWhereUniqueInput
    data: XOR<BlogCategoryUpdateWithoutBlogsInput, BlogCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogCategoryUpdateManyWithWhereWithoutBlogsInput = {
    where: BlogCategoryScalarWhereInput
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyWithoutBlogsInput>
  }

  export type BlogCategoryScalarWhereInput = {
    AND?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
    OR?: BlogCategoryScalarWhereInput[]
    NOT?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
    id?: StringFilter<"BlogCategory"> | string
    name?: StringFilter<"BlogCategory"> | string
  }

  export type BlogImagesUpsertWithWhereUniqueWithoutBlogInput = {
    where: BlogImagesWhereUniqueInput
    update: XOR<BlogImagesUpdateWithoutBlogInput, BlogImagesUncheckedUpdateWithoutBlogInput>
    create: XOR<BlogImagesCreateWithoutBlogInput, BlogImagesUncheckedCreateWithoutBlogInput>
  }

  export type BlogImagesUpdateWithWhereUniqueWithoutBlogInput = {
    where: BlogImagesWhereUniqueInput
    data: XOR<BlogImagesUpdateWithoutBlogInput, BlogImagesUncheckedUpdateWithoutBlogInput>
  }

  export type BlogImagesUpdateManyWithWhereWithoutBlogInput = {
    where: BlogImagesScalarWhereInput
    data: XOR<BlogImagesUpdateManyMutationInput, BlogImagesUncheckedUpdateManyWithoutBlogInput>
  }

  export type BlogImagesScalarWhereInput = {
    AND?: BlogImagesScalarWhereInput | BlogImagesScalarWhereInput[]
    OR?: BlogImagesScalarWhereInput[]
    NOT?: BlogImagesScalarWhereInput | BlogImagesScalarWhereInput[]
    id?: StringFilter<"BlogImages"> | string
    url?: StringFilter<"BlogImages"> | string
    blogId?: StringFilter<"BlogImages"> | string
  }

  export type BlogsCreateWithoutImagesInput = {
    id?: string
    title: string
    html: string
    thumbnail?: string | null
    customerName?: string | null
    feedback?: string | null
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: BlogCategoryCreateNestedManyWithoutBlogsInput
  }

  export type BlogsUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    html: string
    thumbnail?: string | null
    customerName?: string | null
    feedback?: string | null
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: BlogCategoryUncheckedCreateNestedManyWithoutBlogsInput
  }

  export type BlogsCreateOrConnectWithoutImagesInput = {
    where: BlogsWhereUniqueInput
    create: XOR<BlogsCreateWithoutImagesInput, BlogsUncheckedCreateWithoutImagesInput>
  }

  export type BlogsUpsertWithoutImagesInput = {
    update: XOR<BlogsUpdateWithoutImagesInput, BlogsUncheckedUpdateWithoutImagesInput>
    create: XOR<BlogsCreateWithoutImagesInput, BlogsUncheckedCreateWithoutImagesInput>
    where?: BlogsWhereInput
  }

  export type BlogsUpdateToOneWithWhereWithoutImagesInput = {
    where?: BlogsWhereInput
    data: XOR<BlogsUpdateWithoutImagesInput, BlogsUncheckedUpdateWithoutImagesInput>
  }

  export type BlogsUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BlogCategoryUpdateManyWithoutBlogsNestedInput
  }

  export type BlogsUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: BlogCategoryUncheckedUpdateManyWithoutBlogsNestedInput
  }

  export type BlogsCreateWithoutCategoriesInput = {
    id?: string
    title: string
    html: string
    thumbnail?: string | null
    customerName?: string | null
    feedback?: string | null
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: BlogImagesCreateNestedManyWithoutBlogInput
  }

  export type BlogsUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    html: string
    thumbnail?: string | null
    customerName?: string | null
    feedback?: string | null
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: BlogImagesUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogsCreateOrConnectWithoutCategoriesInput = {
    where: BlogsWhereUniqueInput
    create: XOR<BlogsCreateWithoutCategoriesInput, BlogsUncheckedCreateWithoutCategoriesInput>
  }

  export type BlogsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: BlogsWhereUniqueInput
    update: XOR<BlogsUpdateWithoutCategoriesInput, BlogsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BlogsCreateWithoutCategoriesInput, BlogsUncheckedCreateWithoutCategoriesInput>
  }

  export type BlogsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: BlogsWhereUniqueInput
    data: XOR<BlogsUpdateWithoutCategoriesInput, BlogsUncheckedUpdateWithoutCategoriesInput>
  }

  export type BlogsUpdateManyWithWhereWithoutCategoriesInput = {
    where: BlogsScalarWhereInput
    data: XOR<BlogsUpdateManyMutationInput, BlogsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type BlogsScalarWhereInput = {
    AND?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
    OR?: BlogsScalarWhereInput[]
    NOT?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
    id?: StringFilter<"Blogs"> | string
    title?: StringFilter<"Blogs"> | string
    html?: StringFilter<"Blogs"> | string
    thumbnail?: StringNullableFilter<"Blogs"> | string | null
    customerName?: StringNullableFilter<"Blogs"> | string | null
    feedback?: StringNullableFilter<"Blogs"> | string | null
    author?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
  }

  export type PlacesCreateWithoutDestinationInput = {
    id?: string
    name: string
    image?: string | null
    description?: string
  }

  export type PlacesUncheckedCreateWithoutDestinationInput = {
    id?: string
    name: string
    image?: string | null
    description?: string
  }

  export type PlacesCreateOrConnectWithoutDestinationInput = {
    where: PlacesWhereUniqueInput
    create: XOR<PlacesCreateWithoutDestinationInput, PlacesUncheckedCreateWithoutDestinationInput>
  }

  export type PlacesCreateManyDestinationInputEnvelope = {
    data: PlacesCreateManyDestinationInput | PlacesCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type DestinationFAQCreateWithoutDestinationInput = {
    id?: string
    question: string
    answer: string
  }

  export type DestinationFAQUncheckedCreateWithoutDestinationInput = {
    id?: string
    question: string
    answer: string
  }

  export type DestinationFAQCreateOrConnectWithoutDestinationInput = {
    where: DestinationFAQWhereUniqueInput
    create: XOR<DestinationFAQCreateWithoutDestinationInput, DestinationFAQUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationFAQCreateManyDestinationInputEnvelope = {
    data: DestinationFAQCreateManyDestinationInput | DestinationFAQCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type PlacesUpsertWithWhereUniqueWithoutDestinationInput = {
    where: PlacesWhereUniqueInput
    update: XOR<PlacesUpdateWithoutDestinationInput, PlacesUncheckedUpdateWithoutDestinationInput>
    create: XOR<PlacesCreateWithoutDestinationInput, PlacesUncheckedCreateWithoutDestinationInput>
  }

  export type PlacesUpdateWithWhereUniqueWithoutDestinationInput = {
    where: PlacesWhereUniqueInput
    data: XOR<PlacesUpdateWithoutDestinationInput, PlacesUncheckedUpdateWithoutDestinationInput>
  }

  export type PlacesUpdateManyWithWhereWithoutDestinationInput = {
    where: PlacesScalarWhereInput
    data: XOR<PlacesUpdateManyMutationInput, PlacesUncheckedUpdateManyWithoutDestinationInput>
  }

  export type PlacesScalarWhereInput = {
    AND?: PlacesScalarWhereInput | PlacesScalarWhereInput[]
    OR?: PlacesScalarWhereInput[]
    NOT?: PlacesScalarWhereInput | PlacesScalarWhereInput[]
    id?: StringFilter<"Places"> | string
    name?: StringFilter<"Places"> | string
    image?: StringNullableFilter<"Places"> | string | null
    description?: StringFilter<"Places"> | string
    destinationId?: StringFilter<"Places"> | string
  }

  export type DestinationFAQUpsertWithWhereUniqueWithoutDestinationInput = {
    where: DestinationFAQWhereUniqueInput
    update: XOR<DestinationFAQUpdateWithoutDestinationInput, DestinationFAQUncheckedUpdateWithoutDestinationInput>
    create: XOR<DestinationFAQCreateWithoutDestinationInput, DestinationFAQUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationFAQUpdateWithWhereUniqueWithoutDestinationInput = {
    where: DestinationFAQWhereUniqueInput
    data: XOR<DestinationFAQUpdateWithoutDestinationInput, DestinationFAQUncheckedUpdateWithoutDestinationInput>
  }

  export type DestinationFAQUpdateManyWithWhereWithoutDestinationInput = {
    where: DestinationFAQScalarWhereInput
    data: XOR<DestinationFAQUpdateManyMutationInput, DestinationFAQUncheckedUpdateManyWithoutDestinationInput>
  }

  export type DestinationFAQScalarWhereInput = {
    AND?: DestinationFAQScalarWhereInput | DestinationFAQScalarWhereInput[]
    OR?: DestinationFAQScalarWhereInput[]
    NOT?: DestinationFAQScalarWhereInput | DestinationFAQScalarWhereInput[]
    id?: StringFilter<"DestinationFAQ"> | string
    question?: StringFilter<"DestinationFAQ"> | string
    answer?: StringFilter<"DestinationFAQ"> | string
    destinationId?: StringFilter<"DestinationFAQ"> | string
  }

  export type DestinationsCreateWithoutPlacesInput = {
    id?: string
    name: string
    tag?: string | null
    title?: string | null
    description?: string
    image?: string | null
    country: string
    visa?: string | null
    languagesSpoken?: string | null
    currency?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faqs?: DestinationFAQCreateNestedManyWithoutDestinationInput
  }

  export type DestinationsUncheckedCreateWithoutPlacesInput = {
    id?: string
    name: string
    tag?: string | null
    title?: string | null
    description?: string
    image?: string | null
    country: string
    visa?: string | null
    languagesSpoken?: string | null
    currency?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faqs?: DestinationFAQUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationsCreateOrConnectWithoutPlacesInput = {
    where: DestinationsWhereUniqueInput
    create: XOR<DestinationsCreateWithoutPlacesInput, DestinationsUncheckedCreateWithoutPlacesInput>
  }

  export type DestinationsUpsertWithoutPlacesInput = {
    update: XOR<DestinationsUpdateWithoutPlacesInput, DestinationsUncheckedUpdateWithoutPlacesInput>
    create: XOR<DestinationsCreateWithoutPlacesInput, DestinationsUncheckedCreateWithoutPlacesInput>
    where?: DestinationsWhereInput
  }

  export type DestinationsUpdateToOneWithWhereWithoutPlacesInput = {
    where?: DestinationsWhereInput
    data: XOR<DestinationsUpdateWithoutPlacesInput, DestinationsUncheckedUpdateWithoutPlacesInput>
  }

  export type DestinationsUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    visa?: NullableStringFieldUpdateOperationsInput | string | null
    languagesSpoken?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: DestinationFAQUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationsUncheckedUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    visa?: NullableStringFieldUpdateOperationsInput | string | null
    languagesSpoken?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: DestinationFAQUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationsCreateWithoutFaqsInput = {
    id?: string
    name: string
    tag?: string | null
    title?: string | null
    description?: string
    image?: string | null
    country: string
    visa?: string | null
    languagesSpoken?: string | null
    currency?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    places?: PlacesCreateNestedManyWithoutDestinationInput
  }

  export type DestinationsUncheckedCreateWithoutFaqsInput = {
    id?: string
    name: string
    tag?: string | null
    title?: string | null
    description?: string
    image?: string | null
    country: string
    visa?: string | null
    languagesSpoken?: string | null
    currency?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    places?: PlacesUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationsCreateOrConnectWithoutFaqsInput = {
    where: DestinationsWhereUniqueInput
    create: XOR<DestinationsCreateWithoutFaqsInput, DestinationsUncheckedCreateWithoutFaqsInput>
  }

  export type DestinationsUpsertWithoutFaqsInput = {
    update: XOR<DestinationsUpdateWithoutFaqsInput, DestinationsUncheckedUpdateWithoutFaqsInput>
    create: XOR<DestinationsCreateWithoutFaqsInput, DestinationsUncheckedCreateWithoutFaqsInput>
    where?: DestinationsWhereInput
  }

  export type DestinationsUpdateToOneWithWhereWithoutFaqsInput = {
    where?: DestinationsWhereInput
    data: XOR<DestinationsUpdateWithoutFaqsInput, DestinationsUncheckedUpdateWithoutFaqsInput>
  }

  export type DestinationsUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    visa?: NullableStringFieldUpdateOperationsInput | string | null
    languagesSpoken?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    places?: PlacesUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationsUncheckedUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    visa?: NullableStringFieldUpdateOperationsInput | string | null
    languagesSpoken?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    places?: PlacesUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type IncludedItemsCreateManyPackageInput = {
    id?: string
    item: string
  }

  export type ExcludedItemsCreateManyPackageInput = {
    id?: string
    item: string
  }

  export type DayItineraryCreateManyPackageInput = {
    id?: string
    title?: string
    dayNumber: number
    description?: string
  }

  export type BookingsCreateManyPackageInput = {
    id?: string
    customerName: string
    customerEmail: string
    customerPhone: string
    numberOfPeople: number
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncludedItemsUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type IncludedItemsUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type IncludedItemsUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type ExcludedItemsUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type ExcludedItemsUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type ExcludedItemsUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type DayItineraryUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: FeaturedItemsUpdateManyWithoutDayItineraryNestedInput
  }

  export type DayItineraryUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: FeaturedItemsUncheckedUpdateManyWithoutDayItineraryNestedInput
  }

  export type DayItineraryUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    numberOfPeople?: IntFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    paymentMethod: string
    razorpayPaymentId?: string | null
    paymentDate?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedItemsCreateManyDayItineraryInput = {
    id?: string
    item: string
  }

  export type FeaturedItemsUpdateWithoutDayItineraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type FeaturedItemsUncheckedUpdateWithoutDayItineraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type FeaturedItemsUncheckedUpdateManyWithoutDayItineraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
  }

  export type BlogImagesCreateManyBlogInput = {
    id?: string
    url: string
  }

  export type BlogCategoryUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryUncheckedUpdateManyWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogImagesUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BlogImagesUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BlogImagesUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BlogsUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: BlogImagesUpdateManyWithoutBlogNestedInput
  }

  export type BlogsUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: BlogImagesUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    html?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacesCreateManyDestinationInput = {
    id?: string
    name: string
    image?: string | null
    description?: string
  }

  export type DestinationFAQCreateManyDestinationInput = {
    id?: string
    question: string
    answer: string
  }

  export type PlacesUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlacesUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlacesUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationFAQUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationFAQUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationFAQUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}